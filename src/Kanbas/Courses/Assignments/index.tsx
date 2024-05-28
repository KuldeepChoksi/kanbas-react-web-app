import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsSearch, BsPlus, BsGripVertical } from 'react-icons/bs';
import { assignments } from '../../Database'; // Ensure the import path matches your project structure

export default function Assignments() {
    const { cid } = useParams(); // Retrieve the course ID from URL parameters
    const courseAssignments = assignments.filter(assignment => assignment.course === cid);

    return (
      <div id="wd-assignments" className="container">
        <div className="d-flex justify-content-between mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><BsSearch /></span> {/* Adding search icon */}
            </div>
            <input type="text" className="form-control" id="wd-search-assignment" placeholder="Search for Assignments" />
          </div>
          <div>
            <button id="wd-add-assignment-group" className="btn btn-danger me-2"><BsPlus /> Group</button>
            <button id="wd-add-assignment" className="btn btn-danger"><BsPlus /> Assignment</button>
          </div>
        </div>
        <h3 id="wd-assignments-title" className="mb-4">ASSIGNMENTS 40% of Total</h3>
        <ul id="wd-assignment-list" className="list-group">
          {courseAssignments.map((assignment) => (
            <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center" style={{ borderLeft: '5px solid green' }}>
              <div className="flex-grow-1 d-flex align-items-center">
                <BsGripVertical className="me-2" />
                <Link 
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    className="text-decoration-none"
                >
                    {assignment.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
}
