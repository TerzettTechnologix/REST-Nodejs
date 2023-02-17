import {response} from 'express'

export const usuariosGet=(req,res=response)=>{
    res.json({
        msg:'get API controlador'
    })
}

export const usuariosPut=(req,res=response)=>{
    res.json({
        msg:'put API'
    })
}


export const usuariosPost=(req,res=response)=>{
    const {nombre,edad}=req.body
    const {q}=req.query
    res.json({
        msg:'post API'
    })
    // console.log(nombre,edad)
    console.log(q)
    
}

export const usuariosDelete=(req,res=response)=>{
    res.json({
        msg:'delete API'
    })
}