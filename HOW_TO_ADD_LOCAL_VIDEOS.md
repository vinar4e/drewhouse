# How to Add Local Videos

## Step 1: Prepare Your Videos

1. **Export your videos as MP4:**
   - Format: MP4 (H.264 codec)
   - Resolution: 1080p (1920x1080) recommended
   - Keep file sizes reasonable (10-50MB per video)
   - You can compress using HandBrake, Adobe Media Encoder, or FFmpeg

2. **Create folders:**
   ```
   public/
     videos/
       project1.mp4
       project2.mp4
       project3.mp4
     images/
       thumbnail1.jpg  (optional - for preview images)
       thumbnail2.jpg
   ```

## Step 2: Update Hero Component

In `components/Hero.tsx`, update the `videos` array:

```tsx
videos = [
  '/videos/video1.mp4',
  '/videos/video2.mp4', 
  '/videos/video3.mp4'
]
```

## Step 3: Update Project Grid

In `components/ProjectGrid.tsx`, update each project:

```tsx
{
  id: '1',
  title: 'Commercial Campaign',
  client: 'Nike',
  role: 'Editor & Colorist',
  videoSrc: '/videos/project1.mp4', // 👈 Your local video file
  thumbnail: '/images/thumbnail1.jpg', // 👈 Optional thumbnail
}
```

## Features

- **Hover to Play**: Videos play automatically when you hover over them
- **Clean Design**: No YouTube branding - just your videos
- **Smooth Animations**: Beautiful transitions and effects
- **High Quality**: Full control over video quality and compression
- **Professional Look**: Custom play button overlay

## Video Optimization Tips

- **Codec**: H.264 (most compatible)
- **Bitrate**: 5-10 Mbps for 1080p
- **Frame Rate**: Match your source (24/30/60fps)
- **Audio**: Can be removed or very low bitrate (videos are muted anyway)

## Tools for Compression

- **HandBrake** (Free): https://handbrake.fr/
- **Adobe Media Encoder** (Paid)
- **FFmpeg** (Command line): 
  ```bash
  ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -preset medium output.mp4
  ```

Your videos will now look clean, professional, and aesthetic without any YouTube branding!
