import uuid from 'uuid/v1';

// reducer function for the books
export const bookReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_BOOK':
            // this action will have a book object as its payload
            return [...state, {title: action.book.title, author: action.book.author, id: uuid()}];
        case 'REMOVE_BOOK':
            // this action will have a book id as its payload
            return state.filter((book) => book.id !== action.id);
        default:
            return state;
    }
};
