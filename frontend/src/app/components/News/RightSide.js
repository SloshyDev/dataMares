import React from 'react';
import Interviews from './Interviews';

export default function RightSide() {
  return (
    <section className="py-12 xl:mx-auto xl:w-[48%]">
      <div className="mx-auto xl:w-4/5">
        <Interviews />
      </div>
    </section>
  );
}
