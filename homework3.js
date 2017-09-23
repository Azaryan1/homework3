const first= function(a,b,c) {
    return (a+b)/c;
};
const second= function(){
    return "Meh";
};
const third= function(d,e){
    console.log(d+e);
};
const fullName= function(firstname,lastname){
    return firstname+" "+lastname;
};
const fourth= function(fs,ss,ts){
if(fs.lenght>ss.lenght && fs.lenght>ts.lenght){return fs;}
if(ss.lenght>fs.lenght && ss.lenght>ts.lenght){return ss;}
if(ts.lenght>fs.lenght && ts.lenght>ss.lenght){return ts;}
};
const fifth= function(num1,num2){
    if(num1===num2){return 0;}
    if(num1>num2){return 1;}
    if(num2>num1){return -1;}
};
const sixth= function(a1,b1,c1){
    if(!!a1===true){return a1;}
    if(!!b1===true){return b1;}
    if(!!c1===true){return c1;}
};
