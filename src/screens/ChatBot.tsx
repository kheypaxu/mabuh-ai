import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatBubble } from "../components/chatbot-components/ChatBubble";
import { MaskOverlay } from "../components/chatbot-components/MaskOverlay";
import { 
  ChevronLeft, Send, Smile, Paperclip, 
  Leaf, Wind, Heart, Sparkles 
} from "lucide-react";

export default function Chatbot() {
  const navigate = useNavigate();
  const [isMaskActive, setIsMaskActive] = useState(false);
  const [inputText, setInputText] = useState("");

  // Initializing state with your specific starting messages
  const [messages] = useState([
    {
      id: 1,
      isAi: true,
      content: (
        <>
          <p>Kamusta! I'm <span className="font-bold text-primary dark:text-secondary">MabuhAi</span>, your mental health companion. 🌿</p>
          <p className="mt-2">I'm here to listen, support, and help you navigate your feelings. How are you feeling today?</p>
        </>
      ),
      hasActions: true // This flag will trigger the "Nurturing Steps" buttons
    }
  ]);

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-twilight-dark transition-colors duration-500">
      {/* Header (Same as previous step) */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-indigo-100 dark:border-indigo-900/50 bg-white/80 dark:bg-twilight-dark/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors">
            <ChevronLeft className="size-6" />
          </button>
          <div className="relative ml-1">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary via-secondary to-accent flex items-center justify-center text-white shadow-md">
              <Leaf className="size-5" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-twilight-dark rounded-full" />
          </div>
          <div className="ml-2">
            <h1 className="font-bold text-lg tracking-tight leading-none text-slate-900 dark:text-white">MabuhAi</h1>
            <p className="text-[10px] text-pink-500 uppercase tracking-widest font-bold mt-1">Twilight Glow</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-indigo-50/50 dark:bg-indigo-950/30 px-4 py-2 rounded-full border border-indigo-100/50 dark:border-indigo-900/50">
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Mask-Off</span>
          <button onClick={() => setIsMaskActive(!isMaskActive)} className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${isMaskActive ? "bg-accent" : "bg-slate-200 dark:bg-slate-700"}`}>
            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${isMaskActive ? "translate-x-5" : "translate-x-0"}`} />
          </button>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col gap-6 bg-linear-to-b from-indigo-50/20 to-white dark:from-twilight-dark/20 dark:to-slate-950">
        <div className="flex justify-center mb-4">
          <span className="px-3 py-1 rounded-full bg-white/50 dark:bg-indigo-950/50 text-[10px] font-bold text-indigo-400 uppercase tracking-widest border border-indigo-100 dark:border-indigo-900">Today</span>
        </div>

        {messages.map((msg) => (
          <div key={msg.id} className="flex flex-col gap-4">
            <ChatBubble isAi={msg.isAi} message={msg.content} />
            
            {/* Conditional "Nurturing Steps" Buttons */}
            {msg.hasActions && (
              <div className="flex flex-col gap-2 ml-14">
                <p className="text-[10px] font-bold text-slate-400 uppercase ml-1 tracking-wider">Nurturing Steps</p>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-secondary/20 rounded-full text-xs font-semibold text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm flex items-center gap-2">
                    <Wind className="size-4" /> I need to vent
                  </button>
                  <button className="px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-accent/30 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-accent/10 transition-all shadow-sm flex items-center gap-2">
                    <Heart className="size-4 text-amber-500" /> Daily Affirmation
                  </button>
                  <button className="px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-indigo-200 dark:border-indigo-800 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-indigo-50 transition-all shadow-sm flex items-center gap-2">
                    <Sparkles className="size-4 text-indigo-500" /> Self-care tips
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="p-4 md:p-6 bg-white dark:bg-twilight-dark border-t border-indigo-50 dark:border-indigo-900/50">
        <div className="max-w-4xl mx-auto flex items-end gap-3">
          <div className="flex-1 bg-slate-50 dark:bg-slate-900 rounded-2xl px-4 py-3 flex items-center gap-3 border border-slate-200 dark:border-slate-800 focus-within:border-secondary transition-all">
            <button className="text-slate-400 hover:text-secondary"><Smile className="size-5" /></button>
            <textarea 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-1 placeholder:text-slate-400 resize-none" 
              placeholder="Type a message..." 
              rows={1} 
            />
            <button className="text-slate-400 hover:text-secondary"><Paperclip className="size-5" /></button>
          </div>
          <button className="w-12 h-12 bg-linear-to-br from-primary to-secondary text-white rounded-xl flex items-center justify-center shadow-lg transition-transform active:scale-95">
            <Send className="size-5" />
          </button>
        </div>
      </footer>

      <MaskOverlay isOpen={isMaskActive} onToggle={() => setIsMaskActive(false)} />
    </div>
  );
}