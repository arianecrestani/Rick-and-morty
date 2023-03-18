import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Searchbar = ({ onChange }) => {
  return (
    <div
      className="search-input"
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "3rem",
        borderColor: "#FFEBCD",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          borderColor: "#FFEBCD",
          background: "#F8F8FF",
        }}
      >
        <TextField
          sx={{ color: "#FFC0CB" }}
          fullWidth
          label="FilterSearch"
          id="Filter"
          onChange={onChange}
        />
      </Box>
    </div>
  );
};

export default Searchbar;
