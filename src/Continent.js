import React, { Component } from 'react';

class Continent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            points: props.points,
            name: props.name,
            countries: props.countries
      
        }
        console.log(this.state.points, this.state.name, this.state.countries[0].state.name);
    }
}

export default Continent;