import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
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
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> + <a href="https://fastapi.tiangolo.com">FastAPI</a>!
        </h1>

        <p className={styles.description}>
          {loading ? 'Loading...' : message}
        </p>
      </main>
    </div>
  )
} 