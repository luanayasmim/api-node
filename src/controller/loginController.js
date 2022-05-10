import express from "express";

const router = express.Router();

router.get('/', (request, response)=>{
    const { email, password } = request.body;

    
});

export default router;