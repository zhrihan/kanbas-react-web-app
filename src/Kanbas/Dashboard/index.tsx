import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { HiPencilSquare } from "react-icons/hi2";
import "./index.css"
function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (4)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img 
                  src={`/images/${course.image}`} 
                  className="card-img-top"
                  style={{ height: 150 }}/>

                <div className="card-body">
                  <Link 
                    className="card-title" 
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} 
                  </Link>
                  <p className="card-text fw-lighter course-description course-zero-margin">{course.title}</p>
                  <p className="card-text course-description"><small className="text-muted">{course.description}</small></p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="fs-2 text-dark">
                  <HiPencilSquare/>
                  </Link>               
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;