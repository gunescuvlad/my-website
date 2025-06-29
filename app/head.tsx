// app/head.tsx
export default function Head() {
  return (
    <>
      {/* Favicon `.ico` */}
      <link rel="icon" href="/favicon.ico" />
      {/* Fallback PNG */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      {/* Meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta name="description" content="Furnizor de materiale de construcții de calitate în București. Peste 500 de produse disponibile cu livrare rapidă." />
      <title>IzoPresto - Materiale de Construcții | București</title>
    </>
  )
}
