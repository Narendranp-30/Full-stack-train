import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const videoIds = [
    'W0iQguIT_yE', 'vRRm9BScmJI', 'zf0FyPznBvk',
    'h359LRmMZMU', 'PjtBb3pbyOo', 't1sBRGPEcLc'
  ];

  const [position, setPosition] = useState(1);

  const nextSlide = () => {
    setPosition((prevPosition) => (prevPosition % videoIds.length) + 1);
  };

  const prevSlide = () => {
    setPosition((prevPosition) => (prevPosition - 2 + videoIds.length) % videoIds.length + 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-wrapper">
      <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
      <main id="carousel" style={{ '--position': position }}>
        {videoIds.map((id, index) => (
          <div className="item" style={{ '--offset': index + 1 }} key={index}>
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </main>
      <button className="carousel-btn next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Carousel;
