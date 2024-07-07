"use client";

import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-jsx'; 
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/index';


interface CodeBlockProps {
  language: string;
  code: string;
  description: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code, description }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <div className="w-1/3 my-4 rounded-lg border border-gray-700">
      <div className="bg-gray-800 text-white px-3 py-1 text-sm font-semibold rounded-t-lg">
        {language.toUpperCase()}
      </div>
      <pre className="bg-gray-900">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
      <div className="bg-gray-800 text-white px-3 py-1 text-xs rounded-b-lg">
        {description}
      </div>
    </div>
  );
};

export default CodeBlock;