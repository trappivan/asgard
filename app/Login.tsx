"use client";
import { Box, Button, Input } from "@mui/material";
import { sizing } from "@mui/system";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, Control } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const userAccountSchema = z.object({
  user: z.string().nonempty("É necessário um usuário para entrar na aplicação"),
  password: z
    .string()
    .nonempty("É necessário colocar sua senha para entrar na aplicação"),
});

type userAccount = {
  user: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userAccount>({
    resolver: zodResolver(userAccountSchema),
  });
  const handleSubmitForm: SubmitHandler<userAccount> = (data) =>
    console.log(data);
  const router = useRouter();
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
      }}
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <Input {...register("user")} placeholder="login" />
      {errors.user && <p>{errors.user.message}</p>}
      <Input {...register("password")} placeholder="senha" />
      {errors.password && <p>{errors.password.message}</p>}
      <Button
        variant="contained"
        type="submit"
        // onClick={() => router.push("Home")}
      >
        Entrar
      </Button>
      asdsadçççç
    </Box>
  );
}
