import React, { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search quotes..."
        value={input}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default SearchBar;