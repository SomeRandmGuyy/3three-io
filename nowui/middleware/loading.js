// middleware/loading.js
export default function ({ app, store }) {
    app.router.beforeEach((to, from, next) => {
      store.commit('SET_LOADING', true);
      next();
    });
  
    app.router.afterEach(() => {
      store.commit('SET_LOADING', false);
    });
  }
  