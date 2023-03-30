// In your index.js file
function registerSync() {
    // Check if notifications permission has been granted
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
        return;
    }

    // Register the sync event
    navigator.serviceWorker.ready.then(function(reg) {
        return reg.sync.register('mySyncTag');
    }).then(function() {
        console.log('Sync registered');
    }).catch(function(err) {
        console.log('Failed to register sync', err);
    });
}
