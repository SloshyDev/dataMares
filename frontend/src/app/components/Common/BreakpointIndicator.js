'use client';

import { useEffect, useState } from 'react';

export default function BreakpointIndicator() {
  const [breakpoint, setBreakpoint] = useState('');
  const [prevBreakpoint, setPrevBreakpoint] = useState('');
  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    // Solo mostrar en desarrollo
    if (process.env.NODE_ENV === 'production') return;

    const getBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 640) return 'xs';
      if (width >= 640 && width < 768) return 'sm';
      if (width >= 768 && width < 1024) return 'md';
      if (width >= 1024 && width < 1280) return 'lg';
      if (width >= 1280 && width < 1536) return 'xl';
      if (width >= 1536 && width < 1840) return 'wide';
      if (width >= 1840 && width < 2032) return 'screen';
      return 'wide-screen';
    };

    const updateBreakpoint = () => {
      const current = getBreakpoint();
      setPrevBreakpoint(breakpoint);
      setBreakpoint(current);
      setCurrentWidth(window.innerWidth);
    };

    // Establecer breakpoint inicial
    updateBreakpoint();

    // Escuchar cambios de tamaño de ventana
    window.addEventListener('resize', updateBreakpoint);

    return () => window.removeEventListener('resize', updateBreakpoint);
  }, [breakpoint]);

  // No renderizar en producción
  if (process.env.NODE_ENV === 'production') return null;

  const breakpointColors = {
    xs: 'bg-red-500',
    sm: 'bg-orange-500',
    md: 'bg-yellow-500',
    lg: 'bg-green-500',
    xl: 'bg-blue-500',
    wide: 'bg-purple-500',
    screen: 'bg-pink-500',
    'wide-screen': 'bg-indigo-500',
  };

  const breakpointWidths = {
    xs: '< 640px',
    sm: '≥ 640px',
    md: '≥ 768px',
    lg: '≥ 1024px',
    xl: '≥ 1280px',
    wide: '≥ 1536px',
    screen: '≥ 1840px',
    'wide-screen': '≥ 2032px',
  };

  return (
    <div
      className={`fixed bottom-4 left-4 z-9999 rounded-lg ${breakpointColors[breakpoint]} px-4 py-2 text-white shadow-lg transition-all duration-300`}
    >
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold">{breakpoint.toUpperCase()}</span>
        <span className="text-sm opacity-90">{breakpointWidths[breakpoint]}</span>
      </div>
      <div className="mt-1 text-sm font-semibold">Actual: {currentWidth}px</div>
      {prevBreakpoint && prevBreakpoint !== breakpoint && (
        <div className="mt-1 text-xs opacity-75">Cambió de: {prevBreakpoint.toUpperCase()}</div>
      )}
    </div>
  );
}
