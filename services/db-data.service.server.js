const universityDAO = require('../data/daos/university.dao.server');

module.exports = app =>{


    truncateDatabaseService = (req,res) =>{
            universityDAO.truncateDatabase()
                .then((message) => res.status(200).send(message))
                .catch(error => res.status(500).send(error))
    }

    populateDatabaseService = (req,res) => {
            return res.status(200).send(universityDAO.populateDatabase())
    }



    app.delete('/api/all',truncateDatabaseService);
    app.post('/api/populate', populateDatabaseService)

}