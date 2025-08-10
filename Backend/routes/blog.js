import express from 'express'
const router = express.Router()
import BLOG from '../models/blog.js'
import USER from '../models/user.js'
import authRequired from '../middlewares/authRequired.js'

//GET ALL BLOGS
router.get('/', async (req, res)=>{
    const allBlogs = await BLOG.find({})
    res.json({allBlogs})
})
//GET BLOG BY ID
router.get('/:id', async (req, res)=>{
    const blogId = req.params.id
    const blogFound = await BLOG.findById({_id:blogId})
    if(!blogFound)
        return res.status(404).json({error:"Requested Blog Doesn't Exists!"})
    return res.status(200).json({blogFound})
})
//POST A NEW BLOG
router.post('/add-blog', authRequired, async (req, res)=>{
    const { title, body, coverImageURL } = req.body
    const createdBy = req.user.id
    const newBlog = await new BLOG({
        title,
        body, 
        coverImageURL, 
        createdBy
    })
    await newBlog
    .save()
    .then(()=>res.status(201).json({message:"Blog Created Successfully!"}))
    .catch((error)=>{
        return res.json({error})
    })

})
//DELETE BLOG BY ID
router.delete('/:id', async (req, res)=>{
    const blogId = req.params.id
    const blogFoundAndDeleted = await BLOG.findByIdAndDelete({_id:blogId})
    if(!blogFoundAndDeleted)
        return res.json({error:"No Blog Found To Be Deleted!"})
    return res.status(200).json({message:"Blog Deleted Successfully!"})
})
//UPDATE BLOG BY ID
router.patch('/:id', async (req, res)=>{
    const blogId = req.params.id
    
    const updatedData = {}
    if(req.body.title)
        updatedData.title = req.body.title
    if(req.body.body)
        updatedData.body = req.body.body
    if(req.body.coverImageURL)
        updatedData.coverImageURL = req.body.coverImageURL

    const blogFoundAndUpdated = await BLOG.findByIdAndUpdate({_id:blogId},
        {$set:updatedData},
        { new: true, runValidators: true }
    )
    if(!blogFoundAndUpdated)
        return res.json({error:"No Blog Found To Be Updated!"})
    return res.status(201).json({message:"Blog Updated Successfully!"})
})

const blogRouter = router
export default blogRouter