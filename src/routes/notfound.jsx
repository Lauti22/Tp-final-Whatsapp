import { Link } from 'react-router-dom'


export default function NotFound(){
return (
<div className="card">
<h2>Página no encontrada</h2>
<p>Vuelve al <Link to="/">inicio</Link>.</p>
</div>
)
}