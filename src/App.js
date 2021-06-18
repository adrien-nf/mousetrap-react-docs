import './App.css';

import logo from './logo.png'; // with require

import useMousetrap from "mousetrap-react";
import { useState } from 'react';

const lines = [
  {
    classes: "",
    text: `import useMousetrap from "mousetrap-react";`,
  },
  {
    classes: "",
    text: ``,
  },
  {
    classes: "",
    text: `export default function App() {`,
  },
  {
    classes: "",
    text: ``,
  },
  {
    classes: "comment",
    text: `// Single Keys`,
  },
  {
    classes: "",
    text: `useMousetrap('4', () => { highlight([6]) });`,
  },
  {
    classes: "",
    text: `useMousetrap('x', () => { highlight([7]) });`,
  },
  {
    classes: "",
    text: ``,
  },
  {
    classes: "comment",
    text: `// Combinations Keys`,
  },
  {
    classes: "",
    text: `useMousetrap('command+shift+k', () => {`,
  },
  {
    classes: "",
    text: `    highlight([10, 11, 12, 13]);`,
  },
  {
    classes: "",
    text: `    return false;`,
  },
  {
    classes: "",
    text: `});`,
  },
  {
    classes: "",
    text: ``,
  },

  {
    classes: "",
    text: `useMousetrap(['command+k', 'ctrl+k'], () => {`,
  },
  {
    classes: "",
    text: `    highlight([15, 16, 17, 18]);`,
  },
  {
    classes: "",
    text: `    return false;`,
  },
  {
    classes: "",
    text: `});`,
  },
  {
    classes: "",
    text: ``,
  },
  {
    classes: "comment",
    text: `// Gmail Style Sequences`,
  },
  {
    classes: "",
    text: `useMousetrap('g i', () => { highlight([21]) });`,
  },
  {
    classes: "",
    text: `useMousetrap('* a', () => { highlight([22]) });`,
  },
  {
    classes: "",
    text: ``,
  },
  {
    classes: "comment",
    text: `// Konami Code!`,
  },
  {
    classes: "",
    text: `useMousetrap('up up down down left right left right b a enter', () => {`,
  },
  {
    classes: "",
    text: `    highlight([25, 26, 27]);`,
  },
  {
    classes: "",
    text: `});`,
  },
]

function App() {

  const [highlighted, setHighlighted] = useState([]);

  useMousetrap('4', () => { highlight([6]) });
  useMousetrap('x', () => { highlight([7]) });

  useMousetrap('command+shift+k', () => {
    highlight([10, 11, 12, 13]);
    return false;
  });

  useMousetrap(['command+k', 'ctrl+k'], () => {
    highlight([15, 16, 17, 18]);
    return false;

  });

  useMousetrap('g i', () => { highlight([21]) });
  useMousetrap('* a', () => { highlight([22]) });

  useMousetrap('up up down down left right left right b a enter', () => {
    highlight([25, 26, 27]);
  });

  const highlight = (vals) => {
    setHighlighted(vals)
  }

  return (
    <div className="background">
      <div className="center">
        <img src={logo} alt="Mousetrap React Logo" style={{ width: "100%", padding: "0.5em" }} />
        <span style={{ textAlign: "center", width: "100%", display: "block", marginBottom: "0.25em" }}>
          <a href="https://craig.is/killing/mice" target="_blank" rel="noopener noreferrer" className="style">Based on MousetrapJS</a>
        </span>
        <span>
          <code className="npm-install">npm install mousetrap-react</code>
        </span>
        <pre data-language="javascript" data-trimmed="true" className="code-block">
          {
            lines.map((e, i) => (
              <code key={i}>
                <span className="code-line-number">{(i + 1).toString().padStart(2, ' ')}.</span><span className={e.classes + " code-line-transition " + (highlighted.includes((i + 1)) ? "highlighted" : "")}>{e.text}</span>
              </code>
            ))
          }
        </pre>
        <h1>Introduction</h1>
        <p>Mousetrap-React is a <a href="https://craig.is/killing/mice">Mousetrap</a> wrapper for <a href="https://github.com/facebook/react">ReactJS</a>.</p>
        <h1>Installation</h1>
        <p>Mousetrap-React is available as an npm package.</p>
        <code className="npm-install">
          npm install mousetrap-react
        </code>
        <h1>Usage</h1>
        <p>Check the official <a href="https://craig.is/killing/mice">Mousetrap documentation</a> for a complete list of the keys you can use.</p>
        <h2>Basic usage</h2>
        <div class="tip" markdown="1">Have **fun!**</div>
      </div>
      <div className="bottom">
        <span className="link">© {(new Date()).getFullYear()} Adrien N. F.</span>&nbsp;
        <a href="/homepage" className="link">Back to Homepage</a>
      </div>
    </div>
  );
}

export default App;
