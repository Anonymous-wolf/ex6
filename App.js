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
