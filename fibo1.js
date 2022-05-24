function fibonacciGenerator (n){
 let resultado = [] 
 if( n ==1 ){
   resultado.push(0)
   //console.log(resultado)
   return resultado
 }else if (n == 2){
   resultado.push(0)
   resultado.push(1)
   //console.log(resultado)
   
 }else{
   resultado.push(0)
   resultado.push(1)
   let a = 0 
   let b = 1      
   for( i = 0; i <= (n-3) ; i++){
    let sum = a+b 
   	resultado.push(sum) 
     a = b
     b = sum 
     }
  // console.log(resultado)
  
 }
  return resultado
}
 
fibonacciGenerator(15)