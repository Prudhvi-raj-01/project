const numbers=(event)=>{
    let ans=document.getElementById("ans");
    ans.value +=event;
}
const empty=()=>{
    let x=document.getElementById("ans");
    x.value = "";
}
const lclear=()=>{
    let x=document.getElementById("ans");
    let remain=""
    for(let i=0; i<(x.value.length-1);i++){
        remain +=x.value[i]
    }
    x.value=remain
}

const answer=()=>{
    let x=document.getElementById("ans");
    x.value=eval(x.value)
}