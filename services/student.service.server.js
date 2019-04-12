const universityDAO = require("../data/daos/university.dao.server");

module.exports = app =>{

    createStudentService = (req,res) => {
        const student = req.body;
        universityDAO.createStudent(student)
            .then( student => res.status(200).send(student))
            .catch(error => res.status(500).send(error))
    }

    getAllStudentsService = (req,res) => {
        universityDAO.findAllStudents()
            .then(documents => res.status(200).send(documents))
            .catch(error => res.status(500).send(error))
    }

    getStudentByIdService = (req, res) => {
        universityDAO.findStudentById(req.params['id'])
            .then(document => res.status(200).send(document))
            .catch(error => res.status(500).send(error))
    }

    updateStudentService = (req,res) => {
        const updatedstudent = req.body
        const studentId = req.params['id']
        universityDAO.updateStudent(studentId,updatedstudent)
            .then( document => res.status(200).send(document) )
            .catch(error => res.status(500).send(error))
    }

    deleteStudentService = (req,res) => {
        const studentId = req.params['id']
        universityDAO.deleteStudent(studentId)
            .then(document => res.status(200).send(document))
            .catch(error => res.status(500).send(error))
    }

    app.post('/api/student',createStudentService);
    app.get('/api/student', getAllStudentsService);
    app.get('/api/student/:id', getStudentByIdService);
    app.put('/api/student/:id', updateStudentService);
    app.delete('/api/student/:id', deleteStudentService);
}