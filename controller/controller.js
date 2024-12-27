const modal=require("../modals/modal")


const getcontroller = async(req,res)=>{
    try{
        const mod = await modal.find({});
        res.json(mod)
}catch(error){
         res.status(500).json({message:error.message})
         }
}

const getcontrollerid = async(req,res)=>{
    try{
        const {id} = req.params
       const m = await modal.findById(id);
       res.json(m)
       }catch{
        res.status(500).json({message:error.message})
       }
}
const postcontroller = async(req,res)=>{
       try{
        const modl =  await modal.create(req.body)
        res.json(modl)
       }catch(error){
         res.status(500).json({message:error.message})
      
       }
}
const putcontroller = async(req,res)=>{
    try {
        const {id} = req.params
        const n  = await modal.findByIdAndUpdate(id,req.body) 
        if(!n){
          return res.status(404).json({message:error.message})
        }
        const no  = await modal.findById(id)
        res.json(no)
    
      }catch(error){
       res.status(500).json ({message:error.message})
      }
    
    }

    const deletecontroller = async(req,res)=>{
        try{
          const{id} = req.params
          const anas  = await modal.findByIdAndDelete(id)
          if(!anas){
            return res.status(500).json({message:error.message})
          }
          res.status(200).json({message:"deleted succesfully"})
      
        }catch(error){
          res.status(500).json({message:error.message})
        }
      }
module.exports = {
    getcontroller ,
    getcontrollerid ,
    postcontroller,
    putcontroller,
    deletecontroller 
};