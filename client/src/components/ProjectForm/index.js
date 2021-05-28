import React, { useState }  from 'react'

export const ProjectForm = () => {
    
    var[projectName, setProjectName] = useState()

    const projectNameUpdate=(event)=>{ // Dealing with name field changes to update our state
        setProjectName(event.target.value)
    }

    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        // TODO: 
        const postURL = "need this route" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                name: projectName,
                clockedIn:false,
                dates:[]
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('Your project has been added!');
        })
    }
return (
    <div>
    <form>
    <label>Project Name:</label>
    <input required onChange={projectNameUpdate}></input>
    <button type="submit"> Submit</button>
</form>
</div>
)
}
export default ProjectForm;