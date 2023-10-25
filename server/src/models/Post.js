const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('tbl_post',{
        id:{
            type:DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        title:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        media:{
            type:DataTypes.STRING,
            allowNull:false
        },
        raza:{
            type:DataTypes.STRING,
            allowNull:false
        },
        size:{
            type:DataTypes.STRING,
            allowNull:false
        },
        number:{
            type:DataTypes.STRING,
            allowNull:false
        },
        country:{
            type:DataTypes.STRING,
            allowNull:false
        },
        city:{
            type:DataTypes.STRING,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:true
        },
        humanitaryHelp: {
            type:DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue:false,
        },
        reactions:{
            type:DataTypes.STRING,
            allowNull:true
        },
        maps:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }, {timestamps:false})
}