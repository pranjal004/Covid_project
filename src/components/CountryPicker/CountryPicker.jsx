import React, { useState, useEffect } from "react";
import {NativeSelect, FormControl} from "@material-ui/core";
import { countries } from "../../api";
import styles from "./CountryPicker.module.css";

function CountryPicker({handleCountryChange})
{
    const [fetchCountries, setFetchCountries]= useState([]);
    useEffect(() => {
        const fetchCountries = async () => {
            setFetchCountries(await countries());
        }

        fetchCountries();
    }, [setFetchCountries]);
    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;