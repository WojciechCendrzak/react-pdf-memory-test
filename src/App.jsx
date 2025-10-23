import { useState } from "react";
import { PdfSection } from "./PdfSection";
import { dependenciesString } from "./versions";

export const App = () => {
  const [section, setSection] = useState();

  const toggleSection = (newSection) => () => {
    setSection((currentSection) =>
      currentSection === newSection ? null : newSection
    );
  };

  const title = (titleSection) => {
    return section === titleSection
      ? `Hide ${titleSection}`
      : `Show ${titleSection}`;
  };

  const buttonStyle = (buttonSection) => {
    return section === buttonSection
      ? { backgroundColor: "lightblue" }
      : { backgroundColor: "lightgray" };
  };

  return (
    <>
      <h4>{`react-pdf memory test: ${dependenciesString}`}</h4>
      <button
        style={buttonStyle(PDF_SECTION)}
        onClick={toggleSection(PDF_SECTION)}
      >
        {title(PDF_SECTION)}
      </button>
      {section === PDF_SECTION && (
        <div>
          <h5>PDF section</h5>
          <PdfSection />
        </div>
      )}
    </>
  );
};

const PDF_SECTION = "pdf";
