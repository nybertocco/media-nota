let student = prompt("Qual o nome do(a) aluno(a)?")
 let n1 = prompt("Qual a nota da primeira prova?")
 let n2 = prompt("Qual a nota da segunda prova?")
 
 let average = (Number(n1) + Number(n2)) / 2

let student2 = prompt("Qual o nome do(a) aluno(a)?")
 let nota1 = prompt("Qual a nota da primeira prova?")
 let nota2 = prompt("Qual a nota da segunda prova?")
 
 let media = (Number(nota1) + Number(nota2)) / 2

let student3 = prompt("Qual o nome do(a) aluno(a)?")
 let note1 = prompt("Qual a nota da primeira prova?")
 let note2 = prompt("Qual a nota da segunda prova?")
 
 let avrg = (Number(note1) + Number(note2)) / 2

let student4 = prompt("Qual o nome do(a) aluno(a)?")
 let nn1 = prompt("Qual a nota da primeira prova?")
 let nn2 = prompt("Qual a nota da segunda prova?")
 
 let med = (Number(nn1) + Number(nn2)) / 2

 average = average.toFixed(2)
 media = media.toFixed(2)
 avrg = avrg.toFixed(2)
 med = med.toFixed(2)

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


 if (media > 6) {
    alert("Parabéns, " + student2 + "! sua média foi de: " + media)
 }

 else if (media < 3) {
    alert(student2 + " Reprovado")
 }

 else {
    alert(student2 + " estude para sua prova de recuperação! Sua média foi de: " + 
    media)
 }


 if (avrg > 6) {
    alert("Parabéns, " + student3 + "! sua média foi de: " + avrg)
 }

 else if (avrg < 3) {
    alert(student + " Reprovado")
 }

 else {
    alert(student3 + " estude para sua prova de recuperação! Sua média foi de: " + 
    avrg)
 }


 if (med > 6) {
    alert("Parabéns, " + student4 + "! sua média foi de: " + med)
 }

 else if (med < 3) { 
    alert(student4 + " Reprovado")
 }

 else {
    alert(student4 + " estude para sua prova de recuperação! Sua média foi de: " + 
    med)
 }