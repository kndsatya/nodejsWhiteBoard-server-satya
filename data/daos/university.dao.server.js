const studentModel = require('../models/student.model.server');
const questionModel = require('../models/question.model.server');
const answerModel = require('../models/answer.model.server');
const quizModel = require('../models/quiz-widget.model.server');
truncateDatabase = () => promise.all([
                            truncateAnswers(),
                            truncateStudents(),
                            truncateQuestions(),
                            truncateQuiz()
                          ])

truncateAnswers = () => {
    answerModel.deleteMany({},(error)=>{
        if(error){
            console.log(error);
        }
    })
}

truncateStudents = () => {
    studentModel.deleteMany({},(error)=>{
        if(error){
            console.log(error);
        }
    })
}


truncateQuestions = () => {
    questionModel.deleteMany({},(error)=>{
        if(error){
            console.log(error);
        }
    })
}

truncateQuiz = () => {
    quizModel.deleteMany({},(error)=>{
        if(error){
            console.log(error);
        }
    })
}

createStudent = (student) => studentModel.create(student,
    (error) => console.log(error)
    )

createQuestion = (question) => questionModel.create(question,
    (error) => console.log(error))

answerQuestion = (studentId, questionId, answer) => {
    answer.student = studentId
    answer.question = questionId
    answerModel.create(answer,(error)=>{
        if(error){
            console.log(error);
        }
    })
}


findAllStudents = () => studentModel.find()
findStudentById = (studentId) => studentModel.findById({_id: studentId})
findAllQuestions = () => questionModel.find()
findQuestionById = (questionId) => questionModel.findById({_id: questionId})
findAllAnswers = () => answerModel.find()
findAnswerById = (answerId) => answerModel.findById({_id: answerId})
findAnswersByStudent = (studentId) => answerModel.find({student: studentId})
findAnswersByQuestion = (questionId) => answerModel.find({question: questionId})
