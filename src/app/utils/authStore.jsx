import { create } from "zustand";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	signInAnonymously,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";

const useAuthStore = create((set, get) => ({
	user: null,
	loading: "inProgress",
	error: null,

	initialize: () => {
		set({ loading: "inProgress" });
		onAuthStateChanged(auth, (user) => {
			if (user) {
				set({ user, loading: "complete", error: null });
			} else {
				set({ user: null, loading: "complete", error: null });
			}
		});
	},

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
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			set({ user: res.user, error: null });
			return true;
		} catch (error) {
			console.log(error);
			set({ user: null, error: error.message });
			return false;
		}
	},

	signInAnonymously: async () => {
		set({ loading: true });
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
