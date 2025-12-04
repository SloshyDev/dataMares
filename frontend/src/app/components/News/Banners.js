import React from 'react';
import ImageWithLink from '../Common/ImageWithLink';

export default function BannersSection({ Banners }) {
  return (
    <section>
      {Banners && Banners.length > 0 ? (
        Banners.map((banner, index) => (
          <div key={index} className="">
            <ImageWithLink link={banner.Link} image={banner.Image} altText={banner.Title} />
          </div>
        ))
      ) : (
        <div className="flex min-h-[50vh] items-center justify-center">
          <p className="text-xl text-gray-500 dark:text-gray-400">No news available</p>
        </div>
      )}
    </section>
  );
}
