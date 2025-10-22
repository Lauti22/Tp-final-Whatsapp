export default function Sidebar() {
    return (
    <aside className="sidebar" aria-label="Navegación principal">
        <nav className="sidebar-top">
        <button className="side-item" aria-label="Chats" title="Chats">
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M4 4h16v12H7l-3 3V4z"/>
            </svg>
            <span className="side-dot"></span>
        </button>
        <button className="side-item" aria-label="Estados" title="Estados">
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="3" fill="currentColor"/>
            </svg>
        </button>
        <button className="side-item" aria-label="Comunidades" title="Comunidades">
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M9 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm9 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM6 14a4 4 0 0 0-4 4v2h8v-2a4 4 0 0 0-4-4Zm9 0a4 4 0 0 0-4 4v2h8v-2a4 4 0 0 0-4-4Z"/>
            </svg>
        </button>

        <button className="side-item" aria-label="Canales" title="Canales">
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M3 10v4l10 3V7L3 10Zm12-3v10a4 4 0 0 0 6 0V7a4 4 0 0 0-6 0Z"/>
            </svg>
            <span className="side-dot"></span>
        </button>
        </nav>
        
        <div className="sidebar-bottom">
        <button className="side-item" aria-label="Configuración" title="Configuración">
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M12 8a4 4 0 1 1-4 4 4 4 0 0 1 4-4Zm9 4a7.73 7.73 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a8.08 8.08 0 0 0-1.7-1l-.3-2.6H9.5l-.3 2.6a8.08 8.08 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7.73 7.73 0 0 0-.1 1 7.73 7.73 0 0 0 .1 1l-2 1.6 2 3.4 2.4-1a8.08 8.08 0 0 0 1.7 1l.3 2.6h5.9l.3-2.6a8.08 8.08 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6a7.73 7.73 0 0 0 .1-1Z"/>
            </svg>
        </button>

        <button className="side-avatar" aria-label="Perfil" title="Perfil">
            <img src="https://www.lanacion.com.ar/resizer/v2/leo-messi-sorprendio-a-los-hinchas-con-postales-ZHPSACLJGJGZHD352Z56VJIF24.png?auth=7b6b49ee6f8134811c8c79958cfc6791721b219226e0fdd11a824e30bc1990d4&width=420&height=280&quality=70&smart=true" alt="Tu perfil" />
        </button>
        </div>
    </aside>
    )
}
