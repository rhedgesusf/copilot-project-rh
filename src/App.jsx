import { useState, useEffect } from 'react'
import './App.css'
import QuoteCard from './components/QuoteCard'
import SearchBar from './components/SearchBar'

/*
  App: Quote Viewer
  Features:
    - Display a random quote
    - Show author and refresh button
  Components: QuoteCard, SearchBar
*/

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      console.log(response);
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, [])

  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  return (
    <div className="App">
      <h1>Quote Viewer</h1>
      <SearchBar onSearch={handleSearch} />
      <QuoteCard quote={quote} author={author} searchTerm={searchTerm} />
      <button onClick={fetchQuote}>Refresh Quote</button>
    </div>
  )
}

export default App;
