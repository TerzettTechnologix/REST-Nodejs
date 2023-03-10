import express from 'express'
import cors from 'cors'
import router from '../routes/user.js'
import { dbConection } from '../db/config.js'
export class Server{
    constructor(){
        this.app=express()
        this.port=process.env.PORT
        this.usuariosPath='/api/usuarios'

        //Conectar a base de datos 
        this.conectarDB()

        //Middleware
        this.middlewares()
        //Rutas de la aplicacion
        this.routes()
    }

    async conectarDB(){
        await dbConection()
    }

    middlewares(){
        //Directorio publico
        this.app.use(express.static('public'))
        this.app.use(cors())
        //Parse y lectura del body
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.usuariosPath,router)
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto: ${this.port} ` )
        })
    }
}

