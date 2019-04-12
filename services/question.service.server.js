const universityDAO = require("../data/daos/university.dao.server");

module.exports = app =>{

    createQuestionService = (req,res) => {
        const question = req.body;
        universityDAO.createQuestion(question)
            .then( question => res.status(200).send(question))
            .catch(error => res.status(500).send(error))
    }

    getAllQuestionsService = (req,res) => {
         universityDAO.findAllQuestions()
             .then(documents => res.status(200).send(documents))
             .catch(error => res.status(500).send(error))
    }

    getQuestionByIdService = (req, res) => {
         universityDAO.findQuestionById(req.params['id'])
             .then(document => res.status(200).send(document))
             .catch(error => res.status(500).send(error))
    }

    updateQuestionService = (req,res) => {
        const updatedQuestion = req.body
        const questionId = req.params['id']
        universityDAO.updateQuestion(questionId,updatedQuestion)
            .then( document => res.status(200).send(document) )
            .catch(error => res.status(500).send(error))
    }

    deleteQuestionService = (req,res) => {
        const questionId = req.params['id']
        universityDAO.deleteQuestion(questionId)
            .then(document => res.status(200).send(document))
            .catch(error => res.status(500).send(error))
    }

    app.post('/api/question',createQuestionService);
    app.get('/api/question', getAllQuestionsService);
    app.get('/api/question/:id', getQuestionByIdService);
    app.put('/api/question/:id', updateQuestionService);
    app.delete('/api/question/:id', deleteQuestionService);
}