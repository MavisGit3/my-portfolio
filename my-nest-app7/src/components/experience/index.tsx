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
                <h4 className="text-xl ">Frontend Developer (Freelance)</h4>
                <div className="flex items-center gap-1 text-gray-300">
                  <Calendar className="h-4 w-4" />
                  <span>2023 - 2024</span>
                </div>
              </div>
              <h5 className="text-lg text-purple-400 mb-2">
                BrightPixel Solutions - Remote.
              </h5>
              <p className="text-gray-300 mb-4">
                Designed and developed responsive user interfaces for e-commerce
                and SaaS clients, using React.js, Next.js, and TailwindCSS.
                Collaborated with designers to transform Figma prototypes into
                pixel-perfect, production-ready components. Optimized
                application performance, reducing initial load times by 28% and
                improving Lighthouse scores for SEO and accessibility.
                Implemented reusable component libraries, cutting development
                time on new projects by 20%. Worked in Agile sprints with
                developers, designers, and product managers to deliver features
                ahead of schedule.
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
            <div className=" mb-12 border-l-2 border-purple-600 pl-6 relative">
              <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-1"></div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl ">Frontend Developer</h4>
                <div className="flex items-center gap-1 text-gray-300">
                  <Calendar className="h-4 w-4" />
                  <span>2024 - 2025</span>
                </div>
              </div>
              <h5 className="text-lg text-purple-400 mb-2">
                LumenSoft Solutions - Remote.
              </h5>
              <p className="text-gray-300 mb-4">
                Enhanced SEO and UX by optimizing page load time by 45%.
                Implemented accessible, pixel-perfect designs aligned with WCAG
                2.1. Integrated RESTful APIs and GraphQL for dynamic, efficient
                data handling. Performed QA and cross-browser testing to ensure
                consistent performance. Actively engaged in product demos, code
                reviews, and sprint planning.
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
            <div className=" mb-12 border-l-2 border-purple-600 pl-6 relative">
              <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-1"></div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl ">Web3 Developer (Freelance)</h4>
                <div className="flex items-center gap-1 text-gray-300">
                  <Calendar className="h-4 w-4" />
                  <span>2025</span>
                </div>
              </div>
              <h5 className="text-lg text-purple-400 mb-2">
                ChainLabs - Remote.
              </h5>
              <p className="text-gray-300 mb-4">
                Built decentralized applications (dApps) integrating wallet
                authentication (MetaMask, WalletConnect) and token transactions.
                Developed and deployed smart contracts in Solidity for NFT
                marketplaces and DeFi staking platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-900 hover:bg-blue-800">Soildty</Badge>
                <Badge className="bg-blue-700 hover:bg-blue-600">Hardhat</Badge>
                <Badge className="bg-teal-900 hover:bg-teal-800">
                  Ether.js
                </Badge>
                <Badge className="bg-orange-900 hover:bg-orange-800">
                  Next.js
                </Badge>
                <Badge className="bg-green-900 hover:bg-green-800">IPFS</Badge>
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
                <h4 className="text-xl">Blockchain Developer Certification</h4>
                <div className="flex items-center gap-1 text-gray-300">
                  <Calendar className="h-4 w-4" />
                  <span>2025</span>
                </div>
              </div>
              <h5 className="text-lg text-purple-400 mb-2">
                Sail Innovation Lab
              </h5>
              <p className="text-gray-300 mb-4">
                Completed an intensive blockchain development program with a
                focus on smart contracts, dApp architecture, and blockchain
                security. Designed and deployed Solidity smart contracts on
                Ethereum test networks using Hardhat and Truffle. Collaborated
                with peers on capstone projects, following Agile practices and
                GitHub workflows similar to professional dev teams. Developed
                and launched a faucet token on a testnet to simulate token
                minting and distribution. Implemented request limits, admin
                control and integrated a React/Next.js frontend for user
                interaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
