import EditNoteIcon from '@mui/icons-material/EditNote';
import { Box, Typography } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'

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
  return (
    <div>
      <Containerr>
        <Pen/>
        <Text>
            Let's do something Today
        </Text>
      </Containerr>
    </div>
  )
}

export default EmptyNotes;