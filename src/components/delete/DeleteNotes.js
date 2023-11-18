import React from 'react'
import { Box, Grid} from '@mui/material';
import { styled } from '@mui/material';
import { useContext } from 'react';
//import components

import DeleteNote from './DeleteNote';
import { DataContext } from '../../context/DataProvider';
import SwiperDrawer from '../SwiperDrawer';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));

const DeleteNotes = () => {

    const {deletednotes} = useContext(DataContext);

  return (
    <Box sx={{ display: 'flex',width:'100%' }}>
      <SwiperDrawer/>
        <Box sx={{p: 3 ,width:'100%'}}>
        <DrawerHeader />
        <Grid container style={{marginTop:"18px"}}>

        {
            deletednotes.map(note => (
                <Grid item>
                <DeleteNote note = {note}/>
                </Grid>
                ))
            }
    
            </Grid> 

        </Box>
    </Box>
  )
}

export default DeleteNotes;

  