import React, { Component } from 'react';
import mapImage from './riskmap.png';
import Continent from './Continent';
import Country from './Country';


class WorldMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            continents: [
                new Continent({points:5, name:'NorthAmerica', countries:[new Country({name:'Canada'}), new Country({name:'USA'})]}),
                new Continent({points:1, name:'Europe', countries:[new Country({name:'Sweden'}), new Country({name:'Finland'})]}),
                new Continent({points:4, name:'Asia', countries:[new Country({name:'Kina'}), new Country({name:'Japan'})]})
            ]
        }
    }
    render() {
        return (
        <img src={mapImage} className="App-logo" alt="logo" />
        );
    }
}


export default WorldMap;