import React from 'react';
import Interviews from './Interviews';

export default function RightSide() {
  return (
    <section className="py-12 lg:mx-auto lg:w-[48%]">
      <div className="mx-auto lg:w-4/5">
        <Interviews />
      </div>
    </section>
  );
}
