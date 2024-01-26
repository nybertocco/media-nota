let registerStudent = true
let students = []

while(registerStudent) {
 let student = prompt("Qual o nome do(a) aluno(a)?")
 let n1 = prompt("Qual a nota da primeira prova?")
 let n2 = prompt("Qual a nota da segunda prova?")
  
 let average = (Number(n1) + Number(n2)) / 2
   
 let interrupt = prompt("Deseja cadastrar mais algum aluno?")
 
 if (interrupt === "n") {
   registerStudent = false
 }

 students.push({
   name: student,
   note1: n1,
   note2: n2
 })
 

 average = average.toFixed(2)


 if (average > 6) {
    alert("Parabéns, " + student + "! sua média foi de: " + average)
 }

 else if (average < 3) {
    alert(student + " Reprovado")
 }

 else {
    alert(student + " estude para sua prova de recuperação! Sua média foi de: " + 
    average)
 }
} 