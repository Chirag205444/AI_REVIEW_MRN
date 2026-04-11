import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (errorMsg) {
      const timer = setTimeout(() => setErrorMsg(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMsg]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    await axios.post("http://localhost:5000/api/user/login",{
      email,password
     }).then(res=>{
      console.log(res.data);
      localStorage.setItem('userLoggedIn', 'true');
      localStorage.setItem('AI_USER', res.data.user.username);
      localStorage.setItem('AI_U_EMAIL', res.data.user.email);
      navigate("/home")
     }).catch((err)=>{
      setErrorMsg(err.response?.data?.error || "Login failed");
      console.error(err);
     })
  };
  return (

    <div className="relative min-h-screen w-full bg-[#0B0F19] flex items-center justify-center p-4 font-sans overflow-hidden fixed top-0 left-0">
      
      {/* Background Glows/Waves */}
      {/* Left wave glow */}
      <div className="absolute top-[40%] left-[-10%] w-[600px] h-[400px] bg-[#7DE7C0] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse pointer-events-none"></div>
      
      {/* Right wave glow */}
      <div className="absolute top-[50%] right-[-10%] w-[600px] h-[400px] bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Center ambient glow text */}
      <div className="absolute top-[10%] right-[25%] w-[400px] h-[400px] bg-[#A3E635] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.05] pointer-events-none"></div>

      {/* Bottom overlay gradient to blend drawing space */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] z-0 pointer-events-none" style={{
        background: 'linear-gradient(to top, #0B0F19 10%, transparent 100%)'
      }}></div>

      {/* SVG Wave lines resembling the image graph */}
      <div className="absolute bottom-[-5%] md:bottom-[-8%] left-0 w-full h-[40vh] md:h-[45vh] z-0 pointer-events-none overflow-hidden opacity-60 flex items-end">
        <svg viewBox="0 0 1440 250" className="w-full h-full preserveAspectRatio='none'">
          {/* Deep shadow wave */}
          <path fill="none" stroke="rgba(163,230,53,0.15)" strokeWidth="15" style={{ filter: "blur(20px)" }} d="M0,150 C200,350 500,-50 1000,180 C1200,280 1440,150 1440,150" />
          
          {/* Main glowing wave */}
          <path fill="none" stroke="url(#waveGradient)" strokeWidth="3" style={{ filter: "blur(2px)" }} d="M0,150 C200,350 500,-50 1000,180 C1200,280 1440,150 1440,150" />
          <path fill="none" stroke="url(#waveGradient)" strokeWidth="1" d="M0,150 C200,350 500,-50 1000,180 C1200,280 1440,150 1440,150" />

          {/* Background subtle secondary wave */}
          <path fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="2" style={{ filter: "blur(4px)" }} d="M0,80 C300,0 600,250 1100,50 C1300,-20 1440,80 1440,80" />

          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59,130,246,0)" />
              <stop offset="20%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#A3E635" />
              <stop offset="80%" stopColor="#7DE7C0" />
              <stop offset="100%" stopColor="rgba(125,231,192,0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-md bg-[#20262E]/60 backdrop-blur-xl rounded-[1.5rem] border border-white/5 border-t border-t-[#7DE7C0]/40 shadow-2xl p-8 overflow-hidden">
        {/* Soft top gradient exactly like in Home panel max matches */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#7DE7C0]/10 to-transparent pointer-events-none z-10"></div>

        <div className="relative z-20 text-center mb-6">
          <h1 className="text-3xl font-semibold text-[#E2E8F0] tracking-wide mb-2">
            Welcome to <span className="text-[#7DE7C0]">Nova</span>
          </h1>
          <p className="text-[#94A3B8]">Sign in to continue to CODISH AI</p>
        </div>

        {errorMsg && (
          <div className="relative z-20 mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
            {errorMsg}
          </div>
        )}

        <form className="relative z-20 flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-sm font-medium text-[#E2E8F0] ml-1">Email Address</label>
            <input
              onChange={(e)=>{setEmail(e.target.value)}}
              value={email}
              type="email"
              placeholder="you@example.com"
              className="w-full bg-[#13171B] border border-white/10 rounded-xl px-4 py-3 text-[#E2E8F0] placeholder-[#475569] focus:outline-none focus:border-[#7DE7C0]/50 focus:ring-1 focus:ring-[#7DE7C0]/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-sm font-medium text-[#E2E8F0] ml-1">Password</label>
            <input
              type="password"
              onChange={(e)=>{setPassword(e.target.value)}}
              value={password}
              placeholder="••••••••"
              className="w-full bg-[#13171B] border border-white/10 rounded-xl px-4 py-3 text-[#E2E8F0] placeholder-[#475569] focus:outline-none focus:border-[#7DE7C0]/50 focus:ring-1 focus:ring-[#7DE7C0]/50 transition-all"
            />
          </div>

          <button
            onClick={handleLogin}
            type="submit"
            className="mt-4 w-full bg-[#8BE8C2] hover:bg-[#78CCAA] text-[#132A22] font-semibold text-lg py-3 px-6 rounded-xl transition-all shadow-md active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <p className="relative z-20 text-center mt-6 text-[#94A3B8] text-sm">
          Don't have an account?{' '}
          <Link to="/user/register" className="text-[#7DE7C0] hover:text-[#8BE8C2] font-medium transition-colors">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default UserLogin;
