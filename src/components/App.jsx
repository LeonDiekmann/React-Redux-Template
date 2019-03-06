import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';

class App extends PureComponent {
    render() {
        return (
            <div className="tapp">
                <div style={{ textAlign: 'center' }}>
                    <h2>Something magnificent arises here...</h2>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
