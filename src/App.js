import  React  from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Error from "./pages/Error";


const App = () => {
    return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/project" element={<Project />} />
        <Route path="/*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
    )
  }
  
  export default App;