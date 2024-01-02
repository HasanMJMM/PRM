import React, {useState} from "react";
import Layout from "../../layout/Layout";

function CreateOrganization() {
    const [formData, setFormData] = useState({
        oName: "",
        orgType: "",
        desc: "",
        errors: {},
    });
    const validateForm = () => {
        const errors = {};
        if (!formData.oName) {
            errors.oName = "Workspace name is required!";
        }
        if (!formData.orgType) {
            errors.orgType = "Workspace type is required!";
        }
        setFormData((prevState) => ({...prevState, errors}));
        return Object.keys(errors).length === 0;
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Success')
            console.log(formData)
        } else {
            console.log('Invalid form')
        }
    }

    return (
        <Layout>
            <div className='container'>
                <div className='col-lg-6 col-md-12'>
                    <div className='row mt-5'>
                        <div className='common-color'>
                            <h2>Create workspace</h2>
                        </div>
                        <div>
                            <p>
                                Enhance your efficiency by simplifying access to boards, making them easily accessible
                                in a centralized location for everyone.</p>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className='col-lg-10 col-md-9 mt-3'>
                                    <div className="mb-4">
                                        <label htmlFor="oName" className="form-label">Workspace name</label>
                                        <input type="text" className="form-control" placeholder="Workspace name"
                                               name='oName' value={formData.oName} onChange={handleChange}
                                        />
                                        {formData.errors.oName && (
                                            <p style={{color: "red"}}>{formData.errors.oName}</p>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="orgType" className="form-label">Workspace type</label>
                                        <select name="orgType" className="form-select" value={formData.orgType}
                                                onChange={handleChange}>
                                            <option value='Engineering'>Engineering</option>
                                            <option value='IT'>IT</option>
                                            <option value='Sales CRM'>Sales CRM</option>
                                            <option value='Operations'>Operations</option>
                                            <option value='Small Business'>Small Business</option>
                                            <option value='Education'>Education</option>
                                            <option value='Marketing'>Marketing</option>
                                            <option value='Human Resources'>Human Resources</option>
                                            <option value='Other'>Other</option>
                                        </select>
                                        {formData.errors.orgType && (
                                            <p style={{color: "red"}}>{formData.errors.orgType}</p>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="desc" className="form-label">Description (Optional)</label>
                                        <textarea className="form-control" name="desc" rows="3" value={formData.desc}
                                                  onChange={handleChange}></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end mt-5'>
                                        <button className="btn btn-primary" type="submit"
                                                onClick={handleSubmit}>Create Workspace
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateOrganization