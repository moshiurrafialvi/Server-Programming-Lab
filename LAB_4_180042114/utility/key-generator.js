const { v4: uuidv4 } = require('uuid');
const generateKey = () => {
    return uuidv4();
}
module.exports = generateKey