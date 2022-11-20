import React from 'react';

// import img
import Image from '../assets/img/aboutimg.jpeg';

const About = () => {
  return (
    <section className='section bg-primary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                The Haiku Project
              </h2>
              <p className='mb-4 text-accent'>
                Let's Haik you!
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Our core team members include <b>Kiyan Mumtaz</b>, who calls himself the Haiku Master; <b>Aarush Kumar</b>, who is also the president of The Poetry Society at DIA; <b>Rayed Hamayun</b>, who just likes poems in general; <b>Arjuan Nair</b>, our creativity incarnate; and finally <b>Anmol Hurkat</b>, who developed this website.<br />
                <br />
                Scroll down to view a collection of original Haikus written by us, and of course, from our lovely peers who volunteered to contribute to our little endeavor....
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;