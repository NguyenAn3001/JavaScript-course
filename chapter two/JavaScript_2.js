let fullName = "Nguyen Truong An";
let birthYear = 2005;
let isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();
const age = currentYear - birthYear;

const introduction = `Tên: ${fullName}. 
Tuổi: ${age} tuổi. 
Sinh viên:${isStudent ? "Đúng" : "Sai"}.`;
console.log(introduction);
