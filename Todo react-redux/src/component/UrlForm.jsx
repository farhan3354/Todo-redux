import axios from "axios";
import { useState } from "react";
import ShortUrlDisplay from "./ShortUrlDisplay";

export default function UrlForm() {
  const [inputUrl, setInputUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCopied(false);

    try {
      const response = await axios.post("http://localhost:4000/url", {
        url: inputUrl,
      });

      console.log("Response:", response.data);
      setShortUrl(response.data.short);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`http://localhost:4000/${shortUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">
          🔗 URL Shortener
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Paste your long URL here..."
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 rounded-lg outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            🚀 Shorten URL
          </button>
        </form>

        <ShortUrlDisplay
          shortUrl={shortUrl}
          copied={copied}
          onCopy={handleCopy}
        />
      </div>
    </div>
  );
}
