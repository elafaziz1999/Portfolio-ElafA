'use client'

import { useState } from "react";
import { Button } from "@headlessui/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Define tabs with icons
const initialTabs = [
  { label: "Overview"},
  { label: "Skills" },
  { label: "Activities" },
];

export default function About() {
  const [selectedTab, setSelectedTab] = useState(initialTabs[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A0C9DB] to-[#B078D8] text-gray-800">
      <div className="max-w-6xl mx-auto p-4 flex flex-col items-center">
        {/* Navigation Tabs */}
        <nav className="mb-12">
          <ul className="flex space-x-6 justify-center">
            {initialTabs.map((item) => (
              <li
                key={item.label}
                className={`cursor-pointer px-4 py-2 ${
                  item === selectedTab ? "text-gray-900 font-bold" : "text-gray-600"
                }`}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.label}`}
                {item === selectedTab && (
                  <motion.div
                    className="underline"
                    layoutId="underline"
                    style={{ height: 3, backgroundColor: "#c8a7eb" }}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Content based on selected tab */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab.label === "Overview" && (
              <section className="text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">Personal Statement</h1>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Hello! I’m Elaf Aziz, a passionate Full-Stack Developer with expertise in modern web technologies, cloud computing, and React.js.
                  I hold an <strong>MSc in Software Engineering with Cloud Computing</strong> from <strong>City, University of London</strong> with <strong>Merit (2:1)</strong>,
                  along with a <strong>BSc (Hons) in Computer Science</strong> from <strong>University of Hertfordshire</strong>. I specialize in building scalable solutions using React, Node.js, and AWS.
                  I also love photography and writing Urdu poetry.
                </p>
              </section>
            )}

            {selectedTab.label === "Skills" && (
              <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-center">My Skills Set</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-20">
                  {[
                    { name: "React", img: "/react-icon.png" },
                    { name: "Next.js", img: "/next.js.png" },
                    { name: "Tailwind CSS", img: "/tailwind-css.png" },
                    { name: "Node.js", img: "/nodejs.png" },
                    { name: "Express", img: "/expressjs.png" },
                    { name: "AWS", img: "/AWS.png" },
                    { name: "PHP", img: "/php.png" },
                    { name: "MongoDB", img: "/mongodb.svg" },
                    { name: "HTML", img: "/HTML.png" },
                    { name: "CSS", img: "/css.png" },
                    { name: "JavaScript", img: "/javascript.png" },
                    { name: "Cloud Computing", img: "/cloudcomputing.png" },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 shadow-md rounded-lg flex items-center space-x-4 hover:scale-110 transition-transform duration-300"
                    >
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <Image src={skill.img} alt={skill.name} width={48} height={48} className="object-contain" />
                      </div>
                      <span className="text-lg font-medium text-gray-800">{skill.name}</span>
                    </div>
                  ))}
                </div>
                
              </section>
            )}

            {selectedTab.label === "Activities" && (
              <section className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-6">Extra-curricular Activities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 gap-x-20">
              {[
                    { name: "STEM Ambassador", institute:"STEM Ambassadors", duration: "June 2024 - Present"},
                    { name: "Committee Member of Pakistan Society", institute:"Hertfordshire Students' Union", duration: "September 2019 - August 2020"},
                    { name: "Public Relations Officer of the Science Club", institute:"Pakistan International School Jeddah - English Section (PISJ-ES)", duration: "October 2018 - March 2019"},
                    { name: "Murals Club Member", institute:"Pakistan International School Jeddah - English Section (PISJ-ES)", duration: "October 2017 - March 2018"},
                    { name: "Urdu Drama Club Member", institute:"Pakistan International School Jeddah - English Section (PISJ-ES)", duration: "October 2017 - March 2018"},
                    { name: "Student Council Member", institute:"Pakistan International School Jeddah - English Section (PISJ-ES)", duration: "October 2014 - April 2015"},
                    { name: "Student Council Member", institute:"Pakistan International School Jeddah - English Section (PISJ-ES)", duration: "October 2012 - April 2013"},
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300"
                    >
                      <h3 className="text-2xl font-semibold mb-4">{skill.name}</h3>
                      <p className="text-gray-700 mb-4">
                        <strong>{skill.institute}</strong> · {skill.duration}
                      </p>
                    </div>
                  ))}
              </div>
            </section>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
