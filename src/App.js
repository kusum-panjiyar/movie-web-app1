import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import MovieListScreen from './movieListScreen'
import MovieDetailScreen from './movieDetailsScreen'

function App(props)
{
    return(
        <BrowserRouter>
            <div> 
                <center>
                <h2>WelCome Movie Web App</h2>
                </center>
                
                <Link to='/'></Link>

                <Route path='/' component={MovieListScreen} exact={true}/>
                <Route path='/movie/:imdbID' component={MovieDetailScreen}/>
            </div>
        </BrowserRouter>
    )
}

export default App