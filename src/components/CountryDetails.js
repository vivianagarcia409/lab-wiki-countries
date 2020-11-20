import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json'

const CountryDetails = (props) => {

    let countryObj = countries.filter(country => country.name.common === props.match.params.name)[0]

    return (
        <div className="col-7">
            <h1>{countryObj.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{countryObj.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{countryObj.area} km
                <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default CountryDetails; 