var one = prompt ('Введите первое число')
alert(one)
var two = prompt ('Введите второе число')
alert(two)
var three = prompt ('Введите третье число')
alert(three)

if((two<one && one<three) || (three<one && one<two)){ 
    alert(' Среднее число ' + one)}
if((two>one && two<three) || (three<two && one>two)){ 
    alert(' Среднее число ' + two)}
if((three<one && two<three) || (three<two && one<three)){ 
    alert(' Среднее число ' + three)}
    

