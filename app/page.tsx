import { Box } from "@mui/material";
import Login from "./Login";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        border: 2,
      }}
    >
      <Login />
    </Box>
  );
}
