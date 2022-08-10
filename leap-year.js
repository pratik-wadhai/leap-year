function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    
if((0 == year % 4) && (0 !== year % 100) || (0 == year % 400) ){
    console.log(year + " is a leap year")
}else{
    console.log(year + " is not a leap year")
}
   

/**************Don't change the code below****************/    
}

var year = prompt("Enter a year")
isLeap(year)
