module.exports = {
    readAllUsers:(req, res, next) => {
        const db = req.app.get('db');
        db.read_users().then((users) => {
            res.status(200).send(users)
        })

    },
    readUser:(req, res, next) => {

    },
    addUser:(req, res, next) => {

    },
    updateUser:(req, res, next) => {

    },
    deleteUser:(req, res, next) => {

    }
}