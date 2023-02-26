import { Container, Grid } from "@mui/material";
import Post from '../Post/post.jsx'

const PostList =({thiefBD}) => {
    return(
        <Grid container spacing={1}>
        {thiefBD.map(item=> (
            <Post key={item._id} {...item}/>
        ))}
        </Grid>
    );
};

export default PostList;