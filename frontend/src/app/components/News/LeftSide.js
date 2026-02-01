import React from 'react';
import NewsVault from './NewsVault';
import ImageWithLink from '../Common/ImageWithLink';
import PromoMagazine from './PromoMagazine';

export default function LeftSide({ News_vault, Dispatch, PublicationsPromo }) {
  return (
    <section className="py-12 md:mx-8 lg:mx-auto lg:w-[48%]">
      <div className="mx-auto xl:w-11/12">
        <NewsVault News_vault={News_vault} />
        {/* Sustainability Dispatch */}
        <ImageWithLink
          className="mx-auto mt-8 w-full rounded-2xl transition-transform duration-300 hover:scale-105"
          altText={Dispatch.Title}
          image={Dispatch.Image}
          isExternal={true}
          link={Dispatch.Link}
          type={Dispatch.TypeOfLink}
          unoptimized={true}
        />
        <PromoMagazine PublicationsPromo={PublicationsPromo} />
      </div>
    </section>
  );
}
