import { Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse,  Avatar, IconButton, Typography} from "@mui/material";
import  { MoreVert, Favorite, ExpandMore }  from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru'
dayjs.locale('ru')

export const DetailThiefPost=({image,email, title, author={}, likes=[], text, created_at, _id})=>{
    return(

        <>
        <Card>
        <CardHeader
        title={email}
        subheader={dayjs(created_at).format('dddd, YYYY-MM-D')}
    />

     <Link to={`thiefBD.${_id}`}>
        <CardMedia
            component="img"
            height="194"
            image={image}
            alt={`Изображение ${title}`}
        />
        </Link>
        <CardContent>
            <Typography variant='h5' component='h2' gutterBottom>{title}</Typography>
            <Typography variant="body2" noWrap color="text.secondary">
               {text}
            </Typography>
        </CardContent>

        <CardActions sx={{marginTop:'auto'}} disableSpacing>
            <IconButton aria-label="add to favorites">
                <Favorite />
            </IconButton>
        </CardActions>
    </Card>
        </>
    )
}