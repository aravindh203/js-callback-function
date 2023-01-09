            /*1*/
call1=(a,b)=>c=a+b;
back1=(a=call1(10,10))=>a=a*10;
console.log(back1());


            /*2*/
call2=(a,b)=>c=a+b;
back2=(a=call1(15,5))=>a=a+10;
console.log(back2());


            /*3*/
call3=(a,b)=>c=a+b;
back3=(a=call3(15,5))=>a=a-10;
console.log(back3());


            /*4*/
call4=(a,b)=>c=a+b;
back4=(a=call4(15,100))=>a=a*10;
console.log(back4());


            /*5*/
call5=(a,b)=>c=a+b;
back5=(a=call5(100,100))=>a=a*1;
console.log(back5());


            /*6*/
call6=(a,b)=>c=a+b;
back6=(a=call6(5,5))=>a=a*3;
console.log(back6());


            /*7*/
call7=(a,b)=>c=a+b;
back7=(a=call7(100,100))=>a=a-10;
console.log(back7());


            /*8*/
call8=(a,b)=>c=a+b;
back8=(a=call8(100,100))=>a=a*1;
console.log(back8());


            /*9*/
call9=(a,b)=>c=a+b;
back9=(a=call9(10,100))=>a=a/2;
console.log(back9());


            /*10*/
call10=(a,b)=>c=a+b;
back10=(a=call10(100,2))=>a=a%2;
console.log(back10());

