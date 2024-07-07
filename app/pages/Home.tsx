import Navbar from "./Navbar";
import CodeBlock from "./components/CodeBlock";

export default function HomePage() {
  const codeSnippets = [
    {
      code: `
      import React from 'react';
      
      const HelloWorld: React.FC = () => {
        return <div>Hello, world!</div>;
      };
      
      export default HelloWorld;
          `,
      language: "typescript",
      description:
        'A simple React functional component in TypeScript that renders "Hello, world!"',
    },
    {
      code: `
      const express = require('express');
      const app = express();
      
      app.get('/', (req, res) => {
        res.send('Hello, world!');
      });
      
      app.listen(3000, () => {
        console.log('Server is running on port 3000');
      });
          `,
      language: "javascript",
      description:
        'A basic Express.js server that responds with "Hello, world!" when accessed at the root URL.',
    },
    {
      code: `
      def hello_world():
          print("Hello, world!")
      
      if __name__ == "__main__":
          hello_world()
          `,
      language: "python",
      description:
        'A simple Python function that prints "Hello, world!" when executed.',
    },
    {
      code: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
      </body>
      </html>
          `,
      language: "html",
      description:
        'A basic HTML document that displays "Hello, world!" in an H1 tag.',
    },
    {
      code: `
      body {
        font-family: Arial, sans-serif;
      }
      
      h1 {
        color: blue;
      }
          `,
      language: "css",
      description:
        "A simple CSS stylesheet that sets the font family and changes the color of H1 elements to blue.",
    },
  ];

  const codeSnippet2 = `
    const express = require('express');
      const app = express();
      
      app.get('/', (req, res) => {
        res.send('Hello, world!');
      });
      
      app.listen(3000, () => {
        console.log('Server is running on port 3000');
      });
`;

  return (
    <>
      <Navbar />
      {codeSnippets.map((snippet, index) => (
        <div key={index} className="mb-6">
          <CodeBlock
            language={snippet.language}
            code={snippet.code}
            description={snippet.description}
          />
        </div>
      ))}
    </>
  );
}
