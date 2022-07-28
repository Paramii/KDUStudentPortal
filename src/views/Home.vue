<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m8">
        <div class="card" style="height: 24em;overflow-y: auto;">
          <div class="card-content" style="height: 24em;overflow-y: auto;">
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
                  <td>SPE</td>
                  <td>GPSD</td>
                  <td>AI</td>
                  <td>SPM</td>
                </tr>
                <tr>
                  <td>10:00am - 11.00am</td>
                  <td>DSA 2</td>
                  <td>GPSD</td>
                  <td>CIM</td>
                  <td>GPSD</td>
                  <td>SDI</td>
                </tr>
                <tr>
                  <td>11:30am - 12.30pm</td>
                  <td>DSA 2</td>
                  <td>SPM</td>
                  <td>SPE</td>
                  <td>CIM</td>
                  <td>SDI</td>
                </tr>
                <tr>
                  <td>12:30pm - 01.30pm</td>
                  <td>DSA 2</td>
                  <td>CIM</td>
                  <td>GPSD</td>
                  <td>SDI</td>
                  <td>AI</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card" style="height: 24em;" >
          <div class="card-content">
            <span class="card-title">Announcements</span>
            <table class="responsive-table highlight" >
              <tbody >
                <tr>
                  <td>Please attend fill in your profile details before the deadline.</td>
                </tr>
                <tr>
                  <td>Tommorrow will be a holiday for all the FOC students.</td>
                </tr>
                <tr>
                  <td>All student are required to participate in next week's seminar.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m5">
        <div class="card" style="height: 18em;">
          <div class="card-content">
            <span class="card-title">Courses</span>
            <table class="responsive-table highlight" >
              <tbody >
                <tr>
                  <td>Data stuctures and Algortihms 2</td>
                </tr>
                <tr>
                  <td>Computer Interfacing and Microprocessors</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col s12 m3">
        <div class="card" style="height: 18em;">
          <div class="card-content" >
            <span class="card-title">Attendance</span>
            <div style="text-align:center;">
              <p style="padding-top:6%;padding-bottom:2%;">You do not have 80% attendance</p>
              <i class="material-icons" style="font-size:8em; color:#CF5E5A;">error_outline</i><br>
              <router-link to="/user/attendence">More details</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card" style="height: 18em;">
          <div class="card-content">
            <span class="card-title">Messages</span>
            <table class="responsive-table highlight striped">
              <thead >
                <tr >
                  <!-- <th ><a href="#user"> <img class="circle" src="../assets/avatar1.png" style="width:4em">TM Siriwardena </a></th> -->
                  <th ><a href="#user" style="color:black;">TM Siriwardena </a></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dear Student, please submit your assignment on or before this saturday.</td>
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
.card-content{
  overflow-y: auto !important;
}
.container{
  margin-left: -1%;
  overflow-y: auto !important; 
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