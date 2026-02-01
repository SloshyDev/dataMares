import React from 'react';
import { useTranslation } from 'react-i18next';
import MediaButton from '../../Common/MediaButton';

export default function DatamaresLaPandilla() {
  const { t } = useTranslation();
  return (
    <section className="my-4 rounded-2xl bg-linear-to-b from-[#b9b433] to-[#267571] text-white">
      <div
        style={{ backgroundImage: `url(/Graficos/FondoCDMX.svg)` }}
        className="h-full w-full items-center bg-cover bg-bottom py-2"
      >
        <h1 className="text-center font-myriad-condensed text-3xl leading-none font-black text-white lg:text-[2.5vw] screen:text-5xl">
          dataMares en LA PANDILLA
        </h1>
        <h1 className="mx-auto mb-4 block w-3/4 text-center font-myriad-condensed text-xl leading-none text-white lg:mb-[2.5vw] lg:text-[1.5vw] screen:mb-12 screen:text-3xl">
          Nacho Casas and his gang interview the dataMares team to talk about the marine world.
        </h1>
        <div className="mx-2 justify-around lg:mx-2 lg:flex">
          <div className="flex">
            <img
              className="w-28 lg:h-[7vw] lg:w-[7vw] screen:h-32 screen:w-32"
              src="https://api.yokaicdmx.com/uploads/CATALINA_TEAM_96f6bae881.webp"
              alt=""
            />
            <div className="flex flex-col items-start justify-center pl-4 lg:pl-[.83vw] screen:pl-4">
              <h1 className="text-3xl leading-none font-black text-white lg:text-[1.4vw] screen:text-2xl">CATALINA</h1>
              <h2 className="leading-none font-black text-white lg:text-[1vw]">LÓPEZ-SAGÁSTEGUI</h2>
              <h3 className="mb-2 text-base leading-none font-black text-white lg:text-[.83vw] screen:text-base">
                DIRECTORA GENERAL
              </h3>
              <MediaButton
                type="listen"
                href="https://api.yokaicdmx.com/uploads/Audio_Catalina_1_6de1b846dc.mp3"
                image="https://api.yokaicdmx.com/uploads/CATALINA_TEAM_96f6bae881.webp"
              />
            </div>
          </div>
          <div className="mt-4 flex lg:mt-0">
            <img
              className="w-28 lg:h-[7vw] lg:w-[7vw] screen:h-32 screen:w-32"
              src="https://api.yokaicdmx.com/uploads/LUIS_MIGUEL_TEAM_29149f9594.webp"
              alt=""
            />
            <div className="flex flex-col items-start justify-center pl-4 lg:pl-[.83vw] screen:pl-4">
              <h1 className="text-3xl leading-none font-black text-white lg:text-[1.4vw] screen:text-2xl">LUIS MIGUEL</h1>
              <h2 className="leading-none font-black text-white lg:text-[1vw] screen:text-xl">DE LA CRUZ</h2>
              <h3 className="mb-2 text-base leading-none font-black text-white lg:text-[.83vw] screen:text-base">
                DIRECTOR DE ARTE
              </h3>
              <MediaButton
                type="listen"
                href="https://api.yokaicdmx.com/uploads/Audio_Luis_Miguel_b0150fd2bb.mp3"
                image="https://api.yokaicdmx.com/uploads/LUIS_MIGUEL_TEAM_29149f9594.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
