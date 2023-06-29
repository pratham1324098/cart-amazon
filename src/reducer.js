export const initialState ={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // token:'BQBnZ3BVn1iS7795Q1ZSCItx50ou6Pb7RsjY82J9Png2fQdzXyhsSCjhpxbvrZYxOH6ZJa59_GC8ixS_PJqlvmXjZqCZgtqFFn5GdiQWtMmJlmh2BJhKyI316qhNoAqHZAWB9WTqTdL-Ni9g_-Nn7X3upJJeGmUE86G0P8nxqZGtLnpNWkmnpSrP1h7g_cuvG4fFvuSJ0HDRr-KOfaVpcw'
};
const reducer = (state,action) =>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            }
        default:
            return state;
    }
};
export default reducer;