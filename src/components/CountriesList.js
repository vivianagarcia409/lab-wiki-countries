import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import countries from '../countries.json'
import CountryDetails from './CountryDetails'


const CountriesList = () => {
    const Countries = () => {
        return countries.map(country => {
            return <Link to={`/${country.name.common}`}><a className="list-group-item list-group-item-action" href="/ABW">{country.flag}&nbsp;&nbsp;&nbsp;{country.name.common}</a> </Link>
        })

    }

    return (
        <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div className="list-group">
                <Countries />
                <Switch>
                    <Route exact path="/:name" render={(props) => <CountryDetails {...props} />} />

                </Switch>
            </div>
        </div>

    )

}

export default CountriesList; 