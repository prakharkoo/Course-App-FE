import React from "react";
import { Card, CardBody } from "reactstrap";
// // import {useRef} from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Header() {
  // }
  return (
    <Card className="my-1">
      <CardBody>
        <h1 className="text-center my-5">Welcome to course application.</h1>
        <p>Its front-end is developed in React JS whereas the backend is developed via Spring Boot with Kotlin. </p>
      </CardBody>
    </Card>
  );
}
