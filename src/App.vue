<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/SHeader.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.content {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}

header,
main,
footer {
  padding-left: 316px !important;
}

@media only screen and (max-width: 992px) {
  header,
  main,
  footer {
    padding-left: 0 !important;
  }
}

.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 96%;
}

button {
  border-radius: 20px !important;
  background-color: #5a5ecf !important;
}

.material-icons {
  cursor: pointer;
}
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background:rgb(219, 214, 233);
  

}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #5a5ecf;
  border-radius: 20em;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
