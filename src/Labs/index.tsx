import React from "react";
import Lab1 from "./Lab1"
import Lab2 from "./Lab2"
import Lab3 from "./Lab3"
import { Navigate, Route, Routes } from "react-router-dom";
import TOC from "./TOC";


export default function Labs(){
    return (
        <div>
            <h1>Kuldeep Choksi :) SUmmer 1 Section</h1>
            <h1>Labs</h1>
            <TOC />
            <Routes>
                <Route path = "/" element = {<Navigate to ="Lab1" />} />
                <Route path = "/Lab1" element = {<Lab1 />} />
                <Route path = "/Lab2" element = {<Lab2 />} />
                <Route path = "/Lab3" element = {<Lab3 />} />
            </Routes>
            <h4> My git hub repository is as follows: </h4>
            <a href="https://github.com/KuldeepChoksi/kanbas-react-web-app">GitHub</a>
        </div>
    );
}