import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAssignment, setAssignments } from './reducer';
import * as client from './client';  // Assuming client functions are set up similar to modules
import { BsGripVertical, BsTrash, BsPlus } from 'react-icons/bs';

export default function Assignments() {
    const { cid } = useParams<{ cid: string }>();  // Strongly typing the useParams
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
    const courseAssignments = assignments.filter((assignment: { course: string }) => assignment.course === cid);

    useEffect(() => {
        const fetchAssignments = async () => {
            if (cid) {
                const fetchedAssignments = await client.findAssignmentsForCourse(cid);
                dispatch(setAssignments(fetchedAssignments));
            }
        };

        fetchAssignments();
    }, [cid, dispatch]);

    const handleDelete = async (assignmentId: string) => {
        if (window.confirm('Are you sure you want to delete this assignment?')) {
            await client.deleteAssignment(assignmentId);
            dispatch(deleteAssignment(assignmentId));
        }
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between mb-3">
                <h2>Assignments</h2>
                <button className="btn btn-primary" onClick={() => navigate(`/courses/${cid}/assignments/new`)}>
                    <BsPlus /> Add Assignment
                </button>
            </div>
            <ul className="list-group">
                {courseAssignments.map((assignment: any) => (
                    <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <BsGripVertical className="me-2" />
                            <Link to={`/courses/${cid}/assignments/${assignment._id}`}>
                                {assignment.title}
                            </Link>
                        </div>
                        <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(assignment._id)}>
                            <BsTrash />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
