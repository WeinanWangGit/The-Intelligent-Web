navigator.serviceWorker.register("serviceworker.js").then(
    (register)=>{
        console.log("Registered: "+register.scope)
    },
    (err)=>{
        console.log("Failed registration"+err)
    }
)