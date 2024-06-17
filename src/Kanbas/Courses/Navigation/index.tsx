import { useParams, useLocation } from "react-router-dom";
import "./index.css";
import { courses } from "../../Database";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const location = useLocation();
  const course = courses.find(course => course._id === cid);
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map(link => (
        <a key={link}
           id={`wd-course-${link.toLowerCase()}-link`}
           href={`#/Kanbas/Courses/${cid}/${link}`}
           className={`list-group-item ${location.pathname.trim().includes(link) ? 'active' : 'text-danger'} border-0`}>
          {link}
        </a>
      ))}
    </div>
  );
}

