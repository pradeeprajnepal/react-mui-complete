export const getCourseCollection=()=>([
    {id:'1', title:'Science'},
    {id:'2', title:'English'},
    {id:'3', title:'Social'},
    {id:'4', title:'Math'},
])

const KEYS ={
   students:'employees',
    studentsId:'employeeId'
}

export function insertStudent(data) {
    let students=getAllStudents();
    data['id'] = generateStudentId()
    students.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(students))
}

export function generateStudentId() {
    if (localStorage.getItem(KEYS.studentId) == null)
        localStorage.setItem(KEYS.studentId, '0')
    var id = parseInt(localStorage.getItem(KEYS.studentId))
    localStorage.setItem(KEYS.studentId, (++id).toString())
    return id;
}

export function getAllStudents() {
    if (localStorage.getItem(KEYS.students) == null)
        localStorage.setItem(KEYS.students, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}