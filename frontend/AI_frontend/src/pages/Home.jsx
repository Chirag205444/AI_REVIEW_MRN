import React from 'react';
import { useState } from 'react';
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'prismjs'
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import EditorModule from 'react-simple-code-editor';
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
import Markdown from 'react-markdown';
import ProfileOverlay from '../components/ProfileOverlay';

const Editor = EditorModule.default || EditorModule;

function Home() {
  const [code, setCode] = useState(``)

  const [review, setReview] = useState(``)
  const [loading, setLoading] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  async function handleReview() {
    try {
      setLoading(true)
      const response = await axios.post("http://localhost:5000/ai/get-response", {
        prompt: code
      })
      setReview(response.data)
    } catch (error) {
      console.error("AI review request failed:", error)
      setReview("Error: Could not fetch review. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="h-[100dvh] w-full bg-[#20262E] flex flex-col p-3 pt-6 md:p-8 font-sans overflow-hidden">

      {/* Inner Container to constrain maximum width and handle flex-growth */}
      <div className="w-full max-w-[95%] xl:max-w-[1400px] mx-auto flex flex-col flex-1 h-full min-h-0">

        {/* Header Space */}
        <header className="mb-5 md:mb-8 px-2 shrink-0 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-blue-200 md:text-3xl text-[#E2E8F0] tracking-wide ">
            CODISH Nova.....<span className='text-sm font-medium text-[#7DE7C0]'>AI</span>
          </h1>
          <button
            onClick={() => setIsProfileOpen(true)}
            className="text-[#E2E8F0] hover:text-[#7DE7C0] transition-colors p-1 cursor-pointer"
            aria-label="Open profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </header>

        {/* Main Workspace (Flex Col on mobile for dynamic height ratios, Grid on desktop for width ratios) */}
        <div className="flex-1 flex flex-col md:grid md:grid-cols-[45%_1fr] gap-3 md:gap-6 mb-4 md:mb-0 pb-2 min-h-0">

          {/* Left Panel (Review Button) - Mobile: Bottom (flex-[3]), Desktop: Left */}
          <div className="order-2 md:order-1 relative bg-[#34404E] rounded-[1.5rem] border border-white/5 border-t border-t-[#7DE7C0]/40 shadow-2xl flex flex-col p-5 md:p-8 flex-[3] md:flex-none min-h-[25vh] md:h-auto overflow-hidden text-[#E2E8F0]">

            {isProfileOpen && <ProfileOverlay onClose={() => setIsProfileOpen(false)} />}

            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#7DE7C0]/10 to-transparent pointer-events-none z-10"></div>

            <div className="flex-1 min-h-0 overflow-y-auto scrollbar-hide relative z-0 mb-4 pr-2">
              <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
                padding={10}
                placeholder="Write your code here..."
                className="focus-within:outline-none"
                textareaClassName="focus:outline-none focus:ring-0 !border-none"
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 16,
                  minHeight: "100%",
                  outline: "none",
                  border: "none",
                  background: "transparent",
                  color: "#E2E8F0"
                }}
              />
            </div>

            <button
              onClick={handleReview}
              disabled={loading}
              className={`shrink-0 self-end bg-[#8BE8C2] hover:bg-[#78CCAA] text-[#132A22] font-medium text-base md:text-lg py-2.5 px-6 md:py-2.5 md:px-8 rounded-xl transition-all shadow-md relative z-10 ${loading ? 'opacity-70 cursor-not-allowed' : 'active:scale-95'}`}
            >
              {loading ? 'Reviewing...' : 'Review'}
            </button>
          </div>

          {/* Right Panel (Empty workspace) - Mobile: Top (flex-[5]), Desktop: Right */}
          <div className="order-1 md:order-2 relative bg-[#13171B] rounded-[1.5rem] border border-white/5 shadow-inner flex-[5] md:flex-none min-h-[45vh] md:h-auto flex flex-col overflow-y-auto scrollbar-hide p-5 md:p-8 text-[#E2E8F0]">
            <Markdown
              rehypePlugins={[rehypeHighlight]}
            >{review}</Markdown>
          </div>

        </div>

      </div>

    </main>
  );
}

export default Home;
