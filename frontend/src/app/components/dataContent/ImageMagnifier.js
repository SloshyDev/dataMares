'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function ImageMagnifier({ src, zoomSrc, alt, magnifierSize = 200, zoomLevel = 2.5 }) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [currentZoom, setCurrentZoom] = useState(zoomLevel);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // Manejar el scroll para zoom in/out y soporte touch
  useEffect(() => {
    const handleWheel = (e) => {
      if (showMagnifier) {
        e.preventDefault();
        e.stopPropagation();
        const delta = e.deltaY > 0 ? -0.2 : 0.2;
        setCurrentZoom((prevZoom) => Math.max(1.5, Math.min(5, prevZoom + delta)));
      }
    };
    // Evitar scroll de la página cuando se hace touch en la imagen
    const preventDefault = (e) => {
      if (showMagnifier) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Touch support
    let lastTouch = null;
    let lastDistance = null;

    const handleTouchStart = (e) => {
      const img = imgRef.current;
      if (!img) return;
      if (e.touches.length === 1) {
        const { left, top } = img.getBoundingClientRect();
        const x = e.touches[0].clientX - left;
        const y = e.touches[0].clientY - top;
        setShowMagnifier(true);
        setMagnifierPosition({ x, y });
        lastTouch = { x, y };
      } else if (e.touches.length === 2) {
        // Pinch start
        lastDistance = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      }
    };

    const handleTouchMove = (e) => {
      const img = imgRef.current;
      if (!img) return;
      if (e.touches.length === 1) {
        const { left, top, width, height } = img.getBoundingClientRect();
        const x = e.touches[0].clientX - left;
        const y = e.touches[0].clientY - top;
        if (x >= 0 && y >= 0 && x <= width && y <= height) {
          setShowMagnifier(true);
          setMagnifierPosition({ x, y });
        } else {
          setShowMagnifier(false);
        }
      } else if (e.touches.length === 2) {
        // Pinch zoom
        const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        if (lastDistance) {
          const delta = (dist - lastDistance) / 100; // Sensibilidad
          setCurrentZoom((prevZoom) => Math.max(1.5, Math.min(5, prevZoom + delta)));
        }
        lastDistance = dist;
      }
    };

    const handleTouchEnd = (e) => {
      if (e.touches.length === 0) {
        setShowMagnifier(false);
        lastDistance = null;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('touchstart', handleTouchStart, { passive: false });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd, { passive: false });
      container.addEventListener('touchcancel', handleTouchEnd, { passive: false });
      // Evitar scroll de la página mientras se interactúa con la imagen
      container.addEventListener('touchmove', preventDefault, { passive: false });
      return () => {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
        container.removeEventListener('touchcancel', handleTouchEnd);
        container.removeEventListener('touchmove', preventDefault);
      };
    }
  }, [showMagnifier]);

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    if (!img) return;

    const { top, left, width, height } = img.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Verificar que el cursor está dentro de la imagen
    if (x >= 0 && y >= 0 && x <= width && y <= height) {
      setShowMagnifier(true);
      setMagnifierPosition({ x, y });
    } else {
      setShowMagnifier(false);
    }
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative inline-block h-[85vh] cursor-none touch-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img ref={imgRef} src={src} alt={alt} className="h-full w-auto rounded-xl object-contain" />

      {showMagnifier && (
        <div
          className="pointer-events-none absolute rounded-full border-4 border-gray-400 shadow-2xl"
          style={{
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            left: `${magnifierPosition.x - magnifierSize / 2}px`,
            top: `${magnifierPosition.y - magnifierSize / 2}px`,
            backgroundImage: `url(${zoomSrc || src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${imgRef.current?.width * currentZoom}px ${imgRef.current?.height * currentZoom}px`,
            backgroundPosition: `-${magnifierPosition.x * currentZoom - magnifierSize / 2}px -${magnifierPosition.y * currentZoom - magnifierSize / 2}px`,
            backgroundColor: 'white',
          }}
        >
          <div className="absolute right-2 bottom-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
            {currentZoom.toFixed(1)}x
          </div>
        </div>
      )}

      {showMagnifier && (
        <div className="absolute top-4 left-4 rounded bg-black/70 px-3 py-2 text-sm text-white">
          Usa el scroll o gesto de pinza para zoom in/out
        </div>
      )}
    </div>
  );
}
