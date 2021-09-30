import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect( () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=4cf720d11ade4b39d232d7d97bfb48e1')
        .then(res => res.json())
        .then(data => setMovies(data.results))
    }, [])

    return (
        <div>
            <Container fixed>
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        movies.map(movie => <Grid key={movie.id} item xs={2} sm={4} md={4}>
                            <Movie movie={movie}></Movie>
                        </Grid>)
                    }
                </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Movies;