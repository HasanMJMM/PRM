import React from "react";
import ProjectForm from "../Widgets/ProjectForm";
import Layout from "../../layout/Layout";


function CreateProject(props) {
    const handleCreate = (e, formData) => {
        console.log("Create:", formData);
        // e.preventDefault();
        // if (validateForm()) {
        //     console.log(formData)
        // } else {
        //     console.log("Form is invalid");
        // }
    };
    return (
        <Layout>
            <ProjectForm props="create" onSubmit={handleCreate} />
        </Layout>
    )
}
export default CreateProject