const message = document.getElementById("message")
function setVisits(val){
    document.cookie = `visit=${val};`
}

function getVisits(){
    key_val = document.cookie.split("; ").find(key_val =>key_val.startsWith('visits='))
    let result = 0
    if(key_val){
        result = parseInt(key_val.split("=")[1]) || 0
    }
    return result
}
message.innerText = `You've been here ${getVisits()} times before`
setVisits(getVisits()+1)

document.getElementById("reset_btn").addEventListener("click", function(){
    setVisits(0)
    message.innerText = "Count reset ..."
})
