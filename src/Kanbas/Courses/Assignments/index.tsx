import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsSearch, BsPlus, BsGripVertical, BsTrash } from 'react-icons/bs';
import { deleteAssignment } from './reducer'; // Import the delete action

export default function Assignments() {
    const { cid } = useParams<{ cid: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
    const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);

    const handleDelete = (assignmentId: string) => {
        if (window.confirm('Are you sure you want to delete this assignment?')) {
            dispatch(deleteAssignment(assignmentId));
        }
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between mb-3">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><BsSearch /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search for Assignments" />
                </div>
                <button className="btn btn-danger" onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}>
                    <BsPlus /> Add Assignment
                </button>
            </div>
            <ul className="list-group">
                {courseAssignments.map((assignment: any) => (
                    <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <BsGripVertical className="me-2" />
                            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none">
                                {assignment.title}
                            </Link>
                        </div>
                        <div>
                            <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(assignment._id)}>
                                <BsTrash />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
