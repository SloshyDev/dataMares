import MicIcon from '@/assets/Icons/MicIcon';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function DatamaresLaPandilla() {
  const { t } = useTranslation();
  return (
    <section className="my-4 rounded-2xl bg-linear-to-b from-[#b9b433] to-[#267571] text-white">
      <div
        style={{ backgroundImage: `url(/Graficos/FondoCDMX.svg)` }}
        className="h-full w-full items-center bg-cover bg-bottom py-2"
      >
        <h1 className="text-center font-myriad-condensed text-5xl font-black text-white">dataMares en LA PANDILLA</h1>
        <h1 className="mx-auto block w-3/4 text-center font-myriad-condensed text-3xl text-white">
          Nacho Casas and his gang interview the dataMares team to talk about the marine world.
        </h1>
        <div className="mx-2 flex">
          <div className="">
            <img className="w-36" src="https://api.yokaicdmx.com/uploads/CATALINA_TEAM_96f6bae881.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
