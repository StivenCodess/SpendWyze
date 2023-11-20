import { create } from "zustand";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	signInAnonymously,
} from "firebase/auth";
import { auth } from "./firebase";

const useAuthStore = create((set) => ({
	user: null,
	loading: false,
	error: null,

	signUp: async (email, password) => {
		set({ loading: true });

		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			set({ user: res.user, error: null });
		} catch (error) {
			console.log(error);
			set({ user: null, error: error.message });
		}

		set({ loading: false });
	},

	signIn: async (email, password) => {
		set({ loading: true });

		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			set({ user: res.user, error: null });
			console.log(res);
		} catch (error) {
			console.log(error);
			set({ user: null, error: error.message });
		}

		set({ loading: false });
	},

	signInAnonymously: async () => {
		set({ loading: true });
		console.log("Hola");
		try {
			const res = await signInAnonymously(auth);
			set({ user: res.user, error: null });
			console.log(res);
		} catch (error) {
			console.log(error);
			set({ user: null, error: error.message });
		}

		set({ loading: false });
	},

	signOut: async () => {
		set({ loading: true });

		try {
			await signOut(auth);
			set({ user: null, error: null });
		} catch (error) {
			set({ user: null, error: error.message });
		}

		set({ loading: false });
	},
}));

export default useAuthStore;
