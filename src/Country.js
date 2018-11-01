import React, { Component } from 'react';

class Country extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            owner: null,
            nrOfTroops: 0
        }
    }
    
    setOwner(owner){
        this.setState({owner: owner})
    }
}

export default Country;
