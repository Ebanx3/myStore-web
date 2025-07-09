const endpoint = `${import.meta.env.VITE_SERVER_URL}/store`;

export const getUserStores = async () => {
  try {
    const data = await fetch(`${endpoint}/byUser`, { credentials: "include" });
    const json = (await data.json()) as ServerResponse<Store[]>;
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
    return { success: false, data: [] as Store[] };
  }
};

export const createStore = async ({
  name,
  maxProducts,
}: {
  name: string;
  maxProducts: number;
}) => {
  try {
    const data = await fetch(`${endpoint}/`, {
      method: "POST",
      body: JSON.stringify({ name, maxProducts }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const json = (await data.json()) as ServerResponse<string>;
    return json;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error al conectar con el servidor" };
  }
};

export const changeStoreStatus = async (storeName: string) => {
  try {
    const data = await fetch(`${endpoint}/changeStoreStatus/${storeName}`, {
      method: "PATCH",
      credentials: "include",
    });
    const json = (await data.json()) as ServerResponse<undefined>;
    return json;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error al conectar con el servidor" };
  }
};
