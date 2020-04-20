import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom'
import Main from './Main';

export default class extends React.PureComponent {
    render() {
        return (
            <Switch location={this.props.location} history={this.props.history} level={1} >
                <Route path="/"  render={ props =>
                    <Main {...props} />
                }/>
            </Switch>
        )
    }
}