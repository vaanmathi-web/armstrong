//Armstrong Number
let num=prompt("Enter a number");
let b=num;
let sum1=0;
let count=0;

while(num>0){
	let rem=num%10;
	num=(num-rem)/10;
	sum1++;
}
console.log(b);
while(b>0){
	var rem=b%10;
	b=(b-rem)/10;
	count+=rem**sum1;
}
	console.log(count);

if(num==count){
	document.getElementById("res").innerText="The number is Armstrong";
}else{
	document.getElementById("res").innerText="The number is not Armstrong";
}
