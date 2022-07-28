<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m8">
        <div class="card" style="height: 24em;">
          <div class="card-content" >
            <span class="card-title">Time Table</span>
            <table class="responsive-table highlight">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednsday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>8:00am - 10.00am</td>
                  <td>DSA 2</td>
                  <td>-</td>
                  <td>FP</td>
                  <td>DSA 2</td>
                  <td>DSA 1</td>
                </tr>
                <tr>
                  <td>10:00am - 11.00am</td>
                  <td>DSA 2</td>
                  <td>DSA 1</td>
                  <td>-</td>
                  <td>FP</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>11:30am - 12.30pm</td>
                  <td>FP</td>
                  <td>DSA 1</td>
                  <td>-</td>
                  <td>FP</td>
                  <td>DSA 2</td>
                </tr>
                <tr>
                  <td>12:30pm - 01.30pm</td>
                  <td>-</td>
                  <td>DSA 2</td>
                  <td>FP</td>
                  <td>DSA 1</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card" style="height: 24em;">
          <div class="card-content">
            <span class="card-title">Announcements</span>
            <table class="responsive-table highlight" >
              <tbody >
                <tr>
                  <td>Please attend fill in your profile details before the deadline.</td>
                </tr>
                <tr>
                  <td>Tommorrow will be a holiday for all the academics of FOC.</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m8">
        <div class="card" style="height: 16em;">
          <div class="card-content">
            <span class="card-title">Courses</span>
            <table class="responsive-table highlight" >
              <tbody >
                <tr>
                  <td>DSA 2</td>
                </tr>
                <tr>
                  <td>FP</td>
                </tr>
                <tr>
                  <td>DSA 1</td>
                </tr>
              </tbody>
              </table>
          </div>
        </div>
      </div>
      
      <div class="col s12 m4">
        <div class="card" style="height: 16em;">
          <div class="card-content">
            <span class="card-title">Messages</span>
            <table class="responsive-table highlight striped">
              <thead >
                <tr >
                  <!-- <th ><a href="#user"> <img class="circle" src="../assets/avatar1.png" style="width:4em">TM Siriwardena </a></th> -->
                  <th ><a href="#user" style="color:black;">LK Rathnayeka</a></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dear Madam, I have a question regarding today's lesson.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "Home",
  mounted() {
    $(".sidenav").sidenav("open");
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

<style scoped>
.card {
  border-radius: 1em;
}
.container{
  margin-left: -1%;
}
.card-content{
  overflow-y: auto;
}
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background:rgb(248, 245, 255);

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