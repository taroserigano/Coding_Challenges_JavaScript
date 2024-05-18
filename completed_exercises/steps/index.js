

const steps = (n) => { 

let res = "" 

for(let i=1; i < n; i++){ 
     res = ""
     
    for(let j=0; j <i; j++){ 
    
    res += "*"
}
    console.log(res)
    
}
}

steps(10)
