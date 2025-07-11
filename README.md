# ピアノれんしゅう♪

子供向けピアノ練習Webアプリケーション

## 概要

小学3年生の女の子が楽しくピアノ練習できるWebアプリです。かわいい犬のキャラクターと一緒に、動画を見ながら練習を進めることができます。

## 機能

- 2曲分の練習コンテンツ
- 動画視聴後の練習回数カウント
- 進捗の自動保存（ローカルストレージ使用）
- スタンプとバッジによる報酬システム
- 日替わり自動リセット機能

## セットアップ

1. プロジェクトをWebサーバーに配置
2. `videos/song1/` と `videos/song2/` フォルダに練習用動画（mp4形式）を配置
3. `js/config.js` で動画ファイル名と目標練習回数を設定

## 動画ファイルの準備

以下の構成で動画ファイルを配置してください：

```
videos/
├── song1/
│   ├── video1.mp4
│   ├── video2.mp4
│   ├── video3.mp4
│   ├── video4.mp4
│   ├── video5.mp4
│   └── video6.mp4
└── song2/
    ├── video1.mp4
    ├── video2.mp4
    ├── video3.mp4
    ├── video4.mp4
    ├── video5.mp4
    ├── video6.mp4
    └── video7.mp4
```

## 設定の変更

`js/config.js` ファイルを編集して、以下の設定を変更できます：

- 練習曲の名前
- 各練習項目のタイトル
- 目標練習回数

## 対応環境

- iPad（タブレット最適化）
- モダンブラウザ（Chrome, Safari, Firefox, Edge）

## 使用技術

- HTML5
- CSS3
- JavaScript（バニラJS）
- SVG画像

## ホスティング

GitHub PagesやNetlifyなどの静的サイトホスティングサービスで簡単に公開できます。