export const errorHandler = (err) => {
    const { status, message } = err

    return { status, message }
}