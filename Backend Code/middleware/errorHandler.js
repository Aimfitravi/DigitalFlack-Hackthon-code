const errorHandler = (err,req, res, next) => {  
    const statuscode = res.statuscode ? res.statusCode : 500;

    switch(statuscode) {
            case 400:
            res.json({ title: " validation error" , message: err.message});
               break;
            case 403:
                res.json({ title: "Forbidden error" , message: err.message});
                break
            case 404:
                res.json({ title: "Not found error" , message: err.message});
                break;
            case 500:
                res.json({ title: "Internal server error", message: err.message});
                break;
        default:
           console.log("no error all good");
            break;
}
}

module.exports = errorHandler;