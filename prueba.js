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
  
  function getNameValue(num)
  {
      switch(num)
      {
          case 1:
            return "Rock";
            break;
          case 2:
            return "Paper";
            break;
          case 3:
            return "Scissors";
            break;
      }
  }
  
  function rockPaperScissors()
  {
      var user = parseInt(document.getElementById('userChoice').value);
      var random = Math.round(Math.random()*2)+1;
      if (user.length>0)
      {
        document.getElementById('result').innerHTML= "CPU: "+getNameValue(random)+"  User: "+ getNameValue(user); 
        if(random == user)
        {
            document.getElementById('result2').innerHTML= "It's a tie!";
        }
        
        else if (((random-1)%3)+1==user)
            document.getElementById('result2').innerHTML= "CPU wins!";
            
        else
            document.getElementById('result2').innerHTML= "User wins!";
      }
      else
        alert("Insert a value!");
  }