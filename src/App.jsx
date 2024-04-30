import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { Perfil } from "./pages/perfil.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Perfil/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
