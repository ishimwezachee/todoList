let addButton = document.getElementById("butt");
let inPutFeild = document.getElementById("inputFeild");
let todoContainer = document.getElementById('container');


addButton.addEventListener('click',function(){
    let para = document.createElement('p');
    let inputValue  = inPutFeild.value;
    let node = document.createTextNode(inputValue);
    para.append(node);
    para.classList.add('paraStyles')
    todoContainer.append(para);
    inPutFeild.value ="";          
})