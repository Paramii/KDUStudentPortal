<template>
  <!-- sidenav -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
  <ul id="slide-out" class="sidenav sidenav-fixed">
    <li>
      <div class="user-view">
        <!-- <div class="background">
          <img
            src="https://img1.goodfon.com/wallpaper/nbig/9/82/android-material-fon-linii-411.jpg"
            class="responsive-img"
          />
        </div> -->
        <i class="material-icons" >school</i>
        <a><span class="white-text name">KDU STUDENT SPACE</span></a>
        <a @click="$router.push('/lecturer/profile')"
          ><span class="white-text email">{{ email }}</span></a
        >
      </div>
    </li>
    <div class="menu">
    <li>
      <router-link to="/lecturer/home" active-class="active">
        <i class="material-icons">home</i><span>Home</span> 
      </router-link>
    </li>
    <li>
      <router-link to="/lecturer/courses" active-class="active">
        <i class="material-icons">book</i><span>Courses</span> 
      </router-link>
    </li>
    <li>
      <router-link to="/lecturer/students" active-class="active">
        <i class="material-icons">book</i><span>Students</span> 
      </router-link>
    </li>
    <li>
      <router-link to="/lecturer/grades" active-class="active">
        <i class="material-icons">grade</i><span>Grades</span> 
      </router-link>
    </li>
    <li>
      <router-link to="/lecturer/attendence" active-class="active">
        <i class="material-icons">event</i><span>Attendance</span> 
      </router-link>
    </li>
    <li>
      <router-link to="/lecturer/messages" active-class="active">
        <i class="material-icons">message</i><span>Messages</span> 
      </router-link>
    </li>
    </div>
  </ul>
</template>

<script>
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

export default {
  name: "LecturerNav",
  data() {
    return {
      photoURL: "",
      email: "",
    };
  },
  created() {
    this.email = user.email;
    this.photoURL = user.photoURL;
  },
};
</script>

<style scoped>
#slide-out {
  margin: 1em;
  border-radius: 1em;
  max-height: 95vh;
  background-color: #2e959c;
  /* box-shadow: 0 4px 8px 0 hsla(238, 55%, 58%, 0.205),
    0 6px 20px 0 hsla(238, 55%, 58%, 0.685); */
    box-shadow: none;
    box-shadow: -10px 10px 10px 0px rgb(160, 206, 202);
}
.sidenav-fixed {
  max-width: 33vh;
}
.active {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
   background: rgb(234, 246, 247);
  font-weight: bold;
  margin-left: 1em;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}
#slide-out li a {
  color: white;
}
#slide-out li a i {
  color: white;
}
.active span{
  color: rgb(70, 70, 70);
  transition-duration: 0.3s;
}
.active i{
  color: rgb(70, 70, 70) !important;
  transition-duration: 0.3s;
}
a {
  cursor: pointer;
}
li {
  color: white !important;
  size: "48";
}
ul{
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}
.menu{
  padding-top: 20%;
}
</style>