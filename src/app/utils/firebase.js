import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const apiKey = process.env.API_KEY;
const authDomain = process.env.AUTH_DOMAIN;
const projectId = process.env.PROJECT_ID;
const storageBucket = process.env.STORAGE_BUCKET;
const messagingSenderId = process.env.MESSAGING_SENDER_ID;
const appId = process.env.APP_ID;

const firebaseConfig = {
	apiKey: apiKey,
	authDomain: authDomain,
	projectId: projectId,
	storageBucket: storageBucket,
	messagingSenderId: messagingSenderId,
	appId: appId,
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
