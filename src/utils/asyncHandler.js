const asyncHandler = () => {
    (req,res,next)=>{
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}




// try catch method
// const asyncHandler = (fn) => async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     } catch(error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }