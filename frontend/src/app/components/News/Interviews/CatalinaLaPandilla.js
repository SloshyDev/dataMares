import MicIcon from '@/assets/Icons/MicIcon';
import React from 'react';
import { useTranslation } from 'react-i18next';
import MediaButton from '../../Common/MediaButton';

export default function CatalinaLaPandilla() {
  const { t } = useTranslation();
  return (
    <section className="my-4 rounded-2xl bg-linear-to-b from-[#19716e] to-[#12524f] text-white">
      <div
        style={{ backgroundImage: `url(/Graficos/FondoCDMX.svg)` }}
        className="flex h-full w-full items-center justify-around bg-cover bg-bottom py-4 lg:pt-6"
      >
        <div className="mx-2 flex screen:w-full screen:justify-around">
          <div className="">
            <img
              width={187}
              height={272}
              className="w-38 lg:w-[9.38vw] screen:w-45"
              src="https://api.yokaicdmx.com/uploads/Catalina_En_La_Pandilla_33793ff69b.webp"
              alt=""
            />
          </div>
          <div className="ml-6 lg:ml-[1.25vw] screen:ml-6">
            <div className="w-full">
              <h1 className="font-myriad-condensed leading-none font-black lg:text-[2vw] screen:text-[2.5rem]">
                Catalina López-Sagástegui
              </h1>
              <p className="mt-2 flex items-center justify-between font-myriad-condensed leading-none font-bold lg:text-[1.25vw] screen:text-2xl">
                EN EL PROGRAMA DE RADIO
              </p>
              <div className="mt-5 flex lg:mt-[1vw] lg:gap-8 screen:mt-5">
                <img
                  width={284}
                  height={225}
                  className="m-auto hidden h-auto w-28 rounded-md lg:block lg:w-[9.84vw] screen:w-45"
                  src="https://api.yokaicdmx.com/uploads/La_pandilla_logo_d2365be503.webp"
                  alt=""
                />
                <div className="flex flex-col justify-center">
                  <h2 className="md text-center font-bold text-[#669b4f] lg:text-[1vw] screen:block screen:text-xl">
                    1 Y 2 DE FEBRERO 2025
                  </h2>
                  <h1 className="mb-2 text-center text-lg font-black text-white lg:text-[1.3vw] screen:text-2xl">
                    ¡NO TE LO PIERDAS!
                  </h1>
                  <MediaButton type="listen" href="https://www.imer.mx/programas/ballenas-nacidas-en-aguas-mexicanas/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
