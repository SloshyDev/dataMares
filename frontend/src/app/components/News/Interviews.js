'use client';
import MicIcon from '@/assets/Icons/MicIcon';
import React, { useState } from 'react';
import VideoModal from '../Common/VideoModal';
import { useTranslation } from 'react-i18next';
import CatalinaRadioChapingo from './Interviews/CatalinaRadioChapingo';
import Habitare from './Interviews/Habitare';
import BasicCardNew from './Interviews/BasicCardNew';
import CatalinaLaPandilla from './Interviews/CatalinaLaPandilla';
import DatamaresLaPandilla from './Interviews/DatamaresLaPandilla';

export default function Interviews() {
  const { t } = useTranslation();
  return (
    <div className="overflow-hidden rounded-2xl border-8 border-[#166561] bg-[#00302e] py-4 lg:mx-auto">
      <div className="h-32 w-full py-6 lg:h-[8.33vw] lg:py-[1.25vw] screen:h-40 screen:py-6">
        <h1 className="mx-4 rounded-xl bg-linear-to-b from-[#b9b532] to-[#267571] py-4 text-center font-myriad-condensed text-4xl font-black text-white uppercase lg:py-[.83vw] lg:text-[3.12vw] screen:py-4 screen:text-[3.75rem]">
          {t('interviews')}
        </h1>
        <MicIcon className="relative -top-20 left-8 w-15 lg:-top-[6.25vw] lg:w-[5.21vw] screen:-top-30 screen:w-25" />
      </div>
      <section className="NewsVaultScrollBar mx-2 max-h-172 overflow-y-scroll lg:mx-5 lg:px-5">
        <CatalinaRadioChapingo />
        <Habitare />
        <BasicCardNew
          title="LOS NIÑOS PREGUNTAN"
          content="¿Qué hay en las profunidades del océano?,¿cómo es que el cambio climatico está afectando a los mares y océanos?"
          link="https://fb.watch/ugh0s_uXga/"
          image="https://api.yokaicdmx.com/uploads/Los_ninos_pregunta_6ef2b5d9fa.webp"
          textLink="VIDEO"
        />
        <BasicCardNew
          title="DATAMARES EN LA UNAM"
          content="La directora de dataMares en conversación con la comunidad universitaria."
          link="https://www.youtube.com/watch?v=zOhxYEQnZOs"
          image="https://api.yokaicdmx.com/uploads/datamares_en_la_unam_8027617592.webp"
          textLink="VIDEO"
        />
        <BasicCardNew
          className="bg-linear-to-b from-[#9ea521] to-[#166561] py-4"
          title="LA CIENCIA QUE SOMOS"
          subTitle="CONOCE LOS OCÉANOS. 07 DE JUNIO DE 2024"
          content="La directora de dataMares en conversación con la comunidad universitaria."
          link="https://www.youtube.com/watch?v=zOhxYEQnZOs"
          image="https://api.yokaicdmx.com/uploads/La_ciencia_que_somos_367a23432a.webp"
          textLink="VIDEO"
        />
        <BasicCardNew
          className="py-4"
          title="Podcast Radio UNAM"
          content="This content was originally taken from the official site of Radio UNAM. Our director talks about access to information and the efforts of dataMares."
          link="https://www.radiopodcast.unam.mx/podcast/audio/31273"
          image="https://api.yokaicdmx.com/uploads/Radio_Unam_81d190d87a.webp"
          textLink="LISTEN"
        />
        <CatalinaLaPandilla />
        <DatamaresLaPandilla />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="">
            {(() => {
              const [open, setOpen] = useState(false);
              const videoSrc = 'https://api.yokaicdmx.com/uploads/Solorzano_Entrevista_CLS_26_enero_2023_a6d0494320.mp4';
              const imageSrc = 'https://api.yokaicdmx.com/uploads/Referente_fe24c970c1.webp';
              return (
                <>
                  <img
                    className="mx-auto rounded-2xl transition-transform duration-300 hover:scale-105"
                    src={imageSrc}
                    alt=""
                    style={{ cursor: 'pointer' }}
                    onClick={() => setOpen(true)}
                  />
                  <VideoModal src={videoSrc} open={open} onClose={() => setOpen(false)} />
                </>
              );
            })()}
          </div>
          <div className="">
            <a href="http://" className="flex gap-2" target="_blank" rel="noopener noreferrer">
              <img
                className="h-42 w-42 rounded-2xl lg:h-[10.5vw] lg:w-[10.5vw] screen:h-42 screen:w-42"
                src="https://api.yokaicdmx.com/uploads/Hablame_de_ciencia_b562a01ab1.webp"
                alt=""
              />
              <span className="text-sm lg:text-[.73vw] screen:text-[.88rem]">
                HÁBLAME DE CIENCIA EPISODIO 50: MISTERIOS EN LOS OCÉANOS Sumérgete en una charla con Catalina López-Sagástegui.
                Una plática sobre las criaturas marinas, el coral blanco y otros datos interesantes sobre los océanos.
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
