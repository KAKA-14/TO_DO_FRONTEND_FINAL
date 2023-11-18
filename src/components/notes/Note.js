import { Card, CardActions, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import NoteContent from "./NoteContent";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  width: 250px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
`;

const Note = ({ note }) => {
  const { notes, setNotes, setArchiveNotes, setDeletedNotes } =
    useContext(DataContext);

  const archieveNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setArchiveNotes((prevArr) => [note, ...prevArr]);
  };

  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeletedNotes((prevArr) => [note, ...prevArr]);
  };

//  const deleteNoteContent = (note_content) => {
//     const updatedNotes = notes.map((data) => {
//       console.log(data);
//       if (data.id === note.id) {
//         data.content = data.content.filter((val) => val !== note_content);
//       }
//       return data;
//     });
//     setNotes(updatedNotes);
//     if (note.content.length === 0) {
//       deleteNote(note);
//     }
//   }; 

  const checkNoteContent = (note_content) => {
    const updatedNotes = notes.map((data) => {
      return {
        ...data,
        content: data.content.map((value) => {
          return {
            ...value,
            status: !value.status,
          };
        }),
      };
    });
    setNotes(updatedNotes);
  };

  return (
    <StyledCard>
      <CardContent>
        {/* <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography> */}
        <h4>{note.heading} </h4>
        {note.content.map((item, index) => {
          //   console.log(item);
          return (
            <NoteContent
              item={item}
              key={index}
              id={index}
              onCheckNoteContent={checkNoteContent}
              // onDeleteNoteContent={deleteNoteContent}
            />
          );
        })}
      </CardContent>
      <CardActions>
        <Archive
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => archieveNote(note)}
        />

        <Delete fontSize="small" onClick={() => deleteNote(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default Note;
