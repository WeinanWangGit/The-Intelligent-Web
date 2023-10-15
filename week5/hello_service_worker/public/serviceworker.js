console.log("Service Worker JavaScript called...")



self.addEventListener("install", (ev)=>{
    ev.waitUntil(
        caches.open('core')
            .then((cache) => {
                return cache.add(new Request("test.ejs"));
            })
            .then(() => {
                console.log("Cache installed successfully");
            })
            .catch((err) => {
                console.error("Failed to install cache:", err);
            })
    );
});



self.addEventListener("activate", (ev)=>{
    console.log("activate")
})

// self.addEventListener("fetch", (ev)=>{
//     const req = ev.request
//     if(req.headers.get("Accept").includes("text/html")){
//         ev.respondWith(
//             fetch(req).then((resp)=>{
//                 return resp
//             }).catch((err)=>{
//                 return caches.match("cached.html")
//             })
//         )
//     }
// })