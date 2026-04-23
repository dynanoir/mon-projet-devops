import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [messages, setMessages] = useState([])
  const [health, setHealth] = useState('Chargement...')

  useEffect(() => {
    axios.get('http://localhost:3000/api/messages')
      .then(res => setMessages(res.data.messages))
      .catch(() => setMessages(['Impossible de joindre le backend']))

    axios.get('http://localhost:3000/health')
      .then(res => setHealth(res.data.status))
      .catch(() => setHealth('Backend non disponible'))
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🚀 Mon App DevOps</h1>
      <p>Statut backend : <strong>{health}</strong></p>
      <h2>Messages :</h2>
      <ul>
        {messages.map((msg, i) => <li key={i}>{msg}</li>)}
      </ul>
    </div>
  )
}

export default App