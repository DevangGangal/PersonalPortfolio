
const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click',()=>{
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "322ec6de2d5c28",
        Password: "15fe3ff5427b4f",
        To: "devang.gangal@gmail.com",
        From: inputs.elements["sender"].value,
        Subject: inputs.elements["subject"].value,
        Body: "Name: "+inputs.elements["name"].value+"<br>Sender: "+inputs.elements["sender"].value+"<br>Subject: "+inputs.elements["subject"].value+"<br>Message: "+inputs.elements["message"].value
    }).then(msg=>alert("The email successfully sent"))

})

  
