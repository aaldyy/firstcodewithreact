import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Persamaan from '../views/Persamaan'
import Pilgan from '../views/Pilgan'
import Random from '../views/Random'
import Soal from '../views/Soal'
import Hasil from '../views/Hasil'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Soal />
            </Route>
            <Route exact path="/persamaan">
                <Persamaan />
            </Route>
            <Route exact path="/random">
                <Random />
            </Route>
            <Route exact path="/pilgan">
                <Pilgan />
            </Route>
            <Route exact path="/hasil">
                <Hasil />
            </Route>
        </Switch>
    )
}

export default Router
