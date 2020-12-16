import {useState, useEffect} from "react";
import CountryForm from "../components/CountryForm";

const CountryContainer = () => {

    const [countries, setCountries] = useState([])
    const [selectedCountryName, setSelectedCountryName] = useState("")

    const fetchCountries = () => {
        const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url).then(res => {
            return res.json();
        }).then((jsonData) => {
            setCountries(jsonData)
        })
    }

    const handleSelectedCountry = (countryName) => {
        setSelectedCountryName(countryName)
        // use country name to get the country from all the countries
        // then save that as selectedCountry in the state
        // pass selected country 
    } 

    useEffect(() => {
        fetchCountries();
        console.log(countries)
    }, [])

    return (
        <CountryForm countries={countries} handleSelectedCountry={handleSelectedCountry} />
    )
}

export default CountryContainer;