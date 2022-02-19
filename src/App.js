import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import { Button, Container, Row, Col } from "reactstrap";
import Home from "./Components/Home";
import AllCourse from "./Components/AllCourse";
import AddCourse from "./Components/AddCourse";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const btnHandle = () => {
    toast.error("Button Clicked.");
  };
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/all-course" element={<AllCourse />} exact />
                <Route path="/about" element={<About />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
