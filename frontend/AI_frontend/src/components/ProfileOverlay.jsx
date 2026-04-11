import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfileOverlay = ({ onClose }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem('AI_USER') || "UserName";
  const useremail = localStorage.getItem('AI_U_EMAIL') || "Email";

  const handleLogout = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/user/logout", {}, { withCredentials: true }).then((res)=>{
      localStorage.removeItem('userLoggedIn');
      localStorage.removeItem('AI_USER');
      localStorage.removeItem('AI_U_EMAIL');
      onClose(); 
      navigate("/user/login");
    }).catch((err)=>{
      console.error("Logout failed");
    });
  };

  return (
    <>
      {/* Mobile Backdrop - hidden on desktop */}
      <div 
        className="fixed inset-0 bg-black/60 z-[100] md:hidden" 
        onClick={onClose}
      />

      {/* Container: Drawer on mobile, Overlay on desktop */}
      <div className="
        fixed inset-y-0 left-0 w-[80vw] max-w-[320px] z-[101] bg-[#1a202c] border-r border-white/5
        flex flex-col text-[#E2E8F0] shadow-2xl transition-transform duration-300
        md:absolute md:inset-0 md:w-full md:max-w-none md:z-50 md:bg-[#34404E] md:border-r-0 md:rounded-none
      ">
        {/* Top soft gradient matching the editor styling (desktop only, to match editor) */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#7DE7C0]/10 to-transparent pointer-events-none z-10"></div>
        
        {/* Content wrapper */}
        <div className="relative z-20 flex flex-col h-full w-full p-6 md:p-8 text-left md:text-center">
          
          {/* Close Button (X) at Top Right (Mobile only) */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-1 z-30 md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* User Info Section */}
          <div className="flex flex-col items-start md:items-center justify-center pb-6 border-b border-white/20 shrink-0 mt-8 md:mt-0">
            <h2 className="text-[1.15rem] font-medium tracking-wide mb-2">{username}</h2>
            <p className="text-sm text-gray-400">{useremail}</p>
          </div>
          
          {/* Scrollable Histories Section */}
          <div className="flex-1 flex flex-col min-h-0 pt-5 pb-6">
            <span className="text-sm font-medium text-white/90 mb-4 block text-left md:text-white/50 md:uppercase md:tracking-wider">Histories</span>
            <div className="flex-1 overflow-y-auto scrollbar-hide flex items-start md:items-center justify-start md:justify-center md:border md:border-white/5 md:rounded-xl md:bg-black/10 text-left">
               <p className="text-gray-400 text-sm md:text-center">Scrollable area if text is there</p>
            </div>
          </div>
          
          {/* Bottom Actions */}
          <div className="pt-5 border-t border-white/20 flex flex-col-reverse md:flex-row justify-center md:justify-between items-stretch md:items-center shrink-0 gap-3 mt-auto">
            {/* Darker Logout button for mobile */}
            <button onClick={handleLogout} className="px-6 py-3 md:py-2 border border-white/10 rounded-xl hover:bg-black/80 transition-colors text-sm font-medium bg-[#0f131a] md:bg-black/20 text-white shadow-inner">
              Logout
            </button>
            <button 
              onClick={onClose}
              className="hidden md:block px-6 py-2 border border-white/20 rounded-xl hover:bg-white/10 transition-colors text-sm font-medium bg-black/20"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileOverlay;
