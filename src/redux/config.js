export const firebase = {
    apiKey: 'AIzaSyDqph19sKUYtoDdb5Q7FOIg3iVXWlQ1FDk',
    authDomain: 'jobs-4a72b.firebaseapp.com',
    databaseURL: 'https://jobs-4a72b.firebaseio.com/',
    projectId: 'jobs-4a72b',
    storageBucket: 'gs://jobs-4a72b.appspot.com',
    messagingSenderId: ''
  }
  
  export const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, // Store in Firestore instead of Real Time DB
    enableLogging: false
  }
  
  export default { firebase, rrfConfig }