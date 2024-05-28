import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BsFillPersonFill, BsClockFill, BsCalendarDateFill } from 'react-icons/bs'; // Example icons
import { assignments } from '../../Database'; // Adjust the import path as necessary

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const assignment = assignments.find(a => a._id === aid);

    if (!assignment) {
        return <div>Assignment not found</div>; // Display error if no assignment is found
    }

    const handleSave = () => {
        // Placeholder for save logic
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor" className="container">
            <h3>Assignment Name</h3>
            <input type="text" className="form-control mb-3" defaultValue={assignment.title} />

            <h3>Description</h3>
            <textarea className="form-control mb-3" defaultValue="The assignment is available online. Submit a link to the landing page of your web application running on Netlify.">
            </textarea>

            <h3>Points</h3>
            <input type="number" className="form-control mb-3" defaultValue={100} />

            <h3>Assign to</h3>
            <input type="text" className="form-control mb-3" defaultValue="Everyone" />

            <div className="row">
                <div className="col-md-6">
                    <h3>Due</h3>
                    <input type="date" className="form-control" defaultValue="2024-05-13" />
                </div>
                <div className="col-md-6">
                    <h3>Available from</h3>
                    <input type="date" className="form-control" defaultValue="2024-05-06" />
                </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
                <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
                <button type="button" onClick={handleSave} className="btn btn-success">Save</button>
            </div>
        </div>
    );
}
