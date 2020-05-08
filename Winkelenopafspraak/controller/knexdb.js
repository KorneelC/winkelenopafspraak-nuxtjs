let knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'Winkelenopafspraak'
    }
});


exports.getBrandLocations = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await knex('location_brands').where({
            brand_id: id,
        })
        res.send(result);
    }
    catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error);
    }


}
exports.getBrands = async (req, res, next) => {
    try {
        const result = await knex.select().from('brands');
        res.status(200).send(result)
    }
    catch (error) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err);
    }

}

// exports.postUser = (req, res) => {
//     const userName = req.body.userName;
//     const accountName = req.body.accountName;
//     knex.schema
//         .then(() =>
//             knex('users').insert({ user_name: userName })
//         )

//         .then(rows =>
//             knex('accounts').insert({ account_name: accountName, user_id: rows[0] })
//         )

//         .catch(err => {
//             console.error(err);
//         });

//     res.status(201).json({
//         message: "created new user",
//         newUser: {
//             name: userName,
//             account_name: accountName,
//         }
//     })
// }