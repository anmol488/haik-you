import React from 'react';

// import woman image
import HeroImg from '../assets/img/heroimage.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, Welcome to 'The Haiku Project' ! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              A student-led <br />  Haiku publication.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              We're a team of students dedicated to spread the art of writing Haikus by encouraging peers to submit their original creations to us.
            </p>
          </div>
          <div className='hidden lg:flex flex-1 justify-center items-center h-full'>
            <img src={HeroImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;