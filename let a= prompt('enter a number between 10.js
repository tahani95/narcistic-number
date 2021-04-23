let a= prompt('enter a number between 100 and 999 ',) || 0;
let c,b,d,m;
if(a>100 && a<999){
   c=a.substring(0, 1) ** 3;
    b=a.substring(2, 1) ** 3;
    d=a.substring(3, 2) ** 3;
    m=b+c+d;
    if(m == a){
        alert("Narcissistic Number");
    }
      else{
         alert("Not Narcissistic Number");
      }

}
else {
    alert("The number must be between 100 and 999");
}
   
