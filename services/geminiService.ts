import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is not defined in the environment.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const getExplanationForAssessment = async (assessmentItem: string, context: string) => {
  const ai = getClient();
  if (!ai) {
    throw new Error("API Key missing. Please set your API key in the environment.");
  }

  const prompt = `
    你是一位碩士層級「進階身體檢查與評估」課程的專業護理講師。
    
    學生需要在「${context}」這個情境檢查表中，針對以下評估項目尋求指導：
    「${assessmentItem}」

    請提供簡潔、步驟分明的繁體中文教學，指導學生如何執行此評估。
    
    請依照以下 Markdown 格式輸出：
    
    ## 1. 操作步驟 (Procedure)
    (請用條列式說明具體如何執行，包含病人姿勢與檢查手法)
    
    ## 2. 重點提示與工具
    - **工具**: (例如：聽診器膜面/鐘面、叩診槌等)
    - **技巧**: (臨床上的小撇步)
    
    ## 3. 正常與異常發現
    - **正常**: ...
    - **異常**: ...

    ---
    
    最後，請務必提供一個 YouTube 搜尋連結，讓學生可以觀看操作影片。
    請根據該評估項目的「英文醫學專有名詞」加上「Physical Assessment」作為關鍵字產生搜尋網址。
    格式範例：
    [🎬 點擊觀看 YouTube 操作影片](https://www.youtube.com/results?search_query=Liver+Palpation+Physical+Assessment)
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching explanation:", error);
    throw new Error("Failed to retrieve explanation from Gemini.");
  }
};