import { defineStore } from "pinia";
import authService from "../services/auth.service";

export const useAuthStore = defineStore("AuthStore", {
  state: () => ({
    currentUser: null,
    userRole: null,
    authToken: localStorage.getItem('authToken') || null,
  }),
  actions: {
    async login({ email, password }) {
      const response = await authService.login(email, password);
      if (response && response.token) {
        this.authToken = response.token;
        localStorage.setItem('authToken', response.token);
        await this.getProfile();
      }
    },
    async register({ name, email, password, passwordConfirm }) {
      const response = await authService.register(name, email, password, passwordConfirm);
      if (response && response.token) {
        this.authToken = response.token;
        localStorage.setItem('authToken', response.token);
        await this.getProfile();
      }
    },
    async logout() {
      await authService.logout();
      this.authToken = null;
      localStorage.removeItem('authToken');
      this.currentUser = null;
      this.userRole = null;
    },
    checkIsAuthenticated() {
      return !!this.authToken;
    },
    async getProfile() {
      if (this.authToken) {
        this.currentUser = await authService.getProfile();
        if (this.currentUser && this.currentUser.roles && this.currentUser.roles.length > 0) {
          this.userRole = this.currentUser.roles[0].name;
        }
      }
    },
    async updateProfile(userId, body) {
      const response = await authService.updateProfile(userId, body);
      await this.getProfile();
      return response;
    },
    setToken(token) {
      this.authToken = token;
      localStorage.setItem('authToken', token);
    },
  },
});
