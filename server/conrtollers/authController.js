const bcript = require('bcrypt');

async function register(req, res){
    const db = req.app.get('db');
    const {username, password}=req.body;
    
    const existingUser = await db.get_user(username)
    if(existingUser[0]){
        return res.status(409).json('Username Taken. No entry for you!')
    }
    const salt = bcript.genSaltSync(10)
    const hash = bcript.hashSync(password, salt)
    // console.log(hash)
    const registeredUser = await db.register_user([username, hash])
    if(registeredUser[0]){
        req.session.user = {
            username: registeredUser[0].username,
            userId: registeredUser[0].id
        }
        return res.status(200).json(req.session.user)
    }
}
async function login(req, res){

}
async function logout(req, res){

}

module.exports ={
    register, login, logout
}