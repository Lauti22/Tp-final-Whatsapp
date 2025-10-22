import { useState } from 'react'
import { useChat } from '../context/chatcontext.jsx'

export default function MessageComposer({ chatId, disabled = false }){
  const { send } = useChat()
  const [text, setText] = useState('')
  const [err, setErr] = useState('')

  function onSubmit(e){
    e.preventDefault()
    if(disabled) return
    const value = text.trim()
    if(value.length === 0){ setErr('Escribe un mensaje.'); return }
    if(value.length > 500){ setErr('Máximo 500 caracteres.'); return }
    send(chatId, value)
    setText(''); setErr('')
  }

  return (
    <form className="composer" onSubmit={onSubmit} aria-label="Enviar mensaje">
      <label htmlFor="msg" className="visually-hidden">Mensaje</label>
      <input
        id="msg"
        className="input"
        value={text}
        onChange={e=> setText(e.target.value)}
        placeholder="Escribe un mensaje"
        aria-invalid={!!err}
        aria-describedby={err ? 'err' : undefined}
        disabled={disabled}
      />
      <button className="btn primary" type="submit" disabled={disabled}>Enviar</button>
      {err && <div id="err" role="alert" style={{color:'var(--danger)'}}>{err}</div>}
    </form>
  )
}