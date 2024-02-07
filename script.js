let colorPicker= document.queryselector("#color");
let hexInput=document.querySelector("#hex");
colorInput.addEventlistener('input', ()  =>{
    let color=colorPicker.value;
    hexInput.value=color;
   document.body.style.backgroundColor= color;

});
