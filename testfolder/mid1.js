let a =[];
for(let i=0; i<100; ++i){
    a[i] = Math.ceil(Math.random()*100);
}
for(let i=0; i<100;++i){
    if(a[i]>5&&a[i]<9)
        a.splice(i,1)
        if(a[i]>15&&a[i]<19)
        a.splice(i,1)
             if(a[i]>25&&a[i]<29)
                a.splice(i,1)
                if(a[i]>35&&a[i]<39)
                    a.splice(i,1)
                    if(a[i]>45&&a[i]<49)
                         a.splice(i,1)  
                        if(a[i]>55&&a[i]<59)
                            a.splice(i,1)
                            if(a[i]>65&&a[i]<69)
                                a.splice(i,1)
                                if(a[i]>75&&a[i]<79)
                                    a.splice(i,1)  
                                    if(a[i]>85&&a[i]<89)
                                        a.splice(i,1)
                                        if(a[i]>95&&a[i]<99)
                                            a.splice(i,1)
}
console.log(a)
