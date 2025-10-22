export default function EmptyState({ title, subtitle }){
return (
<div role="status" aria-live="polite" style={{textAlign:'center', padding:'1rem', color:'var(--muted)'}}>
<p style={{fontWeight:700}}>{title}</p>
<p>{subtitle}</p>
</div>
)
}