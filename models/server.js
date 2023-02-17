import express from 'express'
import cors from 'cors'
import router from '../routes/user.js'
export class Server{
    constructor(){
        this.app=express()
        this.port=process.env.PORT
        this.usuariosPath='/api/usuarios'

        //Middleware
        this.middlewares()
        //Rutas de la aplicacion
        this.routes()
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

