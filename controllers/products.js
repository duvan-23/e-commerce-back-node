import knex from "../models/mysql.js";

export const getProducts = ()=>{
    return knex.select().table('products');
}

export const getProduct = (id)=>{
    return knex.select().table('products').where({id});
}
export const getProductByCategory = (id_category)=>{
    return knex.select().table('products').where({id_category});
}