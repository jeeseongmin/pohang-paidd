// import { v4 as uuidv4 } from 'uuid';

const {v4} = require('uuid');
const router = require("express").Router();
let Organization = require("../../models/organization.model");
const API_KEY = require("../../keyconfig");
// const {v4 as uuidv4} = require("uuidv4");

// Read All Service
router.route("/").post((req, res) => {
  if (req.body.key === API_KEY) {
    Organization.find()
      .sort({createdAt: -1})
      .then((all) => res.json(all))
      .catch((err) => res.status(400).json("Error : " + err));
  } else res.status(400).json("Error");
})

/**
 * 1. 페이지 내에서
 */
router.route("/:id").post((req, res) => {
  if (req.body.key === API_KEY) {
    Organization.findById(req.params.id)
      .sort({createdAt: -1})
      .then((all) => res.json(all))
      .catch((err) => res.status(400).json("Error : " + err));
  } else res.status(400).json("Error");
})

// Create Organization
router.route("/add").post((req, res) => {
  if (req.body.key === API_KEY) {
    const one = {
      id: req.body.id,
      orgId: req.body.orgId,
      name: req.body.name,
      path: req.body.path,
      description: req.body.description,
      contents: req.body.contents,
      employees: req.body.employees,
    };
    
    const newOne = new Organization(one);
    
    newOne
      .save()
      .then(() => res.json(`Organization ${req.body.name} added!`))
      .catch((err) => res.status(400).json("Error: " + err));
  } else res.status(400).json("Error");
});

// Update Organization
router.route("/update/:id").post((req, res) => {
  if (req.body.key === API_KEY) {
    Organization.findById(req.params.id)
      .then((one) => {
        one.orgId = req.body.orgId;
        one.name = req.body.name;
        one.path = req.body.path;
        one.description = req.body.description;
        one.contents = req.body.contents;
        one.employees = req.body.employees;
        
        one
          .save()
          .then(() => res.json(`Organization ${req.body.name} updated!`))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
  } else res.status(400).json("Error");
});

router.route("/delete/:id").post((req, res) => {
  if (req.body.key === API_KEY) {
    Organization.findByIdAndDelete(req.params.id)
      .then(() => res.json("Organization deleted."))
      .catch((err) => res.status(400).json("Error: " + err));
  } else res.status(400).json("Error");
});

module.exports = router;
