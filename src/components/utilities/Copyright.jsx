import React from "react";
import { Typography } from "@mui/material";

export default function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props} sx={{ mt: 5 }}>
        {'Copyright © Michael Foley & George Brooks '}  
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      
    );
  }