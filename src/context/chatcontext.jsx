import { createContext, useContext, useMemo, useReducer, useEffect } from 'react'
import { seedChats, seedMessages } from '../data/seed.js'

const ChatContext = createContext()

function reducer(state, action){
  switch(action.type){
    case 'SEND': {
      const { chatId, text } = action.payload
      const msg = { id: crypto.randomUUID(), chatId, author:'me', text: text.trim(), ts: Date.now() }
      const messages = [ ...state.messages, msg ]
      return { ...state, messages }
    }
    default: return state
  }
}

const STORAGE_KEY = 'tpw_messages_v1'

function loadMessages(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : seedMessages
  } catch { return seedMessages }
}

export function ChatProvider({ children }){
  const [state, dispatch] = useReducer(reducer, { chats: seedChats, messages: loadMessages() })

  useEffect(() => {
    
    const id = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.messages))
    }, 120)
    return () => clearTimeout(id)
  }, [state.messages])

  const api = useMemo(()=>({
    chats: state.chats,
    messagesByChat: (chatId)=> state.messages.filter(m=> m.chatId === chatId),
    send: (chatId, text)=> dispatch({ type:'SEND', payload:{ chatId, text } })
  }), [state])

  return <ChatContext.Provider value={api}>{children}</ChatContext.Provider>
}

export function useChat(){
  const ctx = useContext(ChatContext)
  if(!ctx) throw new Error('useChat must be used within ChatProvider')
  return ctx
}
