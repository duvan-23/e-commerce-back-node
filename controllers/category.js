import knex from "../models/mysql.js";

export const getCategorys = ()=>{
    return knex.select().table('category');
}