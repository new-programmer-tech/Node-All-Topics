const express = require('express')
const router = express.Router()
const app = express()


router.route('/').get((req, res) => {
   res.send("Welcome");
});
router.route('/').post((req, res) => {
   res.send("Welcome");
});

router.put('/:id').post((req, res) => {
   res.send("Welcome");
});

router.delete('/:id').post((req, res) => {
   res.send("Welcome");
});




module.exports = router;