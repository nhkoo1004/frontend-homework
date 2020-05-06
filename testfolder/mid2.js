let a =[];
for(let i=0; i<100; ++i){
    a[i] = Math.ceil(Math.random()*100);
}
a.sort(compareString);
console.log(a);

function compareNumber(i,j){
    return i-j;
}
