import React, { useEffect } from "react";
export default function About(){
    useEffect(() => {
        document.title = "About Us";
      },[])
    return(<div>
        <h2>This code is written in React JS</h2>
        <p></p>
    </div>)
}