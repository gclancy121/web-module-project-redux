import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/movieActions'

import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {

    const handleClick = (id) => {
        console.log(id)
        props.removeFavorite(id)
    }
    
    const favorites = props.favorites.favorites;

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={() => handleClick(movie.id)}><span className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}


export default connect(st => ({favorites: st.favReducer}), actions)(FavoriteMovieList);