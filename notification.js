if('Notification' in window) {
    if(Notification.permission === "granted") {
        const notification = newNotification("Ma Seconde Notification"); 
    } else if (Notification.permission !== "denied") { 
        Notification.requestPermission(permission => { 
            if(permission ==="granted") { 
                const notification = newNotification("Ma Première Notification"); 
            }
        }); 
    } 
}