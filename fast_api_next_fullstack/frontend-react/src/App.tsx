import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://react.dev">React</a> + <a href="https://fastapi.tiangolo.com">FastAPI</a>!
        </h1>

        <p className="description">
          {loading ? 'Loading...' : message}
        </p>
      </main>
    </div>
  )
}

export default App 