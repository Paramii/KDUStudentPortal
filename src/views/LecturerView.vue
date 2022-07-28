<template>
<body>
  <Header title="Header" />
  <LecturerNav />
  <main>
    <router-view></router-view>
  </main>
  <!-- <Footer /> -->
</body>
</template>

<script>
import Header from "../components/LHeader.vue";
import Footer from "../components/Footer.vue";
import LecturerNav from "../components/LecturerNav.vue";
export default {
  name: "User",
  components: {
    Header,
    Footer,
    LecturerNav,
  },
};
</script>

<style scoped>
body{
  background: rgb(234, 246, 247);
}
</style>