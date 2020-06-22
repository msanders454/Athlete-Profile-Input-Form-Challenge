
module.exports = (app) => {
    var bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({'extended': 'true'}));
    app.use(bodyParser.json());
    app.use(bodyParser.json({type: 'application/vnd.api+json'}));

    var athlete = require('./models/schema');

    // Create a new Player
    app.post('/athlete', function(req, res){
        if (!req.body.firstName || !req.body.lastName) {
            return res.status(400).send({
                message: "Player name can not be empty"
            });
        }
        console.log(req)
        var athletes = new athlete({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dob: req.body.dob,
            nationality: req.body.nationality,
            gender: req.body.gender,
            sports: req.body.sports,
            team: req.body.team,
            about: req.body.about,
            association: req.body.association,
            interests: req.body.interests,
        });


        athletes.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Error"
                });
            });
    });

    // Retrieve all player
    app.get('/athlete', (req, res) => {

        athlete.find()
            .then(athletes => {
                res.send(athletes);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Error"
                });
            });
    
    });

    // Update an athlete with athleteId
    app.put('/athlete/:athleteId', (req, res) => {
        if (!req.body.firstName || !req.body.lastName) {
            return res.status(400).send({
                message: "Player name can not be empty"
            });
        }
    
        // Find player and update it with the request body
        athlete.findByIdAndUpdate(req.params.athleteId, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dob: req.body.dob,
            nationality: req.body.nationality,
            gender: req.body.gender,
            sports: req.body.sports,
            team: req.body.team,
            about: req.body.about,
            association: req.body.association,
            interests: req.body.interests
        }, { new: true })
            .then(athlete => {
                if (!athlete) {
                    return res.status(404).send({
                        message: "player not found with id "
                    });
                }
                res.send(athlete);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "player not found with id "
                    });
                }
                return res.status(500).send({
                    message: "Error updating player with id "
                });
            });
    });

}