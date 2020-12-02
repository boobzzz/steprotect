export const handleError = (err) => {
    const { status, message } = err

    return { status, message }
}