if('Notification' in window) {
    if(Notification.permission === "granted") {
        const notification = new Notification("Ma Seconde Notification"); 
    } else if (Notification.permission !== "denied") { 
        Notification.requestPermission(permission => { 
            if(permission ==="granted") { 
                const notification = new Notification("Ma Première Notification"); 
            }
        }); 
    } 
}