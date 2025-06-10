import { Download } from "lucide-react"
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <article
      id="about"
      className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-12 md:py-16 mt"
    >
      <Image
        className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow-lg "
        src="/images/mavisImage.png"
        alt="photo"
        width={400}
        height={300}
      />
      <div className="max-w-xl text-center md:text-left">
        <h4 className="text-2xl  font-bold font-serif shadow-md shadow-stone-600 px-4 py-2 rounded-lg inline-block mb-4">
          About Me
        </h4>
        <h2 className="text-2xl md:text-3xl font-serif mb-4">
          Making impact in web development
        </h2>
        <p className="text-sm md:text-xl leading-relaxed tracking-wider">
          As a passionate and detail-oriented frontend web developer, I craft
          engaging and user-friendly digital experiences. With expertise in
          HTML, CSS (Tailwind), JavaScript (TypeScript), and frameworks like
          React and Next.js, I bring designs to life and ensure seamless user
          interactions.
        </p>
        <div className="flex justify-center mt-6 md: ">
          <Link
            href="/docs/OGODU_CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-orange-100 text-gray-900 border border-gray-800 px-6 py-3 rounded-lg font-bold font-serif shadow hover:bg-orange-200 transition duration-300"
          >
            <Download className="w-5 h-5"/>
            <span className="text-sm md:text-base">Download Resume</span>
          </Link>
        </div>
      
      </div>
    </article>
  );
}
