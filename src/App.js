import LP from './components/Landing page/LandingPage.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Login/Signup';
import { useState } from 'react';
import DataProvider from './context/DataProvider.js';

import React from "react";
import SwiperDrawer from "./components/SwiperDrawer.js";
import Notes from "./components/notes/Notes";
import { Box } from "@mui/material";
import DeleteNotes from "./components/delete/DeleteNotes";
import Archives from "./components/archives/Archives";
import Error from './components/Error.js';

function App() {
  const info = localStorage.getItem('user');
  const [user, setUser] = useState(JSON.parse(info));
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LP />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signup user={user} setUser={setUser} />} />
          <Route path="/error" element={<Error />} />
          <Route path="/createtodo" element={<Error />} />
        </Routes>
        <DataProvider>
              <Box style={{ display: "flex", width: "100%" }}>
                <Routes>
                  <Route path="/createtodo/notes" element={<Notes />} />
                  <Route path="/createtodo/archive" element={<Archives />} />
                  <Route path="/createtodo/delete" element={<DeleteNotes />} />
                </Routes>
              </Box>
            </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
