# ⚔️ 《JS 核心重構：勇者轉職傳說》— 前導修煉 ⚔️

> **在進入深奧的 JavaScript 核心原力考驗之前，先用 CSS Flexbox 奧義引導勇者順利集結與轉職吧！**

<div align="center">
  <img src="https://img.shields.io/badge/Role-傳奇導師%20Liwen-red?style=for-the-badge&logo=adventure" alt="Role" />
  <img src="https://img.shields.io/badge/Theme-RPG%20Parchment-gold?style=for-the-badge" alt="Theme" />
  <img src="https://img.shields.io/badge/Tech-Vanilla%20JS%20%26%20CSS-blue?style=for-the-badge" alt="Tech" />
  <img src="https://img.shields.io/badge/Release-7--8%20月鐵人賽-orange?style=for-the-badge" alt="Release" />
</div>

---

## 🗺️ 冒險修煉場簡介

《JS 核心重構：勇者轉職傳說》前導修煉是一款專為前端冒險者設計的 **互動式 Flexbox 排版闖關遊戲**。本專案以中世紀羊皮紙卷軸與古老魔法地圖為視覺核心，融合了沉浸式 RPG 的故事元素。

在遊戲中，你將扮演**傳奇導師 Liwen**，引導新進勇者、新手行李箱、傳奇卷軸與戰利品在魔法地圖上精準對齊，唯有寫出正確的 CSS 符文，才能協助他們完成修煉、成功轉職！

---

## 🔮 冒險三大核心亮點

### 📜 1. 沉浸式 RPG 奇幻視覺與微互動
* **環境篝火微光（Ambient Light）**：背景採用暗色木紋桌板與動態篝火（Torchlight Flicker）微光特效，營造深夜在公會酒館研究魔法地圖的氛圍。
* **皇家蠟封指示物（Royal Wax Seals）**：地圖上的角色與目標點均採用精緻的蠟封戳印與虛線定位環設計，當對齊成功時，地圖會發出金色神聖光芒（Success Highlight）。

### 🛡️ 2. 快捷魔法符文系統（Quick Inputs）
* 內建**「🔮 快捷符文」**展開面板，一鍵吟唱常用屬性（`justify-content`、`align-items` 等）與常用數值（`center`、`space-between` 等），打代跑輸入法術，效率倍增。
* 支援 **Tab 鍵縮排補完**，在網頁編輯器也能擁有 IDE 般的流暢手感。

### 🎓 3. 傳奇導師隨行指引
* 遇到卡關？隨時點擊 **「💡 導師提示」**，傳奇導師 Liwen 將親自為你解析主軸與交錯軸的奧義法術，助你突破重圍。

---

## ⚔️ 9 大排版關卡挑戰

| 關卡 | 關卡名稱 | 修煉屬性 | 關卡故事 |
| :---: | :--- | :--- | :--- |
| **01** | 勇者召喚 ⚔️ | `justify-content` | 引導新進勇者至公會大門的**起點**集合 |
| **02** | 傳奇導師 Liwen 🎓 | `justify-content` | 協助導師於大廳**正中心**就位 |
| **03** | 新手行李箱 🧳 | `justify-content` | 將行李箱送往右側的**傳送陣（末端）** |
| **04** | 傳奇卷軸分發 📜 | `justify-content` | 平鋪三大知識卷軸，兩側對齊並**均等留白** |
| **05** | 冒險者酒館 🍻 | `justify-content` | 讓三位勇者圍繞圓桌，座位**周圍等距環繞** |
| **06** | 聖劍之巔 🧗 | `align-items` | 克服垂直地心引力，於**垂直交錯軸底部**集結 |
| **07** | 喚醒 JS 原力 🌸 | `justify-content` + `align-items` | 將核心櫻花樹完美安置在祭壇**正中央** |
| **08** | 勇者列隊 🚶 | `flex-direction` | 將隊伍轉為**垂直縱向（Column）**直列前進 |
| **09** | 塞滿戰利品 🎁 | `flex-wrap` | 滿載而歸！施展**自動換行法術**塞滿箱子 |

---

## 🛠️ 開發技術棧
* **Structure**: HTML5 語意化標籤
* **Styling**: Vanilla CSS (CSS 變數、自訂動態 Flicker 動畫、高質感 Glassmorphism 毛玻璃特效)
* **Logic**: Vanilla JavaScript (原生 DOM 操作、關卡狀態持久化 `localStorage`)
* **Fonts**: [Google Fonts](https://fonts.google.com/) (Cinzel / Noto Serif TC / Fira Code 魔法代碼字型)

---

## 🚀 本地啟動指南

想要立即在本地開啟你的修煉之旅嗎？只需簡單兩步：

1. **複製專案到本地**：
   ```bash
   git clone https://github.com/liwenchiou/hexschool-game.git
   cd hexschool-game
   ```

2. **啟動本地伺服器** (推薦使用 `npx` 快速啟動)：
   ```bash
   npx http-server -p 8085
   ```
   啟動後，請在瀏覽器中打開 `http://localhost:8085` 即可開始修煉！

---

## 🌸 傳奇預告：7-8 月鐵人賽見！

> **「你已成功掌握了 Flexbox 基礎！但要成為真正的傳奇勇者，JavaScript 核心的考驗才正要開始...」**

通關後將會觸發神祕的預告卷軸。更宏大、更深層的 **《JS 核心重構：勇者轉職傳說》30 天 RPG 冒險里程碑** 將於今年 **7-8 月鐵人賽** 隆重登場！

伴你同行的神祕公會成員與更多強大修煉系統，屆時將正式揭曉，敬請期待！⚔️✨
