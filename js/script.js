var app = new Vue({
    el: '#app',
    data: {
        navigation: {
            home: {
                name: "Home",
            },
            pages: {
                name: "Pages",
            },
            courses: {
                name: "Courses",
            },
            features: {
                name: "Features",
            },
            blog: {
                name: "Blog",
            },
            shop: {
                name: "Shop",
            }
        },
        stats: {
            sessions: {
                name: "Finished Sessions",
                stat: "1.926",
            },
            satisfaction: {
                name: "Satisfaction Rate",
                stat: "100%",
            },
            learners: {
                name: "Enrolled Learners",
                stat: "3092+",
            },
            instructors: {
                name: "Online Instructors",
                stat: "200",
            }
        }
    }
  })