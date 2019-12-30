import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Nav } from './Nav'

const Home = React.lazy(() => import('../screens/Home'))
const About = React.lazy(() => import('../screens/About'))
const Users = React.lazy(() => import('../screens/Users'))

export const Routes = () => {
    return (
        <Router>
            <Nav />
            <React.Suspense fallback='Loading...'>
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>

                    <Route path='/about'>
                        <About />
                    </Route>

                    <Route path='/users'>
                        <Users />
                    </Route>

                    <Route>
                        <p>Not found</p>
                    </Route>
                </Switch>
            </React.Suspense>
        </Router>
    )
}
