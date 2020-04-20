import React, { useState, useEffect} from "react";
import { NativeSelect, FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries, fetchPlaces } from '../../api';

const CountryPicker = ({handleCountryChange}) => {
const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());

        }
        fetchAPI(); 
        //if we use [] it will run endlessly, so we use [setFetchedCountries] to change only when country is selected

    },[setFetchedCountries]);

    //console.log(fetchedCountries);
  
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value="global">Global </option>
             {fetchedCountries.map((country, i)=> <option key={i} value={country}>{country}</option>)}
             </NativeSelect>
             </FormControl>
    )
}


const PlacePicker = () => {
    const [fetchedPlaces, setFetchedPlaces] = useState([]);
        useEffect(() => {
            const fetchAPI = async () => {
                setFetchedPlaces(await fetchPlaces());
    
            }
            fetchAPI(); 
    
        },[setFetchedPlaces]);

        console.log(fetchedPlaces);
        return (
            <FormControl className={styles.formControl}>
                <NativeSelect >
                    <option value="global">Global </option>
           
                 </NativeSelect>
                 </FormControl>
        )
    }
    

export default CountryPicker;





/*import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchStateData} from '../../api';

const StatePicker = ({handleStateChange}) => {
    //useState denotes some other state not state/districts
const [fetchedStates, setFetchedStates] = useState([]);
    useEffect(()=>{
        const fetchAPI = async () => {
         setFetchedStates(await fetchStateData());
        }
        fetchAPI();
    },[setFetchedStates]);

    console.log(fetchedStates);

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=> handleStateChange(e.target.value)}>
              <option value=''>States</option>
              {fetchedStates.map((states, i)=> <option key ={i} value={states}>{states}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default StatePicker;*/