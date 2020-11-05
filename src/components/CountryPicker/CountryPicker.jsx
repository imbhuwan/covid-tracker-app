import React, { useEffect, useState } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { fetchCountries } from '../../api';


const CountryPicker = ({handleCountryChange}) => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
    const fetchCountryData = async () => {
            setCountry(await fetchCountries());
    }
    fetchCountryData();
    }, [setCountry]);

 return(
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
            <option key="0" value="">Global</option>;
                {country.map((data)=>{
                return <option key={data.iso2} value={data.name}>{data.name}</option>;
                })}
            </NativeSelect>

        </FormControl>
    )
}

export default CountryPicker;