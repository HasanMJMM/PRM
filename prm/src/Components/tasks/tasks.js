import React, { useState } from 'react';
import Layout from "../../layout/Layout";
import FeatherIcon from 'feather-icons-react';
import {values, pick, filter, pluck} from "underscore";
import { TaskForm } from './taskForm';
import DropPage from '../Pages/DropPage';
 


function Tasks(props) {

    const [taskList, setTaskList] = useState([{ No: 0o1, TaskName: "Develop Website ", Description: "Build a responsive website for the client", DueDate: "2024-02-15", CreatedBy: "Nava",Status:"Done" },
    { No: 0o1, TaskName: "Develop Website ", Description: "Build a responsive website for the client", DueDate: "2024-02-15", CreatedBy: "Nava",Status:"Done" },
    { No: 0o1, TaskName: "Develop Website ", Description: "Build a responsive website for the client", DueDate: "2024-02-15", CreatedBy: "Nava",Status:"Done" },
    { No: 0o1, TaskName: "Develop Website ", Description: "Build a responsive website for the client", DueDate: "2024-02-15", CreatedBy: "Nava",Status:"Done" },
    { No: 0o1, TaskName: "Develop Website ", Description: "Build a responsive website for the client", DueDate: "2024-02-15", CreatedBy: "Nava",Status:"Done" },
    { No: 0o1, TaskName: "Develop Website ", Description: "Build a responsive website for the client", DueDate: "2024-02-15", CreatedBy: "Nava",Status:"Done" },
    { No: 0o1, TaskName: "Develop Website ", Description: "Build a responsive website for the client", DueDate: "2024-02-15", CreatedBy: "Nava",Status:"Done" },
    { No: 0o1, TaskName: "Develop Website ", Description: "Build a responsive website for the client", DueDate: "2024-02-15", CreatedBy: "Nava",Status:"Done" }
    
    ])
    console.log(taskList)
    console.log(taskList[0])
    const [modalType, setModalType] = useState("view")
    const [projectsAllist, setprojectsAllist] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [update, setUpdate] = useState(false);
    const [graph,setGraph] = useState(false);
    const [loadGraph, setLoadGraph] = useState(false);

    function handleSearch(e) {
        let val = e.target.value;
        if (val !== "") {
            let res = filter(projectsAllist, function (item) { return values(pick(item, 'Name',  'Key', 'Type','Lead')).toString().toLocaleLowerCase().includes(val.toLocaleLowerCase()); });
            setprojectsAllist(res);
            console.log(res)
        } else {
            setTaskList(projectsAllist);
        }
    }
    function colorChange(status) {
        switch (status) {
          case "RUNNING":
            return "bg-warning text-dark"
          case "Done":
            return "bg-success text-white"
          case "FAILED":
            return "bg-danger text-white"
          default:
            return ""
        }
      }

    return (
        <Layout>
            <div className={"container"}>
                <div className={"p-5"}>
                    <div className={"project_container"}>
                    <div className={"students_container"}>
                        <div><h3 className={"content-heading"}>Tasks</h3></div>
                        <div className={"students-dropdown-container d-flex justify-content-end pb-3"}>
                        {!graph &&
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
                                <button type="button" className={"btn btn-secondary tasks-dropdown-btn"}
                onClick={() => {
                  setModalType("Add");
                  setModalShow(true)
                }}>
                <FeatherIcon className={"action-icons text-white"} icon={"plus"} />
                Add Tasks
              </button> 
              </div>}
              <div>
              <button className={"btn btn-secondary tasks-dropdown-btn"} type="button"
                                    aria-expanded="false" onClick={()=> setGraph(!graph)}>
                                <FeatherIcon className={"action-icons text-white"} icon={"bar-chart-2"} />
                                {graph ? "Table" : "Graph"}
                            </button> 
                            </div>                             
                            
                        </div>
                    </div>
                    </div>  
                    {!graph&&<div>
                                        
                        <table className={"table table-hover table-striped "} >
                            <thead className={"top-0 position-sticky h-45"}>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Task Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Due Date</th>
                                    <th scope="col">Created By</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {taskList.map((data, index) => (<tr>
                                    <th scope="row">{data.No}</th>
                                    <td>{data.TaskName}</td>
                                    <td>{data.Description}</td>
                                    <td>{data.DueDate}</td>
                                    <td>{data.CreatedBy}</td>
                                    <td>
                      <div className={"taskstate " + (colorChange(data.Status))}
                        onClick={() => {
                        //  let temp = { ...data }
                         // temp.date = data.date?.slice(0, 10)
                          //setSelectedTask(temp)
                          setModalShow(true)
                          setModalType("State");
                        }
                        }>{data.Status}</div>

                    </td>
                                    <td>
                                        {/* <FeatherIcon className={"action-icons"} icon={"eye"} /> */}
                                        {/* <FeatherIcon className={"action-icons"} icon={"edit"} /> */}
                                        <td className={"table-action"}>

                                    <div type="button"
                                            onClick={() => {
                                                setModalType("View");
                                                setModalShow(true)
                                            }}>
                                        <FeatherIcon className={"action-icons"} icon={"eye"} onClick={() => {
                                            setModalType("View")
                                           
                                            }}/>

                                    </div>
                                </td>
                                        {/* <FeatherIcon className={"action-icons text-red"} icon={"trash-2"} /> */}
                                        </td>
                                   
                                </tr>))}
                            </tbody>
                        </table>
                        {taskList.length === 0 && <div className={"text-center py-5 fw-bold"}>No projects Data Found,Please Add</div>}
                </div>}
                {graph &&< DropPage 
                                           />}
                </div>  
            </div>
            <TaskForm
        show={modalShow}
        type={modalType}
        // selectedTask={selectedTask}
         update={() => setUpdate(!update)}
        onHide={() => {
          setModalShow(false)
        //   setSelectedTask(null)
        }}
      />
            
        </Layout>
    );
}

export default Tasks;