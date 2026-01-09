import MicIcon from '@/assets/Icons/MicIcon';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CatalinaLaPandilla() {
  const { t } = useTranslation();
  return (
    <section className="my-4 rounded-2xl bg-linear-to-b from-[#19716e] to-[#12524f] text-white">
      <div
        style={{ backgroundImage: `url(/Graficos/FondoCDMX.svg)` }}
        className="flex h-full w-full items-center bg-cover bg-bottom pt-8"
      >
        <div className="mx-2 flex">
          <div className="flex justify-center">
            <MicIcon className="hidden w-45 2xl:block" />
            <img className="absolute mt-6 w-32" src="https://api.yokaicdmx.com/uploads/CATALINA_TEAM_96f6bae881.webp" alt="" />
          </div>
          <div className="ml-3">
            <div className="w-full">
              <h1 className="font-myriad-condensed text-3xl leading-none font-black wide:text-[2.5rem] wide-screen:text-[2.5rem]">
                Catalina López-Sagástegui
              </h1>
              <p className="mt-2 flex items-center justify-between pb-4 text-3xl leading-none font-bold xl:pb-4 wide:pb-0 wide:text-[1.3rem]">
                EN EL PROGRAMA DE RADIO
              </p>
              <div className="mt-8 flex gap-8">
                <img
                  className="m-auto h-auto w-45"
                  src="https://api.yokaicdmx.com/uploads/La_Pandilla_Icon_f439d475dc.png"
                  alt=""
                />
                <div className="flex flex-col justify-center">
                  <h2 className="text-center text-xl font-bold text-[#669b4f] wide:hidden screen:block">1 Y 2 DE FEBRERO 2025</h2>
                  <h1 className="text-center text-2xl font-black text-white wide:hidden screen:block">¡NO TE LO PIERDAS!</h1>
                  <a
                    href="https://www.youtube.com/watch?v=BuPTrRV5jJM"
                    className="group flex"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="m-auto w-fit overflow-hidden rounded-2xl border-4 border-[#00302e] bg-linear-to-b from-[#267571] to-[#b9b532] px-6 py-1 font-myriad-condensed text-2xl font-bold text-white transition-colors duration-300 group-hover:from-[#b9b532] group-hover:to-[#267571] wide:text-[1.5rem] wide-screen:text-4xl">
                      {t('listen')}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
