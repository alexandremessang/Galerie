/*self.addEventListener('message',event=>{
    this.clients.matchAll().then(clients=>{
        clients.forEach(client=>client.postMessage('Enchanté, je suis le service worker'));
    });
});*/

self.addEventListener('fetch',event=>{
    console.log(event.request.url);
    //event.respondWith(new Response('PWA!!!!'));
});

self.addEventListener('install',event=>{         
    event.waitUntil(Promise.resolve('Install phase succeed'));
});


/*self.addEventListener('activate',function(event){         
    event.waitUntil();
});*/

/**
 * Suppresion de SW
 * 
 * if('serviceWorker'in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations=> {
        for (let registration of registrations){
            registrations.unregister();
        }
    }
}
*/