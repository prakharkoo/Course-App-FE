import React, { useEffect } from "react";
import {Jumbotron} from 'reactstrap';
export default function Home(){
    useEffect(()=>{document.title="Home"},[]);
    return(
    <div>
        <h1>This is home.</h1>
    </div>
    );
}