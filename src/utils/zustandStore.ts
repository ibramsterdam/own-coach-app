import create from "zustand";

export const enum clientAuthState {
  AUTHENTICATED = "authenticated",
  LOADING = "loading",
  NOT_AUTHENTICATED = "not-authenticated",
}

interface ClientState {
  authState: clientAuthState;
  setAuthState: (newAuthState: clientAuthState) => void;
}

export const useClientStore = create<ClientState>()((set) => ({
  authState: clientAuthState.NOT_AUTHENTICATED,
  setAuthState: (newAuthState) => set((state) => ({ authState: newAuthState })),
}));
