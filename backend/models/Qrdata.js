import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Qrdata = db.define('qrcode',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
    
});

export default Qrdata;