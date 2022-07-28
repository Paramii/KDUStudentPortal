import Api from "@/services/Api";

export default {
    register(credentials) {
        return Api().post('register', credentials)
    },

    setAdmin() {
        return Api().post('setAdminClaim', credentials)
    }
}
