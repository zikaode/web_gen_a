import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest, res:NextResponse) => {
    return new Response("API Berhasil");
}