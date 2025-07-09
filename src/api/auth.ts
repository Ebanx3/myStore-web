const endpoint = `${import.meta.env.VITE_SERVER_URL}/auth`;

export const verifyEmail = async (verificationCode: string) => {
  try {
    const data = await fetch(`${endpoint}/verifyEmail/${verificationCode}`);
    const json = (await data.json()) as ServerResponse<void>;
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const data = await fetch(`${endpoint}/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const json = (await data.json()) as ServerResponse<Usuario>;
    console.log(json)
    return json;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message:
        "Error al conectar con el servidor, intentelo de nuevo en unos minutos",
    };
  }
};

export const signup = async ({name, lastname, email, password}:{name:string, lastname:string, email:string, password:string}) => {
  try {
    const data = await fetch(`${endpoint}/signup`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ name, lastname, email, password }),
    });
    const json = (await data.json()) as ServerResponse<string>;
    return json;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message:
        "Error al conectar con el servidor, intentelo de nuevo en unos minutos",
    };
  }
}

export const recoverPass = async (email: string) => {
  try {
    const data = await fetch(`${endpoint}/recoverPass`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email }),
    });
    const json = (await data.json()) as ServerResponse<null>;
    return json;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message:
        "Error al conectar con el servidor, intentelo de nuevo en unos minutos",
    };
  }
};

export const logout = async () => {
  try{
    await fetch(`${endpoint}/logout`,{credentials:'include'});
  }
  catch(error){
    console.log(error);
    return {success:false, message: "Error al intentar desloguear"};
  }
}