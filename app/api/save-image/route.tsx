import axios from "axios";
import { ref } from "firebase/storage";
import { NextRequest } from "next/server";


export async function POST( req: NextRequest ){
    const data = await req.json();
    const {url} = data;

    const base64Image = "data:image/png;base64,"+await convertImage(url)

    const fileName = Date.now()+".png";
    const imageRef = ref(storage, fileName)
}

export const convertImage = async(imageUrl:string)=>{
    try {
        const response = await axios.get(imageUrl, {responseType:'arraybuffer'});

        const base64Image = Buffer.from(response.data).toString("base64");
        return base64Image;
    } catch (error) {
        console.log("Error converting base 64 image");
        
    }
}