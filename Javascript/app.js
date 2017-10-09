function cipher(text){
  
  //Pide la frase al usuario
  text = prompt('Ingrese una frase');

  //Igualamos el texto que recibimos a una variable array 
  var array = [text];
  var array1 = [];
  
  //valida que el texto ingresado no esté vacío o sea un número
  if(text == '' || text === 'number'){
    return text;  
  }else{

      //Recorre hasta la longitud del texto
    for(i = 0; i < text.length; i++){
      
      //Para la variable letterCod se almacenará el número de esa posición
      var letterCod = text.charCodeAt(i);

      //condicionamos que letterCod esté entre los rangos de las mayúsculas y minúsculas de código ASCII
      if ((letterCod >= 65 && letterCod <= 90) || (letterCod >= 97 && letterCod <= 122)){
        
        //Se aplica la fórmula para sacar el número que luego se pasará a cifrar
        var num = (letterCod - 65 + 33) % 26 + 65;                   
        var converted = String.fromCharCode(num);       
      } 
      return array1.push(converted); 
    }
 
  }
  
}
cipher('text')

/*
function cipher(text){
  
  //Pide la frase al usuario
  text = prompt('Ingrese una frase');

  //Igualamos el texto que recibimos a una variable array 
  var array = [text];
  var array1 = [];

  for(i = 0; i < text.length; i++){
      
    var letterCod = text.charCodeAt(i);

    if ((letterCod >= 65 && letterCod <= 90) || (letterCod >= 97 && letterCod <= 122)){
      var num = (letterCod - 65 + 33) % 26 + 65;                   
      var converted = String.fromCharCode(num);       
    } 
   array1.push(converted); 
  }
 
}
cipher('text')
*/
