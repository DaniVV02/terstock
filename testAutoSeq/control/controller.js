const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../dbConfig');
const modelProd = require('../models/tables/produit')(sequelize, DataTypes);
const fct = require('../models/fctMode');
const { v4: uuidv4 } = require('uuid');


module.exports = {
    produit_create :
        modelProd.create({
            PRODUIT_ID: 1,
            NOM: "BioGlow",
            DESCR: "2021-12-14",
            PRIX_UNIT: 3,
            POIDS : "100g",
            DIMENSIONS : "10x6cm",
            MAGASIN_ENTREPOT : "magasin",
        }).then(res => {
            console.log(res)
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        }),

    produit_id : 
        fct.selectProduitID(modelProd, 1).then((monProd)=> {
            if (monProd) {
                console.log(monProd);
            } else {
                console.log("Produit non trouvé");
            }
        })
        .catch((error) => {
            // Gérer les erreurs, par exemple en renvoyant une réponse d'erreur
            res.status(400).send("Erreur lors de la recherche du livre  : " + error.message);
        }) 
    
}
