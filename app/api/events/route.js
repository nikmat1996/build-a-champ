import { NextResponse } from "next/server";

export const GET = async (req, res) => {
    try {
  
      console.log("testing get");
      throw new Error()
      
      return new Response(
        JSON.stringify({"hello": "nm"}),
      );
  
      // return new Response(convertedImageBuffer.toString("base64"));
    } catch (error) {
      console.error("Error during image conversion:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 },
      );
    }
  };