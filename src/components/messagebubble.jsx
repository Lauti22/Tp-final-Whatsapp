export default function MessageBubble({ message }){
const date = new Date(message.ts)
const time = new Intl.DateTimeFormat('es-AR', { hour:'2-digit', minute:'2-digit' }).format(date)
return (
<div className={`message ${message.author === 'me' ? 'me' : 'other'}`}
role="group" aria-label={`Mensaje de ${message.author === 'me' ? 'mí' : 'otro'}`}>
<div>{message.text}</div>
<div className="timestamp" aria-hidden>{time}</div>
</div>
)
}