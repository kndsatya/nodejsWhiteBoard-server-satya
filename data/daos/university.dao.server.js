const studentModel = require('../models/student.model.server');
const questionModel = require('../models/question.model.server');
const answerModel = require('../models/answer.model.server');
const quizModel = require('../models/quiz-widget.model.server');
truncateDatabase = () => {
    return answerModel.deleteMany({})
        .then(
            () => {return studentModel.deleteMany({}).then(
                () => {return questionModel.deleteMany({}).then(
                    () => {return quizModel.deleteMany({}).then(
                        () => { return {message: "Database is truncated Successfully!!!"}}
                    )}
                )}
            )}
        )
}

populateDatabase = () => {

    const alice = {

        _id: 123,
        username: "alice",
        password: "alice",
        firstName: "Alice",
        lastName: "Wonderland",
        gradYear: 2020,
        scholarship: 15000
    }

    const bob = {
        _id: 234,
        username: "bob",
        password: "bob",
        firstName: "Bob",
        lastName: "Hope",
        gradYear: 2021,
        scholarship: 12000
    }

    const question_1 = {
        _id: 321,
        question: "Is the following schema valid?",
        points: 10,
        questionType: "TRUE_FALSE",
        trueFalse: {isTrue: false}
    }

    const question2 = {
        _id: 432,
        question: "DAO stands for Dynamic Access Object.",
        points: 10,
        questionType: "TRUE_FALSE",
        trueFalse: {isTrue: false}
    }

    const question3 = {
        _id: 543,
        question: "What does JPA stand for?",
        points: 10,
        questionType: "MULTIPLE_CHOICE",
        multipleChoice: {choices: "Java Persistence API,Java Persisted Application,JavaScript " +
                "Persistence API,JSON Persistent Associations",
                        correct: 1 }
    }

    const question4 = {
        _id: 654,
        question: "What does ORM stand for?",
        points: 10,
        questionType: "MULTIPLE_CHOICE",
        multipleChoice: {choices: "Object Relational Model,Object Relative Markup,Object " +
                "Reflexive Model,Object Relational Mapping",
            correct: 4 }
    }


    const answer_1 = {
        _id: 123,
        trueFalseAnswer: true
    }

    const answer_2 = {
        _id: 234,
        trueFalseAnswer: false
    }

    const answer_3 = {
        _id: 345,
        multipleChoiceAnswer: 1
    }

    const answer_4 = {
        _id: 456,
        multipleChoiceAnswer: 2
    }

    const answer_5 = {
        _id: 567,
        trueFalseAnswer: false
    }

    const answer_6 = {
        _id: 678,
        trueFalseAnswer: true
    }

    const answer_7 = {
        _id: 789,
        multipleChoiceAnswer: 3
    }


    const answer_8 = {
        _id: 890,
        multipleChoiceAnswer: 4
    }


    createStudent(alice);
    createStudent(bob);
    createQuestion(question_1);
    createQuestion(question2);
    createQuestion(question3);
    createQuestion(question4);
    answerQuestion(123,321,answer_1);
    answerQuestion(123,432,answer_2);
    answerQuestion(123,543,answer_3);
    answerQuestion(123,654,answer_4);
    answerQuestion(234,321,answer_5);
    answerQuestion(234,432,answer_6);
    answerQuestion(234,543,answer_7);
    answerQuestion(234,654,answer_8);

   return {message: "Database populated Successfully!!!!"}
}

createStudent = (student) => studentModel.create(student)

createQuestion = (question) => questionModel.create(question)

answerQuestion = (studentId, questionId, answer) => {
    answer.student = studentId
    answer.question = questionId
    return answerModel.create(answer)
}

updateQuestion = (questionId,updatedQuestion) => questionModel.findOneAndUpdate
                                                    ({_id:questionId},{$set:updatedQuestion},{new:true})
updateStudent = (studentId,updatedStudent) => studentModel.findOneAndUpdate
({_id:studentId},{$set:updatedStudent},{new:true})

deleteQuestion = (questionId) => questionModel.findOneAndDelete({_id:questionId})
deleteStudent = (studentId) => studentModel.findOneAndDelete({_id:studentId})

findAllStudents = () => studentModel.find()
findStudentById = (studentId) => studentModel.findById({_id: studentId})
findAllQuestions = () => questionModel.find()
findQuestionById = (questionId) => questionModel.findById({_id: questionId})
findAllAnswers = () => answerModel.find()
findAnswerById = (answerId) => answerModel.findById({_id: answerId})
findAnswersByStudent = (studentId) => answerModel.find({student: studentId})
findAnswersByQuestion = (questionId) => answerModel.find({question: questionId})
findAnswersByStudentAndQuestion = (studentId,questionId) => answerModel.find({question: questionId, student: studentId})


module.exports = {findAllStudents, findStudentById, createStudent, updateQuestion, deleteQuestion,
    createQuestion, answerQuestion, findAllQuestions, updateStudent, deleteStudent,
    findQuestionById, findAllAnswers, findAnswerById, truncateDatabase, populateDatabase,
    findAnswersByStudent, findAnswersByQuestion,findAnswersByStudentAndQuestion
};