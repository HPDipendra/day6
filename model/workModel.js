import connection from "./conn.js";
import { DataTypes } from "sequelize";

const workModel = connection.define("work", {
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false

    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    } ,
    password: {
        type:DataTypes.STRING,
        allowNull:false
    },
   address: {
        type:DataTypes.STRING,
        allowNull:false
    }

},
{
timestamps:false,   //third parameetr to remove  created time
})

export default workModel;