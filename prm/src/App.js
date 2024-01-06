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
import DropPage from "./Components/Pages/DropPage";
import Dad from "./Components/dad/Dad";


function App() {
    return (
        <div>
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
                <Route path="/dropPage" element={<DropPage/>}/>
                <Route path="/dad" element={<Dad/>}/>
            </Routes>
        </div>
    );
}

export default App;
