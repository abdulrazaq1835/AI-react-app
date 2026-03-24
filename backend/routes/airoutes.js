import express from 'express'

import  askAi from '../controllers/aiControllers.js'

import {saveRespond} from '../controllers/saveRes.js'

const router  =  express.Router()

router.post('/ask-ai',askAi)
router.post('/save',saveRespond)


export default router