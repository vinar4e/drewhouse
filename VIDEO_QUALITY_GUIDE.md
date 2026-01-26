# Video Quality Guide

## Why YouTube Videos Look Lower Quality

YouTube compresses videos significantly, and when embedded as background videos, the quality can appear lower than the original. This is especially noticeable on large screens.

## Solution: Use Self-Hosted Video (Recommended for Best Quality)

For the **best possible quality**, use a self-hosted video file instead of YouTube.

### Steps to Use Self-Hosted Video:

1. **Export your video:**
   - Format: MP4 (H.264 codec)
   - Resolution: 1080p (1920x1080) or 4K (3840x2160) if you have it
   - Keep file size reasonable (aim for 10-50MB for 1080p, 50-150MB for 4K)
   - You can compress using tools like HandBrake or Adobe Media Encoder

2. **Create videos folder:**
   ```
   public/
     videos/
       hero.mp4
   ```

3. **Update Hero component:**
   
   In `app/page.tsx`, change:
   ```jsx
   <Hero />
   ```
   
   To:
   ```jsx
   <Hero 
     useSelfHosted={true}
     videoSrc="/videos/hero.mp4"
   />
   ```

### Video Optimization Tips:

- **Resolution:** 1080p is usually sufficient. 4K is better but larger files.
- **Bitrate:** For 1080p, use 5-10 Mbps. For 4K, use 15-25 Mbps.
- **Codec:** H.264 (most compatible) or H.265/HEVC (smaller files, newer browsers)
- **Frame Rate:** Match your source (usually 24fps, 30fps, or 60fps)
- **Audio:** Can be removed or very low bitrate since it's muted anyway

### Tools for Video Compression:

- **HandBrake** (Free): https://handbrake.fr/
- **Adobe Media Encoder** (Paid, part of Creative Cloud)
- **FFmpeg** (Command line, free): `ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -preset medium output.mp4`

### Current Setup (YouTube):

If you want to stick with YouTube, the current setup is optimized as much as possible. The quality limitations are due to:
- YouTube's compression algorithm
- Iframe embedding limitations
- Browser rendering of scaled iframes

For a professional portfolio, **self-hosted video is strongly recommended** for the best visual impact.
