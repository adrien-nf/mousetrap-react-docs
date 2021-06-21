# Mousetrap-React
Mousetrap-React is a [Mousetrap](https://github.com/ccampbell/mousetrap) wrapper for [ReactJS](https://github.com/facebook/react).
## Installation
Mousetrap-React is available as an [npm package](https://www.npmjs.com/package/mousetrap-react).

```sh
// With npm
npm install mousetrap-react
```

## Usage
Check the [official Mousetrap documentation](https://craig.is/killing/mice) for a complete list of the keys you can use.
### Basic usage
```jsx
import useMousetrap from "mousetrap-react";

function App() {
    // Single keys
    useMousetrap("4", () => { console.log("4") });
    useMousetrap("esc", () => { console.log("Escape") });

    // Combinations
    useMousetrap("command+shift+k", () => { console.log("COMMAND + SHIFT + K") });

    // Map multiple combinations to the same callback
    useMousetrap(['command+k', 'ctrl+k'], () => { console.log("COMMAND/CTRL + K") });

    // Gmail style sequences
    useMousetrap("g i", () => { console.log("Go to inbox") });
    useMousetrap("* a", () => { console.log("Select all") });

    // Konami code
    useMousetrap("up up down down left right left right b a enter", () => { console.log("Konami code") });

    return (
        <p>Your render here</p>
    )
}

export default App;
```
### Prevent default
If you wish to prevent the default action, simply return false in your callback.
```jsx
useMousetrap("ctrl+s", () => {
    console.log("Triggering callback without saving the page")
    // Add return false here
    return false;
});
```
### Catching event
You may catch the event aswell.
```jsx
useMousetrap("ctrl+z", (e: Mousetrap.ExtendedKeyboardEvent, combo: string) => {
    console.log("Event object:", e);
    e.preventDefault();
    console.log(`You've executed the ${combo} combo.`)
});
```
### Text fields
By default all keyboard events will not fire if you are inside of a ``textarea``, ``input``, or ``select`` to prevent undesirable things from happening.

If you want them to fire you can add the class ``mousetrap`` to the element.
```html
<textarea className="mousetrap"></textarea>
```
### Event type
There is a third argument you can use to specify the type of event to listen for. It can be keypress, keydown or keyup.

It is recommended that you leave this argument out if you are unsure. Mousetrap will look at the keys you are binding and determine whether it should default to keypress or keydown.
```jsx
Mousetrap.bind('esc', function() { console.log('Escape'); }, 'keyup');
```
## Definitions
### useMousetrap
```jsx
const useMousetrap = (
    keys: string | string[],
    callback: (
        e: Mousetrap.ExtendedKeyboardEvent,
        combo: string
        ) => any,
    action?: "keypress" | "keydown" | "keyup" | undefined
) => void;
```