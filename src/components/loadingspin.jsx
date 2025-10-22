export default function LoadingSpinner() {
return (
    <div className="loading-center" role="status" aria-live="polite" aria-label="Cargando">
        <div className="spinner" aria-hidden="true"></div>
        <span className="visually-hidden">Cargando…</span>
    </div>
    )
}
