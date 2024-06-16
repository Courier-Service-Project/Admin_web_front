import SignIn from "./Pages/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateOrder from "./Pages/CreateOrder/CreateOrder";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Applicant from "./Pages/Applicant/Applicant";
import Progress from "./Pages/In-Progress/Progress";
import Registered from "./Pages/Registered/Registered";
import Complete from "./Pages/Complete/Complete";
import Pending from "./Pages/Pending/Pending";
import ViewOrder from "./Pages/Pending/ViewOrder"
import Account from "./Pages/Account/Account";
import Tracker from "./Pages/TrackOrder/Tracker";
import CompleteOrder from "./Pages/Complete/CompleteOrder"
import RegisteredPerson from "./Pages/Registered/RegisteredPerson"
import NewRegistration from "./Pages/NewRegistration/NewRegistration"
import NewAdministrator from "./Pages/Administrators/NewAdministrator.jsx"
import ApplicantPerson from "./Pages/Applicant/ApplicantPerson"
import Adminprofile from "./Pages/Adminprofile/Adminprofile.jsx"
import Administratorsdetails from "./Pages/Adminprofile/Administratorsdetails"

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/createorder" element={<CreateOrder/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/applicant" element={<Applicant/>} />
        <Route path="/progress" element={<Progress/>} />
        <Route path="/complete" element={<Complete/>} />
        <Route path="/registered" element={<Registered/>} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/Pendingorder/:orderNo1" element={<ViewOrder />} />
        <Route path="/completeorder/:orderNo2" element={< CompleteOrder/>} />
        <Route path="/RegisteredPerson/:registerdid" element={<RegisteredPerson />} />
        <Route path="/account" element={<Account/>} />
        <Route path="/track" element={<Tracker/>} />
        <Route path="/order/:orderNo" element={<ViewOrder />} />
        <Route path="/newregistration" element={<NewRegistration/>} />
        <Route path="/newadministrator" element={<NewAdministrator/>} />
        <Route path="/ApplicantPerson/:applicantid" element={<ApplicantPerson/>} />
        <Route path="/adminprofile" element={<Adminprofile/>}/>
        <Route path="/adminform" element={<Administratorsdetails/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
