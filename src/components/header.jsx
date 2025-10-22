import { Link } from 'react-router-dom'


export default function Header(){
return (
<header className="header" role="banner">
<div className="header-inner container">
<div className="brand" aria-label="WhatsApp">
<span className="logo" aria-hidden="true"></span>
<span>WhatsApp de Lauti</span>
</div>
<nav aria-label="Principal">
<Link to="/" className='nav-link'>Inicio</Link>
</nav>
</div>
</header>
)
}