import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 p-8 rounded-xl shadow-2xl w-[400px] backdrop-blur-sm">
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <label className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                From
              </label>
              <input
                type="number"
                value="8321473972"
                className="block w-full bg-transparent text-2xl font-semibold outline-none dark:text-white"
              />
            </div>
            <select className="bg-transparent dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg px-2 py-1 text-gray-700 dark:text-gray-200">
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center -my-2">
          <button className="bg-blue-500 dark:bg-blue-600 text-white p-2 rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
            ⇅
          </button>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mt-4">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <label className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                To
              </label>
              <input
                type="number"
                className="block w-full bg-transparent text-2xl font-semibold outline-none dark:text-white"
              />
            </div>
            <select className="bg-transparent dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg px-2 py-1 text-gray-700 dark:text-gray-200">
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>

        <button className="w-full bg-blue-500 dark:bg-blue-600 text-white py-3 px-4 rounded-lg mt-6 hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors font-medium">
          Convert USD to INR
        </button>
      </div>
    </>
  );
}

export default App;
