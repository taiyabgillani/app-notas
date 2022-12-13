const mongoose = require('mongoose');
const express = require ('express');
const DB = require('./database');
const notasdb = require ('./notes.json');

const cargarDB = async()=>{
    DB.insertMany(notasdb);
    console.log("fue completada");
    console.log("refresh a la pagina");
}

cargarDB();