"use client";

import { useState } from "react";
import ResultCard from "./result-card";

function SearchPanel({ data }: { data: Record<string, string>[] }) {
  const [term, setTerm] = useState("");

  const results = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toLowerCase().includes(term.toLowerCase())
    )
  );
  return (
    <div>
      <h2>検索パネル</h2>
      <div className="flex gap-4">
        <input
          className="input input-primary"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="検索キーワード..."
        />
        <p>検索キーワード: {term}</p>
        <button onClick={() => setTerm("")} className="btn btn-error">
          クレア
        </button>
      </div>

      <div>
        <h2>Results:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((item, index) => (
            <ResultCard key={index} record={item} />
          ))}
        </div>
        {/* <pre>
          {results.map((item, index) => (
            <pre key={index}>{JSON.stringify(item, null, 2)}</pre>
          ))}
        </pre> */}
      </div>
    </div>
  );
}
export default SearchPanel;
