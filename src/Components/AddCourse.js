import axios from "axios";
import { React, Fragment, useState,useEffect } from "react";
import { toast } from "react-toastify";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import base_url from "../Services/BootApi";

export default function AddCourse() {

  useEffect(() => {
    document.title = "Add a course";
  },[])
  

  const [course, setCourse] = useState();
  //Form Handler Function
  const handleForm = (e) => {
    e.preventDefault();
    postDatatoServer(course)
  };

  //Function to post data to server
  const postDatatoServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
          toast.success("Course added successfully.",{position:"bottom-center"})
      },
      (error) => {
        toast.error("Course not added, something went wrong.",{position:"bottom-center"})
      }
    );
  };

  return (
    <Fragment>
      <Form onSubmit={handleForm}>
        <h1>Fill course details</h1>
        <FormGroup>
          <Label for="courseId">Course Id</Label>
          <Input
            type="text"
            placeholder="Enter Course Id here"
            name="courseId"
            id="courseId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="courseTitle">Course Title</Label>
          <Input
            type="text"
            placeholder="Enter Course Title here"
            name="courseTitle"
            id="courseTitle"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="courseDesc">Course Description</Label>
          <Input
            type="textarea"
            placeholder="Enter Course Description here"
            name="courseDesc"
            id="courseDesc"
            style={{ height: 150 }}
            onChange={(e) => {
              setCourse({ ...course, desc: e.target.value });
            }}
          />
        </FormGroup>
        <Container>
          <Button color="success" type="submit">
            Add Course
          </Button> &nbsp;
          <Button color="warning" type="reset">
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
}
