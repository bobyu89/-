import React from 'react';
import { X, Bot, Loader2, Youtube, ExternalLink, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface AIModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string | null;
  isLoading: boolean;
}

export const AIModal: React.FC<AIModalProps> = ({ isOpen, onClose, title, content, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden transform transition-all scale-100">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-indigo-600 rounded-xl text-white shadow-md shadow-indigo-200">
              <Bot size={28} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-800">AI 臨床助教</h3>
              <div className="flex items-center gap-2 text-sm text-slate-500 mt-0.5">
                <BookOpen size={14} />
                <span className="truncate max-w-[200px] sm:max-w-md font-medium">
                  {title}
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-white scroll-smooth">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-64 space-y-6">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bot size={24} className="text-indigo-600 opacity-50" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <p className="text-lg font-medium text-slate-700">正在分析評估步驟...</p>
                <p className="text-sm text-slate-400">查詢醫學資料庫與操作指引中</p>
              </div>
            </div>
          ) : content ? (
            <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600 prose-li:text-slate-600">
              <ReactMarkdown
                components={{
                  h2: ({node, ...props}) => (
                    <div className="flex items-center gap-2 mt-8 mb-4 pb-2 border-b border-indigo-100">
                      <div className="w-1.5 h-6 bg-indigo-500 rounded-full"></div>
                      <h2 className="text-xl m-0" {...props} />
                    </div>
                  ),
                  h3: ({node, ...props}) => (
                    <h3 className="text-lg text-indigo-700 mt-6 mb-3" {...props} />
                  ),
                  ul: ({node, ...props}) => (
                    <ul className="bg-slate-50 rounded-lg p-4 space-y-2 my-4 border border-slate-100" {...props} />
                  ),
                  li: ({node, ...props}) => (
                    <li className="marker:text-indigo-400 pl-1" {...props} />
                  ),
                  strong: ({node, ...props}) => (
                    <strong className="font-bold text-slate-900 bg-yellow-50 px-1 rounded mx-0.5" {...props} />
                  ),
                  a: ({node, href, children, ...props}) => {
                    const isYoutube = href?.includes('youtube.com') || href?.includes('youtu.be');
                    if (isYoutube) {
                      return (
                        <a 
                          href={href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="no-underline block mt-6 group"
                          {...props}
                        >
                          <div className="flex items-center gap-4 p-4 bg-red-50 hover:bg-red-100 border border-red-100 rounded-xl transition-all hover:shadow-md group-hover:scale-[1.01]">
                            <div className="bg-red-600 text-white p-3 rounded-full shadow-sm">
                              <Youtube size={24} fill="currentColor" />
                            </div>
                            <div>
                              <span className="block text-red-700 font-bold text-lg">觀看操作示範影片</span>
                              <span className="text-red-500 text-sm flex items-center gap-1">
                                前往 YouTube 搜尋相關技術 <ExternalLink size={12} />
                              </span>
                            </div>
                          </div>
                        </a>
                      );
                    }
                    return (
                      <a 
                        href={href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-200 underline-offset-2"
                        {...props}
                      >
                        {children}
                      </a>
                    );
                  }
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-400">
              <p>無法載入內容</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-right">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 active:transform active:scale-95 transition-all font-medium text-sm shadow-lg shadow-slate-200"
          >
            關閉視窗
          </button>
        </div>
      </div>
    </div>
  );
};