import './App.css';
import {Route, Routes} from "react-router-dom";

import Home from "./Components/home/home";
import Tasks from "./Components/tasks/tasks";
import Calender from "./Components/calender/calender";
import Member from "./Components/member/member";
import Settings from "./Components/settings/settings";
import Login from "./Components/logout/login";
import CreateProject from "./Components/Pages/CreateProject";
import ProjectSetting from "./Components/Pages/ProjectSetting";
import EditProfile from "./Components/Pages/EditProfile";
import CreateOrganization from "./Components/Pages/CreateOrganization";


function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="/calendar" element={<Calender/>}/>
                <Route path="/member" element={<Member/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/createProject" element={<CreateProject/>}/>
                <Route path="/projectSetting" element={<ProjectSetting/>}/>
                <Route path="/editProfile" element={<EditProfile/>}/>
                <Route path="/createOrganization" element={<CreateOrganization/>}/>
            </Routes>
        </div>
    );
}

export default App;
