import React, { useState, useEffect } from 'react';
import { scenarios } from './data';
import { AssessmentScenario, AssessmentItem } from './types';
import { getExplanationForAssessment } from './services/geminiService';
import { AIModal } from './components/AIModal';
import { 
  CheckCircle2, 
  Circle, 
  Menu, 
  Stethoscope, 
  AlertCircle,
  Sparkles,
  ChevronRight,
  Printer
} from 'lucide-react';

const App: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(scenarios[0].id);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // AI Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const activeScenario = scenarios.find(s => s.id === activeScenarioId) || scenarios[0];

  // Load checked items from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('nursing-checklist-progress');
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved progress");
      }
    }
  }, []);

  // Save checked items when changed
  useEffect(() => {
    localStorage.setItem('nursing-checklist-progress', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleAskAI = async (item: AssessmentItem) => {
    setModalTitle(item.text);
    setIsModalOpen(true);
    setIsAiLoading(true);
    setModalContent(null);

    try {
      const explanation = await getExplanationForAssessment(item.text, activeScenario.title);
      setModalContent(explanation || "未收到回應。");
    } catch (error) {
      setModalContent("抱歉，目前無法取得解釋。請檢查您的 API 金鑰設定。");
    } finally {
      setIsAiLoading(false);
    }
  };

  const calculateProgress = () => {
    let total = 0;
    let checked = 0;
    activeScenario.sections.forEach(section => {
      section.items.forEach(item => {
        total++;
        if (checkedItems[item.id]) checked++;
      });
    });
    return total === 0 ? 0 : Math.round((checked / total) * 100);
  };

  const resetCurrentScenario = () => {
    if(!window.confirm("確定要重置此情境的進度嗎?")) return;
    
    const newChecked = { ...checkedItems };
    activeScenario.sections.forEach(section => {
      section.items.forEach(item => {
        delete newChecked[item.id];
      });
    });
    setCheckedItems(newChecked);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex h-screen h-[100dvh] overflow-hidden bg-slate-50">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-20 lg:hidden no-print"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30
        w-72 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col no-print
      `}>
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Stethoscope size={20} />
          </div>
          <div>
            <h1 className="font-bold text-slate-800 leading-tight">進階身體評估</h1>
            <p className="text-xs text-slate-500 font-medium tracking-wide text-blue-600">碩士班 OSCE 複習</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">評估情境 (Scenarios)</div>
          {scenarios.map(scenario => (
            <button
              key={scenario.id}
              onClick={() => {
                setActiveScenarioId(scenario.id);
                setIsSidebarOpen(false);
              }}
              className={`
                w-full text-left px-3 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between group
                ${activeScenarioId === scenario.id 
                  ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
              `}
            >
              <span className="truncate">{scenario.title.split('：')[1] || scenario.title}</span>
              {activeScenarioId === scenario.id && <ChevronRight size={16} />}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
           <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
             <div className="flex gap-2 items-start">
               <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={16} />
               <p className="text-xs text-amber-800 leading-relaxed text-justify">
                 標記 <span className="text-red-600 font-bold">*</span> 的區域為<span className="font-bold">關鍵項目 (Critical)</span>。若考試時未完成，可能導致不及格。
               </p>
             </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full w-full relative">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shrink-0 no-print">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-md lg:hidden"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg lg:text-xl font-bold text-slate-800 truncate">
              {activeScenario.title}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="hidden sm:flex flex-col items-end">
               <span className="text-xs font-medium text-slate-500">完成進度</span>
               <span className="text-sm font-bold text-blue-600">{calculateProgress()}%</span>
             </div>
             <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
               <div 
                className="h-full bg-blue-500 transition-all duration-500" 
                style={{ width: `${calculateProgress()}%` }}
               />
             </div>
             <button 
                onClick={handlePrint}
                className="flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors px-3 py-1.5 bg-slate-100 hover:bg-blue-50 rounded-md ml-2"
                title="列印檢查表"
             >
               <Printer size={14} />
               <span className="hidden sm:inline">列印</span>
             </button>
             <button 
                onClick={resetCurrentScenario}
                className="text-xs font-medium text-slate-400 hover:text-red-500 transition-colors px-2 py-1 hover:bg-slate-50 rounded"
             >
               重置
             </button>
          </div>
        </header>
        
        {/* Print Header */}
        <div className="hidden print:block p-8 pb-0">
          <h1 className="text-2xl font-bold text-slate-900">{activeScenario.title}</h1>
          <p className="text-sm text-slate-500 mt-2">進階身體評估檢查表 (OSCE)</p>
          <div className="mt-4 border-b border-slate-300"></div>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 bg-slate-50/50 print:bg-white print:overflow-visible">
          <div className="max-w-4xl mx-auto space-y-8 pb-20 print:pb-0 print:space-y-4">
            
            {activeScenario.sections.map((section, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden print:shadow-none print:border-slate-300 print:break-inside-avoid">
                <div className={`
                  px-6 py-4 border-b flex items-center justify-between
                  ${section.isCritical ? 'bg-red-50/50 border-red-100 print:bg-transparent print:border-slate-200' : 'bg-slate-50 border-slate-100 print:bg-transparent print:border-slate-200'}
                `}>
                  <div className="flex items-center gap-2">
                    <h3 className={`font-bold text-lg ${section.isCritical ? 'text-red-800 print:text-black' : 'text-slate-800'}`}>
                      {section.title}
                    </h3>
                    {section.isCritical && (
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded uppercase tracking-wide border border-red-200 print:border-black print:text-black print:bg-transparent">
                        關鍵項目 *
                      </span>
                    )}
                  </div>
                  {section.percentage && (
                    <span className="text-sm font-medium text-slate-500 bg-white px-2 py-1 rounded border border-slate-200 shadow-sm print:shadow-none print:border-none">
                      {section.percentage}
                    </span>
                  )}
                </div>

                <div className="divide-y divide-slate-100 print:divide-slate-200">
                  {section.items.map((item) => (
                    <div 
                      key={item.id} 
                      className={`
                        group flex flex-col sm:flex-row sm:items-center gap-4 p-4 transition-colors hover:bg-slate-50
                        ${checkedItems[item.id] ? 'bg-blue-50/30 print:bg-transparent' : ''}
                      `}
                    >
                      {/* Checkbox Area */}
                      <button 
                        onClick={() => toggleCheck(item.id)}
                        className="flex-1 flex items-start gap-4 text-left print:pointer-events-none"
                      >
                        <div className={`
                          mt-0.5 shrink-0 transition-colors duration-200
                          ${checkedItems[item.id] ? 'text-blue-500 print:text-black' : 'text-slate-300 print:text-slate-300'}
                        `}>
                          {checkedItems[item.id] ? <CheckCircle2 size={24} className="fill-blue-100 print:fill-transparent" /> : <Circle size={24} />}
                        </div>
                        <div>
                          <p className={`
                            font-medium text-base leading-relaxed transition-colors
                            ${checkedItems[item.id] ? 'text-slate-500 line-through decoration-slate-300 print:no-underline print:text-black' : 'text-slate-800'}
                          `}>
                            {item.text}
                          </p>
                          <div className="mt-1 flex items-center gap-2 text-xs">
                             <span className="font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 print:border-slate-300 print:bg-transparent">
                               配分: {item.scoreRange}
                             </span>
                             {item.note && (
                               <span className="text-slate-400 print:text-slate-500">
                                 {item.note}
                               </span>
                             )}
                          </div>
                        </div>
                      </button>

                      {/* Actions - Hidden in Print */}
                      <div className="flex items-center sm:justify-end pl-10 sm:pl-0 no-print">
                        <button
                          onClick={() => handleAskAI(item)}
                          className="
                            flex items-center gap-2 px-4 py-2 rounded-full
                            text-sm font-medium text-indigo-600 bg-indigo-50 
                            hover:bg-indigo-100 hover:text-indigo-700 hover:shadow-md
                            transition-all border border-indigo-200 group/btn
                          "
                        >
                          <Sparkles size={16} className="group-hover/btn:animate-pulse" />
                          <span>怎麼做?</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="text-center text-slate-400 text-sm py-8 print:text-slate-600">
              資料來源: 國防醫學院護理研究所 - 進階身體檢查與評估課程 (2025)
            </div>

          </div>
        </div>
      </main>

      <AIModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        content={modalContent}
        isLoading={isAiLoading}
      />
    </div>
  );
};

export default App;