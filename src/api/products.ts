const endpoint = `${import.meta.env.VITE_SERVER_URL}/product`;

export const addProduct = async (product: Omit<Product, "id">) => {
  try {
    const data = await fetch(endpoint, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });
    const json = await data.json() as ServerResponse<string>;
    return json;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error al conectar con el servidor" };
  }
};

export const getProducts = async (storeId:string) : Promise<ServerResponse<Product[] | undefined>> => {
try {
    const data = await fetch(`${endpoint}/${storeId}`);
    const json = (await data.json()) as ServerResponse<Product[]>;
    return json;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error al conectar con el servidor" , data:undefined };
  }
}

export const getProductsByStoreName = async (storeName:string) : Promise<ServerResponse<Product[] | undefined>> => {
  try{
    const data = await fetch(`${endpoint}/byName/${storeName}`);
    const json = (await data.json()) as ServerResponse<Product[]>;
    return json;
  }
  catch(error){
    console.log(error);
    return { success:false, message:'Error al conectar con el servidor'}
  }
}

export const getProduct = async (productId:string) => {
  try {
    const data = await fetch(`${endpoint}/product/${productId}`);
    const json = (await data.json()) as ServerResponse<Product>;
    return json;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error al conectar con el servidor" , data:undefined };
  }
}