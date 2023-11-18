import { Card, CardActions, CardContent, Typography } from '@mui/material'
import styled from '@emotion/styled'
import React from 'react'
import { UnarchiveOutlined as Unarchive  , DeleteOutlineOutlined as Delete} from '@mui/icons-material'
import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'


const StyledCard = styled(Card)`
width: 250px;
margin:8px;
box-shadow:none;
border:1px solid #e0e0e0;
border-radius:3px;

`

const Archive = ({ note }) => {

    const {notes , setNotes , archiveNotes, setArchiveNotes , setDeletedNotes} = useContext(DataContext);

    const UnarchieveNote = (note) =>{

      const updatedNotes = archiveNotes.filter(data => data.id !== note.id);
      setArchiveNotes(updatedNotes);
      setNotes(prevArr => [note,...prevArr]);
    }

    const deleteNote = (note) =>{
        const updatedNotes = archiveNotes.filter(data => data.id !== note.id);
        setArchiveNotes(updatedNotes);
        setDeletedNotes(prevArr => [note,...prevArr]);

        
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
            <Unarchive 
            fontSize='small'
             style = {{marginLeft:'auto'}}
            onClick = {() => UnarchieveNote(note)}
            />



            <Delete fontSize='small'
             onClick = {() => deleteNote(note)}
            
            />

        </CardActions>
    </StyledCard>
  )
}

export default Archive;
