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
        },

        courses: {
            first: {
                name: "How to be Successful: Create A Growth Mindset For Success",
                image: "img/motivation-course-06-480x298.jpg",
                price: "$30.00",
                lessons: "3 Lessons",
                students: "50",
            },
            second: {
                name: "How to Build Confidence in Your Abilities",
                image: "img/motivation-course-05-480x298.jpg",
                price: "$30.00",
                lessons: "1 Lesson",
                students: "50",
            },
            third: {
                name: "Productivity Machine – Focus in a Distracted World",
                image: "img/motivation-course-04-480x298.jpg",
                price: "$20.00",
                lessons: "5 Lessons",
                students: "50",
            },
            fourth: {
                name: "Effective Time Management Mastery – Complete Guide",
                image: "img/motivation-course-03-480x298.jpg",
                price: "$20.00",
                lessons: "5 Lessons",
                students: "50",
            },
            fourth: {
                name: "Effective Time Management Mastery – Complete Guide",
                image: "img/motivation-course-03-480x298.jpg",
                price: "$20.00",
                lessons: "5 Lessons",
                students: "50",
            },
            fifth: {
                name: "Body Language Secrets for Entrepreneurs",
                image: "img/motivation-course-02-480x298.jpg",
                price: "$25.99",
                lessons: "19 Lessons",
                students: "50",
            },
            sixth: {
                name: "Management Skills: The Science of Leadership",
                image: "img/motivation-course-01-480x298.jpg",
                price: "$19.99",
                lessons: "17 Lessons",
                students: "50",
            },
        },
         
        books: {
            book1: {
                title: "Alpha Man",
                author: "Maxcoach",
                price: "$29.00",
                cover: "img/product-book-11-400x400.jpg"
            },
            book2: {
                title: "Real Man 4.0",
                author: "Maxcoach",
                price: "$39.00",
                cover: "img/product-book-10-400x400.jpg"
            },
        },
        sponsors: {
            stylus: {
                logo: "img/client-logo-01-primary.png",
            },
            tree: {
                logo: "img/client-logo-02-primary.png",
            },
            brook: {
               logo: "img/client-logo-03-primary.png",
            },
            pencil: {
                logo: "img/client-logo-04-primary.png",

            },
            itsalive: {
                logo: "img/client-logo-05-primary.png",
            },
            sixbase: {
                logo: "img/client-logo-06-primary.png",
            },
            nowhere: {
                logo: "img/client-logo-07-primary.png",
            }, 
        }
    }
  })