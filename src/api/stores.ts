const endpoint = `${import.meta.env.VITE_SERVER_URL}/store/byUser`;

export const getUserStores = async () => {
  try {
    const data = await fetch(endpoint);
    const json = (await data.json()) as ServerResponse<Store[]>;
    console.log(json)
    return json;
  } catch (error) {
    console.log(error);
    return {success:false, data:[] as Store[]}
  }
};
