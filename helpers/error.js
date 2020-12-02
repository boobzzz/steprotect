export class ErrorX extends Error {
    constructor(status, message) {
        super()
        this.status = status
        this.message = message
    }
}

export const handleError = (err, res) => {
    const { status, message } = err

    res.status(status).json({
        status,
        message
    })
}