import { Routes, Route } from 'react-router-dom'
import Header from './components/header.jsx'
import Home from './routes/home.jsx'
import Chat from './routes/chat.jsx'
import NotFound from './routes/notfound.jsx'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container" role="main">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="chat/:chatId" element={<Chat />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}