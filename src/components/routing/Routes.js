import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes = props => {
    return (
        <section className="container">
            <Switch>
                <Route exact path="/register" component={''} />
            </Switch>
        </section>
    )
};

export default Routes;