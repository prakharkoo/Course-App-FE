import { React, useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../Services/BootApi";
import axios from "axios";
import { toast } from "react-toastify";

export default function AllCourse() {
  const [courses, setCourses] = useState({});

  // Function to call server
  const getAllCoursesFromServer = () => {
    let flag = true;
    axios.get(`${base_url}/courses`).then(
      (response) => {
        setCourses(response.data);
      },
      (error) => {
        flag = false;
      }
    );
    flag
      ? toast.success("Courses has been loaded", { position: "bottom-center" })
      : toast.error("Something went wrong.", { position: "bottom-center" });
  };

  // Function to remove the course from main list as soon as any course is deleted.
  const removeCourseById = (courseId) => {
    setCourses(
      courses.filter((course) => {
        return course.id != courseId;
      })
    );
  };

  useEffect(() => {
    document.title = "View all courses";
    //Calling the function to get all courses from server
    getAllCoursesFromServer();
  }, []);

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of all courses are as follows : </p>
      {courses.length > 0 ? (
        courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            removeCourseById={removeCourseById}
          />
        ))
      ) : (
        <h4>No Courses Availble</h4>
      )}
    </div>
  );
}
