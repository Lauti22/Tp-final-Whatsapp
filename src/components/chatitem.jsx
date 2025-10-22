import { Link } from 'react-router-dom'

export default function ChatItem({ chat }) {
    return (
    <li className="card chat-link" role="listitem">
        <Link to={`/chat/${chat.id}`} className="chat-item">
        <img
            src={chat.avatar}
            alt={`Foto de ${chat.name}`}
            className="chat-avatar"
        />
        <div className="chat-info">
            <strong>{chat.name}</strong>
            <div className="timestamp">{chat.id}</div>
        </div>
        </Link>
    </li>
    )
}
