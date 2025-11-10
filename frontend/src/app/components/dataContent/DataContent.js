import React from 'react';

export default function DataContent(content) {
  const dataContent = content.content;

  return (
    <div className="mx-auto min-h-screen max-w-[2048px]">
      <h1 className="mb-8 text-4xl font-bold text-[#125451]">{dataContent.Title}</h1>
    </div>
  );
}
