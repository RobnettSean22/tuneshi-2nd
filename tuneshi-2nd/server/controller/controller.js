module.exports = {
    readAllUsers:(req, res, next) => {
        const db = req.app.get('db');
        db.read_users().then((users) => res.status(200).send(users)).catch(err => {
            res.status(200).send({errorMessage:'problem retriving users!!!'})
        })

    },
    readUser:(req, res, next) => {
        const {id} = req.params;
        const db = req.app.get('db');
        db.read_user(id).then((users) => res.status(200).send(users)).catch(err => {
            res.status(500).send({errorMessage:'problem retriveing user!!!'})
        })
    },
    createUser:(req, res, next) => {
       const db = req.app.get('db');
       const {username, password, first_name, last_name, phone_number, email, birth_date, about} = req.body;
       db.create_user([username, password, first_name, last_name, phone_number, email, birth_date, about]).then((users) => res.status(200).send(users)).catch(err => {
           res.status(500).send({errorMessage:'did not create'});
       })
    },
    updateUser:(req, res, next) => {

    },
    deleteUser:(req, res, next) => {
        const{id} = req.params;
        const db = req.app.get('db');
        db.delete_user(id).then((users) => res.status(200).send(users)).cath(err => {
            res.status(500).send({errorMessage:'did not delete'})
        })

    }
}