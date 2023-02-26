import Header from "../Header/header";
import { Container } from "@mui/material";
import PostList from "../PostList/post-list";
import {thiefBD} from "./thiefBD.js";
import { DetailThiefPost } from "../DetailThiefPost/detail-thief-post";
import {  Routes, Route, useNavigate } from 'react-router-dom';

function App() {

    return(
      <>
     
          <Header/>
            <Routes>
                  <Route index element={
                   <Container>
                    <PostList thiefBD = {thiefBD}/>
                   </Container>
                  }/>
                   <Route path='/thiefBD/:_id' element={
                    <DetailThiefPost thiefBD = {thiefBD}/>
                   }/>
              </Routes>
               </>
          )
        }

export default App;