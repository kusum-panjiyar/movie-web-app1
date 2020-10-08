import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


class MovieListScreen extends React.Component{
    constructor(){
        super()
        this.state={
            movie:[],
            data:'',
        }
    }
    handleSearch=(e)=>{
        const data=e.target.value
        this.setState({data})
        axios.get(`http://www.omdbapi.com/?apikey=83aba685&s=${data}&type=movie`)
        .then(response=>{
            const search=response.data.Search
            this.setState({movie:search})
        })
        .catch(err=>{
            console.log(err)
        })
        this.setState({
            search:e.target.value
        })
    }
    render(){
        return(
            <div className="input-group col-md-4" style={{paddingLeft: '20px',}}>
                <label>search  </label>
                <input className="form-control py-2 border-right-0 border" type='search' name='data' onChange={this.handleSearch} placeholder='search movie title' />
                <span className="nput-group-append"></span>
                {
                    this.state.movie!==undefined?(
                        <div>
                            <ul>
                                {
                                    this.state.movie.map((ele,i)=>{
                                        return (<li key={i}><Link to={`/movie/${ele.imdbID}`}>{ele.Title}</Link></li>)
                                    })
                                }
                            </ul>
                        </div>):('')
                }
                
            </div>
        )
    }
}
export default MovieListScreen