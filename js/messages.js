// Voice message configuration
const voiceConfig = {
  randomMessages: [
    { 
      audio: "voice/cheer01.mp3", 
      text: "ひなのちゃん、目標達成おめでとう！僕、しっぽがちぎれそうなくらい振っちゃったよ。ひなのちゃんのピアノを聞いてると、お散歩で見つけたきれいなお花畑を思い出すんだ。今度一緒にお散歩行こうね！" 
    },
    { 
      audio: "voice/cheer02.mp3", 
      text: "やったね、ひなのちゃん！今日の練習、本当にすごかったよ。実は僕、ひなのちゃんが弾いてる間ずっと音楽に合わせて踊ってたんだ。おかげでおなかがぺこぺこだよ〜。ごほうびにおやつもらえるかな？" 
    },
    { 
      audio: "voice/cheer03.mp3", 
      text: "ひなのちゃん、すごいすごい！僕のお気に入りの骨を埋めた場所を思い出したくらい嬉しいよ。ピアノの音がキラキラしてて、まるで星空みたい。今夜は窓から星を見ながら、ひなのちゃんの演奏を思い出すね。" 
    },
    { 
      audio: "voice/cheer04.mp3", 
      text: "目標クリアおめでとう、ひなのちゃん！僕ね、昨日夢でひなのちゃんがコンサートしてるのを見たんだ。たくさんの人が拍手してて、僕も前足でパチパチしたよ。きっと夢が現実になる日が来るよ！" 
    },
    { 
      audio: "voice/cheer05.mp3", 
      text: "ひなのちゃん、本当によくがんばったね！実は僕、雨の日が苦手なんだけど、ひなのちゃんのピアノを聞いてると雨音も音楽に聞こえてくるんだ。不思議だよね。これからもずーっと応援してるよ！" 
    },
    { 
      audio: "voice/cheer06.mp3", 
      text: "完璧だよ、ひなのちゃん！僕の大好きなボール遊びと同じくらい、ひなのちゃんのピアノが大好き。リズムがぴったりで、僕の心臓もドキドキ合わせて鳴ってるみたい。もっともっと聞きたいな！" 
    },
    { 
      audio: "voice/cheer07.mp3", 
      text: "達成おめでとう！ひなのちゃんの演奏を聞いてたら、僕が子犬のときにお母さんに歌ってもらった子守歌を思い出したよ。あったかくて優しい気持ちになったんだ。ひなのちゃんは魔法使いみたいだね！" 
    },
    { 
      audio: "voice/cheer08.mp3", 
      text: "ひなのちゃん、目標達成だね！指の動きがとっても速くて、僕のしっぽより速いかも！実は僕、かけっこが得意なんだけど、ひなのちゃんの指には負けちゃうな。一緒に成長できて嬉しいよ！" 
    },
    { 
      audio: "voice/cheer09.mp3", 
      text: "クリアおめでとう、ひなのちゃん！メロディーがきれいすぎて、僕の耳がぴくぴく動いちゃった。最近覚えた「おすわり」より、ひなのちゃんのピアノの方がずっとすごいよ。僕も何か特技を見つけなきゃ！" 
    },
    { 
      audio: "voice/cheer10.mp3", 
      text: "やり遂げたね、ひなのちゃん！僕、感動で目がうるうるしちゃった。ひなのちゃんみたいながんばり屋さんの友達がいて、僕は世界一幸せなワンちゃんだよ。今日はぐっすり眠れそう！おやすみなさい。" 
    },
    { 
      audio: "voice/cheer11.mp3", 
      text: "ひなのちゃん、素晴らしい演奏だったよ！僕ね、今朝お庭で四つ葉のクローバーを見つけたんだ。それはきっと、ひなのちゃんが今日も頑張れるようにっていう幸運のしるしだったんだね。大切にとっておくよ！" 
    },
    { 
      audio: "voice/cheer12.mp3", 
      text: "目標達成おめでとう！ひなのちゃんの努力を見てたら、僕も新しいことに挑戦したくなったよ。明日から「待て」の練習をがんばるんだ。ひなのちゃんみたいに毎日コツコツやれば、きっとできるよね！" 
    },
    { 
      audio: "voice/cheer13.mp3", 
      text: "すごいよ、ひなのちゃん！今日のピアノ、鳥さんたちも窓の外で聞いてたみたい。みんなでコンサートみたいだったね。僕のお友達のポチくんにも、ひなのちゃんのこと自慢しちゃおうかな！" 
    },
    { 
      audio: "voice/cheer14.mp3", 
      text: "ひなのちゃん、やったね！僕、嬉しくて玄関まで走って行って、また戻ってきちゃった。ピアノの音が家中に響いて、まるでお家全体が楽器になったみたい。魔法のお家に住んでるみたいで楽しいよ！" 
    },
    { 
      audio: "voice/cheer15.mp3", 
      text: "目標クリアおめでとう！ひなのちゃんの指、まるで蝶々が踊ってるみたいだったよ。僕も蝶々を追いかけるのが好きなんだけど、ひなのちゃんの指の方がずっときれいな動きをしてる。見とれちゃったよ！" 
    },
    { 
      audio: "voice/cheer16.mp3", 
      text: "ひなのちゃん、本当にがんばったね！実は僕、ひなのちゃんが練習してる間、そーっと近くで応援してたんだ。時々クンクン鳴いちゃったけど、気づかなかったでしょ？これからも隣で見守ってるからね！" 
    },
    { 
      audio: "voice/cheer17.mp3", 
      text: "達成おめでとう、ひなのちゃん！僕の宝物のぬいぐるみも、ひなのちゃんの演奏を聞いて喜んでるみたい。今度、僕の宝物コレクション見せてあげるね。ひなのちゃんとの思い出も大切な宝物だよ！" 
    },
    { 
      audio: "voice/cheer18.mp3", 
      text: "すばらしいよ、ひなのちゃん！今日の演奏を聞いてたら、虹を初めて見たときのことを思い出したんだ。きれいで不思議で、ずっと見ていたくなる気持ち。ひなのちゃんのピアノもそんな感じだよ！" 
    },
    { 
      audio: "voice/cheer19.mp3", 
      text: "ひなのちゃん、目標達成だね！僕ね、お昼寝の夢でひなのちゃんと一緒に雲の上でピアノを弾いてたんだ。ふわふわの雲がクッションになって、とっても気持ちよかったよ。現実でも一緒に音楽できたらいいな！" 
    },
    { 
      audio: "voice/cheer20.mp3", 
      text: "やり遂げたね、ひなのちゃん！僕、しっぽを振りすぎて目が回っちゃった。でも嬉しいからまだまだ振っちゃう！ひなのちゃんの笑顔を見ると、おやつをもらったときと同じくらい幸せな気持ちになるよ！" 
    },
    { 
      audio: "voice/cheer21.mp3", 
      text: "ひなのちゃん、素敵な演奏だったよ！僕の好きな公園の噴水の音みたいに、きらきらして涼しげな音色だった。今度一緒に公園に行って、噴水の音とピアノの音、どっちがきれいか比べっこしようね！" 
    },
    { 
      audio: "voice/cheer22.mp3", 
      text: "目標クリアおめでとう！ひなのちゃんが弾いてる姿、とってもかっこいいよ。僕もかっこよく「お手」ができるように練習中なんだ。ひなのちゃんみたいに毎日がんばれば、きっと上手になれるよね！" 
    },
    { 
      audio: "voice/cheer23.mp3", 
      text: "すごいぞ、ひなのちゃん！音符たちが楽しそうに踊ってるみたいだったよ。僕も音符になって、ひなのちゃんの楽譜の中で遊びたいな。きっと楽しい冒険ができそう！想像するだけでワクワクしちゃう！" 
    },
    { 
      audio: "voice/cheer24.mp3", 
      text: "ひなのちゃん、達成おめでとう！僕ね、最近お風呂が少し好きになったんだ。ひなのちゃんが頑張ってるのを見て、苦手なことも挑戦してみようって思ったから。ひなのちゃんのおかげだよ、ありがとう！" 
    },
    { 
      audio: "voice/cheer25.mp3", 
      text: "よくがんばったね、ひなのちゃん！ピアノの音が僕の心にすーっと入ってきて、あったかい毛布に包まれてるみたい。寒い日でも、ひなのちゃんの音楽があれば、心はぽかぽかだよ。また聞かせてね！" 
    },
    { 
      audio: "voice/cheer26.mp3", 
      text: "目標達成だね、ひなのちゃん！僕の大好きなおもちゃのボールと同じくらい、ひなのちゃんのピアノが大切になったよ。音楽って不思議だね、目に見えないのに心に残るんだもん。宝物がまた増えたよ！" 
    },
    { 
      audio: "voice/cheer27.mp3", 
      text: "すばらしい演奏だったよ、ひなのちゃん！僕ね、雲の形を見るのが好きなんだけど、今日は音符の形の雲を見つけたんだ。きっとひなのちゃんへの応援メッセージだったんだね。空もひなのちゃんを見守ってるよ！" 
    },
    { 
      audio: "voice/cheer28.mp3", 
      text: "ひなのちゃん、やったね！練習の成果がちゃんと出てるよ。僕も昨日、初めて自分でドアを開けられたんだ！ひなのちゃんみたいに練習したおかげだよ。一緒に成長できるって素敵だね！" 
    },
    { 
      audio: "voice/cheer29.mp3", 
      text: "クリアおめでとう、ひなのちゃん！僕、ひなのちゃんの演奏を聞きながら、大好きなクッキーの夢を見ちゃった。音楽とおやつの夢のコラボレーション！最高の組み合わせだよ。また素敵な夢を見せてね！" 
    },
    { 
      audio: "voice/cheer30.mp3", 
      text: "ひなのちゃん、本当にすごいよ！僕の尻尾、今日は特別に3回転半も回っちゃった。新記録だよ！ひなのちゃんのがんばりを見てると、僕も元気いっぱいになるんだ。明日もいっしょにがんばろうね！" 
    }
  ]
};

// Message management class
class MessageManager {
  constructor() {
    this.storageKey = 'pianoMessages';
    this.messages = this.loadMessages();
    this.cleanOldMessages();
  }

  // Load messages from localStorage
  loadMessages() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  // Save messages to localStorage
  saveMessages() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.messages));
    this.updateNotificationBadge();
  }

  // Generate appropriate message based on practice status
  generateMessage(practiceInfo) {
    // Check if target is achieved
    const isAchieved = practiceInfo.currentCount >= practiceInfo.targetCount;
    
    // Only generate message when target is achieved
    if (!isAchieved) {
      return null;
    }
    
    // Select random message
    const randomIndex = Math.floor(Math.random() * voiceConfig.randomMessages.length);
    const messageData = voiceConfig.randomMessages[randomIndex];
    
    // Create message object
    const message = {
      id: Date.now(),
      date: new Date().toLocaleDateString('ja-JP'),
      time: new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' }),
      text: messageData.text,
      audio: messageData.audio,
      read: false,
      practiceInfo: {
        songId: practiceInfo.songId,
        songName: practiceInfo.songName,
        videoId: practiceInfo.videoId,
        videoTitle: practiceInfo.videoTitle,
        count: practiceInfo.currentCount,
        targetCount: practiceInfo.targetCount
      }
    };
    
    // Add to messages array
    this.messages.unshift(message); // Add to beginning for newest first
    this.saveMessages();
    
    return message;
  }

  // Mark message as read
  markAsRead(messageId) {
    const message = this.messages.find(m => m.id === messageId);
    if (message && !message.read) {
      message.read = true;
      this.saveMessages();
    }
  }

  // Get unread message count
  getUnreadCount() {
    return this.messages.filter(m => !m.read).length;
  }

  // Update notification badge
  updateNotificationBadge() {
    const badge = document.getElementById('notification-badge');
    if (badge) {
      const unreadCount = this.getUnreadCount();
      badge.style.display = unreadCount > 0 ? 'block' : 'none';
      badge.textContent = unreadCount > 99 ? '99+' : unreadCount;
    }
  }

  // Clean messages older than 7 days
  cleanOldMessages() {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const initialCount = this.messages.length;
    this.messages = this.messages.filter(message => {
      const messageDate = new Date(message.date);
      return messageDate >= sevenDaysAgo;
    });
    
    if (this.messages.length < initialCount) {
      this.saveMessages();
    }
  }

  // Get all messages
  getAllMessages() {
    return this.messages;
  }

  // Get single message by ID
  getMessage(messageId) {
    return this.messages.find(m => m.id === messageId);
  }

  // Clear all messages
  clearAllMessages() {
    this.messages = [];
    this.saveMessages();
  }
}

// Initialize message manager
const messageManager = new MessageManager();

// Function to play voice message
function playVoiceMessage(audioPath) {
  const audio = new Audio(audioPath);
  audio.play().catch(error => {
    console.log('Audio playback failed:', error);
    // For development, we'll just log the error since audio files don't exist yet
  });
}

// Function to navigate to messages page
function goToMessages() {
  // 現在の練習状態を保存してからメッセージ画面へ遷移
  if (typeof savePracticeSession === 'function') {
    savePracticeSession();
  }
  window.location.href = 'messages.html';
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { messageManager, playVoiceMessage };
}