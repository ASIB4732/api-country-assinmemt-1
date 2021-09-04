import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./countryinfo.css"
const Countryinfo = () => {
    const {name}=useParams()
    const [country, setCountry] = useState({})
    useEffect(()=>{
        const url=`https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setCountry(data[0])
            console.log(data);
        })
    },[])
    return (
        <div className="xxx">
            <img className='imgteg' src={country.flag} alt="" />
            <h1>Name:- {country.name}</h1>
            <p>{country.nativeName}</p>
            <p>{country.capital}</p>
            <p>{country.demonym}</p>
            <p>{country.population}</p>
            <p>{country.region}</p>
            <p>{country.subregion}</p>
        </div>
    );
};

export default Countryinfo;