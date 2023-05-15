import { useState, useEffect, useRef } from 'react'
import './App.css'
import axios from 'axios';

// debouncing
let timer;
function App() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const observer = useRef();

  // below code for infinite scrollings
  const lastElement = (node) => {
    if (loading) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(page + 1);
      }
    })
    if (node) {
      observer.current.observe(node);
    }
  }
  useEffect(() => {
    setLoading(true)
    const getSearchItems = async () => {
      const books = await axios.get(`http://openlibrary.org/search.json?title=${query}&page=${page}`)
      setLoading(false);
      setHasMore(books.data.docs.length > 0)
      setData((prev) => {
        return [
          ...new Set([...prev, ...books.data.docs.map((book) => book.title)])
        ]
      })
    }
    getSearchItems();
  }, [query, page])
  useEffect(() => {
    setData([]);
  }, [query])
  const handleChange = (e) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      setQuery(e.target.value);
    }, 1000);
  }
  console.log(query);
  return (
    <div className="SearchContainer">
      <input type="text" onChange={(e) => handleChange(e)} />
      {data.map((book, index) => {
        if (data.length === index + 1) {
          return <div key={index} ref={lastElement} className="searchTitle">
            {book}
          </div>
        }
        else {
          return <div key={index} className="searchTitle">
            {book}
          </div>
        }
      })}
      {loading && <div>Loading...</div>}
    </div>
  )
}

export default App
