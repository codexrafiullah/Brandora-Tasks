let studentName = [ "Rafi", "Adnan", "Rain", "Ahmad"];

while (true){

  let choice = prompt(
    "Choose an option \n1. Add a student\n2. Remove a student\n3. Display all students \n0. To quit.");

  if ( choice === "1"){

    let addstudent = prompt("Enter the name of the student to add");
    // let rollno = prompt('rollno')

    // let obj = {
    //   name : addstudent,
    //   rollno : rollno
    // }[]

    if(studentName.includes(addstudent)){
      alert(` ${addstudent} is already in the list.`)
    }else{
      studentName.push(addstudent);
      alert(`${addstudent} is added to list.`)
    }
  
  }else if ( choice == "2"){

    let removestudent = prompt("Enter the name of student to remove");

    if (studentName.includes(removestudent)){
      studentName.splice(studentName.indexOf(removestudent),1);
      alert(`${removestudent} has been removed from the list.`)
    }else{
      alert(`${removestudent} is not in the list.`)
    }

  }else if ( choice == "3"){
    alert(`All students in the list : \n${studentName.join("\n")}`)
  }else if ( choice === "0"){
    alert("Exit the program" )
    break;
  }else{
    alert("Please enter a valid choice")
  }
 
}