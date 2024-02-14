import SignIn from "./Pages/SignIn/SignIn";
import CreateOrder from "./Pages/CreateOrder/CreateOrder";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/create" element={<CreateOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
