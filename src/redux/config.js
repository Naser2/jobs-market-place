export const firebase = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  }
  
  export const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, // Store in Firestore instead of Real Time DB
    enableLogging: false
  }
  
  export default { firebase, rrfConfig }