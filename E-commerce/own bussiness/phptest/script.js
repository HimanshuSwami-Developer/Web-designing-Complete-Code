
const form = document.querySelector("form"),
statusTxt = form.querySelector("span");


form.onsubmit = (e)=>{
   e.preventDefault();
   statusTxt.style.display = "inline-block";
   


   let htm = new XMLHttpRequest();
   htm.open("POST","message.php",true);
   htm.onload =()=>{
     if(htm.readyState == 4 && htm.status  == 200){
         let response = htm.response;
         console.log(response);
        }
   }
   let formData = new FormData(form);
   htm.send(formData);
}