

const validateQuery = (req, res, next) => {
    console.log(req.query);
    const { minCredits, maxCredits } = req.query;
    if(minCredits){
        if(isNaN(Number(minCredits))){
            res.status(400);
            return res.send(`minCredits should be a number`);
        }
    }
    if(maxCredits){
        if(isNaN(Number(maxCredits))){
            res.status(400);
            return res.send(`maxCredits should be a number`);
        }
    }
    if(minCredits && maxCredits){
        if(Number(minCredits) > Number(maxCredits)){
            res.status(400);
            return res.send(`minCredits can't be more than maxCredits`);
        }
    }
    next();
}

export default validateQuery;