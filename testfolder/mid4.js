var a =[];
for(let i=0; i<100; ++i){
    a[i] = Math.ceil(Math.random()*100);
}
a.reduce(function(ac,current,index,a){
    if(current%2==0){
    return ++ac;
    }
}
,0);
console.log(ac);