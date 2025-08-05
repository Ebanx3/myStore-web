const get_signature_endpoint = `${
  import.meta.env.VITE_SERVER_URL
}/product/get-signature`;
const cloudinary_api_key = import.meta.env.VITE_CLOUDINARY_API_KEY;
const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const cloudinary_endpoint = import.meta.env.VITE_CLOUDINARY_ENDPOINT;

type CloudinaryData = {
  signature: string;
  timestamp: number;
  folder: string;
};

export const uploadPicture = async (images: File[]) => {
  try {
    const signatureResponse = await fetch(get_signature_endpoint, {
      credentials: "include",
    });
    const json =
      (await signatureResponse.json()) as ServerResponse<CloudinaryData>;
    if (!json.success) {
      return null;
    }

    const { signature, timestamp, folder } = json.data!;

    const urls = [];

    const data = new FormData();
    for (const image of images) {
      data.append("file", image);
      data.append("api_key", cloudinary_api_key);
      data.append("signature", signature);
      data.append("timestamp", timestamp.toString());
      data.append("folder", folder);

      const cloudinaryResponse = await fetch(
        `${cloudinary_endpoint}/${cloud_name}/image/upload`,
        { method: "POST", body: data }
      );
      const jsonC = await cloudinaryResponse.json();
      urls.push(jsonC.secure_url);
    }
    return urls;
  } catch (error) {
    console.log(error);
    return null;
  }
};
