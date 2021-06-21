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

const preventDefaultLines = [
  {
    classes: "",
    text: `useMousetrap("ctrl+s", () => {`
  },
  {
    classes: "",
    text: `    console.log("Triggering callback without saving the page")`
  },
  {
    classes: "comment",
    text: `    // Add return false here`
  },
  {
    classes: "",
    text: `    return false;`
  },
  {
    classes: "",
    text: `});`
  },
]

const catchingEvent = [
  {
    classes: "",
    text: `useMousetrap("ctrl+z", (e: Mousetrap.ExtendedKeyboardEvent, combo: string) => {`
  },
  {
    classes: "",
    text: `    console.log("Event object:", e);`
  },
  {
    classes: "",
    text: `    e.preventDefault();`
  },
  {
    classes: "",
    // eslint-disable-next-line no-template-curly-in-string
    text: "    console.log(`You've executed the ${combo} combo.`)"
  },
  {
    classes: "",
    text: `});`
  },
]

const textFields = [
  {
    classes: "",
    text: `<textarea className="mousetrap"></textarea>`
  },
]

const eventType = [
  {
    classes: "",
    text: `Mousetrap.bind('esc', function() { console.log('Escape'); }, 'keyup');`
  },
]

const useMousetrapCode = [
  {
    classes: "",
    text: `const useMousetrap = (`
  },
  {
    classes: "",
    text: `    keys: string | string[],`
  },
  {
    classes: "",
    text: `    callback: (`
  },
  {
    classes: "",
    text: `        e: Mousetrap.ExtendedKeyboardEvent,`
  },
  {
    classes: "",
    text: `        combo: string`
  },
  {
    classes: "",
    text: `        ) => any,`
  },
  {
    classes: "",
    text: `    action?: "keypress" | "keydown" | "keyup" | undefined`
  },
  {
    classes: "",
    text: `) => void;`
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

  useMousetrap('ctrl+s', () => {
    console.log("Triggering callback without saving the page")
    return false;
  });

  useMousetrap('esc', () => {
    console.log("Escape")
    return false;
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
        <p>Check the block of code at the very top of this page and try the commands!</p>
        <h2>Prevent default</h2>
        <pre data-language="javascript" data-trimmed="true" className="code-block">
          {
            preventDefaultLines.map((e, i) => (
              <code key={i}>
                <span className="code-line-number">{(i + 1).toString().padStart(2, ' ')}.</span><span className={e.classes + " code-line-transition "}>{e.text}</span>
              </code>
            ))
          }
        </pre>
        <h2>Catching event</h2>
        <pre data-language="javascript" data-trimmed="true" className="code-block">
          {
            catchingEvent.map((e, i) => (
              <code key={i}>
                <span className="code-line-number">{(i + 1).toString().padStart(2, ' ')}.</span><span className={e.classes + " code-line-transition "}>{e.text}</span>
              </code>
            ))
          }
        </pre>
        <h2>Prevent default</h2>
        <pre data-language="javascript" data-trimmed="true" className="code-block">
          {
            preventDefaultLines.map((e, i) => (
              <code key={i}>
                <span className="code-line-number">{(i + 1).toString().padStart(2, ' ')}.</span><span className={e.classes + " code-line-transition "}>{e.text}</span>
              </code>
            ))
          }
        </pre>
        <h2>Text fields</h2>
        <p>By default all keyboard events will not fire if you are inside of a textarea, input, or select to prevent undesirable things from happening.</p>
        <p>If you want them to fire you can add the class mousetrap to the element.</p>
        <pre data-language="javascript" data-trimmed="true" className="code-block">
          {
            textFields.map((e, i) => (
              <code key={i}>
                <span className="code-line-number">{(i + 1).toString().padStart(2, ' ')}.</span><span className={e.classes + " code-line-transition "}>{e.text}</span>
              </code>
            ))
          }
        </pre>
        <h2>Event type</h2>
        <p>There is a third argument you can use to specify the type of event to listen for. It can be keypress, keydown or keyup.</p>
        <p>It is recommended that you leave this argument out if you are unsure. Mousetrap will look at the keys you are binding and determine whether it should default to keypress or keydown.</p>
        <pre data-language="javascript" data-trimmed="true" className="code-block">
          {
            eventType.map((e, i) => (
              <code key={i}>
                <span className="code-line-number">{(i + 1).toString().padStart(2, ' ')}.</span><span className={e.classes + " code-line-transition "}>{e.text}</span>
              </code>
            ))
          }
        </pre>
        <h1>Definitions</h1>
        <h2>useMousetrap</h2>
        <pre data-language="javascript" data-trimmed="true" className="code-block">
          {
            useMousetrapCode.map((e, i) => (
              <code key={i}>
                <span className="code-line-number">{(i + 1).toString().padStart(2, ' ')}.</span><span className={e.classes + " code-line-transition "}>{e.text}</span>
              </code>
            ))
          }
        </pre>
      </div>
      <div className="bottom">
        <span className="link">© {(new Date()).getFullYear()} Adrien N. F.</span>&nbsp;
        <a href="/homepage" className="link">Back to Homepage</a>
      </div>
    </div>
  );
}

export default App;
