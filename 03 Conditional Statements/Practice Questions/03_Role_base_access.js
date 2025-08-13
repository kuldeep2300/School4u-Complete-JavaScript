//* Q.3- Write a program to manage Role-Based Access Control
/* Given a user role ("admin", "editor", "viewer"):
Admin: full access
Editor: edit access
Viewer: read-only
Any other: no access

Use switch. */

let userRole = prompt("Write your role (admin, editor, viewer): ");

switch (userRole) {
  case "admin":
    console.log("Full Access");
    break;
  case "editor":
    console.log("Edit access");
    break;
  case "viewer":
    console.log("Read-only access");
    break;
  default:
    console.log("No access");
}


