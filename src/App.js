// create your App component here
import React from 'react';

export default class App extends React.Component {
    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(res => res.json())
            .then(data => this.setState({ peopleInSpace: data.people }))
    }

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map(person => <li> {person.name}</li>)}
            </div>
        )
    }
}