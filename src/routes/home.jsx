import { Outlet, useLocation } from 'react-router-dom'
import ChatList from '../components/chatlist.jsx'
import EmptyState from '../components/emptystate.jsx'
import useQueryParam from '../hooks/usequeryparam.js'
import { useChat } from '../context/chatcontext.jsx'
import Sidebar from '../components/sidebar.jsx'

export default function Home() {
  const { chats } = useChat()
  const [q, setQ] = useQueryParam('q', '')
  const location = useLocation()

  const filtered = chats.filter(c =>
    c.name.toLowerCase().includes(q.toLowerCase())
  )

  const isChatOpen = location.pathname.startsWith('/chat/')

  return (
    <div className="home-grid">
      <Sidebar />
      <aside className="card chat-list-panel" aria-labelledby="recent-chats">
        <h2 id="recent-chats">Chats</h2>
        <div className="searchbar" role="search">
          <label className="visually-hidden" htmlFor="search">Buscar</label>
          <input
            id="search"
            placeholder="Buscar por nombre…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-describedby="search-hint"
          />
          <span id="search-hint" className="visually-hidden">
            Escribe para filtrar la lista
          </span>
        </div>
        {filtered.length
          ? <ChatList chats={filtered} />
          : <EmptyState title="Sin resultados" subtitle="Intenta con otro nombre" />
        }
      </aside>

      <section className="chat-container">
        {isChatOpen ? (
          <Outlet />
        ) : (
          <div className="card" aria-labelledby="welcome">
            <h2 id="welcome">Bienvenido/a</h2>
            <p>Elegí un chat de la izquierda para empezar.</p>
          </div>
        )}
      </section>
    </div>
  )
}
