import { AssessmentScenario } from './types';

export const scenarios: AssessmentScenario[] = [
  {
    id: 'abdominal-pain',
    title: '情境：腹痛 (Abdominal Pain)',
    sections: [
      {
        title: '整體準則',
        isCritical: true,
        percentage: '5%',
        items: [
          { id: 'ap-ov-1', text: '維持無菌技術：保護自己與他人免受汙染', scoreRange: '0 1 2 3' },
          { id: 'ap-ov-2', text: '維持生理與心理的安全及舒適', scoreRange: '0 1 2' },
        ]
      },
      {
        title: '生命徵象 (Vital Signs)',
        isCritical: true,
        percentage: '10%',
        items: [
          { id: 'ap-vs-1', text: '身高、體重 (詢問病人)', scoreRange: '0 1 2' },
          { id: 'ap-vs-2', text: '血壓 BP (測量姿勢性血壓變化 2/3，平躺 1/3)', scoreRange: '姿勢 1 & 2: 0-2' },
          { id: 'ap-vs-3', text: '體溫、脈搏、呼吸 TPR (測量 P & R)', scoreRange: 'P & R: 0-2' },
        ]
      },
      {
        title: '胸腔 (呼吸系統)',
        isCritical: true,
        percentage: '15%',
        items: [
          { id: 'ap-th-1', text: '觸診雙側呼吸擴張度 (Respiratory excursion)', scoreRange: '0-5' },
          { id: 'ap-th-2', text: '聽診前胸與後背肺音', scoreRange: '前 & 後: 0-5' },
        ]
      },
      {
        title: '頸部',
        isCritical: false,
        percentage: '5%',
        items: [
          { id: 'ap-nk-1', text: '測量頸靜脈壓 (JVP)', scoreRange: '0-5' },
        ]
      },
      {
        title: '心臟 (Cardiac)',
        isCritical: true,
        percentage: '10%',
        items: [
          { id: 'ap-cd-1', text: '聽診 5 個主要聽診點，使用膜面與鐘面 (a.平躺 b.坐姿)', scoreRange: 'a & b: 0-5' },
        ]
      },
      {
        title: '腹部 (床平放)',
        isCritical: true,
        percentage: '35%',
        items: [
          { id: 'ap-ab-1', text: '視診是否有明顯的腸蠕動波', scoreRange: '0-5' },
          { id: 'ap-ab-2', text: '聽診腹部四象限', scoreRange: '0-5' },
          { id: 'ap-ab-3', text: '觸診側腹部 (Flanks)', scoreRange: '0-5' },
          { id: 'ap-ab-4', text: '執行輕度與深度觸診', scoreRange: '0-5' },
          { id: 'ap-ab-5', text: '叩診肝臟大小 (Liver span)', scoreRange: '0-5' },
          { id: 'ap-ab-6', text: '叩診腹部四象限', scoreRange: '0-5' },
          { id: 'ap-ab-7', text: '測試 Murphy’s, Psoas, Obturator sign 或反彈痛 (Rebound tenderness) (四擇一)', scoreRange: '0-5' },
        ]
      }
    ]
  },
  {
    id: 'confusion',
    title: '情境：意識混亂 (Confusion)',
    sections: [
      {
        title: '整體準則',
        isCritical: true,
        percentage: '5%',
        items: [
          { id: 'cf-ov-1', text: '維持無菌技術：保護自己與他人免受汙染', scoreRange: '0-3' },
          { id: 'cf-ov-2', text: '維持生理與心理的安全及舒適', scoreRange: '0-2' },
        ]
      },
      {
        title: '生命徵象 (Vital Signs)',
        isCritical: true,
        percentage: '10%',
        items: [
          { id: 'cf-vs-1', text: '身高、體重 (詢問病人)', scoreRange: '0-2' },
          { id: 'cf-vs-2', text: '血壓 BP (測量姿勢性血壓變化 2/3，平躺 1/3)', scoreRange: '姿勢 1 & 2: 0-2' },
          { id: 'cf-vs-3', text: '體溫、脈搏、呼吸 TPR (測量 P & R)', scoreRange: 'P & R: 0-2' },
        ]
      },
      {
        title: '神經系統 (Neuro)',
        isCritical: true,
        percentage: '30%',
        items: [
          { id: 'cf-nu-1', text: '評估 (五擇三)：(a)意識狀態 LOC, (b)定向力, (c)記憶力, (d)連續減 7, (e)詞彙測試', scoreRange: '0-10' },
          { id: 'cf-nu-2', text: '評估反射：(a)旋前肌, (b)二頭肌, (c)三頭肌, (d)膝反射, (e)阿基里斯腱, (f)足底反射', scoreRange: '0-10' },
          { id: 'cf-nu-3', text: '測試協調性 (三擇一)：(指鼻測驗, 足跟沿脛骨滑動, 快速交替動作)', scoreRange: '0-5' },
          { id: 'cf-nu-4', text: '測試平衡感 (二擇一)：(步態 Gait, 閉眼站立測驗 Romberg)', scoreRange: '0-5' },
        ]
      },
      {
        title: '頸部',
        isCritical: false,
        percentage: '10%',
        items: [
          { id: 'cf-nk-1', text: '測試頸部僵硬 (Nuchal rigidity)', scoreRange: '0-2' },
          { id: 'cf-nk-2', text: '觸診與聽診頸動脈 (Carotid arteries)', scoreRange: '0-4' },
          { id: 'cf-nk-3', text: '測量頸靜脈壓 (JVP)', scoreRange: '0-4' },
        ]
      },
      {
        title: '胸腔 (呼吸系統)',
        isCritical: true,
        percentage: '15%',
        items: [
          { id: 'cf-th-1', text: '觸診呼吸擴張度', scoreRange: '0-5' },
          { id: 'cf-th-2', text: '觸診觸覺震顫 (Tactile fremitus)', scoreRange: '0-5' },
          { id: 'cf-th-3', text: '聽診後背與前胸肺音', scoreRange: '0-5' },
        ]
      },
      {
        title: '心臟 (Cardiac)',
        isCritical: true,
        percentage: '10%',
        items: [
          { id: 'cf-cd-1', text: '觸診震顫、抬舉 (Lifts, thrills, heaves)', scoreRange: '0-2' },
          { id: 'cf-cd-2', text: '聽診 5 個主要聽診點，使用膜面與鐘面：(a)側躺 (b)坐姿', scoreRange: 'a & b: 0-4' },
        ]
      },
      {
        title: '腹部',
        isCritical: false,
        percentage: '10%',
        items: [
          { id: 'cf-ab-1', text: '執行輕度與深度觸診', scoreRange: '0-5' },
          { id: 'cf-ab-2', text: '測試 Murphy’s, Psoas, Obturator sign 或反彈痛 (四擇一)', scoreRange: '0-5' },
        ]
      }
    ]
  },
  {
    id: 'dyspnea',
    title: '情境：呼吸困難 (Dyspnea)',
    sections: [
      {
        title: '整體準則',
        isCritical: true,
        percentage: '5%',
        items: [
          { id: 'dy-ov-1', text: '維持無菌技術：保護自己與他人免受汙染', scoreRange: '0-3' },
          { id: 'dy-ov-2', text: '維持生理與心理的安全及舒適', scoreRange: '0-2' },
        ]
      },
      {
        title: '生命徵象 (Vital Signs)',
        isCritical: true,
        percentage: '10%',
        items: [
          { id: 'dy-vs-1', text: '身高、體重 (詢問病人)', scoreRange: '0-2' },
          { id: 'dy-vs-2', text: '血壓 BP (測量姿勢性血壓變化 2/3，平躺 1/3)', scoreRange: '姿勢 1 & 2: 0-2' },
          { id: 'dy-vs-3', text: '體溫、脈搏、呼吸 TPR (測量 P & R)', scoreRange: 'P & R: 0-2' },
        ]
      },
      {
        title: '神經系統',
        isCritical: false,
        percentage: '10%',
        items: [
          { id: 'dy-nu-1', text: '評估意識狀態 (LOC)', scoreRange: '0-5' },
          { id: 'dy-nu-2', text: '評估定向力 (Orientation)', scoreRange: '0-5' },
        ]
      },
      {
        title: '頸部',
        isCritical: false,
        percentage: '10%',
        items: [
          { id: 'dy-nk-1', text: '測量頸靜脈壓 JVP (視診頸靜脈搏動)', scoreRange: '0-4' },
          { id: 'dy-nk-2', text: '觸診與聽診頸動脈脈搏', scoreRange: '觸 & 聽: 0-3' },
        ]
      },
      {
        title: '胸腔 (呼吸系統)',
        isCritical: true,
        percentage: '30%',
        items: [
          { id: 'dy-rs-1', text: '測量雙側胸廓擴張度', scoreRange: '0-5' },
          { id: 'dy-rs-2', text: '觸診震顫 (Fremitus) (前胸與後背)', scoreRange: '0-5' },
          { id: 'dy-rs-3', text: '叩診前胸與後背', scoreRange: '叩 & 聽: 0-5' },
          { id: 'dy-rs-4', text: '聽診前胸與後背', scoreRange: '叩 & 聽: 0-5' },
        ]
      },
      {
        title: '胸腔 (心臟)',
        isCritical: true,
        percentage: '20%',
        items: [
          { id: 'dy-cd-1', text: '觸診震顫、抬舉 (Thrills, lifts, heaves)', scoreRange: '0-5' },
          { id: 'dy-cd-2', text: '觸診心尖脈 (PMI) (位置與直徑)', scoreRange: '0-5' },
          { id: 'dy-cd-3', text: '聽診 5 個主要聽診點，使用膜面與鐘面：平躺、側躺、坐姿 (三擇二)', scoreRange: '1 & 2: 0-5' },
        ]
      },
      {
        title: '腹部',
        isCritical: false,
        percentage: '10%',
        items: [
          { id: 'dy-ab-1', text: '視線平視側面視診腹部', scoreRange: '0-2' },
          { id: 'dy-ab-2', text: '觸診或叩診肝臟', scoreRange: '0-5' },
          { id: 'dy-ab-3', text: '評估肝頸靜脈回流 (Hepatojugular reflux)', scoreRange: '0-3' },
        ]
      },
      {
        title: '四肢',
        isCritical: true,
        percentage: '5%',
        items: [
          { id: 'dy-ex-1', text: '觸診薦骨前或腳踝水腫', scoreRange: '0-5' },
        ]
      }
    ]
  },
  {
    id: 'gi-bleeding',
    title: '情境：腸胃道出血 (GI Bleeding)',
    sections: [
      {
        title: '整體準則',
        isCritical: true,
        percentage: '5%',
        items: [
          { id: 'gi-ov-1', text: '維持無菌技術：保護自己與他人免受汙染', scoreRange: '0-3' },
          { id: 'gi-ov-2', text: '維持生理與心理的安全及舒適', scoreRange: '0-2' },
        ]
      },
      {
        title: '生命徵象 (Vital Signs)',
        isCritical: true,
        percentage: '10%',
        items: [
          { id: 'gi-vs-1', text: '身高、體重 (詢問病人)', scoreRange: '0-2' },
          { id: 'gi-vs-2', text: '血壓 BP (測量姿勢性血壓變化 2/3，平躺 1/3)', scoreRange: '姿勢 1 & 2: 0-2' },
          { id: 'gi-vs-3', text: '體溫、脈搏、呼吸 TPR (測量 P & R)', scoreRange: 'P & R: 0-2' },
        ]
      },
      {
        title: '頸部',
        isCritical: false,
        percentage: '5%',
        items: [
          { id: 'gi-nk-1', text: '測量頸靜脈壓 JVP (視診頸靜脈搏動)', scoreRange: '0-5' },
        ]
      },
      {
        title: '心臟',
        isCritical: true,
        percentage: '15%',
        items: [
          { id: 'gi-cd-1', text: '觸診胸骨處皮膚飽滿度 (Turgor)', scoreRange: '0-5' },
          { id: 'gi-cd-2', text: '聽診 5 個主要聽診點，使用膜面與鐘面：(a)平躺 (b)坐姿', scoreRange: 'a & b: 0-5' },
        ]
      },
      {
        title: '腹部',
        isCritical: true,
        percentage: '30%',
        items: [
          { id: 'gi-ab-1', text: '聽診腹部四象限', scoreRange: '0-10' },
          { id: 'gi-ab-2', text: '叩診腹部四象限', scoreRange: '0-5' },
          { id: 'gi-ab-3', text: '執行輕度與深度觸診 (特別是上腹部、右下腹 RLQ、左下腹 LLQ)', scoreRange: '0-10' },
          { id: 'gi-ab-4', text: '叩診肝臟大小 (Liver span)', scoreRange: '0-5' },
        ]
      },
      {
        title: '四肢',
        isCritical: true,
        percentage: '15%',
        items: [
          { id: 'gi-ex-1', text: '視診膚色 (甲床、皮膚)', scoreRange: '0-5' },
          { id: 'gi-ex-2', text: '觸診溫度', scoreRange: '0-5' },
          { id: 'gi-ex-3', text: '觸診脈搏強度 (橈動脈、足背動脈)', scoreRange: '0-5' },
        ]
      }
    ]
  },
  {
    id: 'high-bp',
    title: '情境：高血壓 (High Blood Pressure)',
    sections: [
      {
        title: '整體準則',
        isCritical: true,
        percentage: '5%',
        items: [
          { id: 'bp-ov-1', text: '維持無菌技術：保護自己與他人免受汙染', scoreRange: '0-3' },
          { id: 'bp-ov-2', text: '維持生理與心理的安全及舒適', scoreRange: '0-2' },
        ]
      },
      {
        title: '生命徵象 (Vital Signs)',
        isCritical: true,
        percentage: '10%',
        items: [
          { id: 'bp-vs-1', text: '身高、體重 (詢問病人)', scoreRange: '0-2' },
          { id: 'bp-vs-2', text: '測量血壓 (雙手)', scoreRange: '左手 & 右手: 0-2' },
          { id: 'bp-vs-3', text: '體溫、脈搏、呼吸 TPR (測量 P & R)', scoreRange: 'P & R: 0-2' },
        ]
      },
      {
        title: '頸部',
        isCritical: true,
        percentage: '5%',
        items: [
          { id: 'bp-nk-1', text: '聽診與觸診頸動脈', scoreRange: '0-5' },
        ]
      },
      {
        title: '心臟',
        isCritical: true,
        percentage: '15%',
        items: [
          { id: 'bp-cd-1', text: '觸診震顫、抬舉 (Lifts, thrills, heaves)', scoreRange: '0-5' },
          { id: 'bp-cd-2', text: '聽診 5 個主要聽診點，使用膜面與鐘面：平躺、坐姿、側躺 (三擇二)', scoreRange: '1 & 2: 0-5' },
        ]
      },
      {
        title: '腹部',
        isCritical: true,
        percentage: '5%',
        items: [
          { id: 'bp-ab-1', text: '聽診主動脈與腎動脈', scoreRange: '0-5' },
        ]
      },
      {
        title: '神經系統 (Neuro)',
        isCritical: true,
        percentage: '30%',
        items: [
          { id: 'bp-nu-1', text: '評估 (五擇三)：(a)意識狀態 LOC, (b)定向力, (c)記憶力, (d)連續減 7, (e)詞彙測試', scoreRange: '0-10' },
          { id: 'bp-nu-2', text: '評估上肢與下肢的活動範圍 (ROM)、肌力與協調性', scoreRange: '0-10' },
          { id: 'bp-nu-3', text: '執行閉眼站立測驗 (Romberg test)', scoreRange: '0-5' },
          { id: 'bp-nu-4', text: '評估步態 Gait (直線行走、腳跟接腳尖)', scoreRange: '0-5' },
        ]
      },
      {
        title: '四肢',
        isCritical: false,
        percentage: '10%',
        items: [
          { id: 'bp-ex-1', text: '視診杵狀指、發紺、水腫', scoreRange: '0-5' },
          { id: 'bp-ex-2', text: '觸診脈搏：上肢與下肢', scoreRange: '0-5' },
        ]
      }
    ]
  }
];