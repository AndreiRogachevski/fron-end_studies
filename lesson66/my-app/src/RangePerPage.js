import { useState } from 'react';

export default function RangePerPage({ perPage, setPerPage }) {
  const [currentRange, setCurrentRange] = useState(perPage);
  return (
    <div>
      <label htmlFor="per_page">{currentRange}</label>
      <input
        type="range"
        name="per_page"
        id="per_page"
        value={currentRange}
        min="2"
        max="12"
        step="2"
        onChange={(e) => setCurrentRange(e.target.value)}
        onMouseUp={(e) => setPerPage(e.target.value)}
      />
    </div>
  );
}
