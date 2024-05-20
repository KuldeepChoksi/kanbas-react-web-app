import React from 'react';
import { BsFillPersonFill, BsClockFill, BsCalendarDateFill } from 'react-icons/bs'; // Import icons for visual cues

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input type="text" id="wd-name" className="form-control" defaultValue="A1 - ENV + HTML" />
            </div>
            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea id="wd-description" className="form-control" >
                    The assignment is available online
                    Submit a link to the landing page of your web application running on Netlify.
                </textarea>
            </div>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                    <input type="number" id="wd-points" className="form-control" defaultValue={100} />
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                    <select id="wd-group" className="form-control">
                        <option value="assignments">ASSIGNMENTS</option>
                    </select>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                    <select id="wd-display-grade-as" className="form-control">
                        <option value="percentage">Percentage</option>
                    </select>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                <select id="wd-submission-type" className="form-control">
                    <option value="online">Online</option>
                </select>
            </div>
            <div className="mb-3">
                <strong>Online Entry Options</strong>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="wd-text-entry" name="entry-options" value="text"/>
                    <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="wd-website-url" name="entry-options" value="url"/>
                    <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="wd-media-recordings" name="entry-options" value="media"/>
                    <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="wd-Student-Annotations" name="entry-options" value="annotation"/>
                    <label className="form-check-label" htmlFor="wd-Student-Annotations">Student Annotations</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="wd-file-upload" name="entry-options" value="file"/>
                    <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
                    <input type="text" id="wd-assign-to" className="form-control" defaultValue="Everyone" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="wd-due-date" className="form-label">Due</label>
                    <input type="date" id="wd-due-date" className="form-control" defaultValue="2024-05-13" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="wd-available-from" className="form-label">Available From</label>
                    <input type="date" id="wd-available-from" className="form-control" defaultValue="2024-05-06" />
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-secondary me-2">Cancel</button>
                <button type="submit" className="btn btn-success">Save</button>
            </div>
        </div>
    );
}
