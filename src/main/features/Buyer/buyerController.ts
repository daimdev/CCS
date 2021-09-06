//@Namespace for BuyerController
export namespace BuyerController {

    export const BuyerView = (req, res)=> {
        res.render('index.njk', {message: 'Welcome'})
    }
}