import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#A0C9D8] to-[#B078D8]">
    <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#333333]">Work Experience</h2>
        <br/>
        <h3 className='text-xl mb-4 text-[#333333]'>"With hands-on experience in web development, cloud computing, and software engineering,
        I've contributed to a wide range of projects across different industries. Here are some of my key roles and achievements."</h3>
        <div className="space-y-10">
            {/* Education Item 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                <Image src="/buraq-logo.png" alt="University Logo" className="w-20 h-20 rounded-sm object-cover" />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                    <h3 className="text-2xl font-semibold text-gray-800">Web Developer</h3>
                    <p className="text-gray-600">Buraq Contracting Co.</p>
                    <p className="mt-2 text-gray-500">September 2024 - Present</p>
                    <ul className="list-disc pl-5 mt-3 text-gray-500">
                        <li>Developed web applications using ReactJS, Next.js, and Node.js for seamless frontend-backend integration.</li>
                        <li>Designed responsive UI components with Tailwind CSS to enhance user experience.</li>
                        <li>Optimized website performance through debugging and code reviews.</li>
                        <li>Collaborated with teams to deliver client-focused solutions and real-time project tracking features.</li>
                    </ul>
                </div>
            </div>

            {/* Education Item 2 */}
            <div className="flex flex-col md:flex-row items-start md:items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                    <Image src="/xenovasoft-logo.jpeg" alt="University Logo" className="w-20 h-20 rounded-sm object-cover" />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                    <h3 className="text-2xl font-semibold text-gray-800">Junior Web Developer</h3>
                    <p className="text-gray-600">Xenova Soft</p>
                    <p className="mt-2 text-gray-500">August 2024 – Present</p>
                    <ul className="list-disc pl-5 mt-3 text-gray-500">
                        <li>Developed responsive websites using HTML, CSS, JavaScript, and frameworks like React.js and Next.js.</li>
                        <li>Collaborated on front-end features, optimized code for performance, and used Git for version control.</li>
                        <li>Assisted in client interactions and requirements gathering within an Agile environment.</li>
                    </ul>
                </div>
            </div>

            {/* Education Item 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                    <Image src="/itsolerapvtltd-logo.jpeg" alt="School Logo" className="w-20 h-20 rounded-full object-cover" />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                    <h3 className="text-2xl font-semibold text-gray-800">WordPress Developer Intern</h3>
                    <p className="text-gray-600">ITSOLERA PVT LTD.</p>
                    <p className="mt-2 text-gray-500">July 2024 - October 2024</p>
                    <ul className="list-disc pl-5 mt-3 text-gray-500">
                        <li>Assisted in designing, developing, and maintaining WordPress websites, including custom themes.</li>
                        <li>Conducted testing, debugging, and optimized websites for speed and SEO.</li>
                    </ul>
                </div>
            </div>

            {/* Education Item 4 */}
            <div className="flex flex-col md:flex-row items-start md:items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                    <Image src="/devlogix-logo.jpeg" alt="School Logo" className="w-20 h-20 rounded-full object-cover" />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                    <h3 className="text-2xl font-semibold text-gray-800">ReactJS Developer Intern</h3>
                    <p className="text-gray-600">DevLogix</p>
                    <p className="mt-2 text-gray-500">June 2024 - October 2024</p>
                    <ul className="list-disc pl-5 mt-3 text-gray-500">
                        <li>Led the SDLC team, managed all project stages, and coordinated with stakeholders on timelines.</li>
                        <li>Developed responsive web applications using React.js and managed state with Redux.</li>
                        <li>Integrated APIs and optimized front-end performance for improved user experience.</li>
                    </ul>
                </div>
            </div>

            {/* Education Item 5 */}
            <div className="flex flex-col md:flex-row items-start md:items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                    <Image src="/scentomania-logo.jpg" alt="School Logo" className="w-20 h-20 rounded-sm object-cover" />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                    <h3 className="text-2xl font-semibold text-gray-800">WordPress Web Developer</h3>
                    <p className="text-gray-600">ScentOMania</p>
                    <p className="mt-2 text-gray-500">January 2024 - August 2024</p>
                    <ul className="list-disc pl-5 mt-3 text-gray-500">
                        <li>Designed, developed, and maintained WordPress websites for Scentomania, enhancing user experience with custom themes and plugins.</li>
                        <li>Improved site traffic by 80% through SEO strategies and optimized performance for better user engagement.</li>
                        <li>Collaborated on landing pages and campaigns, increasing online sales by 50%.</li>
                        <li>Provided technical support and training while staying updated on WordPress trends for continuous improvement.</li>
                    </ul>
                </div>
            </div>
            
            {/* Education Item 6 */}
            <div className="flex flex-col md:flex-row items-start md:items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                    <Image src="/buraq-logo.png" alt="School Logo" className="w-20 h-20 rounded-sm object-cover" />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                    <h3 className="text-2xl font-semibold text-gray-800">Junior Web Developer</h3>
                    <p className="text-gray-600">Buraq Contracting Co.</p>
                    <p className="mt-2 text-gray-500">March 2024 - June 2024</p>
                    <ul className="list-disc pl-5 mt-3 text-gray-500">
                        <li>Developed, maintained, and optimized web applications using React.js, JavaScript, HTML, and CSS, focusing on both front-end and back-end functionality.</li>
                        <li>Worked with RESTful Web Services for back-end development, building server-side features using Node.js.</li>
                        <li>Implemented responsive web design and utilized Bootstrap to ensure a seamless and visually appealing user experience across devices.</li>
                        <li>Managed and manipulated data with SQL queries, ensuring robust database interactions.</li>
                    </ul>
                </div>
            </div>

            {/* Education Item 7 */}
            <div className="flex flex-col md:flex-row items-start md:items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                    <Image src="/SAS-logo.png" alt="School Logo" className="w-20 h-20 rounded-sm object-cover" />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                    <h3 className="text-2xl font-semibold text-gray-800">Database Administrator Intern</h3>
                    <p className="text-gray-600">Saleh Abdu Saleh Establishment.</p>
                    <p className="mt-2 text-gray-500">March 2024 - June 2024</p>
                    <ul className="list-disc pl-5 mt-3 text-gray-500">
                        <li>Developed customized solutions for data storage and management using Excel and Oracle MySQL, optimizing efficiency and performance.</li>
                        <li>Maintained accurate and reliable data across databases, enabling concurrent user access and tailoring data presentation to meet user needs.</li>
                        <li>Managed database access, implementing security measures to protect sensitive information.</li>
                        <li>Established data security and recovery protocols to safeguard critical assets and ensure swift response during emergencies.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default page