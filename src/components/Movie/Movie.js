import { Card, CardContent, CardHeader, CardMedia, Rating, Typography } from '@mui/material';
import React from 'react';

const Movie = (props) => {
    const {title, overview, release_date, poster_path, vote_average} = props.movie;
    const baseUrl = 'http://image.tmdb.org/t/p/w500/';
    const rate = vote_average/2;
    return (
        <Card sx={{ maxWidth: 345 }}> 
        <CardMedia
            component="img"
            image= {baseUrl+poster_path}
            alt=""
        />
        <CardHeader
            title={title}
            subheader={release_date}
        />
        <Rating name="half-rating-read" value={rate} precision={0.5} readOnly />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {overview}
            </Typography>
        </CardContent>
        </Card>
    );
};

export default Movie;