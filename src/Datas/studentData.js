export const getCourseCollection=()=>([
    {id:'1', title:'Science'},
    {id:'2', title:'English'},
    {id:'3', title:'Social'},
    {id:'4', title:'Math'},
])

const KEYS ={
    students:'students',
    studentId:'studentId'
}

export function insertStudent(data) {
    let students=getAllStudents();
    data['id'] = generateStudentId()
    students.push(data)
    localStorage.setItem(KEYS.students,JSON.stringify(students))
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
    let students= JSON.parse(localStorage.getItem(KEYS.students));
    let courses= getCourseCollection();
    return students.map(x=>({
        ...x,
        course:courses[x.courseId-1].title
    }))
}

