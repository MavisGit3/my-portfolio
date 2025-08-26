"use client";

import { useState, useEffect, useRef } from "react";

export function TypewriterEffect() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

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
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < codeSnippet[currentLine].length) {
        setDisplayText((prev) => prev + codeSnippet[currentLine][currentIndex]);
        setCurrentIndex((prev) => prev + 1);
        setTypingSpeed(Math.random() * (80 - 50) + 50);
      } else {
        setDisplayText((prev) => prev + "\n");
        setCurrentIndex(0);
        setCurrentLine((prev) => {
          if (prev + 1 >= codeSnippet.length) {
            // Add separator and continue from beginning
            setDisplayText(
              (prevText) => prevText + "\n// --- Restarting --- \n\n"
            );
            return 0;
          }
          return prev + 1;
        });
        setTypingSpeed(500);

        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, currentIndex, currentLine, typingSpeed]);

  return (
    <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative font-mono text-xs sm:text-sm md:text-base lg:text-lg mt-3 sm:mt-5 w-full max-w-4xl">
        <div className="flex items-center justify-between mb-2 px-2 sm:px-4 py-1 sm:py-2 bg-secondary/20 rounded-t-md border-b border border-gray-800">
          <div className="flex items-center space-x-1 sm:space-x-1.5">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground">React</div>
        </div>
        <div
          ref={containerRef}
          className="p-2 sm:p-4 bg-secondary/10 rounded-b-md h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden"
        >
          <pre className="text-left">
            <code className="text-green-400 leading-relaxed sm:leading-normal">
              {displayText}
              <span className="inline-block w-1.5 sm:w-2 h-3 sm:h-4 bg-primary animate-pulse ml-0.5"></span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
