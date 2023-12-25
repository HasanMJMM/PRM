import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
