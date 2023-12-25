import React from "react";
import Layout from "../layout/Layout";
import '../App.css';

function CreateProject() {
    return (
        <Layout>
            <div className='container'>
                <div className='col-md-6'>
                    <div className='row mt-4'>
                        <h2>Create Project</h2>
                        <p>Add your project's details to create your new project. Edit project details anytime in
                            project settings.</p>
                        <div className='col-md-10'>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name"
                                       placeholder="Enter your project name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="key" className="form-label">Key</label>
                                <input type="text" className="form-control" id="key"
                                       placeholder="Enter your key"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="teamType" className="form-label">Team type</label>
                                <select id="teamType" className="form-select">
                                    <option selected>Team type 01</option>
                                    <option>Team type 02</option>
                                    <option>Team type 03</option>
                                    <option>Team type 04</option>
                                    <option>Team type 05</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" id="description" rows="3"></textarea>
                            </div>
                            <div className='d-flex justify-content-end mt-4'>
                                <button className="btn btn-secondary me-5" type="submit">Cancel</button>
                                <button className="btn btn-primary" type="submit">Create project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateProject;