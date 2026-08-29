import express from 'express'
import multer from 'multer'
import { ChangeJobApplicationStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'

const router = express.Router()

//register a company
router.post('/register',upload.single('image'), registerCompany)

//company login
router.post('/login',loginCompany)

//get company data 
router.get("/company", protectCompany, (req, res) => {
  res.json({ success: true, company: req.company });
});

router.post('/post-job',protectCompany, postJob)

router.get('/applicants',protectCompany, getCompanyJobApplicants)



router.get('/list-jobs',protectCompany, getCompanyPostedJobs)



router.post('/change-status',protectCompany, ChangeJobApplicationStatus)


router.post('/change-visibility',protectCompany, changeVisibility)

export default router