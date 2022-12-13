import React from "react";
import "./App.css";
import Body from "layouts/Body";
import Header from "layouts/Header";

const App: React.FC = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center bg-specialWhite font-Epilogue'>
      <Header />
      <Body />
    </div>
  );
};

export default App;
