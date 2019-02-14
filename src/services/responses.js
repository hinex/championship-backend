function successResponse (payload, code = 200) {
    this.body = { status: true, result: payload }
    this.status = code
}

function errorResponse (error, code = 400) {
    this.body = { status: false, error: error.message }
    this.status = code
}

module.exports = {
    successResponse,
    errorResponse,
}
