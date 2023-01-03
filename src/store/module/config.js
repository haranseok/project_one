export default {
    state: {
        headerType: -1,
        footerType: -1,
    },
    getters: {
        getHeaderType(state) {
            return state.headerType;
        },
        getFooterType(state) {
            return state.footerType;
        }
    },
    mutations: {
        setHeaderType(state, param) {
            state.headerType = param;
        },
        setFooterType(state, param) {
            state.footerType = param;
        }
    },
    actions: {
        setHeaderType(context, param) {
            context.commit("setHeaderType", param);
        },
        setFooterType(context, param) {
            context.commit("setFooterType", param);
        }
    },
};
