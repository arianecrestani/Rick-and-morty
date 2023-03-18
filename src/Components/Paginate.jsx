import React from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
//rfce
function Paginate({ page, onChange, count }) {
  return (
    <div>
      <Stack sx={{ padding: "3rem", alignItems: "center" }}>
        <Pagination count={count} page={page} onChange={onChange} color="secondary" />
      </Stack>
    </div>
  );
}

export default Paginate;
