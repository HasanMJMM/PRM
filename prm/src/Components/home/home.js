import React, { useState } from 'react';
import Layout from "../../layout/Layout";

import FeatherIcon from 'feather-icons-react';
import {values, pick, filter, pluck} from "underscore";
import ProjectForm from '../Widgets/ProjectForm';


function Home(props) {

    const [projectsList, setProjectsList] = useState([{ No: 0o1, Name: "Mobile UI", Key: "KAN", Type: "Team-managed softwa...", Lead: "Nava" },
    { No: 0o1, Name: "Mobile UI", Key: "KAN", Type: "Team-managed softwa...", Lead: "Nava" },
    { No: 0o1, Name: "Mobile UI", Key: "KAN", Type: "Team-managed softwa...", Lead: "Nava" },
    { No: 0o1, Name: "Mobile UI", Key: "KAN", Type: "Team-managed softwa...", Lead: "Nava" },
    { No: 0o1, Name: "Mobile UI", Key: "KAN", Type: "Team-managed softwa...", Lead: "Nava" },
    { No: 0o1, Name: "Mobile UI", Key: "KAN", Type: "Team-managed softwa...", Lead: "Nava" },
    { No: 0o1, Name: "Mobile UI", Key: "KAN", Type: "Team-managed softwa...", Lead: "Nava" },
    { No: 0o1, Name: "Mobile UI", Key: "KAN", Type: "Team-managed softwa...", Lead: "Nava" },
    { No: 0o1, Name: "Mobile UI", Key: "KAN", Type: "Team-managed softwa...", Lead: "Nava" },
    { No: 0o1, Name: "Mobile UI", Key: "KAN", Type: "Team-managed softwa...", Lead: "Nava" },
    { No: 0o1, Name: "Mobile UI", Key: "KAN", Type: "Team-managed softwa...", Lead: "Nava" },
    { No: 0o1, Name: "Mobile UI", Key: "KAN", Type: "Team-managed softwa...", Lead: "Nava" }])
    console.log(projectsList)
    console.log(projectsList[0])
    const [modalType, setModalType] = useState("view")
    const [projectsAllist, setprojectsAllist] = useState([])
    

    const [modalShow, setModalShow] = useState(false);

    function handleSearch(e) {
        let val = e.target.value;
        if (val !== "") {
            let res = filter(projectsAllist, function (item) { return values(pick(item, 'Name',  'Key', 'Type','Lead')).toString().toLocaleLowerCase().includes(val.toLocaleLowerCase()); });
            setprojectsAllist(res);
            console.log(res)
        } else {
            setProjectsList(projectsAllist);
        }
    }


    return (
        <Layout>
            <div className={"container"}>
                <div className={"p-5"}>
                    <div className={"project_container"}>
                    <div className={"students_container"}>
                        <div><h3 className={"content-heading"}>Project</h3></div>
                        <div className={"students-dropdown-container d-flex justify-content-end pb-3"}>
                            <div className={"table-btn-container"}>

                                <div className={"appointment-search"}>
                                    <div className="container-fluid">
                                        <form className="d-flex" role="search">
                                            
                                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                                            <input className="form-control project_btn me-2 w-50" onChange={handleSearch} type="search" placeholder="Search"
                                       aria-label="Search"/>
                                        </form>
                                    </div>
                                </div>
                                {<button type="button" className={"btn btn-secondary students-dropdown-btn"}
                                        onClick={() => {
                                            setModalType("Add");
                                            setModalShow(true)
                                        }}>
                                    <FeatherIcon className={"action-icons text-white"} icon={"plus"}/>
                                    Add
                                </button>}
                            </div>
                        </div>
                    </div>
                    </div>
                    
                        <table className={"table table-hover table-striped "} >
                            <thead className={"top-0 position-sticky h-45"}>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Key</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Lead</th>

                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectsList.map((data, index) => (<tr>
                                    <th scope="row">{data.No}</th>
                                    <td>{data.Name}</td>
                                    <td>{data.Key}</td>
                                    <td>{data.Type}</td>
                                    <td>{data.Lead}</td>
                                    <td>
                                        {/* <FeatherIcon className={"action-icons"} icon={"eye"} /> */}
                                        {/* <FeatherIcon className={"action-icons"} icon={"edit"} /> */}
                                        <td className={"table-action"}>

                                    <div type="button"
                                            onClick={() => {
                                                setModalType("edit");
                                                setModalShow(true)
                                            }}>
                                        <FeatherIcon className={"action-icons"} icon={"edit"} onClick={() => {
                                            setModalType("edit")
                                           
                                            }}/>

                                    </div>


                                </td>
                                        {/* <FeatherIcon className={"action-icons text-red"} icon={"trash-2"} /> */}
                                        </td>
                                </tr>))}
                            </tbody>
                        </table>
                        {projectsList.length === 0 && <div className={"text-center py-5 fw-bold"}>No projects Data Found,Please Add</div>}
                </div>
            </div>
            

        </Layout>
    );
}

export default Home;