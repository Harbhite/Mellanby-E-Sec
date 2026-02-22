import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAdmin = async (userId: string) => {
    try {
      const profilePromise = supabase
        .from('profiles')
        .select('role')
        .eq('id', userId)
        .single();

      const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Supabase profile check timeout')), 5000)
      );

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await Promise.race([profilePromise, timeoutPromise]);
      const { data, error } = result;

      if (error) {
        console.error('Error checking admin status:', error);
        setIsAdmin(false);
      } else {
        setIsAdmin(data?.role === 'admin');
      }
    } catch (error) {
      console.error('Error checking admin status (exception/timeout):', error);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    const initAuth = async () => {
      try {
        const getSessionPromise = supabase.auth.getSession();
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Supabase connection timeout')), 5000)
        );

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result: any = await Promise.race([getSessionPromise, timeoutPromise]);
        const { data, error } = result;

        if (error) {
            console.error("Supabase getSession error:", error);
            if (mounted) setLoading(false);
            return;
        }

        if (mounted) {
          if (data?.session?.user) {
            setSession(data.session);
            setUser(data.session.user);
            await checkAdmin(data.session.user.id);
          } else {
            setSession(null);
            setUser(null);
            setIsAdmin(false);
            setLoading(false);
          }
        }
      } catch (err) {
        console.error("Auth initialization failed:", err);
        if (mounted) setLoading(false);
      }
    };

    initAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!mounted) return;
      if (session?.user) {
        setSession(session);
        setUser(session.user);
        // Only check admin if we have a user and we aren't already loading (or re-check)
        // We set loading to true while checking? No, user might be navigating.
        // But for initial load it matters.
        await checkAdmin(session.user.id);
      } else {
        setSession(null);
        setUser(null);
        setIsAdmin(false);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
    setUser(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ session, user, isAdmin, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
