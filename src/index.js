const options = require('./data/index');
const User = require('./controler/class/user')

let jogar = new User({
    opt: options
}).game()

jogar