import React from "react";
import Header from "./component/layout/Header";
import Works from "./component/layout/Works";
import Experience from "./component/layout/Experience";
import Footer from "./component/layout/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Works />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}

export default App;
