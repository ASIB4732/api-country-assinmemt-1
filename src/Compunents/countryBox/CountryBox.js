import React from 'react';
import "./CountryBox.css"
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
const CountryBox = (props) => {

    const {name,demonym,flag}=props.data;
    return (
        <div className="box">
            <img className="flag" src={flag} alt="" />
            <h1>Name:- <Link to={`/${name}`}> {name}</Link></h1>
            <p>Demonym:- {demonym}</p>
        </div>
    );
};

export default CountryBox;