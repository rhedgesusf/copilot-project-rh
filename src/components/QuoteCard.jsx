import React from 'react'
import './QuoteCard.css'

function QuoteCard({ quote, author, searchTerm }) {
  const highlightText = (text, term) => {
    if (!term) return text
    const regex = new RegExp(`(${term})`, 'gi')
    return text.replace(regex, (match) => `<mark>${match}</mark>`)
  }

  return (
    <div className="quote-card">
      <p
        className="quote"
        dangerouslySetInnerHTML={{
          __html: highlightText(quote, searchTerm),
        }}
      ></p>
      <p className="author">- {author}</p>
    </div>
  )
}

export default QuoteCard;