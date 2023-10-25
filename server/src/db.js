const { Sequelize } = require('sequelize')
const UserModel = require('./models/User')

const sequelize = new Sequelize(`postgres://postgres:luis1615@localhost/db_strayanimalinitiative`,{logging:false, native:false})

UserModel(sequelize)

const {tbl_user} = sequelize.models

module.exports = {
    conn: sequelize
}