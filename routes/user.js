
import {Router} from 'express'
import { usuariosDelete, usuariosGet, usuariosPost, usuariosPut } from '../controllers/user.js'

const router=Router()

router.get('/',usuariosGet)
router.put('/',usuariosPut)
router.post('/:id',usuariosPost)
router.delete('/',usuariosDelete)

export default router