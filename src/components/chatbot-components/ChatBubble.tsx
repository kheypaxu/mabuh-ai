import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

interface ChatBubbleProps {
  message: ReactNode; // Changed from string to ReactNode
  isAi?: boolean;
}

export const ChatBubble = ({ message, isAi = false }: ChatBubbleProps) => (
  <div className={`flex gap-4 ${isAi ? "max-w-2xl" : "justify-end ml-auto max-w-2xl"}`}>
    {isAi && (
      <div className="w-9 h-9 rounded-full bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0 border border-secondary/10">
        <Sparkles className="size-4 text-secondary" />
      </div>
    )}
    <div className={`p-4 rounded-2xl shadow-sm leading-relaxed text-sm ${
      isAi 
      ? "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-tl-none" 
      : "bg-linear-to-br from-primary to-secondary text-white rounded-tr-none shadow-md font-medium"
    }`}>
      {message}
    </div>
  </div>
);