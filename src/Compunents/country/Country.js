import React, { useEffect, useState } from 'react';
import CountryBox from '../countryBox/CountryBox';
import "../countryBox/CountryBox.css"
const Country = () => {
    const [countryData, setCountryData]= useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data=>setCountryData(data))
    },[])
    return (
        <div>
            <h1 className="number">Numbe of Country:- {countryData.length}</h1>           
                 {
                     countryData.map(data=><CountryBox data={data}></CountryBox>)
                 }
        </div>
    );
};

export default Country;