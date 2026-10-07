# 進階身體檢查與評估 · 研究工具箱

這個 repo 裡有三樣東西：

| 項目 | 是什麼 | 網址／位置 |
|---|---|---|
| 🩺 **身體評估 OSCE 複習系統** | 碩士班「進階身體檢查與評估」課程的互動式檢查表，附 AI 臨床助教 | <https://bobyu89.github.io/-/> |
| 📘 **Notero 安裝精靈** | 一步一步帶你安裝 Notero、把 Zotero 連到 Notion 的教學頁 | <https://bobyu89.github.io/-/notero-install-guide.html> |
| 🔗 **Zotero Bridge** | Zotero 10 插件：用 AI 整理文獻筆記，同步到 Notion 與 Obsidian | [`zotero-bridge/`](zotero-bridge/)，下載請到 [Releases](https://github.com/bobyu89/-/releases) |

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

## 🔗 Zotero Bridge

把「Zotero 管理文獻 → AI 整理筆記 → Notion／Obsidian 閱讀與建立連結」串成一鍵完成：

- 用 Claude 或 OpenAI 讀書目、摘要、全文和你的劃線，產生結構化文獻筆記（研究設計、樣本、結果、限制、證據等級、對研究的啟發）
- 依文獻庫或分類，分流到不同的 Notion 資料庫與 Obsidian 資料夾
- Notion 以書目資料當作表頭；Obsidian 支援 1.14 的彩色劃線與 Bases 看板
- 重新同步不會覆蓋你自己寫的內容

安裝與設定請看 **[Zotero Bridge 使用說明](zotero-bridge/README.md)**。

---

## 部署方式

全部使用 GitHub，不使用 Vercel：

| 內容 | 方式 | 觸發時機 |
|---|---|---|
| 網站（OSCE 複習系統、Notero 安裝精靈） | GitHub Pages（`.github/workflows/pages.yml`） | 推送到 `main` |
| Zotero Bridge 插件 | GitHub Releases（`.github/workflows/zotero-bridge-release.yml`） | `main` 上的插件版本號更新 |
| 插件測試 | GitHub Actions（`.github/workflows/zotero-bridge.yml`） | 每次推送與 PR |

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

### Zotero Bridge

```bash
cd zotero-bridge
npm install
npm test          # 執行測試
npm run build     # 產生 dist/zotero-bridge-<版本>.xpi
```

### 專案結構

```
├── App.tsx                     # OSCE 複習系統主畫面
├── data.ts                     # 五個情境的檢查項目與配分
├── components/AIModal.tsx      # AI 臨床助教視窗
├── services/geminiService.ts   # Gemini API 呼叫與金鑰管理
├── public/
│   └── notero-install-guide.html  # Notero 安裝精靈
├── zotero-bridge/              # Zotero 10 插件（獨立的子專案）
└── .github/workflows/          # GitHub Pages、Releases、測試
```
