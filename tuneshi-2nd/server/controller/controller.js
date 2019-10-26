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
        const db = req.app.get('db');
        const {id} = req.params;
        const {username, password, first_name, last_name, phone_number, email, birth_date, about} = req.body;
        db.update_user([id, username, password, first_name, last_name, phone_number, email, birth_date, about]).then((users) => res.status(200).send(users)).catch(err => {
            res.status(500).send({errorMessage:'did not update'});
        })


    },
    deleteUser:(req, res, next) => {
        const{id} = req.params;
        const db = req.app.get('db');
        db.delete_user(id).then((users) => res.status(200).send(users)).cath(err => {
            res.status(500).send({errorMessage:'did not delete'});
        })

    },

    updateProfilePhoto:(req, res, next) => {
        const {id} = req.params
        const {profile_photo} = req.query
        const db = req.app.get('db');
        db.update_profile_photo([id, profile_photo]).then((users) => res.status(200).send(users)).catch(err => {
            res.status(500).send({errorMessage:'no photo added'})
        })
    },
    
    updateCoverPhoto:(req, res, next) => {
        const {id} = req.params
        const {cover_photo} =req.query
        const db = req.app.get('db');
        db.update_cover_photo([id, cover_photo]).then((users) => res.status(200).send(users)).catch(err => {
            res.status(500).send({errorMessage:'no photo added'})
        })
    },

    createPost:(req, res, next) => {
        const {comment} = req.body
        const db = req.app.get('db')
        db.create_post([comment]).then((posts) => res.status(200).send(posts)).catch(err => {
            res.status(500).send({errorMessage:'now new post'})
        })
    },

    deletePost:(req, res, next) => {

    },

    updatePost: (req, res, next) => {
        
    }



}