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
                    <tr
                      v-for="(course, index) in courses"
                      :key="index"
                      @click="courseClicked(course)"
                    >
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
                <h6>{{ selectedCourse.course_name }}</h6>
                <br />
                <div v-if="Object.keys(selectedCourse).length === 0">
                  <apexchart
                    ref="attendanceAllChart"
                    :options="attendanceAllChartOptions"
                    :series="attendanceAllSeries"
                    type="bar"
                    height="310"
                  />
                </div>
                <div v-if="Object.keys(selectedCourse).length > 0">
                  <apexchart
                    v-if="attendanceSeriesByCourse !== [0, 0]"
                    ref="attendanceChart"
                    :options="AttendanceByCourseOptions"
                    :series="attendanceSeriesByCourse"
                    type="donut"
                    height="250"
                  />
                </div>
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
      selectedCourse: {},
      attendance: null,
      attendanceAll: [],

      AttendanceByCourseOptions: {
        chart: {
          type: "donut",
          fontFamily:
            '"Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        },
        labels: ["Attended", "Absent"],
        dataLabels: {
          enabled: false,
        },
        colors: ["#00ab71", "#dc3e3d"],
        legend: {
          position: "right",
          formatter(seriesName, opts) {
            return [opts.w.globals.series[opts.seriesIndex], " " + seriesName];
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      attendanceSeriesByCourse: [0, 0],

      attendanceAllChartOptions: {
        chart: {
          type: "bar",
          id: `all_attendance`,
          height: 310,
          stacked: true,
          stackType: "normal",
          fontFamily:
            '"Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        },
        colors: [
          "#bae1ea",
          "#8fd1e0",
          "#3eb0ca",
          "#248EA6",
          "#11697d",
          "#044958",
        ],
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: 0,
                offsetY: 0,
              },
            },
          },
        ],
        xaxis: {
          categories: [],
        },
        fill: {
          opacity: 1,
        },
        grid: {
          show: false,
        },
        legend: {
          position: "bottom",
          offsetX: 0,
          offsetY: 0,
        },
      },
      attendanceAllSeries: [
        {
          data: [],
        },
      ],
    };
  },
  created() {
    this.getStudentById(user.uid);
    this.getAttendanceAll();
  },
  watch: {
    student() {
      this.getCoursesByStudentId();
    },
    selectedCourse() {
      this.getAttendanceByCourse();
    },
    attendance() {
      if (this.attendance) {
        this.$refs.attendanceChart.updateOptions({
          series: [
            this.attendance.attended_days,
            this.attendance.total_days - this.attendance.attended_days,
          ],
        });
      } else {
        this.$refs.attendanceChart.updateOptions({
          series: [0, 0],
        });
      }
    },
    attendanceAll() {
      this.attendanceAllSeries = [];
      const counts = [];
      const courses = [];
      this.attendanceAllChartOptions.xaxis.categories = [];
      this.attendanceAll.forEach((att) => {
        counts.push(att.attended_days);
        courses.push(att.course_name);
      });
      this.$refs.attendanceAllChart.updateOptions({
        series: [{ data: counts }],
      });
      this.attendanceAllSeries.push({ data: counts });
      const temp = {
        ...this.attendanceAllChartOptions,
        xaxis: { categories: courses },
      };
      this.attendanceAllChartOptions = temp;
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
    courseClicked(course) {
      this.selectedCourse = course;
    },
    async getAttendanceByCourse() {
      await axios
        .get(
          `http://localhost:3000/attendance/${user.uid}/${this.selectedCourse.course_code}`
        )
        .then((response) => {
          // JSON responses are automatically parsed.
          this.attendance = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },

    async getAttendanceAll() {
      await axios
        .get(`http://localhost:3000/attendance/${user.uid}`)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.attendanceAll = response.data;
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
