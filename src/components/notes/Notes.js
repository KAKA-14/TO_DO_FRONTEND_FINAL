import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material";
import { useContext,useState} from "react";
//import components
import Form from "./Form";
import Note from "./Note";
import { DataContext } from "../../context/DataProvider";
import EmptyNotes from "./EmptyNotes";
import SwiperDrawer from "../SwiperDrawer";
import { gettodo } from "../../services/api.js";
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes,setNotes } = useContext(DataContext);
  // useEffect(()=>{
  //   fetchtodo();
  // },[])
  // async function fetchtodo(){
  //   const result =await gettodo();
  //   if (result.status===200&&result.data.status===200){
  //     setNotes(result.data.data)
  //   }
  //   console.log(result.data.data);

  // }
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <SwiperDrawer/>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ? (
          <Grid container style={{ marginTop: "18px" }}>
            {notes.map((note) => (
              <Grid item>
                <Note note={note} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
};

export default Notes;
