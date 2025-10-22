import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useChat } from '../context/chatcontext.jsx'
import MessageBubble from '../components/messagebubble.jsx'
import MessageComposer from '../components/messagecomposer.jsx'
import LoadingSpin from '../components/loadingspin.jsx'

export default function Chat() {
  const { chatId } = useParams()
  const { chats, messagesByChat } = useChat()
  const chat = chats.find(c => c.id === chatId)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const id = setTimeout(() => setLoading(false), 450)
    return () => clearTimeout(id)
  }, [chatId])

  if (!chat) {
    return <div className="card"><p>chat no encontrado.</p></div>
  }

  const messages = messagesByChat(chatId)

  return (
    <section className="card chat" aria-labelledby="title" aria-busy={loading}>
      <div className="chat-header">
        <img
          className="chat-header-avatar"
          src={chat.avatar}
          alt={`Foto de ${chat.name}`}
        />
        <div className="chat-header-info">
          <h2 id="title">{chat.name}</h2>
        </div>
      </div>
      {loading ? (
        <div className="messages"><LoadingSpin /></div>
      ) : (
        <div className="messages" aria-live="polite">
          {messages.length === 0 ? (
            <div className="messages-empty"></div>
          ) : (
            messages.map(m => <MessageBubble key={m.id} message={m} />)
          )}
        </div>
      )}
      <MessageComposer chatId={chatId} disabled={loading} />
    </section>
  )
}
