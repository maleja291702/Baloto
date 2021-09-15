var z;
var b;
document.write("El numero aleatorio de tu balota es: " );

for(var i=0; i<5; i++)
{
  z = aleatorio(1, 43);
  document.write( z + " , ");
  
}

document.write("<br> El numero aleatorio de tu balota es: " );

for(var i=0; i<1; i++)
{
  b = aleatorio(1, 16);
  document.write(b + "" );
}



function aleatorio(min,max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;  
}
