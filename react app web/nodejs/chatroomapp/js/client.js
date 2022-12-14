const socket=io("http://localhost:8000",{transports: ['websocket']});

const form=document.getElementById("send-container");
const messageint=document.getElementById("msg-input");
const msg=document.querySelector('.container');
const audio=new Audio('notification.mp3')

const append =(message,position)=>{
    const element=document.createElement('div');
    element.innerText = message;
    element.classList.add('message');
    element.classList.add(position);
    msg.append(element);
    if(position == 'left'){
        audio.play();
    }    
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageint.value;
    append(`You : ${message}`,'right')
    socket.emit('send',message);
    messageint.value=""
})

const name=prompt("enter your name to join");
socket.emit('new-user-joined',name);

socket.on('user-joined',name=>{
append(`${name} join the chat`,'right');
})

socket.on('receive',data=>{
    append(`${data.name} : ${data.message}`,'left');
 })
    
socket.on('left',name =>{
    append(`${name} leave the chat`,'right');
 })


//  function modedark() {  
//         document.body.style.background='black';
//         // let ele=document.getElementById('message-con[1]');
//         // ele.style.backgroundColor="white"
//     }
 
//  function modelight() {  
//     document.body.style.background='white';
//     //  let ele=document.getElementById('message-con[1]');
//     //  ele.style.backgroundColor="rgba(128, 128, 128, 0.655)"
// }