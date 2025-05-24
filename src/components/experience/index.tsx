import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <div>
      <section className="container mx-auto px-4 mt-28 font-serif ">
        <h1 className=" flex justify-center text-2xl font-bold mb-4">
          My Journey
        </h1>
        <h2
          id="experience"
          className=" flex justify-center text-2xl  md:text-3xl mb-6 text-purple-400"
        >
          Experience & Education
        </h2>
        <p className=" flex items-center text-xl text-gray-300 md:flex justify-center">
          Professional journey and educational background in frontend
          development with Next.js, TypeScript, and Tailwind CSS
        </p>
      </section>
      <section
        id="experience"
        className="container mx-auto px-4 py-16 font-serif md:px-36"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-6 w-6 text-purple-400" />
              <h3 className="text-2xl md:text-3xl ">Work Experience</h3>
            </div>
            <div className="mb-12 border-l-2 border-purple-600 pl-6 relative">
              <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-1"></div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl ">Frontend Developer</h4>
                <div className="flex items-center gap-1 text-gray-300">
                  <Calendar className="h-4 w-4" />
                  <span>2024</span>
                </div>
              </div>
              <h5 className="text-lg text-purple-400 mb-2">
                Tech Innovations Inc.
              </h5>
              <p className="text-gray-300 mb-4">
                Leading the development of responsive web applications and
                component libraries for enterprise clients. Architecting
                scalable solutions using Next.js, TypeScript, and Tailwind CSS.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-900 hover:bg-blue-800">Next.js</Badge>
                <Badge className="bg-blue-700 hover:bg-blue-600">
                  TypeScript
                </Badge>
                <Badge className="bg-teal-900 hover:bg-teal-800">
                  Tailwind CSS
                </Badge>
                <Badge className="bg-orange-900 hover:bg-orange-800">
                  React
                </Badge>
                <Badge className="bg-green-900 hover:bg-green-800">API</Badge>
              </div>
            </div>
            <div className="border-l-2 border-purple-600 pl-6 relative">
              <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-1"></div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl ">Frontend Developer</h4>
                <div className="flex items-center gap-1 text-gray-300">
                  <Calendar className="h-4 w-4" />
                  <span>2024 - 2025</span>
                </div>
              </div>
              <h5 className="text-lg text-purple-400 mb-2">
                Tech Startups Ltd.
              </h5>
              <p className="text-gray-300 mb-4">
                Built user interfaces for client products using React and Redux.
                Collaborated with designers to implement pixel-perfect designs
                and responsive layouts.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-orange-900 hover:bg-orange-800">
                  React
                </Badge>
                <Badge className="bg-purple-900 hover:bg-purple-800">
                  Redux
                </Badge>
                <Badge className="bg-yellow-900 hover:bg-yellow-800">
                  JavaScript
                </Badge>
                <Badge className="bg-blue-900 hover:bg-blue-800">CSS3</Badge>
                <Badge className="bg-orange-700 hover:bg-orange-600">
                  HTML5
                </Badge>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-purple-400" />
              <h3 className="text-2xl md:text-3xl">
                Education & Certifications
              </h3>
            </div>
            <div className="mb-12 border-l-2 border-purple-600 pl-6 relative">
              <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-1"></div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl ">Advanced Next.js Certification</h4>
                <div className="flex items-center gap-1 text-gray-300">
                  <Calendar className="h-4 w-4" />
                  <span>2025</span>
                </div>
              </div>
              <h5 className="text-lg text-purple-400 mb-2">Vercel Academy</h5>
              <p className="text-gray-300 mb-4">
                Comprehensive certification covering Next.js App Router, Server
                Components, data fetching strategies, and advanced deployment
                techniques.
              </p>
            </div>
            <div className="mb-12 border-l-2 border-purple-600 pl-6 relative">
              <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-1"></div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl">TypeScript Professional</h4>
                <div className="flex items-center gap-1 text-gray-300">
                  <Calendar className="h-4 w-4" />
                  <span>2025</span>
                </div>
              </div>
              <h5 className="text-lg text-purple-400 mb-2">
                Microsoft Learning
              </h5>
              <p className="text-gray-300 mb-4">
                Advanced TypeScript certification covering type systems,
                generics, decorators, and integration with modern JavaScript
                frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
