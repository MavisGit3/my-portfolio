"use client";

import { Download } from "lucide-react";
import Image from "next/image";

export default function About() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/docs/MAVIS_OGODU.pdf";
    link.setAttribute("download", "Mavis-Ogodu-Ayikpo-resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <article
      id="about"
      className="flex flex-col mt-20 md:flex-row items-center justify-center gap-8 px-4 py-12 md:py-16 mt"
    >
      <Image
        className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow-lg"
        src="/images/mavisImage.png"
        alt="photo"
        width={400}
        height={300}
      />
      <div className="max-w-xl text-center md:text-left">
        <h4 className="text-2xl font-bold font-serif shadow-md shadow-stone-600 px-4 py-2 rounded-lg inline-block mb-4">
          About Me
        </h4>
        <h2 className="text-2xl md:text-3xl font-serif mb-4">
          Making impact in web development
        </h2>
        <p className="text-sm md:text-xl leading-relaxed tracking-wider">
         I am a passionate and detail-oriented Frontend and Web3 Developer skilled in building clean, responsive, and
          user-friendly web applications.Specializes in React, Next.js, and
          modern UI frameworks, with strong ability to turn design concepts into
          interactive, functional products. Experienced in creating
          decentralized applications (dApps), writing smart contracts in
          Solidity, and integrating blockchain features such as wallet
          authentication and token transactions. Passionate about leveraging
          technology and contributing to projects that bridge traditional web
          and blockchain systems.
        </p>
        <div className="flex justify-center mt-6">
          <button
            onClick={downloadResume}
            className="flex items-center gap-2 bg-orange-100 text-gray-900 border border-gray-800 px-6 py-3 rounded-lg font-bold font-serif shadow hover:bg-orange-200 transition duration-300"
          >
            <Download className="w-5 h-5" />
            <span className="text-sm md:text-base">Download Resume</span>
          </button>
        </div>
      </div>
    </article>
  );
}
