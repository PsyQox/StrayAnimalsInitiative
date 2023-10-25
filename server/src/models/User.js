const { DataTypes } = require("sequelize")

module.exports = (sequelize)=>{
    sequelize.define('tbl_user', {
        id:{
            type:DataTypes.UUID,
            allowNull:false,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        country:{
            type:DataTypes.STRING,
            allowNull:false
        },
        city:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        number:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
}