import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Items from './Components/Items';
import Banner from './Components/Banner';
import Navigation from './Components/Navigation';

const LINKS = [
    {label: 'Website', to: 'https://www.robinwieruch.de/'},
    {label: 'Twitter', to: 'https://twitter.com/rwieruch'},
];

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            entries: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(entries => {
                this.setState({
                    entries
                });
            });
    }

    render() {
        return (
            <div className="row">
                <Banner/>
                <Navigation links={LINKS}/>
                <div className="col-md-12"><h1 className="text-center">Items</h1></div>
                {this.state.entries.map(
                    ({id, title, body, thumbnailUrl}) => (
                        <Items
                            key={id}
                            title={title}
                            body={body}
                            thumbnailUrl={thumbnailUrl}
                        >
                        </Items>
                    )
                )}

            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
