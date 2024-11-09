import { Button } from '@headlessui/react';
import React from 'react';

const Hero = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-[#A0C9D8] to-[#B078D8] py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Flex container with adjusted gap */}
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:space-x-6">
          
          {/* Image Container */}
          <div className="lg:w-2/3 flex justify-center lg:justify-start lg:mr-4">
            <img 
              src="ea-photo1.jpg"
              alt="Elaf Aziz"
              className="w-full h-auto max-w-lg object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Text Container */}
          <div className="lg:w-full text-[#333333] space-y-4">
            <h1 className="text-4xl font-bold">Welcome to my portfolio!</h1>
            <p className="text-xl text-justify">
            My name is Elaf Aziz, and I'm a passionate web developer with a strong foundation in both front-end and back-end technologies,
            based in the United Kingdom. With hands-on experience in ReactJS, WordPress, and full-stack development, I specialize in creating responsive,
            user-friendly websites and applications. I have a solid background in cloud computing and software engineering, with an MSc in Software Engineering with Cloud Computing from City,
            University of London, and a BSc in Computer Science from the University of Hertfordshire.
            </p>
            <p className="text-xl text-justify">
            In my career, I've had the opportunity to work with a variety of organizations, including my current roles as a Web Developer at Buraq Contracting Co.,
            as a Junior Web Developer at Xenova Soft, and as a ReactJS Developer Intern at DevLogix. My work spans across front-end design, back-end development,
            API integration, and cloud infrastructure, giving me a holistic view of web development.
            </p>
            <p className="text-xl text-justify">
            Outside of coding, I am also passionate about photography, particularly nature and landscapes,
            and additionally, I have launched an Urdu poetry account under the brand "EA Writes." Feel free to explore my work and connect with me to discuss how I can contribute to your next project!
            </p>
            <center><div className='button-container flex justify-center gap-4 mt-10'>
              <a href='/projects'>
                <Button className='border-none border-slate-500 shadow-lg rounded-lg px-4 py-5 bg-[#c8a7eb] hover:bg-[#c39eea]'>
                  Explore my projects
                </Button>
              </a>
              <a href='/contactme'>
                <Button className='border-none border-slate-500 shadow-lg rounded-lg px-4 py-5 bg-[#c8a7eb] hover:bg-[#c39eea]'>
                  Get in touch
                </Button>
              </a>
              <a href='/CV.pdf' target='_blank' rel='noopener noreferrer'>
                <Button className='border-none border-slate-500 shadow-lg rounded-lg px-4 py-5 bg-[#c8a7eb] hover:bg-[#c39eea]'>
                  Download my CV
                </Button>
              </a>
            </div></center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
