
import {query, Router} from 'express'
import { check } from 'express-validator'
import { usuariosDelete, usuariosGet, usuariosPost, usuariosPut } from '../controllers/user.js'
import { esEmailRepetido, esRolValido, existeUsuarioPorId } from '../helpers/db-validators.js'

import validarCampos from '../middlewares/validar-campos.js'



const router=Router()

router.get('/',[
    check('limite',"El valor limite debe de ser numerico").optional().isNumeric(),
    check('desde',"El valor desde debe de ser numerico").optional().isNumeric(),
    validarCampos
],usuariosGet)
router.put('/:id',[
    check('id','No es un id valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
],usuariosPut)
router.post('/',
    [check('nombre','El nombre es obligatorio').exists(),
    check('password','El password es obligatorio y debe tener mas de 6 letras').exists(),
    check('password','El password debe tener mas de 6 letras').isLength({min:6}),
    // check('rol','No es un rol permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('correo','El correo no es valido').isEmail(),
    check('rol').custom(esRolValido),
    check('correo').custom(esEmailRepetido),
    validarCampos
],usuariosPost)
router.delete('/:id',[
    check('id','No es un id valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
],usuariosDelete)

export default router