import ChatItem from './chatitem.jsx'


export default function ChatList({ chats }){
return (
<ul className="list" aria-label="Lista de chats">
{chats.map(c=> (
<ChatItem key={c.id} chat={c} />
))}
</ul>
)
}