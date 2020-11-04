export const selectResourcesOfDeveloper = (devId) => (state) => {
  const developer = state.developers.find((dev) => dev.id === devId);

  if (!developer) {
    return [];
  }
  const favorites = state.resources.filter((res) => {
    return developer.favorites.includes(res.id);
  });
  // console.log("favorites", favorites);
  return favorites;
};

export const selectLoggedInUser = (state) => {
  const loggedInUser = state.developers.find(
    (dev) => (dev.id = state.users.id)
  );

  return loggedInUser;
};
