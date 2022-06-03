const axios = require ('axios');
const { Videogame, Genre } = require('../db.js');
const { API_KEY } = process.env


// ---------------------- Para traer el videojuego que coincida con el id pasado ---------------------

const getApiInfoById = async function(id) {

    try {
        const urlData = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        const gamesData = {
            id: urlData.data.id,
            name: urlData.data.name,
            description: urlData.data.description_raw,
            image: urlData.data.background_image,
            released: urlData.data.released,
            rating: urlData.data.rating,
            platforms: urlData.data.platforms.map(p => p.platform.name),
            genres: urlData.data.genres.map(g => g.name)
        }

        return gamesData;

    } catch(error) {
        return null;
    }
}


const getDbInfoById = async function(id) {

    try {
        let dbInfo = await Videogame.findOne({
            where: {
                id: id
            },
            include: {
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }
        });

        dbInfo = JSON.parse(JSON.stringify(dbInfo));
        dbInfo.genres = dbInfo.genres.map(g => g.name);
               
        return dbInfo;

    } catch(error) {
        return null;
    }
}



const getAllVideogamesById = async function(id) {

    if (isNaN(id)) {
        const dbInfoById = await getDbInfoById(id);
        return dbInfoById;
    } else {
        const apiInfoById = await getApiInfoById(id);
        return apiInfoById;
    }
}




// ---------------------- Ruta para encontrar videojuego por id ------------------------

exports.videoGameByIdRoute = async function(req, res, next) {
    const { id } = req.params;

    let videogamesById = await getAllVideogamesById(id);

    if(videogamesById != null) {
        res.status(200).json(videogamesById);
    } else {
        res.status(404).send("Id not found");
    }
};




// ---------------------- Ruta para crear un videojuego ----------------------------

exports.createVideoGameRoute = async function(req, res, next) {
    const { name, description, released, rating, platforms, image, genres } = req.body;
    
    let getDbInfoGenres = await Genre.findAll({
        where: {
            name: genres
        }
    });


    if(name && description && platforms) {
        let newVideogame = await Videogame.create({
            name,
            description,
            released,
            rating,
            platforms,
            image
        })

        newVideogame.addGenres(getDbInfoGenres);
        return res.send("Videogame created successfully");
    }
};
