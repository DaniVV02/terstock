module.exports = {
    selectProduitID: function(Produit, id){
        return Produit.findOne({ where: {produit_id: id }})
            .catch(error => {
                console.error('Erreur lors de la recherche de l\'utilisateur par ID :', error);
                throw new Error('Erreur lors de la recherche de l\'utilisateur par ID');
            });

    }
}