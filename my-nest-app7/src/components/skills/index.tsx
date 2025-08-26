export default function Skills() {
  return (
    <article id="skill" className="mt-28">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold font-serif shadow-md shadow-stone-600 px-4 py-2 rounded-lg">
          My Expertise
        </h1>
        <h1 className="text-xl md:text-2xl  font-serif mt-6 border-b border-gray-800">
          Technical Skills
        </h1>
        <p className="flex flex-col items-center mt-8 sm: ml-6">
          A Comprehensive set of skills spanning both web2 and web3 development
          ecosystems
        </p>
      </div>

      <div className="border border-gray-800 mx-5 mt-5 py-5 rounded-lg shadow shadow-orange-200 md:px-10 md:py-10 md:mx-60">
        <span className="flex flex-col items-center">web2 Technologies</span>
        <div className="grid grid-cols md:grid-cols-2 gap-6 md:gap-10 px-4 py-4 md:px-0">
          {[
            {
              title: "Next.js",
              description: "Server components, App Router, API routes SSR/SSG",
            },
            {
              title: "React",
              description: "Hooks, Context API, Redux, React Query",
            },
            {
              title: "TypeScript",
              description: "Type safety, interfaces, generics, utility types",
            },
            {
              title: "UI/UX",
              description: "Tailwind CSS, responsive design",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg shadow shadow-orange-300 p-6 md:p-10 flex flex-col justify-between h-full min-h-[160px]  hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl md:text-2xl ">{skill.title}</h3>
              <p className="text-sm mt-4 md:text-xl ">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-gray-800 mx-5 mt-5 py-5 rounded-lg shadow shadow-orange-200 md:px-10 md:py-10 md:mx-60">
        <span className="flex flex-col items-center">web3 Technologies</span>
        <div className="grid grid-cols md:grid-cols-2 gap-6 md:gap-10 px-4 py-4 md:px-0">
          {[
            {
              title: "Solidty",
              description: "Smart contract, ERC standards, gas optimization",
            },
            {
              title: "Ethereum",
              description: "EVM, transactions, events, Hardhat, Truffle",
            },
            {
              title: "Web.js/ethers.js & Wagmi",
              description: "Contract intraction, wallet integration",
            },
            {
              title: "IPFS",
              description: "Decentrailized storage, content addressing",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg shadow shadow-orange-300 p-6 md:p-10 flex flex-col justify-between h-full min-h-[160px]  hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl md:text-2xl ">{skill.title}</h3>
              <p className="text-sm mt-4 md:text-xl ">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
