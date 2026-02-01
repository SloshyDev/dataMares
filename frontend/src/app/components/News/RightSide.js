import React from 'react';
import Interviews from './Interviews';
import DataSection from './DataSection';

export default function RightSide({ dataPromo }) {
  return (
    <section className="py-12 lg:mx-auto lg:w-[48%]">
      <div className="space-y-8 lg:mx-auto lg:w-11/12">
        <Interviews />
        <DataSection dataPromo={dataPromo} />
      </div>
    </section>
  );
}
