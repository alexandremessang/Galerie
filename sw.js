/*self.addEventListener('message',event=>{
    this.clients.matchAll().then(clients=>{
        clients.forEach(client=>client.postMessage('Enchanté, je suis le service worker'));
    });
});*/


self.addEventListener('install', event => {         
    event.waitUntil(
        caches.open('main').then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/script.js'    
            ]);
        })
    );
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