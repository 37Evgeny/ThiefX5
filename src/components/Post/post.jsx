import { Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse,  Avatar, IconButton, Typography} from "@mui/material";
import  { MoreVert, Favorite, ExpandMore }  from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru'
import s from './index.module.css'
dayjs.locale('ru')
  
    

const Post =({image, title, author = {}, text, created_at}) => {

    const {email, avatar} = author;

    return(
        <Grid  sx={{display:'flex'}} xs={12} sm={6} md={4} lg={3} >
            <Card className={s.card}>
                <CardHeader
                title={email}
                subheader={dayjs(created_at).format('dddd, YYYY-MM-D')}
            />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt={`Изображение ${title}`}
                />
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
        </Grid>
    );
};

export default Post;