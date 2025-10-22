import { useSearchParams } from 'react-router-dom'


export default function useQueryParam(key, defaultValue=''){
const [params, setParams] = useSearchParams()
const value = params.get(key) ?? defaultValue


function setValue(v){
const next = new URLSearchParams(params)
if(v === '' || v == null){ next.delete(key) }
else { next.set(key, v) }
setParams(next, { replace:true })
}


return [value, setValue]
}