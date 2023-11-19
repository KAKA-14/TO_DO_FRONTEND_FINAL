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


const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));

const Archives = () => {

    const {archiveNotes} = useContext(DataContext);

    const navigate = useNavigate();
    useEffect (()=>{
      if(!getToken()){
        navigate('/error');
      }
    },[])
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

  