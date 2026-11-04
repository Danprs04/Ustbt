import {getStore} from '@netlify/blobs';
export default async()=>{try{const store=getStore('usi-toolbox');const info=await store.get('current.json',{type:'json'});return new Response(JSON.stringify(info||{weekId:null}),{headers:{'Content-Type':'application/json','Cache-Control':'no-store'}})}catch(e){return new Response(JSON.stringify({error:'Storage unavailable'}),{status:503})}};
export const config={path:'/api/current'};
