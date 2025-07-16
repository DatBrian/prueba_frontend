export type State = {
    name: string;
    token: string;
};

export type Actions = {
    setName: (name: string) => void;
    setToken: (token: string) => void;
}