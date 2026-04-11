import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Mainhome() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <div className="relative h-screen w-full bg-[#0B0F19] flex flex-col items-center justify-center font-sans overflow-hidden text-center fixed top-0 left-0">

      {/* Background Glows/Waves */}
      {/* Left wave glow */}
      <div className="absolute top-[40%] left-[-10%] w-[600px] h-[400px] bg-[#7DE7C0] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse"></div>

      {/* Right wave glow */}
      <div className="absolute top-[50%] right-[-10%] w-[600px] h-[400px] bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: '2s' }}></div>

      {/* Center ambient glow text */}
      <div className="absolute top-[10%] right-[25%] w-[400px] h-[400px] bg-[#A3E635] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.05]"></div>

      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-5xl pb-10 lg:pb-24">

        {/* Pill Badge */}
        <div onClick={() => navigate('/user/register')} className="flex items-center gap-2 px-1.5 py-1.5 pr-5 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-pointer">
          <div className="px-3 py-1 rounded-full bg-[#1e293b] text-[#A3E635] text-[13px] font-semibold border border-white/5 shadow-inner">
            New
          </div>
          <span className="text-[#cbd5e1] text-[15px] font-medium tracking-wide">Introducing CODISH AI Features</span>
          <svg className="w-4 h-4 text-[#94a3b8] ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-[5rem] font-bold text-[#f8fafc] tracking-tight mb-8 leading-[1.15]">
          Elevate Your Code Review<br />
          with <span className="text-[#A3E635] drop-shadow-[0_0_25px_rgba(163,230,53,0.3)]">AI</span> Power
        </h1>

        {/* Subtext */}
        <p className="text-[#94a3b8] text-[1.15rem] md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Harness the future of artificial intelligence to boost productivity, creativity, and code quality in your everyday development.
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
          <Link
            to="/user/register"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#B2F252] hover:bg-[#A3E635] text-[#1a2e05] font-semibold text-lg rounded-[1rem] transition-all shadow-[0_0_20px_rgba(178,242,82,0.15)] hover:shadow-[0_0_30px_rgba(178,242,82,0.3)] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Get Started Free
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </Link>
          <Link
            to="/user/login"
            className="w-full sm:w-auto px-10 py-3.5 bg-[#1e293b]/80 hover:bg-[#334155] text-white border border-white/10 font-semibold text-lg rounded-[1rem] transition-all shadow-lg active:scale-[0.98] backdrop-blur-sm"
          >
            Have Account?
          </Link>
        </div>

      </div>

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

    </div>
  );
}

export default Mainhome;
