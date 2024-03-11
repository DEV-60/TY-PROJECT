import React, { useState } from "react";
import countries from "../Assests/Data";
import'./Translate.css';
const Translate = () => {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [fromLang, setFromLang] = useState("en-GB");
  const [toLang, setToLang] = useState("hi-IN");

  const handleTranslation = () => {
    if (!fromText.trim()) return;
    setToText("Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      fromText
    )}&langpair=${fromLang}|${toLang}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setToText(data.responseData.translatedText);
      })
      .catch((error) => {
        console.error("Translation Error:", error);
        setToText("Translation Error");
      });
  };

  const handleExchange = () => {
    setFromText(toText);
    setToText(fromText);
    setFromLang(toLang);
    setToLang(fromLang);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleSpeak = (text, lang) => {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="container">
      <header className="header">Wanderly Translator</header>
      <div className="wrapper">
        <div className="text-input">
          <textarea
            spellCheck="false"
            value={fromText}
            onChange={(e) => setFromText(e.target.value)}
            placeholder="Enter text"
          ></textarea>
          <textarea
            spellCheck="false"
            value={toText}
            readOnly
            disabled
            placeholder="Translation"
          ></textarea>
        </div>
        <div className="controls">
          <div className="row from">
            <div className="icons">
              <i
                className="fas fa-volume-up"
                onClick={() => handleSpeak(fromText, fromLang)}
              ></i>
              <i
                className="fas fa-copy"
                onClick={() => handleCopy(fromText)}
              ></i>
            </div>
            <select value={fromLang} onChange={(e) => setFromLang(e.target.value)}>
              {Object.entries(countries).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="exchange" onClick={handleExchange}>
            <i className="fas fa-exchange-alt"></i>
          </div>
          <div className="row to">
            <select value={toLang} onChange={(e) => setToLang(e.target.value)}>
              {Object.entries(countries).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
            <div className="icons">
              <i
                className="fas fa-volume-up"
                onClick={() => handleSpeak(toText, toLang)}
              ></i>
              <i
                className="fas fa-copy"
                onClick={() => handleCopy(toText)}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleTranslation}>Translate Text</button>
    </div>
  );
};

export default Translate;
