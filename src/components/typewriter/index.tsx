// "use client";

// import { useState, useEffect, useRef } from "react";

// export function TypewriterEffect() {
//   const [displayText, setDisplayText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentLine, setCurrentLine] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [typingSpeed, setTypingSpeed] = useState(80);

//   const codeSnippet = [
//     "// Simple React component",
//     "import React from 'react';",
//     "",
//     "function App() {",
//     "  const [count, setCount] = React.useState(0);",
//     "",
//     "  return (",
//     '    <div className="App">',
//     "      <h1>Hello World</h1>",
//     "      <p>Count: {count}</p>",
//     "      <button onClick={() => setCount(count + 1)}>Increment</button>",
//     "    </div>",
//     "  );",
//     "}",
//     "",
//     "export default App;",
//   ];

//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       if (!isDeleting) {
//         if (currentIndex < codeSnippet[currentLine].length) {
//           setDisplayText(
//             (prev) => prev + codeSnippet[currentLine][currentIndex]
//           );
//           setCurrentIndex((prev) => prev + 1);
//           setTypingSpeed(Math.random() * (80 - 50) + 50);
//         } else {
//           setDisplayText((prev) => prev + "\n");
//           setCurrentIndex(0);
//           setCurrentLine((prev) => (prev + 1) % codeSnippet.length);
//           setTypingSpeed(500);

//           if (containerRef.current) {
//             containerRef.current.scrollTop = containerRef.current.scrollHeight;
//           }
//         }
//       }
//     }, typingSpeed);

//     return () => clearTimeout(timeout);
//   }, [displayText, currentIndex, currentLine, isDeleting, typingSpeed]);
//   return (
//     <div className="flex justify-center max-w-7xl mx-auto">
//       <div className="relative font-mono text-sm md:text-base mt-5">
//         <div className="flex items-center justify-between mb-2 px-4 py-1 bg-secondary/20 rounded-t-md border-b border border-gray-800">
//           <div className="flex items-center space-x-1.5">
//             <div className="w-3 h-3 rounded-full bg-red-500"></div>
//             <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//             <div className="w-3 h-3 rounded-full bg-green-500"></div>
//           </div>
//           <div className="text-xs text-muted-foreground ">React</div>
//         </div>
//         <div
//           ref={containerRef}
//           className="p-4 bg-secondary/10 rounded-b-md h-64 overflow-y-hidden"
//         >
//           <pre className="text-left">
//             <code className="text-green-400">
//               {displayText}
//               <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-0.5"></span>
//             </code>
//           </pre>
//         </div>
//             
//       </div>
//     </div>
//   );
// }







"use client"

import { useState, useEffect, useRef } from "react"

export function TypewriterEffect() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentLine, setCurrentLine] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(80)

  const codeSnippet = [
    "// Simple React component",
    "import React from 'react';",
    "",
    "function App() {",
    "  const [count, setCount] = React.useState(0);",
    "",
    "  return (",
    '    <div className="App">',
    "      <h1>Hello World</h1>",
    "      <p>Count: {count}</p>",
    "      <button onClick={() => setCount(count + 1)}>Increment</button>",
    "    </div>",
    "  );",
    "}",
    "",
    "export default App;",
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (!isDeleting) {
  //       if (currentIndex < codeSnippet[currentLine].length) {
  //         setDisplayText((prev) => prev + codeSnippet[currentLine][currentIndex])
  //         setCurrentIndex((prev) => prev + 1)
  //         setTypingSpeed(Math.random() * (80 - 50) + 50)
  //       } else {
  //         setDisplayText((prev) => prev + "\n")
  //         setCurrentIndex(0)
  //         setCurrentLine((prev) => {
  //           // When we reach the end of the code snippet, start deleting
  //           if (prev + 1 >= codeSnippet.length) {
  //             setIsDeleting(true)
  //             return prev
  //           }
  //           return prev + 1
  //         })
  //         setTypingSpeed(500)

  //         if (containerRef.current) {
  //           containerRef.current.scrollTop = containerRef.current.scrollHeight
  //         }
  //       }
  //     } else {
  //       // Deleting logic
  //       if (displayText.length > 0) {
  //         setDisplayText((prev) => prev.slice(0, -1))
  //         setTypingSpeed(30) // Faster when deleting
  //       } else {
  //         // Reset to start typing again
  //         setIsDeleting(false)
  //         setCurrentLine(0)
  //         setCurrentIndex(0)
  //         setTypingSpeed(80)
  //       }
  //     }
  //   }, typingSpeed)

  //   return () => clearTimeout(timeout)
  // }, [displayText, currentIndex, currentLine, isDeleting, typingSpeed])



  useEffect(() => {
  const timeout = setTimeout(() => {
    if (!isDeleting) {
      if (currentIndex < codeSnippet[currentLine].length) {
        setDisplayText((prev) => prev + codeSnippet[currentLine][currentIndex])
        setCurrentIndex((prev) => prev + 1)
        setTypingSpeed(Math.random() * (80 - 50) + 50)
      } else {
        setDisplayText((prev) => prev + "\n")
        setCurrentIndex(0)
        setCurrentLine((prev) => {
          if (prev + 1 >= codeSnippet.length) {
            setIsDeleting(true)
            return prev
          }
          return prev + 1
        })
        setTypingSpeed(500)

        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText((prev) => prev.slice(0, -1))
        setTypingSpeed(30) 
      } else {
        setIsDeleting(false)
        setCurrentLine(0)
        setCurrentIndex(0)
        setTypingSpeed(80)
      }
    }
  }, typingSpeed)

  return () => clearTimeout(timeout)

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [displayText, currentIndex, currentLine, isDeleting, typingSpeed])


  return (
    <div className="flex justify-center max-w-7xl mx-auto">
      <div className="relative font-mono text-sm md:text-base mt-5">
        <div className="flex items-center justify-between mb-2 px-4 py-1 bg-secondary/20 rounded-t-md border-b border border-gray-800">
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-muted-foreground ">React</div>
        </div>
        <div ref={containerRef} className="p-4 bg-secondary/10 rounded-b-md h-64 overflow-y-hidden">
          <pre className="text-left">
            <code className="text-green-400">
              {displayText}
              <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-0.5"></span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
