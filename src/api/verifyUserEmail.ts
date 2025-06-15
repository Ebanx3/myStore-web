const endpoint = `${import.meta.env.VITE_SERVER_URL}/auth/verifyEmail`;

export const verifyEmail = async (verificationCode:string) => {
    try{
        console.log(`${endpoint}/${verificationCode}`)
        const data = await fetch(`${endpoint}/${verificationCode}`);
        const json = await data.json() as ServerResponse;
        console.log(json)
        return json;
    }
    catch(error){
        console.log(error);
    }
}