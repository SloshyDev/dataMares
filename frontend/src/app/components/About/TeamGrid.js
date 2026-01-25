import React from 'react';
import Image from 'next/image';
import { getImageUrl } from '@/app/contants/url';

export default function TeamGrid({ members, widthPerImage, width }) {
  return (
    <div className={`mx-auto mb-20 ${width ? width : 'w-3/5'}`}>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member) => (
          <div key={member.url} className="text-center">
            <Image
              unoptimized
              src={getImageUrl(member.url)}
              className={`h-auto ${widthPerImage ? widthPerImage : 'lg:w-[15.68vw] screen:w-[18.68rem]'}`}
              alt={member.caption || 'Team Member'}
              width={member.width}
              height={member.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
