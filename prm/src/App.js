import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Pages/Home";
import CreateProject from "./Components/Pages/CreateProject";
import ProjectSetting from "./Components/Pages/ProjectSetting";
import EditProfile from "./Components/Pages/EditProfile";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/createProject" element={<CreateProject/>}/>
                <Route path="/projectSetting" element={<ProjectSetting/>}/>
                <Route path="/editProfile" element={<EditProfile/>}/>
            </Routes>
        </div>
    );
}

export default App;
