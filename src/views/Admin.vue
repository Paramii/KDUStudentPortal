<template>
  <Header title="Header" />
  <AdminNav />
  <main>
    <router-view></router-view>
  </main>
  <!-- <Footer /> -->
</template>
  <!-- <div>
    <ul v-if="users && users.length">
      <li v-for="user in users" :key="user.email"> 
        {{ user.email }}
        {{ user.password }}
      </li>
    </ul>
    <h1>{{chamath}}</h1>

    <button @click="signOut">Sign out</button>
  </div> -->

<script>
import { getAuth, signOut } from "firebase/auth";

import AdminNav from "../components/AdminNav.vue";
import Header from "../components/HeaderA.vue";
import Footer from "../components/Footer.vue";
export default {
  data() {
    return {
      users: [],
      chamath: null,
    };
  },
  components: {
    AdminNav,
    Header,
    Footer,
  },
  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.push("/");
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
  
};
</script>