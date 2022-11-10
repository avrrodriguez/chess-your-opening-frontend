import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { Studies } from "./Studies";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { StudiesShow } from "./StudiesShow";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studies" element={<Studies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/studies/:id" element={<StudiesShow />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
