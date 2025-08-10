import React from "react";
import Navbar from "./components/Navbar"; // ✅ Navbar file in /components
import Home from "./components/Home"; // ✅ Home page component

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar stays fixed at top */}
      <Navbar />

      {/* Main content starts below navbar */}
      <main className="flex-1 mt-20">
        <Home />
      </main>
    </div>
  );
};

export default App;
