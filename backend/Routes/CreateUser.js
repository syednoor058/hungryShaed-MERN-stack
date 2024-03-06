const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')

router.post('/create-user', [body('email', 'Invalid email address!').isEmail(), body('password', 'Invalid password!').isLength({ min: 6 })], async (req, res)=>{

    try {

        const err = validationResult(req);
        if (!err.isEmpty()) {
          return res.status(400).json({ error: err.array() });
        }

        // Hash password encryption
        const salt = await bcrypt.genSalt(10)
        let hashPassword = await bcrypt.hash(req.body.password, salt)

        // Sending static user info in database
        // await User.create({
            // firstName: "Edward",
            // lastName: "Kenway",
            // location: "Havana, Cuba",
            // gernder: "Male",
            // email: "duncanepole420@piratesbay.com",
            // password: "iamanassassin4"
        // }) 

        // Sending user info through request body in database
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            location: req.body.location,
            // gernder: req.body.gernder,
            email: req.body.email,
            password: hashPassword
        })

        res.json({success: true});
        
    } catch (error) {
        console.log(error.message)
        res.json({success: false});
    }
})

module.exports = router;