"use client";
import { Box, Button, Input } from "@mui/material";
import { sizing } from "@mui/system";

export default function Login() {
	return (
		<Box
			component={"form"}
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				height: "96vh",
				gap: 4,
			}}>
			<Input placeholder="login" />
			<Input placeholder="senha" />
			<Button variant="contained">Entrar</Button>
			asdsadçççç
		</Box>
	);
}
