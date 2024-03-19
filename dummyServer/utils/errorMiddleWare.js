
const errorMiddleWare = ((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Sorry, there was some error in the server."

    return res.status(errorStatus).json({
        success: false,
        status : errorStatus,
        message: errorMessage
    })
})

module.exports = errorMiddleWare