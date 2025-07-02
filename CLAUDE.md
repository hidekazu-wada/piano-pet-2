# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Piano Pet 2 (ピアノペット2) is a child-friendly piano practice web application for elementary school children (specifically 3rd grade girls). Features gamification elements (stamps, badges, voice messages) to make piano practice engaging. Built with vanilla HTML, CSS, and JavaScript - no build tools or package managers required.

## Commands

Static web application with no build process:
- **Run locally**: Open `index.html` directly in a browser or use `python -m http.server`
- **Deploy**: GitHub Actions workflow configured for GitHub Pages deployment (see `.github/workflows/deploy.yml`)
- **No build/lint/test commands** - Intentionally simple

## Architecture

### Application Flow
1. **Song Selection** → 2. **Video Preview** → 3. **Practice Counting** → 4. **Completion**
   - Voice messages delivered when practice goals are achieved
   - Messages accessible via notification icon (📮) in header

### Core Components

**State Management (js/app.js)**
- `appState` object: `{ currentSong, currentVideoIndex, currentVideo, practiceCount, dailyProgress }`
- Session persistence using `sessionStorage` for navigation continuity
- Progress persistence using `localStorage` with daily auto-reset

**Data Configuration (js/config.js)**
- 2 songs configured: "ミュゼット" and "老いぼれ猫の夢"
- Each song has 5 practice segments with varying target counts (1-10)
- Video files: `videos/song{id}/{01-05}.mp4`

**Voice Message System (js/messages.js)**
- 30 personalized messages from dog character ("僕") to player ("ひなのちゃん")
- Messages triggered only on goal achievement
- Stored in localStorage: `pianoMessages`
- Auto-cleanup after 7 days
- Audio files: `voice/cheer{01-30}.mp3`

### Storage Keys
- `pianoPracticeData`: Daily practice progress
- `pianoMessages`: Voice message history
- `practiceSession`: Temporary session state for navigation

### Screen Navigation
- Single-page app using `.screen` and `.screen.active` CSS classes
- Screens: song-selection, video-screen, practice-screen, completion-screen
- Separate messages.html for message viewing

### Reset Functionality
"今日の記録を消す" button clears both:
- Practice progress for current day
- All voice messages

## File Structure Highlights

```
├── docs/              # GitHub Pages deployment (if using /docs source)
├── voice/             # Voice message MP3 files (cheer01-30.mp3)
├── videos/            # Practice videos organized by song
│   ├── song1/        # 5 videos per song
│   └── song2/
└── .github/workflows/deploy.yml  # GitHub Actions deployment
```

## Implementation Notes

- **Player Name**: Hardcoded as "ひなのちゃん" throughout messages
- **Responsive Design**: Breakpoints at 1024px (iPad) and 768px (mobile)
- **Notification Badge**: Updates automatically when new messages arrive
- **Daily Reset**: Checks date on every app initialization
- **Session Recovery**: Returns to previous screen after viewing messages