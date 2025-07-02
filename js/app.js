// アプリケーションの状態管理
const appState = {
    currentSong: null,
    currentVideoIndex: 0,
    currentVideo: null,
    practiceCount: 0,
    dailyProgress: {}
};

// DOM要素の取得
const elements = {
    screens: {
        songSelection: document.getElementById('song-selection'),
        video: document.getElementById('video-screen'),
        practice: document.getElementById('practice-screen'),
        completion: document.getElementById('completion-screen')
    },
    songCards: document.querySelectorAll('.song-card'),
    video: document.getElementById('practice-video'),
    practiceTitle: document.getElementById('practice-title'),
    currentPracticeTitle: document.getElementById('current-practice-title'),
    startPracticeBtn: document.getElementById('start-practice'),
    countBtn: document.getElementById('count-btn'),
    skipBtn: document.getElementById('skip-btn'),
    completeBtn: document.getElementById('complete-btn'),
    currentCount: document.getElementById('current-count'),
    targetCount: document.getElementById('target-count'),
    stampContainer: document.getElementById('stamp-container'),
    backToSongsBtn: document.getElementById('back-to-songs'),
    resetBtn: document.getElementById('reset-btn')
};

// 初期化
function init() {
    loadProgress();
    checkAndResetDaily();
    updateProgressBars();
    
    // 通知バッジを更新
    messageManager.updateNotificationBadge();
    
    // セッションから練習状態を復元
    restorePracticeSession();
    
    // イベントリスナーの設定
    elements.songCards.forEach(card => {
        card.addEventListener('click', () => selectSong(parseInt(card.dataset.song)));
    });
    
    elements.startPracticeBtn.addEventListener('click', startPractice);
    elements.countBtn.addEventListener('click', incrementCount);
    elements.skipBtn.addEventListener('click', nextVideo);
    elements.completeBtn.addEventListener('click', nextVideo);
    elements.backToSongsBtn.addEventListener('click', backToSongSelection);
    elements.resetBtn.addEventListener('click', resetDailyProgress);
}

// 画面切り替え
function showScreen(screenName) {
    Object.values(elements.screens).forEach(screen => {
        screen.classList.remove('active');
    });
    elements.screens[screenName].classList.add('active');
}

// 曲選択
function selectSong(songId) {
    const song = practiceConfig.songs.find(s => s.id === songId);
    if (!song) return;
    
    appState.currentSong = song;
    appState.currentVideoIndex = 0;
    showVideoScreen();
}

// 動画画面表示
function showVideoScreen() {
    const video = appState.currentSong.videos[appState.currentVideoIndex];
    appState.currentVideo = video;
    
    elements.practiceTitle.textContent = video.title;
    elements.video.src = `videos/song${appState.currentSong.id}/${video.filename}`;
    
    showScreen('video');
}

// 練習開始
function startPractice() {
    // 現在の練習回数を取得（初回練習かどうかの判定用）
    appState.practiceCount = getCurrentPracticeCount();
    elements.currentPracticeTitle.textContent = appState.currentVideo.title;
    elements.currentCount.textContent = appState.practiceCount;
    elements.targetCount.textContent = appState.currentVideo.targetCount;
    elements.stampContainer.innerHTML = '';
    
    // 既に目標達成している場合は完了ボタンを表示
    if (appState.practiceCount >= appState.currentVideo.targetCount) {
        elements.completeBtn.style.display = 'inline-block';
    } else {
        elements.completeBtn.style.display = 'none';
    }
    
    // 既存のスタンプを表示
    for (let i = 0; i < appState.practiceCount; i++) {
        addStamp();
    }
    
    showScreen('practice');
}

// カウントアップ
function incrementCount() {
    const previousCount = appState.practiceCount;
    appState.practiceCount++;
    elements.currentCount.textContent = appState.practiceCount;
    
    // スタンプ追加
    addStamp();
    
    // 目標達成チェック
    if (appState.practiceCount >= appState.currentVideo.targetCount) {
        elements.completeBtn.style.display = 'inline-block';
        // 達成音を鳴らす（実装する場合）
        playCompletionSound();
    }
    
    // 進捗を保存
    saveVideoProgress();
    
    // ボイスメッセージ生成（練習時）
    generateVoiceMessageIfNeeded(previousCount);
}

// スタンプ追加
function addStamp() {
    const stamp = document.createElement('img');
    stamp.src = 'images/stamp.svg';
    stamp.alt = 'スタンプ';
    stamp.className = 'stamp';
    elements.stampContainer.appendChild(stamp);
}

// 次の動画へ
function nextVideo() {
    appState.currentVideoIndex++;
    
    if (appState.currentVideoIndex < appState.currentSong.videos.length) {
        showVideoScreen();
    } else {
        // 曲完了
        showCompletionScreen();
    }
}

// 完了画面表示
function showCompletionScreen() {
    showScreen('completion');
    // バッジアニメーション
    setTimeout(() => {
        playCompletionSound();
    }, 500);
}

// 曲選択画面に戻る
function backToSongSelection() {
    appState.currentSong = null;
    appState.currentVideoIndex = 0;
    appState.practiceCount = 0;
    updateProgressBars();
    showScreen('songSelection');
}

// ローカルストレージ関連
function getToday() {
    return new Date().toDateString();
}

function loadProgress() {
    const saved = localStorage.getItem('pianoProgress');
    if (saved) {
        const data = JSON.parse(saved);
        appState.dailyProgress = data.progress || {};
    }
}

function saveVideoProgress() {
    const today = getToday();
    if (!appState.dailyProgress[today]) {
        appState.dailyProgress[today] = {};
    }
    
    const songKey = `song${appState.currentSong.id}`;
    if (!appState.dailyProgress[today][songKey]) {
        appState.dailyProgress[today][songKey] = {};
    }
    
    const videoKey = `video${appState.currentVideo.id}`;
    appState.dailyProgress[today][songKey][videoKey] = appState.practiceCount;
    
    localStorage.setItem('pianoProgress', JSON.stringify({
        lastDate: today,
        progress: appState.dailyProgress
    }));
}

function checkAndResetDaily() {
    const saved = localStorage.getItem('pianoProgress');
    if (saved) {
        const data = JSON.parse(saved);
        if (data.lastDate !== getToday()) {
            // 日付が変わったのでリセット
            appState.dailyProgress = {};
            appState.dailyProgress[getToday()] = {};
            saveProgress();
        }
    }
}

function saveProgress() {
    localStorage.setItem('pianoProgress', JSON.stringify({
        lastDate: getToday(),
        progress: appState.dailyProgress
    }));
}

function resetDailyProgress() {
    if (confirm('きょうのきろくをぜんぶけしますか？')) {
        appState.dailyProgress = {};
        appState.dailyProgress[getToday()] = {};
        saveProgress();
        updateProgressBars();
        
        // メッセージも全て削除
        messageManager.clearAllMessages();
        
        alert('きろくをけしました！');
    }
}

// 進捗バー更新
function updateProgressBars() {
    const today = getToday();
    const todayProgress = appState.dailyProgress[today] || {};
    
    practiceConfig.songs.forEach(song => {
        const songProgress = todayProgress[`song${song.id}`] || {};
        const totalVideos = song.videos.length;
        let completedVideos = 0;
        
        song.videos.forEach(video => {
            const count = songProgress[`video${video.id}`] || 0;
            if (count >= video.targetCount) {
                completedVideos++;
            }
        });
        
        const progressPercent = (completedVideos / totalVideos) * 100;
        const progressBar = document.getElementById(`song${song.id}-progress`);
        if (progressBar) {
            progressBar.style.width = `${progressPercent}%`;
        }
    });
}

// 完了音（実装例）
function playCompletionSound() {
    // 音声ファイルがある場合はここで再生
    // const audio = new Audio('sounds/completion.mp3');
    // audio.play();
}

// ボイスメッセージ生成の判定と実行
function generateVoiceMessageIfNeeded(previousCount) {
    // メッセージ生成のための情報を準備
    const practiceInfo = {
        songId: appState.currentSong.id,
        songName: appState.currentSong.name,
        videoId: appState.currentVideo.id,
        videoTitle: appState.currentVideo.title,
        previousCount: previousCount,
        currentCount: appState.practiceCount,
        targetCount: appState.currentVideo.targetCount
    };
    
    // 目標達成時のみメッセージを生成
    if (appState.practiceCount === appState.currentVideo.targetCount) {
        messageManager.generateMessage(practiceInfo);
    }
}

// 現在の練習回数を取得
function getCurrentPracticeCount() {
    const today = getToday();
    const todayProgress = appState.dailyProgress[today] || {};
    const songKey = `song${appState.currentSong.id}`;
    const songProgress = todayProgress[songKey] || {};
    const videoKey = `video${appState.currentVideo.id}`;
    return songProgress[videoKey] || 0;
}

// 練習セッションを保存
function savePracticeSession() {
    if (appState.currentSong) {
        const sessionData = {
            currentSongId: appState.currentSong.id,
            currentVideoIndex: appState.currentVideoIndex,
            activeScreen: Object.keys(elements.screens).find(key => 
                elements.screens[key].classList.contains('active')
            )
        };
        sessionStorage.setItem('practiceSession', JSON.stringify(sessionData));
    }
}

// 練習セッションを復元
function restorePracticeSession() {
    const sessionData = sessionStorage.getItem('practiceSession');
    if (sessionData) {
        const { currentSongId, currentVideoIndex, activeScreen } = JSON.parse(sessionData);
        
        // 曲データを復元
        const song = practiceConfig.songs.find(s => s.id === currentSongId);
        if (song) {
            appState.currentSong = song;
            appState.currentVideoIndex = currentVideoIndex;
            
            // 画面に応じて適切な表示を行う
            if (activeScreen === 'practice') {
                // 練習画面を復元
                appState.currentVideo = song.videos[currentVideoIndex];
                startPractice();
            } else if (activeScreen === 'video') {
                // 動画画面を復元
                showVideoScreen();
            } else if (activeScreen === 'completion') {
                // 完了画面を復元
                showScreen('completion');
            }
            // songSelectionの場合は何もしない（デフォルト）
        }
        
        // セッションデータをクリア
        sessionStorage.removeItem('practiceSession');
    }
}

// アプリケーション開始
document.addEventListener('DOMContentLoaded', init);