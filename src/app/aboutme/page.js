import { Button } from '@headlessui/react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A0C9DB] to-[#B078D8] text-gray-800">
      <div className="max-w-4xl mx-auto p-4 flex flex-col items-center">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600">
            Full Stack Developer | MSc Software Engineering with Cloud Computing Graduate | AWS & Cloud Computing Enthusiast | Software Engineer
          </p>
        </header>

        {/* About Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Intro</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
          Hello! I’m Elaf Aziz, a passionate Full-Stack Developer with expertise in modern web technologies, cloud computing, and React.js.
          I hold an MSc in Software Engineering with Cloud Computing from <strong>City, University of London</strong> with <strong>Merit (2:1)</strong>,
          along with a <strong>BSc (Hons) in Computer Science</strong> with <strong>Upper Second Class Honours (2:1)</strong>, and have hands-on experience in both front-end and back-end development,
          specializing in technologies like ReactJS, Node.js, and AWS. I build scalable solutions and optimized full-stack applications to drive innovation.
          I thrive on solving complex challenges and creating seamless digital experiences through innovative solutions.
          Beyond coding, I find inspiration in capturing nature's beauty through photography and expressing my thoughts through poetry.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">My Skills Set</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-20">
            {[
              { name: 'React', img: '/react-icon.png' },
              { name: 'Next', img: '/next.js.png' },
              { name: 'Tailwind CSS', img: '/tailwind-css.png' },
              { name: 'Node', img: '/nodejs.png' },
              { name: 'Express', img: '/expressjs.png' },
              { name: 'AWS', img: '/aws.png' },
              { name: 'PHP', img: '/php.png' },
              { name: 'MongoDB', img: '/mongodb.svg' },
              { name: 'HTML', img: '/HTML.png' },
              { name: 'CSS', img: '/css.png' },
              { name: 'JavaScript', img: '/javascript.png' },
              { name: 'Cloud Computing', img: '/cloudcomputing.png' },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-md rounded-lg flex items-center space-x-4 hover:scale-150 transition-transform duration-300"
              >
                {/* Icon */}
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={skill.img}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                {/* Skill Name */}
                <span className="text-lg font-medium text-gray-800">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Feel free to reach out if you have any questions or just want to connect!
          </p>
          <Button
            href="mailto:elafawan45@gmail.com"
            className="border-none border-slate-500 shadow-lg rounded-lg px-4 py-5 bg-[#c8a7eb] hover:bg-[#c39eea] hover:scale-105 transition-transform duration-300"
          >
            Drop an email
          </Button>
        </section>
      </div>
    </div>
  );
}
