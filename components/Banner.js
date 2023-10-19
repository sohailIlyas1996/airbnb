// Banner.js
import Image from 'next/image';
import React from 'react';

function Banner() {
  return (
    <div className="relative min-h-[300px] sm:h-full md:h-[500px] lg:h-[700px] xl:h-[750px] 2xl:h-[9000px]">
      <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" />

      <div className='absolute top-1/2 w-full h-full text-center'>
        <p>Not sure where to go ? Perfect.</p>
        <button className='bg-white px-10 py-4 rounded-full my-3 w-49 text-purple-500 shadow-md hover:shadow-lg  active:scale-90 transition duration-150'>
            Im flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
