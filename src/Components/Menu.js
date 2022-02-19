import React from "react";
import {Link} from 'react-router-dom';
import { ListGroup } from "reactstrap";

export default function Menu(){
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag='a' to='/' action> Home </Link>
            <Link className="list-group-item list-group-item-action" tag='a' to='/add-course' action> Add Course </Link>
            <Link className="list-group-item list-group-item-action" tag='a' to='/all-course' action> View Courses </Link>
            <Link className="list-group-item list-group-item-action" tag='a' to='/about' action> About Us</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to='' action> Contact Us </Link>
        </ListGroup>
    )
}