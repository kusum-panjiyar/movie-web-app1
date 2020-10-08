import React from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'

class MovieDetailScreen extends React.Component{
    constructor(){
        super()
        this.state={
            details:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.imdbID
        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=83aba685`)
        .then(response=>{
            const details=response.data
            console.log('movie details',details)
            this.setState({details})
        })
    }
    render(){
        return(
            <div style={{paddingLeft:'30px'}}>
                <Card style={{ width: '32 rem'}}>
                    <Card.Img variant="top" src={this.state.details.Poster} width='300 rem'/> 
                    <Card.Body>
                        <Card.Title>
                            <b>Movie Name:- {this.state.details.Title}</b>
                        </Card.Title>&nbsp;
                        <Card.Subtitle className="mb-2 text-muted">
                            <b>
                                Year of release:- {this.state.details.Year} <br/>
                                Rating:- {this.state.details.Rated}<br/>
                                Released on:- {this.state.details.Released}<br/>
                                RunTime:- {this.state.details.Runtime}<br/>
                                Genre:- {this.state.details.Genre}<br/>
                                Director:- {this.state.details.Director}<br/>
                                Country:- {this.state.details.Country}<br/>
                                Writer:- {this.state.details.Writer}<br/>
                                Language:- {this.state.details.Language}<br/>
                                Country:- {this.state.details.Country}<br/>
                                Awards:- {this.state.details.Awards}<br/>
                                imdbRating:- {this.state.details.imdbRating}<br/>
                                Production:- {this.state.details.Production}<br/>
                                Actors:- {this.state.details.Actors}<br/>
                                Plot:-{this.state.details.Plot}
                            </b>
                        </Card.Subtitle>
                        <br/>
                        <Card.Link href="/">Back</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default MovieDetailScreen