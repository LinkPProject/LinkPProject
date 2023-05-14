const db = require("../models");
const job = db.job;
const Op = db.Sequelize.Op;

exports.createJob = (req, res) => {

    if (!req.body.companyName) {
        res.status(400).send({
            message: "companyName is Requuired"
        });
        return;
    }
    if (!req.body.description) {
        res.status(400).send({
            message: "description is Required"
        });
        return;
    }
    if (!req.body.designation) {
        res.status(400).send({
            message: "designation is Requuired"
        });
        return;
    }

    const { companyName, description, designation } = req.body;

    const jobObj = {
        companyName, description, designation
    };
    if (req.body.salaryRange) {
        jobObj.salaryRange = req.body.salaryRange
    }
    if (req.body.salary) {
        jobObj.salary = req.body.salary
    }
    if (req.body.lastDateToApply) {
        jobObj.lastDateToApply = req.body.lastDateToApply
    }
    if (req.file) {
        console.log("Entering Here")
        jobObj.image = "http://localhost:8080/uploads/" + req.file.originalname
    }
    if(req.body.jobLink){
        jobObj.jobLink = req.body.jobLink
    }       

    job.create(jobObj)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error Occured while creating a job."
            });
        });

};

exports.listAllJobs = (req, res) => {
    
    job.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error Occured while fetching Job Data."
            });
        });

};

exports.listJobById = (req, res) => {
    console.log("Entering Here")
    
    job.findOne({where:{id:Number(req.params.id)}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error Occured while fetching Job Data."
            });
        });

};

exports.getJobsByIds = (req, res) => {
    const jobIds = req.body.jobIds;
    
    job.findAll({where:{id:jobIds}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error Occured while fetching Job Data."
            });
        });

};
