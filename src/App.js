import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Add";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './app.css'
import About from "./pages/View";
import Edit from "./pages/Edit";

function App() {
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/view" element={<About/>}></Route>
                <Route path="/edit/:editid" element={<Edit/>}></Route>
            </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
