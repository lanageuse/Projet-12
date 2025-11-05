/**
 * Reducer pour gérer le state des listings de logements
 * Gère les différentes phases du chargement des données
 * 
 * @param {Object} state - L'état actuel
 * @param {Object} action - L'action à exécuter
 * @returns {Object} Le nouvel état
 */
function listingsReducer(state, action) {
    switch (action.type) {
        // État de chargement : on attend les données
        case "fetching":
            return { 
                status: "fetching", 
                listings: null, 
                error: null 
            }
        
        // État de succès : les données sont arrivées
        case "done":
            return { 
                status: "done", 
                listings: action.payload, 
                error: null 
            }
        
        // État d'erreur : problème lors du chargement
        case "fail":
            return { 
                status: "fail", 
                listings: null, 
                error: action.error 
            }
        
        // Action non reconnue
        default:
            throw new Error(`Action inconnue : ${action.type}`)
    }
}

export default listingsReducer;