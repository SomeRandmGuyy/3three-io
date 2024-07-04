// store/index.js
export const state = () => ({
    loading: false
  });
  
  export const mutations = {
    SET_LOADING(state, loading) {
      state.loading = loading;
    }
  };
  