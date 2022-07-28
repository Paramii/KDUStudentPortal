<template>
    <div class="container">
    <div class="row">
      <div class="col s12 m12">
        <div class="card" >
          <div class="card-content">
            <ChatApp />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatApp from "../components/LChatApp.vue";
  export default {
    name: "Messages",
    components: {
      ChatApp
    },
  }
</script>


<style scoped>
.card {
  border-radius: 1em;
  padding-top: 1%;
  padding-left: 4%;
  padding-right: 0%;
  height: 82vh;
}
.container{
  margin-left: -1%;
}
.card-content{
  overflow-y: auto;
}
</style>