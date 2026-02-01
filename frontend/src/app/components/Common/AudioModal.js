import React from 'react';

export default function AudioModal({ src, open, onClose, image }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative flex w-full max-w-md flex-col items-center rounded-lg bg-linear-to-b from-[#267571] to-[#b9b532] p-6 shadow-lg">
        <button
          className="absolute top-2 right-2 text-2xl text-gray-900 hover:text-gray-900"
          onClick={onClose}
          aria-label="Cerrar"
        >
          &times;
        </button>
        {image && <img src={image} alt="Imagen relacionada" className="mb-4 h-32 w-32 rounded-full object-cover" />}
        <audio controls autoPlay className="mt-2 w-full">
          <source src={src} type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      </div>
    </div>
  );
}
