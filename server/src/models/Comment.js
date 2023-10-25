const {DataTypes, UUIDV4} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('tbl_comment',{
        id:{
            type:DataTypes.UUID,
            allowNull: false,
            primaryKey:true,
            defaultValue: UUIDV4
        },
        name:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        number:{
            type:DataTypes.STRING,
            allowNull:false
        },
        city:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        country:{
            type:DataTypes.STRING,
            allowNull:false
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false
        },
        cp:{
            type: DataTypes.BIGINT,
            allowNull: false
        }
    }, {timestamps: false})
}