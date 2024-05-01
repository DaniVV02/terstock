const { DataTypes } = require('sequelize');
const sequelize = require('../dbConfig');
const model = require('../model/film');
const book = require('../model/book')(sequelize,DataTypes);
const Fct = require('../model/fctModel');

Fct.selectBookID(book, 2).then((mybook) => {
    if (mybook) {
            // Si l'utilisateur est trouvé, stocker son USERNAME et USER_MAIL dans la session
            console.log(mybook);

            //res.status(200).send("Success");
        } else {
            //res.status(201).send("Id existse pas");
            console.log("Aucun livre avec ce id")
        }
    })
    .catch((error) => {
        // Gérer les erreurs, par exemple en renvoyant une réponse d'erreur
        res.status(400).send("Erreur lors de la recherche du livre  : " + error.message);
    });



/*
book.create({
    book_id : "1",
    titre: "Maze runner",
    auteur: "James Dashner"
}).then(res => {
    console.log(res)
}).catch((error) => {
    console.error('Failed to create a new record : ', error);
});


model.findAll().then(res =>{
    console.log(res);
})

model.destroy({
    where: {
        id: 2
      }
  }).then(() => {
      console.log("Successfully deleted record.")
  }).catch((error) => {
      console.error('Failed to delete record : ', error);
  });
model.create({
    title: "Clean Code",
    director: "Robert Cecil Martin",
    release_date: "2021-12-14",
    subject: 3
}).then(res => {
    console.log(res)
}).catch((error) => {
    console.error('Failed to create a new record : ', error);
});
*/


