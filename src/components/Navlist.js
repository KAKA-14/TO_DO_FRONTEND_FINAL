import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ArchiveIcon from "@mui/icons-material/Archive";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import { Link } from "react-router-dom";

const Navlist = () => {
  const navList = [
    { id: 1, name: "Notes", icon: <EditNoteIcon />, route: "/createtodo/notes" },
    { id: 2, name: "Archive", icon: <ArchiveIcon />, route: "/createtodo/archive" },
    { id: 3, name: "Reminder", icon: <NotificationsActiveIcon />, route: "/createtodo" },
    {
      id: 4,
      name: "Trash",
      icon: <DeleteOutlineSharpIcon />,
      route: "/createtodo/delete",
    },
  ];

  return (
    <List>
      {navList.map((list) => (
        <ListItem key={list.id}>
          <Link
            to={list.route}
            style={{
              textDecoration: "none",
              display: "flex",
              color: "inherit",
            }}
          >
            <ListItemIcon style={{ alignItems: "center" }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Navlist;
