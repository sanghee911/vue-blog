import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyCBkkM-u92dhHMlYO0S0Q2BOdRkd6b4UNU",
    authDomain: "vue-blog-307cc.firebaseapp.com",
    databaseURL: "https://vue-blog-307cc.firebaseio.com",
    projectId: "vue-blog-307cc",
    storageBucket: "vue-blog-307cc.appspot.com",
    messagingSenderId: "997252385947"
});


export const db = app.database();
export const postsRef = db.ref('posts');

