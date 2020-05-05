let a =[];
for(let i=0; i<100; ++i){
    a[i] = Math.ceil(Math.random()*100);
    if(a[i]%2==0)
        a.pop();
}
console.log(a)

