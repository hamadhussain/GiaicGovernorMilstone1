// // // // pages/index.tsx

// // // import React from 'react';

// // // const Home = () => {
// // //   return (
// // //     <div className="max-w-3xl mx-auto p-8 font-sans">
// // //       <header className="text-center mb-8">
// // //         <h1 className="text-4xl font-bold text-gray-800">John Doe</h1>
// // //         <p className="text-lg text-gray-600">Web Developer</p>
// // //       </header>

// // //       <section className="mb-6">
// // //         <h2 className="text-xl text-blue-600 font-semibold">Education</h2>
// // //         <p className="text-gray-700">University of XYZ, Computer Science, 2020 - 2024</p>
// // //       </section>

// // //       <section className="mb-6">
// // //         <h2 className="text-xl text-blue-600 font-semibold">Work Experience</h2>
// // //         <p className="text-gray-700">Software Developer at ABC Company (2022 - Present)</p>
// // //       </section>

// // //       <section className="mb-6">
// // //         <h2 className="text-xl text-blue-600 font-semibold">Skills</h2>
// // //         <ul className="list-disc pl-5 text-gray-700">
// // //           <li>JavaScript</li>
// // //           <li>TypeScript</li>
// // //           <li>React</li>
// // //         </ul>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Home;
// // "use client"
// // import { useState } from 'react';
// // import { jsPDF } from 'jspdf';

// // export default function Home() {
// //   const [name, setName] = useState('');

// //   // Function to generate PDF
// //   const generatePDF = () => {
// //     if (name.trim() === '') {
// //       alert('Please enter a name.');
// //       return;
// //     }

// //     const doc = new jsPDF();

// //     // Add the name to the PDF
// //     doc.text(`Name: ${name}`, 10, 20);

// //     // Save the generated PDF
// //     doc.save('name.pdf');
// //   };

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h1>Enter your name:</h1>

// //       {/* Text input for name */}
// //       <input
// //         type="text"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //         placeholder="Enter your name"
// //         style={{ padding: '10px', marginBottom: '10px' }}
// //       />

// //       {/* Button to convert to PDF */}
// //       <button
// //         onClick={generatePDF}
// //         style={{ padding: '10px 20px', cursor: 'pointer' }}
// //       >
// //         Convert to PDF
// //       </button>

// //       {/* Display the entered name */}
// //       <p>Your entered name: <strong>{name}</strong></p>
// //     </div>
// //   );
// // }

// const Resume = () => (
//   <div className="max-w-7xl h-screen flex justify-center items-cente flex-col mx-auto p-4 bg-white rounded-lg ">
//     <h1 className="text-6xl font-bold text-center my-9  ">Muhammad Ather Naeem</h1>
//     {/* <p className="text-xl text-gray-600">Sales Professional</p> */}
//     <div className="mt-4">
//       <p><strong>Address:</strong> L-26, Sector 11-C-1, North Karachi</p>
//       <p><strong>Email:</strong> mohather01@gmail.com</p>
//       <p><strong>Phone:</strong> 03122848923, 03122848923</p>
//     </div>

//     <section className="mt-4">
//       <h2 className="text-4xl border-b-2 py-1 font-semibold border-black w-fit">Professional Summary</h2>
//       <br />
//       <p className="text-gray-700">
//         Dynamic and results-driven sales professional with proven expertise in communication and interpersonal skills. Adept at building relationships and driving sales growth through effective strategies and customer engagement. Committed to delivering exceptional customer service and exceeding targets.
//       </p>
//     </section>

//     <section className="mt-4">
//       <h2 className="text-4xl border-b-2 py-1 font-semibold border-black w-fit">Education</h2>
//       <br />
//       <ul>
//         <li>Sindh Madressatul Islam College [2021] - [2023]</li>
//         <li>Iqar Huffaz Grammar School [2008] - [2021]</li>
//       </ul>
//     </section>

//     <section className="mt-4">
//       <h2 className="text-4xl border-b-2 py-1 font-semibold border-black w-fit">Skills and Experience</h2>
//       <br />
//       <ul className="list-disc pl-5">
//         <li><strong>Sales Expertise:</strong> Strong ability to identify customer needs and provide tailored solutions.</li>
//         <li><strong>Effective Communication:</strong> Proficient in engaging customers through persuasive speaking and active listening.</li>
//         <li><strong>Negotiation Skills:</strong> Experienced in successfully closing deals while fostering long-term relationships through exceptional customer service.</li>
//         <li><strong>Dropshipping:</strong> Knowledgeable in e-commerce and dropshipping processes, managing product selection, pricing, and customer inquiries.</li>
//         <li><strong>Freelance Sales:</strong> Self-motivated and skilled in managing sales projects from home, demonstrating adaptability and initiative.</li>
//         <li><strong>Team Collaboration:</strong> Excellent team player, capable of managing multiple priorities efficiently and adapting quickly to new challenges.</li>
//       </ul>
//     </section>
//   </div>
// );

// export default Resume;

import React from "react";

export default function Home() {
  return (
    <div className="max-w-7xl h-screen flex justify-center items-center flex-col mx-auto p-4 bg-white rounded-lg ">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Hammad Hussain</h1>
        <p className="text-lg mt-2">
          Karachi |{" "}
          <a href="mailto:hammad31012004@gmail.com" className="text-blue-500">
            hammad31012004@gmail.com
          </a>{" "}
          | +92 346 2351008
        </p>
        <p className="text-lg">
          <a
            href="https://fullstack-fielder.vercel.app"
            target="_blank"
            className="text-blue-500 px-1"
          >
fullstack-fielder          </a>
          |
          <a
            href="https://linkedin.com/in/hammadhussaindeveloper"
            target="_blank"
            className="text-blue-500 mx-2"
          >
            hammadhussaindeveloper
          </a>{" "}
          |
          <a
            href="https://github.com/hamadhussain"
            target="_blank"
            className="text-blue-500 px-1"
          >
            hamadhussain
          </a>
        </p>
      </header>
      <div className=" ">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-lg">
            Highly motivated developer skilled in frontend and backend
            technologies, with expertise in React.js, Next.js, Node.js, and
            Prisma. Passionate about creating impactful solutions and delivering
            high-quality code. Adept at teamwork and leadership.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <ul className="list-disc pl-6">
            <li className="text-lg">
              <strong>Sir Syed University of Engineering & Technology</strong> -
              BS in Software Engineering (2022 – 2026)
            </li>
            <li className="text-lg">
              <strong>Government Dehli College</strong> - Pre-Engineering (2020
              – 2022)
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <ul className="list-disc pl-6">
            <li className="text-lg">
              <strong>E-Commerce Website:</strong> Developed a responsive
              platform with product listings, a shopping cart, and secure
              checkout.
            </li>
            <li className="text-lg">
              <strong>Online Dashboard System:</strong> Created a system
              providing real-time data visualization and analytics for
              monitoring key metrics.
            </li>
            <li className="text-lg">
              <strong>AI Chatbot:</strong> Built an AI chatbot using Python and
              natural language processing to improve customer support.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <ul className="list-disc pl-6">
            <li className="text-lg">
              <strong>Languages:</strong> JavaScript/TypeScript, HTML/CSS, Java,
              Python, Dart
            </li>
            <li className="text-lg">
              <strong>Frameworks:</strong> React.js, Next.js, Node.js, Vue,
              Nuxt.js, Flutter
            </li>
            <li className="text-lg">
              <strong>Tools:</strong> Git, VS Code, PyCharm, IntelliJ
            </li>
            <li className="text-lg">
              <strong>Additional Skills:</strong> Data Science, Data Analysis,
              React Native, REST APIs, UX/UI Design, Go
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
