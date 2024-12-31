import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id:1,
        name:'sepatu',
        price:200000,

    },
    {
        id:2,
        name:'baju',
        price:400000,

    }
]

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get('id');
    if (id) {
        // cari data dulu, kalau id sesuai dengan yang dicari, tampilkan
        // const detailProduct mengubah atau convert id menjadi number
        const detailProduct = data.find((item) => item.id === Number(id));
        if (detailProduct){
        return NextResponse.json({ 
            status:200, 
            message:'Success', 
            data:detailProduct});
    }

    // jika id yang dicari gaada
    return NextResponse.json({ 
        status:400, 
        message:'No Product', 
        data})
}

    
    // jika hanya produk, tampilkan semua data
    return NextResponse.json({ 
        status:200, 
        message:'Success', 
        data});
}