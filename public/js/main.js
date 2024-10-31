import { fetchFreshPoint } from "./fetchFreshPoint.js";

window.addEventListener('DOMContentLoaded',()=>{

    const freshPointDiv=document.getElementById('freshPoint-info')
    const sendButton=document.getElementById('sendButton')
    const displayComment=(event)=>{
        const comment=document.getElementById("myComment")
        event.preventDefault()
        comment.style.visibility="visible"
        $("#message").text($("#messageInput").val())
    }

    const displayFreshPoint = () => {
        const freshPointP=document.getElementById('freshPointInfo')
        console.log('calling displayFreshPoint')
        const freshPointBtn=document.getElementById('freshPoint')
        freshPointBtn.addEventListener('click', fetchFreshPoint)
        freshPointDiv.appendChild(freshPointP)
    }

    (function startAll(){
        displayFreshPoint()
        sendButton.addEventListener('click', displayComment)
    })()
})
