# 進階身體檢查與評估 · OSCE 複習系統

這個 repo 裡有兩樣東西：

| 項目 | 是什麼 | 網址／位置 |
|---|---|---|
| 🩺 **身體評估 OSCE 複習系統** | 碩士班「進階身體檢查與評估」課程的互動式檢查表，附 AI 臨床助教 | <https://bobyu89.github.io/-/> |
| 📘 **Notero 安裝精靈** | 一步一步帶你安裝 Notero、把 Zotero 連到 Notion 的教學頁 | <https://bobyu89.github.io/-/notero-install-guide.html> |

---

## 🩺 身體評估 OSCE 複習系統

依照國防醫學院護理研究所「進階身體檢查與評估」課程（2025）的評分表製作，用來準備 OSCE。

### 收錄情境

1. 腹痛（Abdominal Pain）
2. 意識混亂（Confusion）
3. 呼吸困難（Dyspnea）
4. 腸胃道出血（GI Bleeding）
5. 高血壓（High Blood Pressure）

每個情境依身體系統分段（生命徵象、胸腔、心臟、腹部、神經系統等），列出每個評估項目與配分，「關鍵項目 *」段落會以紅色標示，部分段落並標出占分比例。

### 功能

- **勾選進度**：逐項勾選，自動計算完成百分比；進度存在瀏覽器，重新整理不會消失
- **列印**：一鍵列印成紙本檢查表
- **AI 臨床助教**：在任一項目按「怎麼做?」，Google Gemini 會說明：
  - 操作步驟（病人姿勢、檢查手法）
  - 重點提示與工具
  - 正常與異常發現
  - YouTube 操作示範影片搜尋連結

### 使用 AI 臨床助教

第一次按「怎麼做?」時，會請你輸入 **Gemini API 金鑰**：

1. 到 [Google AI Studio](https://aistudio.google.com/apikey) 免費建立金鑰
2. 貼到輸入框，按「儲存並取得解釋」

金鑰只存在你自己這台裝置的瀏覽器裡，不會上傳到網站（網站是公開的，所以不內建金鑰）。要換金鑰時，按視窗下方的「更換 API 金鑰」。

> AI 的說明僅供學習參考，實際操作請以課程講義與臨床指引為準。


---

> 📦 **Zotero Bridge 插件與研究大腦已搬到獨立的 repo：[bobyu89/zotero-bridge](https://github.com/bobyu89/zotero-bridge)**

---

## 部署方式

使用 GitHub Pages，不使用 Vercel：

| 內容 | 方式 | 觸發時機 |
|---|---|---|
| 網站（OSCE 複習系統、Notero 安裝精靈） | GitHub Pages（`.github/workflows/pages.yml`） | 推送到 `main` |

第一次使用 GitHub Pages 時，需要到 **Settings → Pages → Source** 選擇 **GitHub Actions**。

---

## 本機開發

需要 [Node.js](https://nodejs.org/)（建議 22 版）。

### 網站

```bash
npm install
npm run dev       # 開發模式，打開終端機顯示的網址
npm run build     # 建置到 dist/（GitHub Pages 用的就是這個）
```

開發時若不想每次輸入金鑰，可以在專案根目錄建立 `.env.local`：

```
API_KEY=你的 Gemini API 金鑰
```

> ⚠️ 這個金鑰會被打包進網站程式碼，只能用在本機開發，**不要**放進 GitHub Actions 或公開部署。

### 專案結構

```
├── App.tsx                     # OSCE 複習系統主畫面
├── data.ts                     # 五個情境的檢查項目與配分
├── components/AIModal.tsx      # AI 臨床助教視窗
├── services/geminiService.ts   # Gemini API 呼叫與金鑰管理
├── public/
│   └── notero-install-guide.html  # Notero 安裝精靈
└── .github/workflows/pages.yml  # 部署到 GitHub Pages
```
