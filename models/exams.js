const mongoose = require('mongoose');
const StudentsModel = require('./students');

const examsSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    datum:{
        type: String,
        required: true,
        default:"Datum ispita"
    },
    vreme:{
        type:String,
        required: true,
        default:"Vreme ispita"
    },
    opis:{
        type:String,
        required: true,
        default:"opis"
    },
    redniBr:{
        type: Number,
        required: true,
        default: -1
    },
    students:[
        { 
            _id:false,
            id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Students",
            required: true
            },
            status:{
                type: String,
                required: true,
                default:"Nije izasao"
            }
        }
    ]
}, {collection:'exams'});

const ExamsModel = mongoose.model('Exams', examsSchema);

const getStudentsIDs = async function(listOfStudentsNumbers){
    let listOfStudentsIDs = [];
    for(const studentNumber of listOfStudentsNumbers){
        let studentsId = await StudentsModel.getStudentsId(studentNumber);
        let studentStatusObject = {
            id: studentsId,
            status: "Nije izasao"
        }
        listOfStudentsIDs.push(studentStatusObject);
    }

    return listOfStudentsIDs;
}

const addExam = async function(examData){
    const listOfStudents = examData.students;
    let listOfStudentsIDs = await getStudentsIDs(listOfStudents);

    let examCount = await ExamsModel.find().count();
    let examNumber = examCount++;
    
    let newExam = new ExamsModel({
        _id: new mongoose.Types.ObjectId(),
        datum: examData.datum,
        vreme: examData.vreme,
        opis: examData.opis,
        redniBr: examNumber,
        students: listOfStudentsIDs
    });

    return await newExam.save();
}  

const getAllExamsForStudent = async function(studentNumber){
    let studentsId = await StudentsModel.getStudentsId(studentNumber);
    let studentExams = await ExamsModel.find(
        {
            students:{
                $elemMatch:{id: studentsId}
            }
        }
    ).exec();

    //ova fja vraca ispite za studenta u kojima je on ucstvovao, medjutim salje ujedno sa ispitima i ostale ucesnike i njihove rez
    // to treba popraviti

    if(studentExams.length > 0){
        return studentExams;
    }else{
        return null;
    }
}


// funkcija za prikaz po 50 ispita, klijent salje broj od kojeg zeli narednih 50 da dobije
const getExams = async function(index){
    //ovde treba prepraviti da se ne salju i studenti sa ispitom
    let examsInRange = await ExamsModel.find({redniBr:{$gte: index, $lt:index+50}}).exec();
    if(examsInRange.length > 0){
        return examsInRange;
    }else{
        return null;
    }
}

const searchExams = async function(searchDatum){
    //ovde treba isto da vraca ispite bez studenata
    let searchResults = await ExamsModel.find({datum: searchDatum}).exec();
    if(searchResults.length > 0){
        return searchResults;
    }else{
        return null;
    }
}

const getStudentsForExam = async function(redniBr){
    let exam = await ExamsModel.find({redniBr: redniBr}).exec();
    let studentsIDs = exam[0].students;
    //[{id:{...}, status:{...}},{id:{...}, status:{...}}]

    let nizStudenata = [];

    for(const element of studentsIDs){
        let student = await StudentsModel.findById(element.id);
        let studentObject = {
            student: student,
            status: element.status
        }
        nizStudenata.push(studentObject);
    }

    return nizStudenata;

}

//sa klijenta se salje objekat koji sadrzi polja sa brojevima studenata kojima je izvrsena izmena statusa, a vrednost polja je status
// i salje se broj ispita koji se update-je
const updateStudentExamStatus = async function(redniBrIspita, data){ 

    for(redniBrStudenta in data){
       let studentId = await StudentsModel.getStudentsId(redniBrStudenta);
        await ExamsModel.updateOne(
            {
                redniBr: redniBrIspita,
                students: {
                    $elemMatch:{id: studentId}
                }
            },
            {
                $set:{
                    'students.$.status': data[redniBrStudenta]
                }
            }
        ).exec();
    }
    return;
}

module.exports = {
    model : ExamsModel,
    addExam,
    getAllExamsForStudent,
    getExams,
    searchExams,
    getStudentsForExam,
    updateStudentExamStatus,

}