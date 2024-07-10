import Navbar from "./Navbar";
import CodeBlock from "./components/CodeBlock";

export default function HomePage() {
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

  const rustExe = `
    fn main() {
      println!("Hello, World!");
    }
  `;

  return (
    <>
      <Navbar />
      <div className="">
        <CodeBlock
          language="javascript"
          code={codeSnippet2}
          description="A basic Express.js server that responds with 'Hello, world!' when accessed at the root URL."
        />
      </div>
      <div className="">
        <CodeBlock
          language="Rust"
          code={rustExe}
          description="A simple Rust program that prints 'Hello, World!' to the console."
        />
      </div>
    </>
  );
}
