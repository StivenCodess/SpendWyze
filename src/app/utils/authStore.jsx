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
		let result = { success: false, message: null, redirect: null };

		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			set({ user: res.user, error: null });
			result = { success: true, message: "Registration Success", redirect: "/" };
		} catch (error) {
			set({ user: null, error: error.message });
			result = { success: false, message: error.message, redirect: null };
		}

		set({ loading: false });
		return result;
	},

	signIn: async (email, password) => {
		set({ loading: true });
		let result = { success: false, message: null, redirect: null };

		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			set({ user: res.user, error: null });
			result = { success: true, message: "Login Success", redirect: "/" };
		} catch (error) {
			set({ user: null, error: error.message });
			result = { success: false, message: error.message, redirect: null };
		}

		set({ loading: false });
		return result;
	},

	signInAnonymously: async () => {
		set({ loading: true });
		let result = { success: false, message: null, redirect: null };

		try {
			const res = await signInAnonymously(auth);
			set({ user: res.user, error: null });
			result = { success: true, message: "Login Success", redirect: "/" };
		} catch (error) {
			set({ user: null, error: error.message });
			result = { success: false, message: error.message, redirect: null };
		}

		set({ loading: false });
		return result;
	},

	signOut: async () => {
		set({ loading: true });
		let result = { success: false, message: null, redirect: null };

		try {
			await signOut(auth);
			set({ user: null, loading: "complete", error: null });
			result = { success: true, message: "Login Success", redirect: "/" };
		} catch (error) {
			set({ user: null, loading: "complete", error: error.message });
			result = { success: false, message: error.message, redirect: null };
		}

		set({ loading: false });
		return result;
	},
}));

export default useAuthStore;
