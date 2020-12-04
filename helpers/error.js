export class ErrorX extends Error {
    constructor(status, message) {
        super()
        this.status = status
        this.message = message
    }
}

export const handleError = (err, res) => {
    let { status, message } = err
    
    if (!status) status = 500

    res.status(status).json({
        status,
        message
    })
}