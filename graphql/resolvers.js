const { Student, validateStudent } = require('../models/student');

async function getDetail(args) {
    const detail = await Student.findOne({ id: args.id });
    return detail;
}

async function getDetails(args) {
    const details = await Student.find();
    return ({
        students: (last) => ({
            edges: details.map(detail => ({node: detail}))
        })
    })
}

async function updateStudentDetail({id, name, age}) {
    let set = {};
    if (name && age) {
        set = {name,age}
    } else if (name) {
        set = {name}
    } else if (age) {
        set = {age}
    }

    const student = await Student.findOneAndUpdate({ id }, {
        $set: set
    }, { new: true });

    return student;
}

async function addStudentDetail(args) {
    const { error } = validateStudent(args);
    if (error) return error.details[0].message;

    let student = new Student(args);
    student = await student.save();

    return student;
}

//Root Resolver
const root = {
    detail: getDetail,
    details: getDetails,
    updateDetail: updateStudentDetail,
    addDetail: addStudentDetail
};

module.exports = root;