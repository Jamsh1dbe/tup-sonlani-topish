
        
var a = parseInt(Math.random() * 100);
// var getNumber = (a);
const getNumber=(a)=>{
    for (let i = 2; i <=a; i++) {
        var count=0;// boluvchilar soni
        
        for (let j = 2; j < i; j++) {
            if(i%j===0){
                count++;
            }
            
        }
       
        if (count>0){i%2===0?console.log(i,'juft va tub emas'):console.log(i,'toq va tub emas');}
        else{ i%2===0?console.log(i,'juft va tub son'):console.log(i,'toq va tub son');}
    }

}
getNumber(a)