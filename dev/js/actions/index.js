export const selectUser = (user) => {
  console.log("You selected: ", user.first);
  
  return {
    type: "USER_SELECTED",
    payload: user
  }
};