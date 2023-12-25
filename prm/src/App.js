import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import CreateProject from "./Components/CreateProject";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/createProject" element={<CreateProject/>}/>
            </Routes>
        </div>
    );
}

export default App;
