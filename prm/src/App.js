import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import CreateProject from "./Components/CreateProject";
import ProjectSetting from "./Components/ProjectSetting";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/createProject" element={<CreateProject/>}/>
                <Route path="/projectSetting" element={<ProjectSetting/>}/>
            </Routes>
        </div>
    );
}

export default App;
