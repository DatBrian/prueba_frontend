import { create } from "zustand";
import type { Actions, State } from "./authStore.types";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
	persist<State & Actions>(
		(set) => ({
			name: "",
			token: "",
			setName: (name: string) =>
				set(() => ({
					name,
				})),
			setToken: (token: string) =>
				set(() => ({
					token,
				})),
		}),
		{ name: "auth" }
	)
);
