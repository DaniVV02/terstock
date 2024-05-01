

module.exports={
    selectBookID: function(Book, id){
        return Book.findOne({ where: {book_id: id }})
            .catch(error => {
                console.error('Erreur lors de la recherche de l\'utilisateur par ID :', error);
                throw new Error('Erreur lors de la recherche de l\'utilisateur par ID');
            });

    }
}