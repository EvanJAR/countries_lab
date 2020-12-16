const CountryForm = ({countries, handleSelectedCountry}) => {

    if (!countries) {
        return null;
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSelectedCountry(event.target.value)
        console.log(event.target.value) 
    }


    // const getSelectedCountry = (event) => {
    //     found = countries.find(country => country.name === event.target.value)
    // }

    return (
       <>
            <select id="countries" name="countries" onChange={handleFormSubmit}> 
                {countries.map((country) => {
                    console.log(country.name)
                    return( 
                        <option key={country.alpha3Code} value={country.name}>{country.name} </option>
                    )
                })}
            </select>
        </>    
    )
}



export default CountryForm;