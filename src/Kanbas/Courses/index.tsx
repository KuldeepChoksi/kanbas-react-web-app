import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import Grades from "./Grades"
import { courses } from "../Database";

import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>

        <hr />
        <div className="d-flex">
          <div className="d-none d-md-block">
            <CoursesNavigation />
          </div>
          <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Modules" element={<Modules />} />
              <Route path="/Quizzes" element={<h2>Quizzes</h2>} />
              <Route path="/Zoom" element={<h2>Zoom</h2>} />
              <Route path="/Piazza" element={<h2>Piazza</h2>} />
              <Route path="/Grades" element={<Grades />} />
              <Route path="/Assignments" element={< Assignments />} />
              <Route path="/Assignments/:aid" element={<AssignmentEditor />} />
            </Routes>
          </div>
        </div>
      </div>
  );}
  