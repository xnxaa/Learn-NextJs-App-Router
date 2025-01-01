import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest) {
    console.log(request)

    //menangkap data request
    const res = await request.json();
    return NextResponse.json({ 
            status:200, 
            message:'Success',
            data:res,
})
}