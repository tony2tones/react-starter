import React, { Component } from 'react';
import React, { Component } from 'react';
import request from 'superagent';

import Text from './Toasty';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Allo</h1>
                <Text />
            </div >
        );
    }
}
