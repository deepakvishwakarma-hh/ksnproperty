"use client";
import { useEffect } from "react";

export default function GoogleTranslate(): JSX.Element {
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    // @ts-ignore
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    // @ts-ignore
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "auto",
        autoDisplay: false,
        includedLanguages: "ru,en,fr,ar",
        // @ts-ignore
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  return (
    <>
      <div className="h-10 border-2 border-primary inline-block rounded-full bg-white">
        <div
          id="google_translate_element"
          style={{
            width: "180px",
            height: "10px",
            padding: "5px",
          }}
        ></div>
      </div>
    </>
  );
}
