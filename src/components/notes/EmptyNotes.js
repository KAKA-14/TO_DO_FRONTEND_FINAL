import EditNoteIcon from '@mui/icons-material/EditNote';
import { Box, Typography } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import { useContext } from 'react';
import {DataContext} from '../../context/DataProvider';
const Pen = styled(EditNoteIcon)`
font-size:120px;
color:#F5F5F5;

`

const Text =styled(Typography)`
color:#80868b;
font-size:22px
`

const Containerr = styled(Box)`
display:flex;
flex-direction:column;
align-items:center;
margin-top:20vh;

`

const EmptyNotes = () => {
  const{showDelete}=useContext(DataContext);
  return (
    <div>
      <Containerr>
        <Pen/>
        {showDelete?<Text>There is nothing left to delete</Text>:<Text>Add Your Notes Here...</Text>}
        
      </Containerr>
    </div>
  )
}

export default EmptyNotes;