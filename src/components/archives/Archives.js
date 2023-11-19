import React from 'react'
import { Box, Grid} from '@mui/material';
import { styled } from '@mui/material';
import { useContext,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getToken } from "../../services/api";

//import components

import Archive from './Archive'
import { DataContext } from '../../context/DataProvider';
import SwiperDrawer from '../SwiperDrawer';
import {archive} from '../../services/api.js';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));

const Archives = () => {
    const navigate = useNavigate();
    const { archiveNotes,setArchiveNotes } = useContext(DataContext);
    useEffect(()=>{
      if(!getToken()){
        navigate('/error');
      }
      fetchtodo();
    },[])
    async function fetchtodo(){
      const result =await archive();
      const contentArray = result.data.data.todos.map(({ heading, todositem }) => ({ heading, todositem }));
      const reversedContentArray = contentArray.reverse();
      if (result.status===200&&result.data.status===200){
         setArchiveNotes(reversedContentArray);
      }
      console.log(contentArray);
  
    }
  return (
    
    <Box sx={{ display: 'flex',width:'100%' }}>
      <SwiperDrawer/>
        <Box sx={{p: 3 ,width:'100%'}}>
        <DrawerHeader />
       
       
        



        <Grid container style={{marginTop:"18px"}}>

        {
            archiveNotes.map(archive => (
                <Grid item>
                <Archive note = {archive }/>
                </Grid>
                ))
            }
        
            </Grid> 
            
         

        </Box>
    </Box>
  )
}

export default Archives;

  