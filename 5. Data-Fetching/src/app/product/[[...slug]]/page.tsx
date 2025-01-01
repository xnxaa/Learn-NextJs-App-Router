type ProductPageProps = { params: { slug?: string[] } };

async function getData() {
  //ambil data di server luar
  // const res = await fetch("https://fakestoreapi.com/products");
  //-----------------------------------------------
  // ambil data dari server lokal
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ProductPage({ params }: ProductPageProps) {
  const slug = params?.slug || []; // Defaultkan slug ke array kosong jika undefined
  const products = await getData();
  console.log(products);
  return (
    <div className="grid grid-cols-5 mt-5 place-items-center">
      {/* <h1> Product Page</h1> */}
      {/* --------------------------------------------- */}
      {/* // ambil data dari lokal */}
      {/* --------------------------------------------- */}
      {/* kalau ambil dari luar cukup product.title, kalau dari lokal jadi 
      products.data.map */}
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          // <div key={product.id}>
          //   <h2>{product.title}</h2></div>
          //----------------------------------------------------
          // ambil data dari luar
          <div
            key={products.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5"
          >
            <a href="#">
              <img
                className="w-full h-40 p-8 rounded-t-lg object-cover"
                src={product.image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                  {product.title}
                </h5>
              </a>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      {slug.length > 0 ? (
        <>
          <h2>Category: {slug[0]}</h2>
          <h2>Gender: {slug[1]}</h2>
          <h2>Model: {slug[2]}</h2>
          <h2>Id Product: {slug[3]}</h2>
        </>
      ) : (
        <p>No product details available.</p>
      )}
    </div>
  );
}
