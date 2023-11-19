import React from "react";
import "./archive.css";
import { useState } from "react";

export default function ArchiveContent(props) {


  return (
    <div className="note flex-container-row">
      
      <p
        className="flex-item"
      >
        {props.item.value}
      </p>
    </div>
  );
}
