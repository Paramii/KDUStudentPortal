import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
    {
        path: '/',
        name: 'SignInRoute',
        component: () =>
            import('../views/SignIn.vue'),
    },
    {
        path: '/register',
        component: () =>
            import('../views/SQLRegister.vue'),
    },
    {
        // path: "*",
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () =>
            import('../views/Error.vue'),
    },
    {
        path: '/admin',
        component: () =>
            import('../views/Admin.vue'),
        children: [
            {
                path: '',
                component: () =>
                    import('../views/Student.vue'),
            },
            {
                path: 'student',
                component: () =>
                    import('../views/Student.vue'),
            },
            {
                path: 'lecturer',
                component: () =>
                    import('../views/Lecturer.vue'),
            },
            {
                path: 'admin-course',
                component: () =>
                    import('../views/AdminCourse.vue'),
            },
            {
                path: 'admin-grade',
                component: () =>
                    import('../views/AdminGrade.vue'),
            },
            {
                path: 'admin-attendence',
                component: () =>
                    import('../views/AdminAttendance.vue'),
            },
            {
                path: 'admin-message',
                component: () =>
                    import('../views/AdminMessage.vue'),
            },
            {
                path: 'profile',
                component: () =>
                    import('../views/AdminProfile.vue'),
            }
        ],
        meta: {
            authRequired: true,
        },
    },
    {
        path: '/user',
        component: () =>
            import('../views/User.vue'),
        children: [
            {
                path: '',
                component: () =>
                    import('../views/Home.vue'),
            },
            {
                path: 'home',
                component: () =>
                    import('../views/Home.vue'),
            },
            {
                path: 'course',
                component: () =>
                    import('../views/Course.vue'),
            },
            {
                path: 'grade',
                component: () =>
                    import('../views/Grade.vue'),
            },
            {
                path: 'attendence',
                component: () =>
                    import('../views/Attendance.vue'),
            },
            {
                path: 'message',
                component: () =>
                    import('../views/Message.vue'),
            },
            {
                path: 'profile',
                component: () =>
                    import('../views/Profile.vue'),
            }
        ],
        meta: {
            authRequired: true,
        },
    },
    {
        path: '/lecturer',
        component: () =>
            import('../views/LecturerView.vue'),
        children: [
            {
                path: '',
                component: () =>
                    import('../views/LecturerHome.vue'),
            },
            {
                path: 'home',
                component: () =>
                    import('../views/LecturerHome.vue'),
            },
            {
                path: 'courses',
                component: () =>
                    import('../views/LecturerCourses.vue'),
            },
            {
                path: 'students',
                component: () =>
                    import('../views/LecturerStudents.vue'),
            },
            {
                path: 'grades',
                component: () =>
                    import('../views/LecturerGrades.vue'),
            },
            {
                path: 'attendence',
                component: () =>
                    import('../views/LecturerAttendance.vue'),
            },
            {
                path: 'messages',
                component: () =>
                    import('../views/LecturerMessages.vue'),
            },
            {
                path: 'profile',
                component: () =>
                    import('../views/LecturerProfile.vue'),
            }
        ],
        meta: {
            authRequired: true,
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})


//Authentication Guards
//Fix me [Remove Alert Boxes]
router.beforeEach((to, from, next) => {
    const auth = getAuth();
    if (to.matched.some(record => record.meta.authRequired)) {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                next();
            } else {
                // User is signed out
                // ...
                next({
                    path: '/',
                });
            }
        });
    } else {
        next();
    }
});

export default router