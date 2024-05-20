import React from 'react';
import { BsSearch, BsPlus } from 'react-icons/bs'; // Importing necessary icons for the interface

export default function Assignments() {
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
          {[
            {id: "A1", title: "ENV + HTML", details: "Multiple Modules | Not Available until May 6 at 12:00 am | Due May 13 at 11:59pm | 100 pts"},
            {id: "A2", title: "CSS + BOOTSTRAP", details: "Multiple Modules | Not Available until May 13 at 12:00 am | Due May 20 at 11:59pm | 100 pts"},
            {id: "A3", title: "JAVASCRIPT + REACT", details: "Multiple Modules | Not Available until May 20 at 12:00 am | Due May 27 at 11:59pm | 100 pts"}
          ].map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center" style={{ borderLeft: '5px solid green' }}>
              <a href={`#/Kanbas/Courses/1234/Assignments/${item.id}`} className="flex-grow-1">
                {item.title} <br/>
                <small>{item.details}</small>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
}
