'use client';
import React, { useState } from 'react';
import { getImageUrl } from '@/app/contants/url';
import { DocumentTextIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import InfoIcon from '@/assets/socialIcons/info_icon';

export default function DownloadPDFButton({ pdf, downloads, documentId, locale }) {
  const [downloading, setDownloading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  if (!pdf?.url) return null;

  const fileName = pdf.url.split('/').pop() || 'documento.pdf';
  const pdfUrl = getImageUrl(pdf.url);
  const sizeLabel = pdf.size ? `${(pdf.size / 1024).toFixed(2)} KB` : '';

  const handleDownload = async () => {
    setDownloading(true);
    // Incrementar contador en Strapi usando el endpoint seguro
    try {
      const updateRes = await fetch(
        `https://api.yokaicdmx.com/api/data-contents/${documentId}/increment-download?locale=${locale}`,
        {
          method: 'POST',
        },
      );
      if (updateRes.ok) {
        const updateJson = await updateRes.json();
        console.log('Descarga incrementada:', updateJson.data?.Downloads);
      }
    } catch (e) {
      console.error('Error incrementando descargas:', e);
    }
    // Descargar PDF cross-origin
    try {
      const response = await fetch(pdfUrl, { mode: 'cors' });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      // Mostrar alerta con las especificaciones
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 8000); // Ocultar después de 12 segundos
    } catch (e) {
      alert('No se pudo descargar el PDF.');
    }
    setDownloading(false);
  };

  const tooltipText =
    locale === 'en'
      ? 'IMPORTANT: Do not forget to mention the file specifications in the print center:\n• Measurements: 60 cm wide X 90 cm high\n• Color system: CMYK (optimal color system for printing)'
      : 'IMPORTANTE: No olvides mencionar las características del archivo en el centro de impresión:\n• Medidas: 60 cm de ancho X 90 cm de alto\n• Sistema de color: CMYK (sistema óptimo de color para impresiones)';

  return (
    <div className="relative">
      {/* Alerta flotante */}
      {showAlert && (
        <div className="fixed top-20 left-1/2 z-50 w-96 -translate-x-1/2 animate-pulse rounded-lg border-2 border-[#265852] bg-[#eff0d3] p-4 shadow-2xl">
          <div className="flex items-start gap-3">
            <QuestionMarkCircleIcon className="h-6 w-6 shrink-0 text-[#265852]" />
            <div className="flex-1">
              <h3 className="mb-2 font-bold text-gray-800">{locale === 'en' ? 'IMPORTANT!' : '¡IMPORTANTE!'}</h3>
              <p className="text-sm whitespace-pre-line text-gray-700">{tooltipText}</p>
            </div>
            <button onClick={() => setShowAlert(false)} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={handleDownload}
          disabled={downloading}
          className="flex w-fit rounded-lg bg-[#6a9a4a] px-4 py-2 font-myriad-condensed text-2xl font-bold text-white transition-all hover:scale-105 hover:bg-[#125451] disabled:opacity-60"
          title={locale === 'en' ? 'View PDF' : 'Ver PDF'}
        >
          <DocumentTextIcon className="mr-2 h-7 w-7" />
          {downloading
            ? locale === 'en'
              ? 'Downloading...'
              : 'Descargando...'
            : `${locale === 'en' ? 'Download PDF' : 'Descargar PDF'} (${sizeLabel})`}
        </button>
        <div className="group relative hidden lg:block">
          <InfoIcon className="group h-10 w-10" />
          <div className="invisible absolute bottom-full left-1/2 mb-2 w-80 -translate-x-1/2 rounded-lg bg-gray-800 p-3 text-sm whitespace-pre-line text-white opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
            {tooltipText}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
