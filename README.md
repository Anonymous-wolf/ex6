Here’s how to create a **React application with a dynamic image slider component** using **configurable props** such as:

* `images`: array of image URLs
* `interval`: time between slides (ms)
* `showControls`: show/hide prev/next buttons
* `width` and `height`: configurable slider dimensions

---

## 📦 Step 1: Set Up React App

```bash
npx create-react-app image-slider-app
cd image-slider-app
npm start
```

---

## 🧩 Step 2: Create `ImageSlider` Component

Create a folder and file:

```bash
mkdir src/components
touch src/components/ImageSlider.js
```

### ✨ `ImageSlider.js`

```jsx
import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval = 3000, showControls = true, width = '600px', height = '400px' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden',
        margin: 'auto',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
      }}
    >
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {showControls && (
        <>
          <button
            onClick={goToPrevious}
            style={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              padding: '10px',
              cursor: 'pointer',
              borderRadius: '50%',
            }}
          >
            ‹
          </button>
          <button
            onClick={goToNext}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              padding: '10px',
              cursor: 'pointer',
              borderRadius: '50%',
            }}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
```

---

## 🧪 Step 3: Use `ImageSlider` in `App.js`

Replace `src/App.js` with:

```jsx
import React from 'react';
import ImageSlider from './components/ImageSlider';

const App = () => {
  const sampleImages = [
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1016/600/400',
    'https://picsum.photos/id/1018/600/400',
    'https://picsum.photos/id/1020/600/400',
  ];

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>🖼️ React Image Slider</h1>
      <ImageSlider
        images={sampleImages}
        interval={3000}
        showControls={true}
        width="700px"
        height="400px"
      />
    </div>
  );
};

export default App;
```

---

## 🎨 Output

A clean image slider that:

* Switches slides every 3 seconds
* Has previous/next controls
* Is responsive to size settings via props

---

Would you like to add **thumbnail previews**, **dots navigation**, or make it **swipeable on mobile**?
