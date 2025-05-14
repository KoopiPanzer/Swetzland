import { Advice } from "./Body/Advice";
import { Body } from "./Body/Body";
import { Card } from "./Body/Card";
import { Headder } from "./Header/Headder";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Headder />
      <Body />
      <Card />
      <Advice />

      
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 15px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        Вверх
      </button>
    </>
  );
}

export default App;