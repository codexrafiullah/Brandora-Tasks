// Array to hold the list of students
let students = ["john","alice","sarah"];

// Function to show menu and return the user's choice
function showMenu() {
  return prompt(
    "Choose an option:\n" +
    "1. Add a student\n" +
    "2. Remove a student\n" +
    "3. Display all students\n" +
    "0. To quit."
  );
}

// Main loop
while (true) {
  let choice = showMenu();

  if (choice === "1") {
    // Add a student
    let studentName = prompt("Enter the name of the student to add:");

    // Check for duplicates before adding
    if (students.includes(studentName)) {
      alert(`${studentName} is already in the list.`);
    } else {
      students.push(studentName);
      alert(`${studentName} has been added.`);
    }

  } else if (choice === "2") {
    // Remove a student
    let studentName = prompt("Enter the name of the student to remove:");
    let index = students.indexOf(studentName);

    if (index !== -1) {
      students.splice(index, 1);
      alert(`${studentName} has been removed.`);
    } else {
      alert(`${studentName} is not in the list.`);
    }

  } else if (choice === "3") {
    // Display all students
    if (students.length === 0) {
      alert("The list is empty.");
    } else {
      alert("Current students:\n" + students.join("\n"));
    }

  } else {
    // Quit the program
    alert("Exiting the program. Goodbye!");
    break;
  }
}
