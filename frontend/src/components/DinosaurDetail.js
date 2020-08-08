import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class DinosaurDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`/api/v1/dinosaurs/${id}/`)
            .then(res => res.json())
            .then(dinosaur => {
                this.setState({dinosaur});
            }, err => {
                console.error(err);
            });
    }

    render() {
        const {dinosaur} = this.state;
        return (
            <div>
                {
                    dinosaur &&
                        <div>
                            <h1>{dinosaur.name}</h1>
                            <p>Height: {dinosaur.height_in_m}</p>
                            <p>Does {dinosaur.is_carnivore ? '' : 'not'} eat meat.</p>
                        </div>
                }
            </div>
        )
    }
}

export default withRouter(DinosaurDetail);