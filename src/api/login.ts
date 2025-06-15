const endpoint = `${import.meta.env.VITE_SERVER_URL}/auth/login`;

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const data = await fetch(endpoint, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const json = (await data.json()) as ServerResponse<Usuario>;
    return json;
  } catch (error) {
    console.log(error);
    return {success:false,message: 'Error al conectar con el servidor, intentelo de nuevo en unos minutos'}
  }
};
