'use client';
import { useTranslation } from 'react-i18next';
import MicIcon from '@/assets/Icons/MicIcon';
import React from 'react';
import MediaButton from '../../Common/MediaButton';

export default function Habitare() {
  const { t } = useTranslation();
  return (
    <section className="mx-auto my-4 w-[97%] rounded-2xl bg-linear-to-b from-[#19716e] to-[#12524f] text-white lg:w-auto">
      <div
        style={{ backgroundImage: `url(/Graficos/FondoCDMX.svg)` }}
        className="flex h-full w-full items-center bg-cover bg-bottom pt-8"
      >
        <div className="mx-auto flex w-11/12">
          <MicIcon className="w-32 lg:w-[8.33vw] screen:w-40" />
          <div className="ml-2 lg:ml-8">
            <img
              width={446}
              height={165}
              src="https://api.yokaicdmx.com/uploads/Habitare_Icon_e9c409897f.webp"
              alt="Habitare Logo"
              className="mb-4 w-48 lg:w-[13.54vw] screen:w-65"
            />
            <div className="w-full">
              <h1 className="font-myriad-condensed text-xl leading-none font-black lg:text-[1.88vw] screen:text-4xl">
                CREATIVIDAD EN UNA INFOGRAFÍA
              </h1>
              <p className="mt-2 flex items-center justify-between pb-4 font-myriad-condensed text-lg leading-none font-black text-[#d0d001] lg:text-[1.56vw] xl:pb-4 wide:pb-0 screen:text-3xl">
                ENTREVISTAS CON
                <br />
                dataMares
                <MediaButton type="video" href="https://www.youtube.com/watch?v=BuPTrRV5jJM" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
