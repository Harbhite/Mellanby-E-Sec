
import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Lock } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { session } = useAuth();

  // If already logged in, redirect
  React.useEffect(() => {
    if (session) {
      navigate('/admin/dashboard');
    }
  }, [session, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      // Success, redirect happens via AuthContext listener or navigate
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e0e0dc] p-4">
      <div className="w-full max-w-md bg-white border-4 border-[#1a2a40] shadow-[8px_8px_0_0_#c5a059] p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-[#1a2a40] rounded-full flex items-center justify-center mb-4">
            <Lock className="text-[#c5a059]" size={32} />
          </div>
          <h1 className="text-2xl font-black uppercase text-[#1a2a40] tracking-widest">Admin Access</h1>
          <p className="mono text-xs uppercase text-[#1a2a40]/60 mt-2">Mellanby e-Secretariat</p>
        </div>

        {error && (
          <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 mb-6 mono text-xs font-bold uppercase">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="mono text-[10px] font-bold uppercase text-[#1a2a40]">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#f4f4f2] border-2 border-[#1a2a40] p-3 text-sm outline-none focus:bg-white transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="mono text-[10px] font-bold uppercase text-[#1a2a40]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#f4f4f2] border-2 border-[#1a2a40] p-3 text-sm outline-none focus:bg-white transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1a2a40] text-white font-black py-4 uppercase tracking-[0.2em] hover:bg-[#c5a059] hover:text-[#1a2a40] transition-all disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Enter Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
