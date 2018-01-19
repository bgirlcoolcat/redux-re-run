export default function() {
  return [
    {
      id: 1,
      first: 'Bucky',
      last: 'Roberts',
      age: 71,
      description: 'I like bacon!',
      thumbnail: 'http://i.imgur.com/7yUvePI.jpg'
    },
    {
      id: 2,
      first: 'Noddy',
      last: 'Boy',
      age: 50,
      description: 'I live in Toytown',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8x8T2_oRGzxF3jRAzXTjp44ejUF6AqY3UoX-F6MnKd4Tav_rT_A'
    },
    {
      id: 3,
      first: 'Big',
      last: 'Ears',
      age: 60,
      description: 'I hang out with Noddy',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQammUAUwDweDex-RaD7nKKhGdPvXaMqN7Ukco0xdDEjgKTs1Ygzg'
    }
  ]
}

// After setting up our Store, we create a reducers directory (already done here)
// A reducer is basically a function that says what data we are supposed to save in our store.
// We have lots of separate reducers.
// For now, for users, we add a reducer-users.js file 
// In here, we'll have a function that returns the part of the application that is responsible for storing the users.

// As we're gonna want to include this function in another part of our app later on, we need to export it.
// By writing 'export default' b4 the function, we don't need to add an export statement at end of the file.
// All this function is going to do is return an array of users.

// This is how we structure our data set in React
// {
//   users: [
//     {
//       first: 'Bucky',
//       last: 'Roberts',
//       image: 'http...',
//       description: 'I like bacon!'
//     },
//     {}
//   ]
// }