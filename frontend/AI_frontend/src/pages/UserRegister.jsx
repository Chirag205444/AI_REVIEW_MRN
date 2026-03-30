import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
     e.preventDefault();
     await axios.post("http://localhost:5000/api/user/register",{
      username,email,password
     }).then(res=>{
      navigate("/")
     }).catch((err)=>{
      console.error("error");
     })
  };

  return (
    <div className="min-h-screen w-full bg-[#20262E] flex items-center justify-center p-4 font-sans">
      <div className="relative w-full max-w-md bg-[#34404E] rounded-[1.5rem] border border-white/5 border-t border-t-[#7DE7C0]/40 shadow-2xl p-8 overflow-hidden">
        {/* Soft top gradient exactly like in Home panel */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#7DE7C0]/10 to-transparent pointer-events-none z-10"></div>

        <div className="relative z-20 text-center mb-8">
          <h1 className="text-3xl font-semibold text-[#E2E8F0] tracking-wide mb-2">
            Join CODISH <span className="text-[#7DE7C0]">Nova</span>
          </h1>
          <p className="text-[#94A3B8]">Create an account to start reviewing code.</p>
        </div>

        <form className="relative z-20 flex flex-col gap-4 text-left" onSubmit={handleRegister}>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#E2E8F0] ml-1">Username</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="code_ninja"
              className="w-full bg-[#13171B] border border-white/10 rounded-xl px-4 py-3 text-[#E2E8F0] placeholder-[#475569] focus:outline-none focus:border-[#7DE7C0]/50 focus:ring-1 focus:ring-[#7DE7C0]/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#E2E8F0] ml-1">Email Address</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="you@example.com"
              className="w-full bg-[#13171B] border border-white/10 rounded-xl px-4 py-3 text-[#E2E8F0] placeholder-[#475569] focus:outline-none focus:border-[#7DE7C0]/50 focus:ring-1 focus:ring-[#7DE7C0]/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#E2E8F0] ml-1">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="••••••••"
              className="w-full bg-[#13171B] border border-white/10 rounded-xl px-4 py-3 text-[#E2E8F0] placeholder-[#475569] focus:outline-none focus:border-[#7DE7C0]/50 focus:ring-1 focus:ring-[#7DE7C0]/50 transition-all"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-[#8BE8C2] hover:bg-[#78CCAA] text-[#132A22] font-semibold text-lg py-3 px-6 rounded-xl transition-all shadow-md active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        <p className="relative z-20 text-center mt-6 text-[#94A3B8] text-sm">
          Already have an account?{' '}
          <Link to="/user/login" className="text-[#7DE7C0] hover:text-[#8BE8C2] font-medium transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default UserRegister;
