
import { render } from "ejs";
import db from "../models";
const getUser = async (req,res)=>{
    // const [rows,fields] = await poolPromise.execute("select * from users");
    // console.log(rows)
    // return res.render('index',{data : rows})
    const data= await db.Customers.findAll();
    // console.log(data)
    return res.render('index',{
        data:data
    })
}

export default{
    getUser
}