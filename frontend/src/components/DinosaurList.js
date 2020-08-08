import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class DinosaurList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dinosaurs: [],
        };
    }
    componentDidMount() {
        // this._getDinosaurs();
        fetch('/api/v1/dinosaurs/')
            .then(res => res.json())
            .then(dinosaurs => {
                this.setState({dinosaurs});
            }, err => {
                console.error(err);
            });
    }

    render() {
        const {dinosaurs} = this.state;
        return (
            <div>
                <h1>Dino List</h1>
                {
                    dinosaurs.length > 0 &&
                        <ul>
                            {
                                dinosaurs.map((dinosaur, i) => {
                                    return(
                                        <li key={i}><Link to={`/dinosaurs/${dinosaur.id}`}>{dinosaur.name}</Link></li>
                                    )
                                })
                            }
                        </ul>
                }
            </div>
        )
    }
}

export default DinosaurList;