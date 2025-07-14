'use client';

import { useState, useRef, useEffect } from 'react';

export default function CommandInput({ onCommand }) {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onCommand(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <span className="text-matrix-green mr-2">{'>'}</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-transparent text-matrix-green outline-none flex-1 font-prime caret-matrix-green"
        autoComplete="off"
        spellCheck="false"
      />
    </form>
  );
}