import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import { createAssignment, updateAssignment as updateApi, getAssignment } from './client';

const AssignmentEditor = () => {
    const { cid, aid } = useParams();  // Assuming `aid` is 'new' for creating new assignments
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [assignment, setAssignment] = useState({
        title: '',
        description: '',
        points: 100,  // Default points
        course: cid,  // Include the course ID in the assignment object
    });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (aid !== 'new') {
            getAssignment(aid as any).then(response => {
                setAssignment(response.data);
                setIsLoaded(true);
            }).catch(error => {
                console.error('Error fetching assignment:', error);
                alert('Failed to fetch assignment.');
                navigate(`/courses/${cid}/assignments`);
            });
        } else {
            setIsLoaded(true);  // Ready to create a new assignment
        }
    }, [aid, cid, navigate]);

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setAssignment(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        if (!assignment.title) {
            alert("Title cannot be empty.");
            return;
        }
        try {
            if (aid === 'new') {
                const created = await createAssignment(cid as any, assignment);
                dispatch(addAssignment(created));
            } else {
                const updated = await updateApi(assignment);
                dispatch(updateAssignment(updated));
            }
            navigate(`/courses/${cid}/assignments`);
        } catch (error) {
            console.error(`Error ${aid === 'new' ? 'creating' : 'updating'} assignment:`, error);
            alert(`Failed to ${aid === 'new' ? 'create' : 'update'} assignment.`);
        }
    };

    const handleCancel = () => {
        navigate(`/courses/${cid}/assignments`);
    };

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h1>{aid === 'new' ? 'Create Assignment' : 'Edit Assignment'}</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={assignment.title} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" value={assignment.description} onChange={handleChange}></textarea>
                </div>
                <button type="button" className="btn btn-success" onClick={handleSave}>Save</button>
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default AssignmentEditor;
