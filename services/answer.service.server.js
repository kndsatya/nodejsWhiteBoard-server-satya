const universityDAO = require("../data/daos/university.dao.server");

module.exports = app =>{

    answeringQuestion = (req,res)=>{
    const studentId = req.params['sid'];
    const questionId = req.params['qid'];
    const answer = req.body;
    universityDAO.answerQuestion(studentId, questionId, answer)
        .then( status => res.send(status))
        .catch(error => res.status(500).send(error))
    }

    retrieveAnswers = (req,res)=>{

        const studentId = req.params['sid'];
        const questionId = req.params['qid'];
        const answer = req.body;
        universityDAO.findAnswersByStudentAndQuestion(studentId, questionId)
            .then( response => res.send(response))
            .catch(error => res.status(500).send(error))
    }

   app.post('/api/student/:sid/question/:qid/answer', answeringQuestion)
   app.get('/api/student/:sid/question/:qid/answer', retrieveAnswers)
   app.get('/api/question/:qid/student/:sid/answer', retrieveAnswers)

}