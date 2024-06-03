import React, { useState, useEffect, ChangeEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import assignments from '../../Database/assignments.json';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const existingAssignment = aid !== 'new' ? assignments.find(a => a._id === aid) : null;

    // Initialize the state with fetched data or default values
    const [assignment, setAssignment] = useState({
        title: '',
        description: '',
        points: 100,
        dueDate: '',
        availableFromDate: '',
        availableUntilDate: ''
    });

    // Effect to update state when existingAssignment changes
    useEffect(() => {
        if (existingAssignment) {
            setAssignment({
                title: existingAssignment.title,
                description:'The assignment is available online. Submit a link to the landing page of your web application running on Netlify.',
                points: 100,
                dueDate: '',
                availableFromDate: '',
                availableUntilDate: ''
            });
        } else {
            setAssignment({
                title: '',
                description: 'The assignment is available online. Submit a link to the landing page of your web application running on Netlify.',
                points: 100,
                dueDate: '',
                availableFromDate: '',
                availableUntilDate: ''
            });
        }
    }, [existingAssignment]);

    // Handle input changes for all fields
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAssignment({ ...assignment, [e.target.name]: e.target.value });
    };

    // Save new or update existing assignment
    const handleSave = () => {
        const assignmentData = { ...assignment, course: cid };
        if (aid === 'new') {
            dispatch(addAssignment(assignmentData));
        } else {
            dispatch(updateAssignment({ ...assignmentData, _id: aid }));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    // Cancel and navigate back without saving
    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div className="container mt-4">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Assignment Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    name="title"
                    value={assignment.title} 
                    onChange={handleChange} 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">New Assignment Description</label>
                <textarea 
                    className="form-control" 
                    id="description" 
                    name="description"
                    value={assignment.description} 
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="points" className="form-label">Points</label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="points" 
                    name="points"
                    value={assignment.points} 
                    onChange={handleChange} 
                />
            </div>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="dueDate" className="form-label">Due</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="dueDate" 
                        name="dueDate"
                        value={assignment.dueDate} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="availableFromDate" className="form-label">Available from</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="availableFromDate" 
                        name="availableFromDate"
                        value={assignment.availableFromDate} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="availableUntilDate" className="form-label">Until</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="availableUntilDate" 
                        name="availableUntilDate"
                        value={assignment.availableUntilDate} 
                        onChange={handleChange} 
                    />
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button 
                    className="btn btn-secondary me-2" 
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                <button 
                    className="btn btn-danger" 
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
}
