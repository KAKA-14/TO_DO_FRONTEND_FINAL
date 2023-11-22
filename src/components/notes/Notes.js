import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material";
import { useContext, useState } from "react";
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
  const { notes, setNotes, showDelete,showRem} = useContext(DataContext);
  const [refresh, setRefresh] = useState();
  useEffect(() => {
    fetchtodo();
  }, [refresh]);
  async function fetchtodo() {
    const result = await gettodo();
    let contentArray = result.data.data.todos.map(
      ({ _id, heading, todositem, isArchive, reminder }) => ({
        _id,
        heading,
        todositem,
        isArchive,
        reminder,
      })
    );
    if (window.location.pathname === "/createtodo/reminder") {
      contentArray = contentArray.filter((el) => el.reminder);
    }
    console.log(contentArray, window.location.pathname);
    const reversedContentArray = contentArray.reverse();
    if (result.status === 200 && result.data.status === 200) {
      setNotes(reversedContentArray);
    }
    // console.log(contentArray);
  }
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <SwiperDrawer />
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {!showDelete && showRem && <Form />}
        {notes && notes.length > 0 ? (
          <Grid container style={{ marginTop: "18px" }}>
            {notes.map((note) => (
              <Grid item key={note._id}>
                <Note note={note} setRefresh={setRefresh} />
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
