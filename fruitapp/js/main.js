window.onload=()=>{
    //const prices=[120,50,180];
    const result=document.getElementById("result");
    const fruits=document.getElementsByClassName("fruits");
    const numberChange=()=>{
        let sum=0;
        /*for(let i=0;i<fruits.length;i++){
            sum += fruits[i].value * fruits[i].getAttribute("data-price");
        }*/
        for(let f of fruits){
            sum += f.value * f.getAttribute("data-price");
        }
        result.textContent=sum+"円です";
    };
    for(let f of fruits){
        f.addEventListener("change",numberChange);
    }

};