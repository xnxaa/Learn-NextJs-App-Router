import { NextResponse } from 'next/server';

async function GET() {
    return NextResponse.json({ status:200, message: "success"});
}


