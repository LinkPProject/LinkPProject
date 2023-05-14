const router = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage})

const jobController = require("../controllers/job.controller.js");


router.route('/job').post(upload.single('image'),jobController.createJob);
router.route('/job').get(jobController.listAllJobs);
router.route('/job/:id').get(jobController.listJobById);
router.route('/getJobsByIds').post(jobController.getJobsByIds);

module.exports = router;

