/**
 * Retos de la sesión 4.
 *
 * Alan Kevin Fuentes García
 */

const queries_reto_1 = [
    // Fecha, nombre y texto de cada comentario.
    { date: 1, name: 1, text: 1 },

    // Título, elenco y año de cada película.
    { title: 1, cast: 1, year: 1 },

    // Nombre y contraseña de cada usuario.
    { name: 1, password: 1 }
]

const queries_reto_2 = [
    // ¿Qué comentarios ha hecho Greg Powell?
    {
        filter: {
            name: "Greg Powell",
        },
    },

    // ¿Qué comentarios han hecho Greg Powell o Mercedes Tyler?
    {
        filter: {
            $or: [
                {
                    name: "Greg Powell",
                },
                {
                    name: "Mercedes Tyler",
                },
            ],
        },
    },

    // ¿Cuál es el máximo número de comentarios en una película?
    {
        project: {
            num_mflix_comments: 1,
        },
        sort: {
            num_mflix_comments: -1,
        },
        limit: 1,
    },

    // ¿Cuál es título de las cinco películas más comentadas?
    {
        project: {
            title: 1,
            num_mflix_comments: 1,
        },
        sort: {
            num_mflix_comments: -1,
        },
        limit: 5,
    }
]
