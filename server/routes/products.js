const express = require('express')
const router = express.Router()
const Product = require('../model/product')


// 動くasync await
router.get('', async function(req, res) {
    try {
        const foundProducts = await Product.find({})
        res.json(foundProducts)
    } catch(error) {
        console.error('データ取得エラー:', error)
        res.status(500).json({ error: 'データ取得できませんでした。'})
    }
})

// IDで個別に取得するコード。動くasync await
        router.get('/:productId', async function(req, res) {
            try {
                const productId = req.params.productId
                const foundProduct = await Product.findById(productId)
                res.json(foundProduct)
            } 
            catch(error) {
                console.error('データ取得エラー:', error)
                res.status(500).json({ error: 'データ取得できませんでした。'})
            }
            })

    module.exports = router;



// 動く最初のコード
// router.get('', function(req, res) {
//     res.json({'ok': true})
// })


