# Images Folder

Upload your project card images here. The images will be accessible at `/images/filename.jpg`.

## Usage:
1. Upload your image files directly to this folder
2. Update the image paths in `components/ProjectShowcase.tsx` in the `projects` array
3. Supported formats: JPG, PNG, WebP, etc.

## Current Image Paths:
- `/images/project1.jpg` - First project card
- `/images/project2.jpg` - Second project card  
- `/images/project3.jpg` - Third project card

## To Change Images:
Edit the `projects` array in `components/ProjectShowcase.tsx` and update the `image` property for each project.

Example:
```javascript
{
  id: '1',
  title: 'Gilga Farm',
  subtitle: 'for Moncler',
  image: '/images/your-image-name.jpg', // Change this path
  video: '/videos/video1.mp4',
}
```
