import CountryContainer from "../container/CountryContainer";

const Country = ({countryName, population, flag}) => {
    return (
        <>
    <h1>Country: {countryName}</h1>
    <h2>Population: {population}</h2>
    <h3>Flag: {flag} </h3>
        </>
    )
}   


export default Country;