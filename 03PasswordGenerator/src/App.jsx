import { useCallback, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_=+[{]};:'\",<.>/?";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Password Generator
        </h1>

        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            id="password"
            value={password}
            className="flex-1 p-2 border border-gray-600 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Generated password"
            readOnly
          />
          <button
            id="copyBtn"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none"
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label
            htmlFor="lengthRange"
            className="block text-sm font-medium mb-1"
          >
            Password Length: <span id="lengthValue">{length}</span>
          </label>
          <input
            type="range"
            id="lengthRange"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="includeNumbers"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded"
            />
            <label htmlFor="includeNumbers" className="text-sm">
              Numbers
            </label>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              id="includeCharacters"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => {
                  return !prev;
                });
              }}
              className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded"
            />
            <label htmlFor="includeCharacters" className="text-sm">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
