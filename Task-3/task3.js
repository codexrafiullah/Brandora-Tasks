// Task 3

// const studentData = {
//   students: [
//     { name: "Rafi", email: "codexrafiullah@gmail.com" },
//     { name: "Adnan", email: "codexadnan@gmail.com" },
//     { name: "Rain", email: "codexrainullah@gmail.com" },
//     { name: "Ahmad", email: "codexahmad@gmail.com" }
//   ],
// };


// while (true) {
//   let choice = prompt(
//       "Choose an option:\n1. Add a student\n2. Remove a student\n3. Display all students\n0. To quit."
//   );

//   if (choice === "1") {
//       // Add a student
//       let name = prompt("Enter the name of the student to add:");
//       let email = prompt("Enter the email of the student to add:");

//       if (studentData.students.some((student) => student.name === name && student.email === email)) {
//           alert(`${name} (${email}) is already in the list.`);
//       } else {
//           studentData.students.push({ name, email });
//           alert(`${name} (${email}) has been added to the list.`);
//       }

//   } else if (choice === "2") {
//       let name = prompt("Enter the name of the student to remove:");
//       let email = prompt("Enter the email of the student to remove:");

//       const index = studentData.students.findIndex(
//           (student) => student.name === name && student.email === email
//       );

//       if (index >= 0) {
//           studentData.students.splice(index, 1);
//           alert(`${name} (${email}) has been removed from the list.`);
//       } else {
//           alert(`${name} (${email}) is not in the list.`);
//       }

//   } else if (choice === "3") {
//       if (studentData.students.length === 0) {
//           alert("No students in the list.");
//       } else {
//           const studentList = studentData.students.map((student, index) => `${index + 1}. ${student.name} (${student.email})`).join("\n");
//           alert(`All students in the list:\n${studentList}`);
//       }

//   } else if (choice === "0") {
//       alert("Exiting the program.");
//       break;

//   } else {
//       alert("Please enter a valid choice.");
//   }
// }
