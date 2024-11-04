import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";
import { writeFile } from "node:fs/promises";


export async function POST(req: NextRequest) {

    const data = await req.json();
    const {prompt} = data;

    const replicate = new Replicate({
        auth: process.env.REPLICATE_API_KEY
    });

    const input = {
        prompt: prompt,
        output_format:'png',
        "output_quality": 80,
        aspect_ratio: '1:1'
    };

    const output:any = await replicate.run("black-forest-labs/flux-schnell", { input });
    console.log(output);

    // for (const [index, item] of Object.entries(output)) {
    // await writeFile(`output_${index}.webp`, item);
    // }
    //=> output_0.webp written to disk
    return NextResponse.json({"imageUrl": output[0]})
}