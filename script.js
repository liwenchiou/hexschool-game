const levels = [
    {
        title: "1. 勇者召喚 ⚔️",
        desc: "<b>《JS 核心重構：勇者轉職傳說》前導修煉正式展開！</b>⚔️\n\n新進的冒險者們正聚集在公會大門前，但出發的佇列亂成一團。\n\n請施展你的第一道 CSS 排版法術，引導勇者們在公會大門的<b>起點（Start）</b>集合，開啟偉大的轉職之旅！",
        targetCSS: { justifyContent: 'flex-start' },
        initialCSS: "justify-content: flex-end;",
        items: 1,
        emojis: ['⚔️'],
        hint: "🧙‍♂️ <b>傳奇導師 Liwen 提示：</b>『勇者們要在容器的<b>起點（Start）</b>集合。請在編輯器中輸入或點擊快捷按鈕：<code>justify-content: flex-start;</code>！』"
    },
    {
        title: "2. 傳奇導師 Liwen 🎓",
        desc: "傳奇導師 Liwen 正在冒險者大廳的中央等候著。\n\n請協助導師，在畫面最神聖的<b>正中心（Center）</b>就位！",
        targetCSS: { justifyContent: 'center' },
        items: 1,
        emojis: ['🧙‍♂️'],
        hint: "🧙‍♂️ <b>傳奇導師 Liwen 提示：</b>『要在正中心集合，就得使用<b>中心（Center）</b>的對齊奧義！請輸入或點擊快捷按鈕：<code>justify-content: center;</code>！』"
    },
    {
        title: "3. 新手行李箱 🧳",
        desc: "<b>公會書記官 </b> 遞給了你裝滿 30 天修煉指南的行李箱。\n\n請將行李箱送往右側的<b>傳送陣（末端 / End）</b>！",
        targetCSS: { justifyContent: 'flex-end' },
        items: 1,
        emojis: ['🧳'],
        hint: "🧙‍♂️ <b>傳奇導師 Liwen 提示：</b>『將箱子送往<b>末端（End）</b>的右側傳送陣。請輸入或點擊快捷按鈕：<code>justify-content: flex-end;</code>！』"
    },
    {
        title: "4. 傳奇卷軸分發 📜",
        desc: "我們需要將「整潔術」、「資料流」和「瀏覽器機制」三卷傳奇卷軸分發給公會成員。\n\n請在書桌上分開平鋪卷軸，使它們<b>在兩側對齊，且卷軸之間保留均等的間距（Space Between）</b>！",
        targetCSS: { justifyContent: 'space-between' },
        items: 3,
        emojis: ['📜', '📜', '📜'],
        hint: "🧙‍♂️ <b>傳奇導師 Liwen 提示：</b>『這三卷軸必須在兩端均勻排開，並在卷軸之間保留<b>均等的空白空間（Space Between）</b>。請輸入或點擊快捷按鈕：<code>justify-content: space-between;</code>！』"
    },
    {
        title: "5. 冒險者酒館 🍻",
        desc: "修煉累了就到冒險者酒館喝一杯！\n\n請讓三位勇者圍繞酒館桌子坐下，使<b>每個座位周圍都留有均等的環繞間距（Space Around）</b>，方便飲酒暢談！",
        targetCSS: { justifyContent: 'space-around' },
        items: 3,
        emojis: ['🍻', '🍻', '🍻'],
        hint: "🧙‍♂️ <b>傳奇導師 Liwen 提示：</b>『這一次，要在每個座位的<b>周圍（Around）</b>保留相等的舒適間距。請輸入或點擊快捷按鈕：<code>justify-content: space-around;</code>！』"
    },
    {
        title: "6. 聖劍之巔 🧗",
        desc: "遠方傳來聖劍的光芒！要取得聖劍，必須垂直攀登。\n\n請引導三位勇者克服地心引力，在垂直交錯軸的<b>最底部（Bottom/End）</b>集合！",
        targetCSS: { alignItems: 'flex-end' },
        items: 3,
        emojis: ['🧗', '🧗', '🧗'],
        hint: "🧙‍♂️ <b>傳奇導師 Liwen 提示：</b>『垂直移動是交錯軸（Cross Axis）的法術，需要使用 <code>align-items</code>。若要向下靠底對齊，請輸入或點擊快捷按鈕：<code>align-items: flex-end;</code>！』"
    },
    {
        title: "7. 喚醒 JS 原力 🌸",
        desc: "修煉的最高潮！這棵象徵「JS 核心重構」的櫻花樹需要被完美安置在祭壇的<b>正中央（水平與垂直方向皆在中心）</b>。\n\n你需要發揮實力進行雙重對齊法術！",
        targetCSS: { justifyContent: 'center', alignItems: 'center' },
        items: 1,
        emojis: ['🌸'],
        hint: "🧙‍♂️ <b>傳奇導師 Liwen 提示：</b>『終極的雙重吟唱！你需要同時將水平主軸與垂直交錯軸都對齊中央（Center）。請分行輸入：<code>justify-content: center;</code> 與 <code>align-items: center;</code>！』"
    },
    {
        title: "8. 勇者列隊 🚶",
        desc: "準備前往冒險前哨站！人群正排隊準備出發。\n\n請將勇者們排隊的主軸方向<b>改為垂直縱向（Column）</b>，讓大家成直列前進！",
        targetCSS: { flexDirection: 'column' },
        items: 3,
        emojis: ['🚶', '🚶', '🚶'],
        hint: "🧙‍♂️ <b>傳奇導師 Liwen 提示：</b>『排隊時，要把橫排改成直列前進，也就是把主軸方向（Direction）設定為<b>縱列（Column）</b>。請輸入或點擊快捷按鈕：<code>flex-direction: column;</code>！』"
    },
    {
        title: "9. 塞滿戰利品 🎁",
        desc: "30 天修煉即將滿載而歸！裝備與禮物實在太多了！\n\n請施展<b>自動換行法術（Wrap）</b>，讓塞不下的轉職禮物在箱子中自動折行往下排列！",
        targetCSS: { flexWrap: 'wrap' },
        items: 12,
        emojis: ['🎁'],
        playContainerStyle: { width: '350px' }, // Force wrap to happen visually
        hint: "🧙‍♂️ <b>傳奇導師 Liwen 提示：</b>『箱子裝不下了！必須施展<b>自動折行換頁（Wrap）</b>法術，讓溢出的禮物自動往下排。請輸入或點擊快捷按鈕：<code>flex-wrap: wrap;</code>！』"
    }
];

const abbreviations = {
    'df': 'display: flex;',
    'jc': 'justify-content: ',
    'jcfs': 'justify-content: flex-start;',
    'jcc': 'justify-content: center;',
    'jcfe': 'justify-content: flex-end;',
    'jcsb': 'justify-content: space-between;',
    'jcsa': 'justify-content: space-around;',
    'jcse': 'justify-content: space-evenly;',
    'ai': 'align-items: ',
    'aifs': 'align-items: flex-start;',
    'aic': 'align-items: center;',
    'aife': 'align-items: flex-end;',
    'fd': 'flex-direction: ',
    'fdr': 'flex-direction: row;',
    'fdc': 'flex-direction: column;',
    'fxdc': 'flex-direction: column;',
    'fxdr': 'flex-direction: row;',
    'fw': 'flex-wrap: ',
    'fww': 'flex-wrap: wrap;',
    'fwnw': 'flex-wrap: nowrap;'
};

function expandAbbreviation(textarea) {
    const start = textarea.selectionStart;
    const text = textarea.value.substring(0, start);
    
    // Find the last word before the cursor (only alphabetic characters)
    const match = text.match(/([a-zA-Z]+)$/);
    if (!match) return false;
    
    const word = match[1].toLowerCase();
    const replacement = abbreviations[word];
    if (replacement) {
        const wordStart = start - word.length;
        textarea.value = textarea.value.substring(0, wordStart) + replacement + textarea.value.substring(start);
        textarea.selectionStart = textarea.selectionEnd = wordStart + replacement.length;
        handleInput();
        return true;
    }
    return false;
}



let currentLevel = parseInt(localStorage.getItem('flexTokyoLevel')) || 0;
// Ensure level bounds
if(currentLevel >= levels.length) currentLevel = 0;

const dom = {
    levelText: document.getElementById('current-level'),
    totalText: document.getElementById('total-levels'),
    title: document.getElementById('level-title'),
    desc: document.getElementById('level-desc'),
    cssInput: document.getElementById('css-input'),
    playContainer: document.getElementById('play-container'),
    targetContainer: document.getElementById('target-container'),
    nextBtn: document.getElementById('next-btn'),
    boardWrapper: document.querySelector('.board-wrapper'),
    hintBtn: document.getElementById('hint-btn'),
    hintBox: document.getElementById('hint-box'),
    toggleQuickBtn: document.getElementById('toggle-quick-btn'),
    quickInputs: document.querySelector('.quick-inputs')
};

function initGame() {
    dom.totalText.textContent = levels.length;
    dom.cssInput.addEventListener('input', handleInput);
    dom.nextBtn.addEventListener('click', nextLevel);
    
    // Add quick-input button event listeners
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const textToInsert = this.getAttribute('data-insert');
            const textarea = dom.cssInput;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            
            textarea.value = textarea.value.substring(0, start) + textToInsert + textarea.value.substring(end);
            
            // Move cursor to after the inserted text
            const newPos = start + textToInsert.length;
            textarea.selectionStart = textarea.selectionEnd = newPos;
            
            textarea.focus();
            handleInput();
        });
    });

    // Add Toggle Quick inputs button event listener
    dom.toggleQuickBtn.addEventListener('click', function() {
        dom.quickInputs.classList.toggle('collapsed');
        if (dom.quickInputs.classList.contains('collapsed')) {
            dom.toggleQuickBtn.textContent = '🔮 快捷符文 (展開)';
        } else {
            dom.toggleQuickBtn.textContent = '🔮 快捷符文 (收起)';
        }
    });

    // Add Hint button event listener
    dom.hintBtn.addEventListener('click', function() {
        const level = levels[currentLevel];
        if (dom.hintBox.classList.contains('hidden')) {
            dom.hintBox.innerHTML = level.hint;
            dom.hintBox.classList.remove('hidden');
            dom.hintBtn.textContent = '📖 收起提示';
        } else {
            dom.hintBox.classList.add('hidden');
            dom.hintBtn.textContent = '💡 導師提示';
        }
    });
    
    // Add modal event listeners
    document.getElementById('close-modal').addEventListener('click', hideTeaserModal);
    document.getElementById('teaser-modal').addEventListener('click', function(e) {
        if (e.target === this) hideTeaserModal();
    });

    // Add restart button event listener
    document.getElementById('restart-btn').addEventListener('click', function() {
        hideTeaserModal();
        currentLevel = 0;
        localStorage.setItem('flexTokyoLevel', currentLevel);
        loadLevel(currentLevel);
    });

    // Add tab and enter key support for textarea (including Emmet abbreviations)
    dom.cssInput.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            // Try to expand Emmet abbreviation first
            if (expandAbbreviation(this)) {
                return;
            }
            // Otherwise, insert 2 spaces for tab
            const start = this.selectionStart;
            const end = this.selectionEnd;
            this.value = this.value.substring(0, start) + "  " + this.value.substring(end);
            this.selectionStart = this.selectionEnd = start + 2;
            handleInput();
        } else if (e.key === 'Enter') {
            // Try to expand Emmet abbreviation on Enter
            if (expandAbbreviation(this)) {
                e.preventDefault();
            }
        }
    });

    loadLevel(currentLevel);
}

function loadLevel(index) {
    const level = levels[index];
    dom.levelText.textContent = index + 1;
    dom.title.textContent = level.title;
    dom.desc.innerHTML = level.desc.replace(/\n/g, '<br>');
    
    dom.cssInput.value = level.initialCSS || '';
    dom.nextBtn.disabled = true;
    dom.boardWrapper.classList.remove('success-anim');

    // Collapse quick-inputs by default on level transition
    dom.quickInputs.classList.add('collapsed');
    dom.toggleQuickBtn.textContent = '🔮 快捷符文 (展開)';

    // Reset Hint
    dom.hintBox.classList.add('hidden');
    dom.hintBox.innerHTML = '';
    dom.hintBtn.textContent = '💡 導師提示';

    // Reset styles
    dom.playContainer.style.cssText = '';
    dom.targetContainer.style.cssText = '';
    
    if (level.playContainerStyle) {
        Object.assign(dom.targetContainer.style, level.playContainerStyle);
        Object.assign(dom.playContainer.style, level.playContainerStyle);
    }

    // Apply target styles to target container
    Object.assign(dom.targetContainer.style, level.targetCSS);

    // Generate items
    generateItems(level.items, level.emojis);
    dom.cssInput.focus();
    
    handleInput();
}

function generateItems(count, emojis) {
    dom.playContainer.innerHTML = '';
    dom.targetContainer.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const emoji = emojis[i % emojis.length];
        
        const targetItem = document.createElement('div');
        targetItem.className = 'item target-item';
        targetItem.style.animation = `popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${i * 0.05}s forwards`;
        targetItem.style.transform = 'scale(0)'; 
        targetItem.textContent = '目標點';
        dom.targetContainer.appendChild(targetItem);

        const playItem = document.createElement('div');
        playItem.className = 'item play-item';
        playItem.textContent = emoji;
        playItem.style.animation = `popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${i * 0.05}s forwards`;
        dom.playContainer.appendChild(playItem);
    }
}

function handleInput() {
    const code = dom.cssInput.value;
    const level = levels[currentLevel];
    
    dom.playContainer.style.cssText = '';
    if (level.playContainerStyle) {
        Object.assign(dom.playContainer.style, level.playContainerStyle);
    }
    
    const tempDiv = document.createElement('div');
    tempDiv.style.cssText = code;
    
    for (let i = 0; i < tempDiv.style.length; i++) {
        const prop = tempDiv.style[i];
        dom.playContainer.style[prop] = tempDiv.style.getPropertyValue(prop);
    }
    
    checkWin();
}

function checkWin() {
    const level = levels[currentLevel];
    const targetKeys = Object.keys(level.targetCSS);
    let isWin = true;

    const playStyle = window.getComputedStyle(dom.playContainer);
    const targetStyle = window.getComputedStyle(dom.targetContainer);

    for (const key of targetKeys) {
        const kebabKey = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
        
        if (playStyle.getPropertyValue(kebabKey) !== targetStyle.getPropertyValue(kebabKey)) {
            isWin = false;
            break;
        }
    }

    if (isWin) {
        dom.nextBtn.disabled = false;
        dom.boardWrapper.classList.add('success-anim');
        dom.nextBtn.textContent = (currentLevel === levels.length - 1) ? "🎉 恭喜通關並獲得預告！" : "前往下一關 ✨";
    } else {
        dom.nextBtn.disabled = true;
        dom.boardWrapper.classList.remove('success-anim');
        dom.nextBtn.textContent = "前往下一關 ✨";
    }
}

function showTeaserModal() {
    const modal = document.getElementById('teaser-modal');
    modal.classList.add('visible');
}

function hideTeaserModal() {
    const modal = document.getElementById('teaser-modal');
    modal.classList.remove('visible');
}

function nextLevel() {
    if (currentLevel < levels.length - 1) {
        currentLevel++;
        localStorage.setItem('flexTokyoLevel', currentLevel);
        loadLevel(currentLevel);
    } else {
        showTeaserModal();
        currentLevel = 0; // reset
        localStorage.setItem('flexTokyoLevel', currentLevel);
        loadLevel(currentLevel);
    }
}

initGame();
