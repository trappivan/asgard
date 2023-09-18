import { Box } from "@mui/material";
import Login from "./Login";

export default function Home() {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				border: 2,
				width: 1,
				height: 1,
			}}>
			<Login />
		</Box>
	);
}
