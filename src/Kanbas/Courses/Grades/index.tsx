import React from 'react';
import { BsSearch, BsDownload, BsUpload, BsFilter, BsGear } from 'react-icons/bs';

export default function Grades() {
    const students = [
        { name: "Dumb Cat", grades: ["100%", "96.67%", "92.18%", "66.22%"] },
        { name: "Cringe' Cat", grades: ["100%", "100%", "100%", "100%"] },
        { name: "Waao Cat", grades: ["100%", "100%", "100%", "99%"] },
        { name: "Mao Cat", grades: ["100%", "96.67%", "88.03%", "98.99%"] },
        { name: "Paripapa parirari tiki Cat", grades: ["100%", "96.67%", "98.37%", "100%"] },
        { name: "Huh Cat", grades: ["100%", "100%", "100%", "100%"] }
    ];

    return (
        <div className="container mt-3">
            <div className="row mb-3">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="input-group">
                        <span className="input-group-text"><BsSearch /></span>
                        <input type="text" className="form-control" placeholder="Search Students" />
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <button className="btn btn-outline-secondary me-2"><BsUpload /> Import</button>
                    <button className="btn btn-outline-secondary me-2"><BsDownload /> Export</button>
                    <button className="btn btn-outline-secondary"><BsGear /></button>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="input-group">
                        <span className="input-group-text"><BsSearch /></span>
                        <input type="text" className="form-control" placeholder="Search Assignments" />
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <button className="btn btn-outline-secondary"><BsFilter /> Apply Filters</button>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            {["A1 SETUP", "A2 HTML", "A3 CSS", "A4 BOOTSTRAP"].map(assignment => (
                                <th key={assignment}>{assignment}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                {student.grades.map((grade, idx) => (
                                    <td key={idx}>{idx === 2 ? <input type="text" className="form-control" defaultValue={grade} /> : grade}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
