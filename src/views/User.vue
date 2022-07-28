<template>
<body>
  <Header title="Header" />
  <SideNav />
  <main>
    <router-view></router-view>
  </main>
  <!-- <Footer /> -->
</body>
</template>

<script>
import Header from "../components/SHeader.vue";
import Footer from "../components/Footer.vue";
import SideNav from "../components/SideNav.vue";
export default {
  name: "User",
  components: {
    Header,
    Footer,
    SideNav,
  },
};
</script>

<style scoped>
body{
  background: rgb(248, 245, 255);
}
</style>
