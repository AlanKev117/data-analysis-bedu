/**
 * Retos de la sesión 5.
 * 
 * Alan Kevin Fuentes García
 */

const queries_reto_1 = [
    // Propiedades que no permitan fiestas.
    {
        filter: {
            house_rules: RegExp("no part(y|ies)", "i"),
        },
    },
    // Propiedades que admitan mascotas (imposible sin machine learning).
    {
        filter: {
            house_rules: RegExp("(?<!no)t? pets? (allowed|friendly)", "i"),
        },
    },
    // Propiedades que no permitan fumadores.
    {
        filter: {
            house_rules: RegExp("no smoking", "i"),
        },
    },
    // Propiedades que no permitan fiestas ni fumadores.
    {
        filter: {
            $and: [
                {
                    house_rules: RegExp("no smoking", "i"),
                },
                {
                    house_rules: RegExp("no part(y|ies)"),
                },
            ],
        },
    },
]

const queries_reto_2 = [
    {
        filter: {
            number_of_reviews: {
                $gte: 50,
            },
            "review_scores.review_scores_rating": {
                $gte: 80,
            },
            amenities: {
                $in: [RegExp("Ethernet")],
            },
            "host.host_location": RegExp("Brazil"),
        },
    },
]

const queries_reto_3 = [
    [
        {
            $addFields: {
                has_internet: {
                    $in: ["Internet", "$amenities"],
                },
            },
        },
        {
            $match: {
                has_internet: true,
            },
        },
        {
            $count: "has_internet",
        },
    ],
]
