var array = ['coche1','coche2'];
  document.getElementById('prueba').innerHTML = "Array:" + array;
  function push1()
  {
  	var result=document.getElementById('num1').value;
      if(result=="")
        alert("Insert a value in input field.");
      else
      {  
          array.push(result);
          document.getElementById('prueba').innerHTML = array;
      }
  }

  function pop1()
  {
  	var result = array.pop();
  	document.getElementById('prueba').innerHTML = array;
  	document.getElementById('prueba2').innerHTML = "Element popped out: " + result;
  }

  function splice1()
  {
  	var result=document.getElementById('num1').value.split(",",2);
  	array.splice(parseInt(result[0]), parseInt(result[1]));
  	document.getElementById('prueba').innerHTML = array;

  }

  function reload1()
  {
  	array=['coche1','coche2'];
  	document.getElementById('prueba').innerHTML = "Array:" + array;
  }