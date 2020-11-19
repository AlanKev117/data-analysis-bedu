/**
 * Retos de la sesión 6.
 *
 * Alan Kevin Fuentes García
 */

// 1. Costo promedio de cuarto por país.
const pipeline = [
    {
        $match: {
            property_type: new RegExp("House"),
            bedrooms: {
                $gte: 1,
            },
        },
    },
    {
        $group: {
            _id: "$address.country",
            total_cuartos: {
                $sum: "$bedrooms",
            },
            total_casas: {
                $sum: "$price",
            },
        },
    },
    {
        $addFields: {
            costo_promedio_cuarto_pais: {
                $divide: ["$total_casas", "$total_cuartos"],
            },
        },
    },
    {
        $project: {
            _id: 1,
            costo_promedio_cuarto_pais: 1,
        },
    },
]

// 2. Correo y contraseña de usuario junto con el comentario.
const lookup = [
    {
        $lookup: {
            from: "users",
            localField: "name",
            foreignField: "name",
            as: "user",
        },
    },
    {
        $addFields: {
            single_user: {
                $arrayElemAt: ["$user", 0],
            },
        },
    },
    {
        $addFields: {
            user_email: {
                $arrayElemAt: ["$user.email", 0],
            },
            user_pass: {
                $arrayElemAt: ["$user.password", 0],
            },
        },
    },
    {
        $project: {
            _id: 0,
            name: 1,
            text: 1,
            user_email: 1,
            user_pass: 1,
        },
    },
]

// 3. Resultados del view del lookup anterior
const someDocuments = [
    {
        "name": "Loras Tyrell",
        "text": "Ratione nemo cumque provident itaque voluptatem mollitia quas. Atque possimus asperiores dicta non. Libero aliquam nihil nisi quasi.",
        "user_email": "finn_jones@gameofthron.es",
        "user_pass": "$2b$12$Eb5TLqYLS74pLP9r.2agNe56ht1dvFkQOCODxku8KQmLfldBGa7Cu"
    },
    {
        "name": "Connie Johnson",
        "text": "Quo minima excepturi quisquam blanditiis quod velit. Minus dolor incidunt repellat eligendi ducimus quod. Minus officiis possimus iure nemo nisi ab eos magni.",
        "user_email": "connie_johnson@fakegmail.com",
        "user_pass": "$2b$12$tA3NXW5mHAru7YbIrW6x3.T3OweDVjBwk6wf/ukXBiwxAZXi3R5m2"
    },
    {
        "name": "Cameron Duran",
        "text": "Quasi dicta culpa asperiores quaerat perferendis neque. Est animi pariatur impedit itaque exercitationem.",
        "user_email": "cameron_duran@fakegmail.com",
        "user_pass": "$2b$12$50w2j63ATGmhVOh2rgdjv.wOd9TV0Jb9Xk/Anms0fxVSvGMf5MwvK"
    },
    {
        "name": "Jason Smith",
        "text": "Blanditiis sunt quis voluptate ex soluta id. Debitis excepturi consequuntur quis nemo amet. Fuga voluptas modi rerum aliquam optio quae a aspernatur.",
        "user_email": "jason_smith@fakegmail.com",
        "user_pass": "$2b$12$l2JMT18BcA8.R3tUxVDKj.9/jwre8CAccr21PvJ576nJ8Pvegxn0m"
    },
    {
        "name": "Theon Greyjoy",
        "text": "Dicta asperiores necessitatibus corporis. Quidem fugiat eius animi fugiat laborum. Quas maiores mollitia amet quibusdam. Ducimus sed asperiores sint recusandae accusamus veniam.",
        "user_email": "alfie_allen@gameofthron.es",
        "user_pass": "$2b$12$x574mziridS3mEQVTbKbY.lK.ngIDyZJnTw17G7Gk6n4lnWVSrWL."
    }
]