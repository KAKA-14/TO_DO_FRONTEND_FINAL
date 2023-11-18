import { Card, CardActions, CardContent, Typography } from '@mui/material'
import styled from '@emotion/styled'
import React from 'react'
import {RestoreFromTrashOutlined as  Restore , DeleteForeverOutlined as Delete} from '@mui/icons-material'
import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'


const StyledCard = styled(Card)`
width: 250px;
margin:8px;
box-shadow:none;
border:1px solid #e0e0e0;
border-radius:3px;

`

const DeleteNote = ({note}) => {

    const {notes , setNotes , setArchiveNotes ,deletednotes, setDeletedNotes} = useContext(DataContext);

    const restoreNote = (note) =>{

      const updatedNotes = deletednotes.filter(data => data.id !== note.id);
      setDeletedNotes(updatedNotes);
      setNotes(prevArr => [note,...prevArr]);
    }

    const deleteNote = (note) =>{
        const updatedNotes = deletednotes.filter(data => data.id !== note.id);
        setDeletedNotes(updatedNotes);

        
    }




  return (
    <StyledCard>
        <CardContent>
            <Typography>
                {note.heading}
            </Typography>
            <Typography>
                {note.text}
            </Typography>

        </CardContent>
        <CardActions>

        <Delete fontSize='small'
             onClick = {() => deleteNote(note)}
             style = {{marginLeft:'auto'}}
            
            />

            <Restore
            fontSize='small'
            onClick = {() => restoreNote(note)}
            />



          
        </CardActions>
    </StyledCard>
  )
}

export default DeleteNote;
