// src/store/user/reducer.js
const initialState = [
  {
    id: 1,
    name: "Kelley",
    website: "https://hi-im-kelley.netlify.com",
    favorites: [2, 3, 4, 5],
  },
  {
    id: 2,
    name: "Danny",
    website: null,
    favorites: [1, 3, 6],
  },
  {
    id: 3,
    name: "Irene",
    website: "null",
    favorites: [1, 2, 3, 6],
  },
  {
    id: 4,
    name: "Thomas",
    website: "https://kraak.com",
    favorites: [1, 4, 6],
  },
];

export default function developersReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
