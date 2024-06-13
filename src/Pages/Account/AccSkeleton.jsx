import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Variants() {
  return (
    <Stack spacing={2} mt={-6} >
      <Skeleton variant="text" width={"100%"} height={80} sx={{ fontSize: "1rem" }} />
      <Skeleton variant="circular" width={130} height={130} style={{marginTop:20}} />
      <Skeleton variant="rectangular" width={"100%"} height={80} style={{marginTop:30}}/>
      <Skeleton variant="rounded" width={"100%"} height={80} style={{marginTop:30,marginBottom:30}}  />
    </Stack>
  );
}
