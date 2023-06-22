//1
let divider = ", ";
let i=10;

do{document.write(i+divider)
i+=1}
while 
(i <= 20)

//2
for (let i=10;i<=20;i++){
    console.log(i**2);
}

//3
for (let i=1;i<=10;i++){
    let result=i*7 ;
    console.log(`${i}*7=${result}`)
}

//4
let sumRes=0;
for (let i=1;i<=500;i++){
     sumRes +=i;
}
  console.log(sumRes);

//5
  let multRes = BigInt(1);
  for (let i = 15; i <= 35; i++) {
    multRes *= BigInt(i);
  }
  console.log(multRes.toString());


  //6
  let sum=0;
  let count=0;

  for (let i = 1; i<=500; i++){
    sum +=i;
    count++;
  }

  let average = sum/count;
  console.log(average);