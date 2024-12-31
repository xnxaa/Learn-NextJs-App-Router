type DetailProductPageProps = { params: { slug?: string[] } };

export default async function DetailProductPage({ params }: DetailProductPageProps) {
  const slug = params?.slug || []; // Defaultkan slug ke array kosong jika undefined

  return (
    <div>
      <h1>Detail Product Page</h1>

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
