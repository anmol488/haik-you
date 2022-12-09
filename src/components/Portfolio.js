import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            All our Haikus
          </h2>
          <p className='subtitle'>
            Click on each contributor's name below to view their Haiku portfolio. Each Haiku follows the 5-7-5 Haiku rule to maintain uniformity. We hope you enjoy!
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
