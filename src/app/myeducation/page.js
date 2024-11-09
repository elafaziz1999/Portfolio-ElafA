import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#A0C9D8] to-[#B078D8]">
    <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#333333]">My Education</h2>
        <br/>
        <h3 className='text-xl mb-4 text-[#333333]'>"My academic journey has equipped me with a strong foundation in software engineering,
            cloud computing, and full-stack development,setting the stage for a career driven by continuous learning and innovation."
        </h3>
        <div className="space-y-10">
            {/* Education Item 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                <Image src="/cuol-logo.png" alt="University Logo" className="w-40 h-40 rounded-full object-cover" width={225} height={225}/>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                    <h3 className="text-2xl font-semibold text-gray-800">MSc Software Engineering with Cloud Computing</h3>
                    <p className="text-gray-600">City, University of London</p>
                    <p className="mt-2 text-gray-500">September 2022 - December 2023</p>
                    <p className="mt-2 text-gray-500">Graduated with Merit (2:1)</p>
                    <p className='mt-2 text-gray-500'>This programme focused on the development and deployment of cloud solutions, software engineering principles, and modern development methodologies.</p>
                    <ul className="list-disc pl-5 mt-3 text-gray-500">
                        <li>Emphasis on cloud technologies, including AWS</li>
                        <li>Software engineering principles and practices</li>
                        <li>Research on modern cloud computing trends and security</li>
                    </ul>
                </div>
            </div>

            {/* Education Item 2 */}
            <div className="flex flex-col md:flex-row items-start md:items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                    <Image src="/uh-logo.png" alt="University Logo" className="w-40 h-40 rounded-full object-cover" width={225} height={225}/>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                    <h3 className="text-2xl font-semibold text-gray-800">BSc (Hons) Computer Science</h3>
                    <p className="text-gray-600">University of Hertfordshire</p>
                    <p className="mt-2 text-gray-500">September 2019 - May 2022</p>
                    <p className="mt-2 text-gray-500">Graduated with Upper Second Class Honours (2:1)</p>
                    <p className='mt-2 text-gray-500'>This programme coursework covered software development, data structures, algorithms, and web technologies, providing a comprehensive foundation in computer science.</p>
                    <ul className="list-disc pl-5 mt-3 text-gray-500">
                        <li>Strong focus on software development and problem-solving skills</li>
                        <li>Extensive training in web technologies like HTML, CSS, JavaScript</li>
                        <li>Hands-on experience in database management and security</li>
                    </ul>
                </div>
            </div>

            {/* Education Item 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                    <Image src="/pisjes-logo.png" alt="School Logo" className="w-40 h-40 rounded-full object-cover" width={225} height={225}/>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                    <h3 className="text-2xl font-semibold text-gray-800">IGCSE/O Level, AS & A Level</h3>
                    <p className="text-gray-600">Pakistan International School Jeddah English Section (PISJ-ES)</p>
                    <p className="mt-2 text-gray-500">September 2003 - June 2019</p>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default page