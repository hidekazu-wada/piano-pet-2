# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Piano Pet 2 (ピアノペット2) is a child-friendly piano practice web application designed for elementary school children. It uses gamification elements (stamps, badges, progress tracking) to make piano practice engaging. The application is built with vanilla HTML, CSS, and JavaScript - no build tools or package managers are required.

## Commands

This is a static web application with no build process:
- **Run locally**: Open `index.html` directly in a browser or use a simple HTTP server (e.g., `python -m http.server`)
- **Deploy**: Upload all files to any static web hosting service (GitHub Pages, Netlify, etc.)
- **No build/lint/test commands** - This is intentional to keep the project simple

## Architecture

### Application Flow
1. **Song Selection** → 2. **Video Preview** → 3. **Practice Counting** → 4. **Completion**
   - Voice messages are generated during practice (first attempt or goal achievement)
   - Messages can be viewed from the notification icon in the header

### Core State Management (js/app.js)
- Single `appState` object manages current song, video, and practice counts
- Progress stored in localStorage with daily auto-reset functionality
- State structure: `{ currentSong, currentVideoIndex, currentVideo, practiceCount, dailyProgress }`

### Data Configuration (js/config.js)
- Songs and practice videos defined in `SONGS` constant
- Each song has 5 practice segments with different target counts
- Video files stored in `videos/song{id}/{filename}.mp4`

### Screen Management
- Single-page application using CSS classes for screen transitions
- Screens: song-selection, video-screen, practice-screen, completion-screen
- Active screen controlled by `.screen.active` CSS class

### Progress Tracking
- localStorage key: `pianoPracticeData`
- Format: `{ lastDate: "YYYY-MM-DD", progress: { date: { songKey: { videoKey: count } } } }`
- Daily reset checks date on app initialization

### Voice Message System (js/messages.js)
- Messages generated on first practice attempt and goal achievement
- Random encouragement messages for regular practice
- Stored in localStorage key: `pianoMessages`
- Auto-deletion of messages older than 7 days
- Message list and detail views in messages.html

## Key Implementation Details

### Adding New Songs
1. Add video files to `videos/song{n}/` directory
2. Update `SONGS` configuration in js/config.js:
```javascript
song3: {
  id: 3,
  name: "新しい曲",
  videos: [
    { id: 1, file: "01.mp4", title: "パート1", targetCount: 5 }
  ]
}
```
3. Add song card HTML in index.html
4. Add corresponding dog icon in images/

### Modifying Practice Counts
Edit target counts in js/config.js for each video segment. The practice screen will automatically update to reflect new targets.

### Styling Customization
- Color palette defined in CSS custom properties can be modified in style.css
- Responsive breakpoints: 1024px (iPad), 768px (tablet)
- All animations use CSS keyframes (stampAppear, badgeAppear)

## Important Notes

- **Japanese Language**: All user-facing text is in Japanese (hiragana for children)
- **No External Dependencies**: Intentionally kept simple with no npm packages
- **Browser Compatibility**: Targets modern browsers with ES6+ support
- **Touch Optimized**: Designed primarily for iPad use with large touch targets