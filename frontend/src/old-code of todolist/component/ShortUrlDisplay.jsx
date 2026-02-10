// components/ShortUrlDisplay.jsx
export default function ShortUrlDisplay({ shortUrl, onCopy, copied }) {
  if (!shortUrl) return null;

  const fullShortUrl = `http://localhost:4000/${shortUrl}`;

  return (
    <div className="mt-6 text-center">
      <p className="text-gray-700 mb-2 font-medium">Your short URL is:</p>
      <div className="flex items-center justify-between border rounded-md p-2 bg-gray-100 text-sm">
        <p
          href={fullShortUrl}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 truncate"
        >
          {fullShortUrl}
        </p>
        <button
          onClick={onCopy}
          className="ml-2 bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
