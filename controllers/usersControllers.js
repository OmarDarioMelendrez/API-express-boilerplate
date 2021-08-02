
const Success = require('../handler/successHandler');

const usersData = [{id: 1, name: "omar"}, {id: 2, name: "dario"}]


 const UsersGetAll =  (req, res, next) => {
    try {
        const users = usersData
        const success = new Success(users)
        res.send(success);
        
    } catch (err) {
        next(err)
    }
};
module.exports = {
    UsersGetAll
}