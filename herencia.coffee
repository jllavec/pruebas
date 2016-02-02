class Person
  constructor: (@name) ->
  walk: ()->
    alert "I'm walking!"
    return
  sayHi: ()->
    alert "Hi my name is #{@name}"
    return
    
class Student extends Person
  constructor: (@name, @topic)-> 
    super (@name)
  sayHi: () ->
    alert "Hi my name is #{@name} and i'm studying #{@topic}"
    return
  sayBye: () ->
    alert "Bye!"
    return

paco = new Person "Paco"
paco.sayHi()
paco.walk()

student1 = new Student "Carolina","Fisica"
student1.sayHi()
student1.walk()
student1.sayBye()

