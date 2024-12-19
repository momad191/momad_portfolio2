"use client";
import React, { useEffect, useState } from "react";
import TranslationAction from "@/app/features/translation/TranslationAction";
import { FaArrowRight } from "react-icons/fa";

const TranslationUi = () => {
  const [languageFrom, setLanguageFrom] = useState("");
  const [languageTo, setLanguageTo] = useState("");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleTranslate = () => {
    // This is a placeholder for the translation function. Replace it with actual logic.
    const result = TranslationAction(inputText, languageFrom, languageTo);
    if (languageTo == languageFrom) {
      alert("please chanche on of your selections");
    } else if (inputText == "") {
      alert("please put the text to be translated");
    } else {
      setOutputText(result);
    }
  };

  const handleLanguageFrom = (event) => {
    const languageFrom = event.target.value;
    setLanguageFrom(languageFrom);
  };
  const handleLanguageTo = (event) => {
    const languageTo = event.target.value;
    setLanguageTo(languageTo);

    if (languageTo == languageFrom) {
      alert("please chanche on of your selections");
    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading == true) {
    return (
      <div className="bg-sky-100 flex items-center justify-center min-h-screen mt-10">
        <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-black rounded-full animate-pulse delay-75"></div>
        <div className="w-2 h-2 bg-black rounded-full animate-pulse delay-150"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-400 flex items-center justify-center min-h-screen mt-20 border-accent">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full  mr-10 ml-10 ">
        {/* Title */}
        <h1 className="text-2xl font-bold text-black text-center mb-6">
          Email writing
        </h1>
        <div className="flex-1">
          <label htmlFor="inputText" className="text-black font-semibold">
            Language From {languageFrom}
          </label>
          <div className="relative">
            <select
              className="block w-full px-4 py-2 text-black bg-blue-100 border border-blue-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              value={languageFrom}
              onChange={handleLanguageFrom}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
              <option value="Franc">Franc</option>
            </select>
          </div>
        </div>

        <div className="flex-1">
          <label htmlFor="inputText" className="text-black font-semibold">
            : to {languageTo}
          </label>
          <div className="relative">
            <select
              className="block w-full px-4 py-2 text-black bg-blue-100 border border-blue-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              value={languageTo}
              onChange={handleLanguageTo}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
              <option value="Franc">Franc</option>
            </select>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Input Text Area */}
          <div className="flex-1">
            <label htmlFor="inputText" className="text-black font-semibold">
              Input Text
            </label>
            <textarea
              id="inputText"
              rows="5"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter the text to be translated"
              className="w-full p-4 mt-2 bg-sky-50 border-2 border-sky-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none text-black"
            />
          </div>

          {/* Translate Button */}
          <button
            onClick={handleTranslate}
            className=" flex justify-start items-center bg-sky-500 text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-sky-600 transform hover:scale-105 transition duration-200 mt-4 md:mt-0"
          >
            Translate
            <FaArrowRight />
          </button>

          {/* Output Text Area */}
          <div className="flex-1">
            <label htmlFor="outputText" className="text-black font-semibold">
              Output Text
            </label>
            <div
              className="w-full h-[200px] overflow-scroll p-4 mt-2 bg-sky-50 border-2 border-sky-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none text-black"
              readOnly
            >
              {outputText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslationUi;
