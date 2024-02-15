import SignIn from "./Pages/SignIn/SignIn";
import CompeteForm from "./Components/CreateOrder/CompeteForm"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/create" element={<CompeteForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
