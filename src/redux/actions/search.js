

export const searchAction =(keyword) => async (dispatch) => {
    const data = await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    dispatch({type: 'SEARCH', payload: data.filter(dt => dt.title.include(keyword)|| dt.description.include(keyword)||dt.category.include(keyword))})
}