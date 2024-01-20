import React, { useEffect, useState } from 'react'
import { Modal } from "react-bootstrap"
// import formHandler from "../../utils/FormHandler"
// import { validateTask } from "../../utils/validation"
// import axios from 'axios';
// import { toast } from "react-toastify";
import { isEmpty } from 'underscore';
import { useDispatch } from "react-redux";
import { toggleConfirmationDialog, toggleLoader } from "../../redux/actions";
import { useNavigate } from 'react-router-dom';
import { values, pick, filter, pluck } from "underscore";

export const TaskForm = (props) => {
    const [formData, setFormData] = useState({
        taskname: "",
        description: "",
        // teamType: "",
        priority: "",
        description: "",
        assignedTo: "",
        errors: {},
    });
    const navigate = useNavigate();

    //  useEffect(() => {
    //   if (props === "update") {
    //         setFormData(initialData);
    //     }
    //  }, [props, initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.taskname) {
            errors.taskname = "Project ask Name is required!";
        }
        if (!formData.key) {
            errors.key = "Key is required!";
        }
        if (!formData.teamType) {
            errors.teamType = "Team type is required!"
        }
        if (!formData.description) {
            errors.description = "description is required!";
        }
        if (!formData.date) {
            errors.date = "date is required!";
        }

        if (!formData.priority) {
            errors.priority = "priority type is required!"
        }
        if (!formData.assignedTo) {
            errors.assignedTo = "Assigned To type is required!"
        }
        setFormData((prevState) => ({ ...prevState, errors }));
        return Object.keys(errors).length === 0;
    }
    const handleCancel = () => {
        console.log("Form is cancelled")
        navigate('/home')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData)
        } else {
            console.log("Form is invalid");
        }
    };
    function statusUpdate(status) {
        values.status = status
        console.log(props.selectedAppointment)
        console.log(props.selectedAppointment._id)

        // dispatch(toggleLoader(true))
        // axios.put(`${process.env.REACT_APP_HOST}/institute/${instituteId}/student/${studentId}/Appointment/${props.selectedAppointment._id}`, values)
        // // axios.put(`${process.env.REACT_APP_HOST}/institute/${instituteId}/marks/${props.selectedMarks._id}`, values)
        //     .then((res) => {
        //         console.log(res.data)
        //         toast.success(`Successfully Updated`)
        //         props.update()
        //     }).catch((err) => {
        //     toast.error("Something went wrong")
        // }).finally(() => {
        //     dispatch(toggleLoader(false))
        //     setIsSubmit(false);
        //   setIsSubmit(false)
        //     resetForm()
        //     props.onHide()
        // })

    }
    const [formSubmitted, setFormSubmitted] = useState(false);


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            scrollable={true}
        >
            <Modal.Header closeButton onHide={() => {
                // if (!formSubmitted) {
                //     initForm({});
                // }
            }}>
                {<Modal.Title id="contained-modal-title-vcenter">
                    {props.type === "Add" && <div> Add Task Details</div>}
                    {props.type === "View" && <div> View Task Details</div>}
                    {props.type === "Edit" && <div> Edit Task Details</div>}
                    {props.type === "State" && <div> Task Status Details</div>}
                </Modal.Title>}
            </Modal.Header>
            <Modal.Body scrollable>
                <form onSubmit={handleSubmit}>

                    {<div className={"mb-4"}>

                        <label htmlFor="exampleInputEmail5"
                            className={`form-label ${["View", "State"].includes(props.type) ? " profile-view-text " : ""}`}>Task Name
                        </label>
                        <input name={"taskname"} placeholder={"Enter Task Name"}
                            className={` form-control  ${formData.errors.taskname ? "border-red" : ""} ${["View", "State"].includes(props.type) ? " form-control:disabled" : ""}  `}

                            id="exampleInputEmail5"
                            onChange={handleChange}
                            value={formData.taskname}


                            disabled={["View", "State"].includes(props.type)}
                        />
                        {formData.errors.taskname && <p className={"text-red"}>{formData.errors.taskname}</p>}


                    </div>}
                    {["Add", "State", "View"].includes(props.type) && <div className={"col-md-12"}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail5"
                                className={`form-label ${["View", "State"].includes(props.type) ? " profile-view-text " : "form-label"}`}>Description</label>
                            <textarea name={"description"} placeholder={"Enter Description"}
                                className={`form-control ${formData.errors.description ? "border-red" : ""}${["View", "State"].includes(props.type) ? " form-control:disabled " : ""} `}
                                id="exampleInputEmail5"
                                onChange={handleChange}
                                value={formData.description}
                                aria-describedby="emailHelp"
                                disabled={["View", "State"].includes(props.type)} />
                            {formData.errors.description && <p className={"text-red"}>{formData.errors.description}</p>}
                        </div>
                    </div>}
                    {<div className={"mb-4"}>

                        <label htmlFor="exampleInputEmail5"
                            className={`form-label ${["View", "State"].includes(props.type) ? " profile-view-text " : "form-label"}`}>Date </label>
                        <input id="startDate"
                            className={`form-control ${formData.errors.date ? "border-red" : ""} ${["View", "State"].includes(props.type) ? " form-control:disabled " : ""} `}
                            onChange={handleChange}
                            name={"date"}
                            value={formData.date}
                            type="date"

                            disabled={["View", "State"].includes(props.type)} />

                        {formData.errors.date && <p className={"text-red"}>{formData.errors.date}</p>}

                    </div>}
                    <div className={"mb-4"}>

                        <label htmlFor="exampleInputEmail1"
                            className={`form-label ${["View", "State"].includes(props.type) ? " profile-view-text " : "form-label"}`}>priority</label>
                        <select className={`form-control ${formData.errors.priority ? "border-red" : ""} ${["View", "State"].includes(props.type) ? " form-control:disabled " : ""} `}
                            onChange={handleChange}
                            value={formData.priority}
                            name={"priority"}
                            aria-label="Default select example"
                            disabled={["View", "State"].includes(props.type)}>
                            <option hidden> Select Priority Type</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="High">High</option>


                        </select>
                        {formData.errors.priority && <p className={"text-red"}>{formData.errors.priority}</p>}

                    </div>



                    {<div className={"mb-4"}>

                        <label htmlFor="exampleInputEmail5"
                            className={`form-label ${["View", "State"].includes(props.type) ? " profile-view-text " : ""}`}>Assigned To
                        </label>
                        <input name={"assignedTo"} placeholder={"Enter Tassigned To Name"}
                            className={` form-control  ${formData.errors.assignedTo ? "border-red" : ""} ${["View", "State"].includes(props.type) ? " form-control:disabled" : ""}  `}

                            id="exampleInputEmail5"
                            onChange={handleChange}
                            value={formData.assignedTo}


                            disabled={["View", "State"].includes(props.type)}
                        />
                        {formData.errors.assignedTo && <p className={"text-red"}>{formData.errors.assignedTo}</p>}


                    </div>}
                    {/* <input type="hidden" id="createdBy" name="createdBy" value="Current User">
                    <input type="hidden" id="createdAt" name="createdAt" value="2024-01-13T12:00:00"> */}

                    {/* <div className="mb-4">
                                <label htmlFor="teamType" className="form-label">Team type</label>
                                <select name="teamType" className="form-select" value={formData.teamType}
                                        onChange={handleChange}>
                                    <option value='Team type 01'>Team type 01</option>
                                    <option value='Team type 02'>Team type 02</option>
                                    <option value='Team type 03'>Team type 03</option>
                                    <option value='Team type 04'>Team type 04</option>
                                    <option value='Team type 05'>Team type 05</option>
                                </select>
                                {formData.errors.teamType && (
                                    <p style={{color: "red"}}>{formData.errors.teamType}</p>
                                )}
                            </div> */}






                </form>
            </Modal.Body>
            <Modal.Footer>
                <button
                    type="button"
                    className={"btn btn-secondary"}
                    onClick={() => {
                        if (!formSubmitted) { // Prevent hiding the modal if the form is submitted
                            props.onHide();

                        }
                    }}
                >
                    Cancel
                </button>

                {/*{props.type === "Add" && <button
                    type="button"
                    className={"btn btn-secondary tasks-dropdown-btn"}
                    onClick={handleSubmit}
                >
                    Submit
                </button>}

                {props.type === "State" && <div className='d-flex gap-2'>
                    <button
                        type="button"
                        className={"btn btn-warning"}
                        // onClick={() => statusUpdate("RUNNING")}
                    >
                        Running
                    </button>
                    <button
                        type="button"
                        className={"btn btn-success"}
                        // onClick={() => statusUpdate("COMPLETED")}
                    >
                        Completed
                    </button>
                    <button
                        type="button"
                        className={"btn btn-danger"}
                        // onClick={() => statusUpdate("FAILED")}
                    >
                        Failed
                    </button>
                </div>}

                {props.type === "Edit" && <button
                    type="button"
                    className={"btn btn-secondary tasks-dropdown-btn"}
                    onClick={handleSubmit}
                >
                    Update
                </button>} */}
                {/* <div className='d-flex justify-content-end mt-4'>
                                <button className="btn btn-secondary me-5" type="submit"
                                        onClick={handleCancel}>Cancel
                                </button>
                                <button className="btn btn-primary" type="submit"
                                        onClick={handleSubmit}>{props === "create" ? "Create project" : "Update"}</button>
                            </div> */}
                {/* <button
                    type="button"
                    className={"btn btn-secondary"}
                    onClick={() => {
                        // if (!formSubmitted) { // Prevent hiding the modal if the form is submitted
                        //     props.onHide();
                        //     initForm({});
                        // }
                    }}
                >
                    Cancel
                </button> */}
                {/*["View","Add"].includes(props.type) &&*/}
                {props.type === "State" && <div className='d-flex gap-2'>
                    <button
                        type="button"
                        className={"btn btn-success"}
                        onClick={() => statusUpdate("ACCEPTED")}
                    >
                        In Progress
                    </button>
                    <button
                        type="button"
                        className={"btn btn-danger"}
                        onClick={() => statusUpdate("DECLINE")}
                    >
                        Canceled
                    </button>
                    {/* <button*/}
                    {/*    type="button"*/}
                    {/*    className={"btn btn-warning"}*/}
                    {/*    onClick={()=>statusUpdate("REQUESTED")}*/}
                    {/*>*/}
                    {/*    Request*/}
                    {/*</button>*/}
                </div>}
                {props.type === "Add" && <button
                    type="button"
                    className={"btn btn-secondary students-dropdown-btn"}
                    onClick={handleSubmit}
                >
                    Add
                </button>}
            </Modal.Footer>
        </Modal>
    )
}
