<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
  <header>
    <nav class="transparent z-depth-0">
      <div class="nav-wrapper">
        <a data-target="slide-out" class="sidenav-trigger">
          <i class="material-icons black-text">menu</i>
        </a>
        <a class="brand-logo black-text">
          <span>{{ getPath(this.$route.path) }}</span>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a class="waves-effect waves-light btn" @click="signOut">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "Header",
  props: {
    title: String,
  },
  mounted() {
    $(".sidenav").sidenav();
    $(".dropdown-trigger").dropdown();
  },
  methods: {
    getPath(path) {
      switch (path) {
        case "/user/home":
          return "Home";
        case "/user/course":
          return "Courses";
        case "/user/grade":
          return "Grades";
        case "/user/attendence":
          return "Attendence";
        case "/user/message":
          return "Message";
        case "/user/profile":
          return "Profile";
        case "/lecturer":
          return "Home";
          case "/lecturer/home":
          return "Home";
        case "/lecturer/courses":
          return "Courses";
        case "/lecturer/students":
          return "Students";
        case "/lecturer/grades":
          return "Grades";
        case "/lecturer/attendence":
          return "Attendance";
        case "/lecturer/messages":
          return "Messages";
        case "/lecturer/profile":
          return "Profile";
          case "/admin/student":
          return "Students";
          case "/admin/lecturer":
          return "Lecturers";
          case "/admin/admin-course":
          return "Courses";
        case "/admin/admin-grade":
          return "Grades";
          case "/admin/admin-attendence":
          return "Attendance";
          case "/admin/admin-message":
          return "Messages";
          case "/admin/profile":
          return "Admin";
      }
    },
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
.brand-logo {
  margin-left: 1em;
}

/*Rules for sizing the icon*/
.material-icons.md-48 {
  font-size: 480px;
}

.brand-logo img {
  max-height: 54px;
}

@media only screen and (max-width: 992px) {
  .brand-logo {
    margin-left: 0 !important;
  }
}

.btn {
  border-radius: 20px;
  background-color: #2e959c
}
span {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding: 5%;
}
header {
  padding: 1%;
}
</style>
