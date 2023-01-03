export default {
    state: {
        headerType: -1,
    },
    getters: {
        getHeaderType(state) {
            return state.headerType;
        },
    },
    mutations: {
        setHeaderType(state, param) {
            state.headerType = param;
        },
    },
    actions: {
        setHeaderType(context, param) {
            context.commit("setHeaderType", param);
        },
    },
};
