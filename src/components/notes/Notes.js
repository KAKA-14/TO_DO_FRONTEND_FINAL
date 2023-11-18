import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material";
import { useContext } from "react";
//import components
import Form from "./Form";
import Note from "./Note";
import { DataContext } from "../../context/DataProvider";
import EmptyNotes from "./EmptyNotes";
import SwiperDrawer from "../SwiperDrawer";
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes } = useContext(DataContext);

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
