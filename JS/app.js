import "./protector.js"
import { addProduct } from "./request.js";

const btn = document.getElementById("btn")

btn.addEventListener("click", function(e){
    const title = prompt("Mashinagizni nomini yozing xorzcha bu sayt testa", "Damas");
    const sendData = {title };

    addProduct(sendData).then((res) => {
        console.log(res);
        
    }).catch((err)=>{
        console.log(err);
        
    }).finally(()=>{

    })
})
