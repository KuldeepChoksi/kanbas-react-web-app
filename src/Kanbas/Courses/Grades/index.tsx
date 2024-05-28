import * as db from "../../Database"; // Ensure this import path correctly points to where your data is aggregated
import { useParams } from 'react-router-dom'; // Make sure to import from 'react-router-dom'

export default function Grades() {
    const { cid } = useParams(); // Fetches the course ID from URL parameters

    // Fetch enrollments for the current course and find corresponding student IDs
    const enrolledStudents = db.enrollments.filter(enrollment => enrollment.course === cid);
    const studentIds = enrolledStudents.map(enrollment => enrollment.user);

    // Fetch assignments for the current course
    const courseAssignments = db.assignments.filter(assignment => assignment.course === cid);

    // Fetch grades for the students enrolled in the current course
    const studentGrades = db.grades.filter(grade => studentIds.includes(grade.student));

    // Fetch details for students enrolled in the current course
    const studentDetails = db.users.filter(user => studentIds.includes(user._id));

    return (
        <div style={{ maxWidth: '1200px', margin: '20px auto' }}>
            <div className="table-responsive">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                            <th style={{ padding: '12px 15px' }}>Student Name</th>
                            {courseAssignments.map(assignment => (
                                <th key={assignment._id} style={{ padding: '12px 15px', textAlign: 'center' }}>
                                    {assignment.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {studentDetails.map(student => (
                            <tr key={student._id}>
                                <td style={{ padding: '10px 15px' }}>{student.firstName} {student.lastName}</td>
                                {courseAssignments.map(assignment => {
                                    const grade = studentGrades.find(g => g.student === student._id && g.assignment === assignment._id);
                                    return (
                                        <td key={`${student._id}-${assignment._id}`} style={{ textAlign: 'center', padding: '10px 15px' }}>
                                            {grade ? grade.grade : 'N/A'}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
