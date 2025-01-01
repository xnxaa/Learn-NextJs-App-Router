import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "sepatu",
    price: 200000,
    image: "https://www.nike.com/id/t/dunk-low-retro-shoe-66RGqF/DD1391-100",
  },
  {
    id: 2,
    title: "baju",
    price: 400000,
    image:
      "https://www.nike.com/id/t/dunk-low-retro-se-shoes-MZXWP6/HQ1931-001",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    // cari data dulu, kalau id sesuai dengan yang dicari, tampilkan
    // const detailProduct mengubah atau convert id menjadi number
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }

    // jika id yang dicari gaada
    return NextResponse.json({
      status: 400,
      message: "No Product",
      data,
    });
  }

  // jika hanya produk, tampilkan semua data
  return NextResponse.json({
    status: 200,
    message: "Success",
    data,
  });
}
