<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m12">
        <div class="card">
          <div class="card-content">
            <div class="row">
              <div class="col s12 m4 course-list">
                <table class="responsive-table highlight">
                  <tbody>
                    <tr v-for="(course, index) in courses" :key="index">
                      <th>
                        {{ course.course_name }}
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col s1 m1">
                <div class="divider-vertical"></div>
              </div>
              <div class="col s12 m8 content">
                <h6>DSA 2</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;
export default {
  data() {
    return {
      student: {},
      courses: [],
    };
  },
  created() {
    this.getStudentById(user.uid);
  },
  watch: {
    student() {
      this.getCoursesByStudentId(user.uid);
    },
  },
  methods: {
    async getStudentById(Reg_num) {
      await axios
        .get(`http://localhost:3000/students/${Reg_num}`)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.student = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    async getCoursesByStudentId() {
      await axios
        .get(
          `http://localhost:3000/courses/${user.uid}/${this.student.currentYear}/${this.student.currentSemester}`
        )
        .then((response) => {
          // JSON responses are automatically parsed.
          this.courses = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>
<style scoped>
.card {
  border-radius: 1em;
  height: 42em;
}
.container {
  margin-left: -1%;
}
.card-content {
  padding: 5%;
}
.course-list {
  overflow-y: auto;
}
.divider-vertical {
  border-left: 1px solid rgb(196, 196, 196);
  height: 80%;
  position: absolute;
}
.content {
  padding-left: 5%;
  padding-right: 5%;
}
</style>
