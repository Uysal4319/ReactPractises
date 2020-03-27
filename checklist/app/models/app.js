export default {
    namespace: 'app',
    state: {
        token:'token',
    },
    reducers: {
        updateState(state, { payload }) {
            return { ...state, ...payload }
        },
    },
    effects: {
    },
    subscriptions: {
        setup({ dispatch }) {

        },
    },
}
