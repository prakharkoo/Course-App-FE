import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import base_url from "../Services/BootApi";

export default function Course(props) {

  const deleteCourse = (courseId) => {
    axios.delete(`${base_url}/courses/${courseId}`).then(
      (response) => {
        toast.success("Course removed successfully");
        props.removeCourseById(courseId);
      },
      (error) => {
        toast.error("Course not removed !! Server Problem");
      }
    );
  };

  return (
    <Card>
      <CardBody>
        <h3>{props.course.title}</h3>
        <p>{props.course.desc}</p>
        <Button color="danger" onClick={()=>{deleteCourse(props.course.id)}}>Delete</Button> &nbsp;
        <Button color="warning ml-3">Update</Button>
      </CardBody>
    </Card>
  );
}
