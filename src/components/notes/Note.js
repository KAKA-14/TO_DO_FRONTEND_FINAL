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
import {  gettodoarc, noteDelete } from "../../services/api";
const StyledCard = styled(Card)`
  width: 250px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
`;

const Note =({ note,setRefresh }) => {
  const { notes, setNotes, setArchiveNotes, showDelete,setShowDelete } =
    useContext(DataContext);

  const archieveNote = async(note) => {
    const result=await gettodoarc(note);
    const updatedNotes = notes.filter((data) => data.id !== result.id);
    setRefresh(new Date());
    setNotes(updatedNotes);
    setArchiveNotes((prevArr) => [result, ...prevArr]);
  };



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
  const deleteNote =async (note) => {
    console.log(note);
    const result=await noteDelete({_id:note._id});
    setRefresh(new Date());
    const updatedNotes = notes.filter((data) => data.id !== result.id);
    setNotes(updatedNotes);
  };
  return (
    <StyledCard>
      <CardContent>
        {/* <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography> */}
        <h4>{note.heading} </h4>
        {note.todositem&&note.todositem.map((item, index) => {
          //   console.log(item);
          return (
            <NoteContent
              item={item}
              key={index}
              id={index}
              onCheckNoteContent={checkNoteContent}
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
        {showDelete && (<Delete fontSize="small" onClick={() => deleteNote(note)} />)}
      </CardActions>
    </StyledCard>
  );
};

export default Note;
