require('dotenv').config()
const {DB_HOST, DB_NAME, DB_USER, DB_PASSWORD} = process.env
const { Sequelize } = require('sequelize')
const UserModel = require('./models/User')
const PostModel = require('./models/Post')
const CommentModel = require('./models/Comment')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{logging:false, native:false})

UserModel(sequelize)
PostModel(sequelize)
CommentModel(sequelize)

const {tbl_user, tbl_post, tbl_comment} = sequelize.models

tbl_user.hasMany(tbl_post)
tbl_post.belongsTo(tbl_user)

tbl_user.hasMany(tbl_comment)
tbl_comment.belongsTo(tbl_user)

module.exports = {
    conn: sequelize,
    tbl_user,
    tbl_post,
    tbl_comment
}