const C='pagamenti-v16';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-v13-192.png','./icon-v13-512.png','./nunito-v32.woff2','./nunito-ext-v32.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('message',e=>{if(e.data==='skip')self.skipWaiting();});
// L'app si apre subito dalla copia salvata sul telefono (anche senza rete); intanto la copia viene rinfrescata dalla rete.
// Le versioni nuove arrivano con il tasto «Aggiorna» (version.json non passa mai dalla copia salvata).
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET')return;const u=new URL(q.url);
  if(u.origin!==location.origin||u.pathname.endsWith('/version.json')||u.pathname.endsWith('/sw.js')||u.search.includes('fresh='))return;
  e.respondWith(caches.open(C).then(c=>c.match(q,{ignoreSearch:true}).then(hit=>{
    const net=fetch(q,{cache:'no-cache'}).then(r=>{if(r.ok)c.put(q,r.clone());return r;});
    if(hit){e.waitUntil(net.catch(()=>{}));return hit;}
    return net.catch(()=>c.match('./index.html'));})));});
