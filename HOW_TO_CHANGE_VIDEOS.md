# How to Change Video Links

## Quick Guide

You only need the **YouTube Video ID**, not the full URL!

### Step 1: Get Your YouTube Video ID

When you have a YouTube video URL, the video ID is the part after `v=`:

**Examples:**
- `https://www.youtube.com/watch?v=ABC123xyz` → Video ID is: `ABC123xyz`
- `https://youtu.be/ABC123xyz` → Video ID is: `ABC123xyz`
- `https://www.youtube.com/embed/ABC123xyz` → Video ID is: `ABC123xyz`

### Step 2: Where to Change Videos

#### 1. Hero Section (Main Background Video)
**File:** `components/Hero.tsx`
- **Line 12:** Change `videoId = 'dQw4w9WgXcQ'` to your video ID

#### 2. Project Grid (Project Cards)
**File:** `components/ProjectGrid.tsx`
- For each project, change **TWO things**:
  - `videoId: 'dQw4w9WgXcQ'` → Your video ID
  - `thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'` → Replace `dQw4w9WgXcQ` with your video ID

**Example:**
```javascript
{
  id: '1',
  title: 'My Awesome Project',
  client: 'Client Name',
  role: 'Editor',
  videoId: 'ABC123xyz', // 👈 Your video ID here
  thumbnail: `https://img.youtube.com/vi/ABC123xyz/maxresdefault.jpg`, // 👈 Same ID here
}
```

#### 3. Project Detail Pages
**File:** `app/projects/[id]/page.tsx`
- In the `projectData` object, change `videoId: 'dQw4w9WgXcQ'` to your video ID for each project

### Step 3: Make Sure Videos Are Public

Your YouTube videos need to be:
- **Public** or **Unlisted** (not Private)
- Embedding must be enabled (this is usually on by default)

### Example: Complete Project Entry

```javascript
{
  id: '1',
  title: 'Nike Commercial',
  client: 'Nike',
  role: 'Editor & Colorist',
  videoId: 'jNQXAC9IVRw', // Your actual video ID
  thumbnail: `https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg`, // Same ID
  gridSpan: 'col-span-2',
}
```

That's it! Just replace the video IDs and you're done.
