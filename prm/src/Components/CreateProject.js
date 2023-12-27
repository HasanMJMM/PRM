import React, {useState} from "react";
import Layout from "../layout/Layout";
import '../App.css';

function CreateProject() {
    const [formData, setFormData] = useState({
        name: "",
        key: "",
        teamType: "",
        desc: "",
        errors: {},
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}));
    };
    const validateForm = () => {
        const errors = {};
        if (!formData.name) {
            errors.name = "Project name is required!";
        }
        if (!formData.key) {
            errors.key = "Key is required!";
        }
        if (!formData.teamType) {
            errors.teamType = "Team type is required!"
        }
        if (!formData.desc) {
            errors.desc = "Description is required!";
        }
        setFormData((prevState) => ({...prevState, errors}));
        return Object.keys(errors).length === 0;
    }
    const handleCancel = () => {
        console.log("Form is cancelled")
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData)
        } else {
            console.log("Form is invalid");
        }
    }

    return (
        <Layout>
            <div className='container'>
                <div className='col-md-6'>
                    <div className='row mt-4'>
                        <h2>Create Project</h2>
                        <p>Add your project's details to create your new project. Edit project details anytime in
                            project settings.</p>
                        <div className='col-md-10'>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name"
                                           placeholder="Enter your project name" value={formData.name}
                                           onChange={handleChange}/>
                                    {formData.errors.name && (
                                        <p style={{color: "red"}}>{formData.errors.name}</p>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="key" className="form-label">Key</label>
                                    <input type="text" className="form-control" name="key"
                                           placeholder="Enter your key" value={formData.key} onChange={handleChange}/>
                                    {formData.errors.key && (
                                        <p style={{color: "red"}}>{formData.errors.key}</p>
                                    )}
                                </div>
                                <div className="mb-3">
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
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" name="desc" rows="3" value={formData.desc}
                                              onChange={handleChange}></textarea>
                                    {formData.errors.desc && (
                                        <p style={{color: "red"}}>{formData.errors.desc}</p>
                                    )}
                                </div>
                                <div className='d-flex justify-content-end mt-4'>
                                    <button className="btn btn-secondary me-5" type="submit"
                                            onClick={handleCancel}>Cancel
                                    </button>
                                    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Create
                                        project
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateProject;