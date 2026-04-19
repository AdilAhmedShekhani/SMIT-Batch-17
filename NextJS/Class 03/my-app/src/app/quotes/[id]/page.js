export default async function SingleQuote({ params }) {
  let singlequote = await fetch(`https://dummyjson.com/quotes/${params.id}`);
  singlequote = await singlequote.json();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Quote Detail</h1>

      <div className="p-4 border rounded">
        <p>"{singlequote.quote}"</p>
        <p>- {singlequote.author}</p>
      </div>
    </div>
  );
}
