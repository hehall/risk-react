import React, { Component } from 'react';

class Player extends Component {
    constructor(props){
        super(props);
        this.state = {
            playerId: props.playerId,
            mission: props.mission,
            nrOfTroops: 0,
            missionComplete: false,

        }
    }
}

export default Player