import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"

import Home from "./pages/Home"
import FormPage from "./pages/FormPage"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

function App(){
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<FormPage />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App