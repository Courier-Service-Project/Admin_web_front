import SignIn from "./Pages/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateOrder from "./Pages/CreateOrder/CreateOrder";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Applicant from "./Pages/Applicant/Applicant";
import Administrators from "./Pages/Administrators/Administrators";
import Progress from "./Pages/In-Progress/Progress";
import Registered from "./Pages/Registered/Registered";
import Complete from "./Pages/Complete/Complete";
import Pending from "./Pages/Pending/Pending";
import Tracker from "./Pages/TrackOrder/Tracker";



function App() {
  return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<SignIn />} />
        <Route path="/createorder" element={<CreateOrder/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/applicant" element={<Applicant/>} />
        <Route path="/administrator" element={<Administrators/>} />
        <Route path="/progress" element={<Progress/>} />
        <Route path="/complete" element={<Complete/>} />
        <Route path="/registered" element={<Registered/>} />
        <Route path="/pending" element={<Pending/>} />
        <Route path="/track" element={<Tracker/>} />
      </Routes>
     </BrowserRouter>



   
  );
}

export default App;
