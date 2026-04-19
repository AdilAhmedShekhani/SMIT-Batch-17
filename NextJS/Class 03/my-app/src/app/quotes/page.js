async function getQuotes() {
  const res = await fetch("https://dummyjson.com/quotes");

  const data = await res.json();
  return data.quotes;
}

export default async function QuotesPage() {
  const quotes = await getQuotes();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Quotes</h1>

      {quotes.map((q) => (
        <div key={q.id} className="mb-4 p-4 border rounded">
          <p className="text-lg">"{q.quote}"</p>
          <p className="text-sm text-gray-500">- {q.author}</p>
        </div>
      ))}
    </div>
  );
}
