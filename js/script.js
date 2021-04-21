var app = new Vue({
    el: '#app',
    data: {

        counter: 0,

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
        },

        blog: {
            post4: {
                title: "How to Stay True to Your Personal Brand",
                preview: "When it comes to your business or career, you want …",
                date: "May 13, 2020",
                cover: "img/motivation-blog-04-480x325.jpg",
            },
            post3: {
                title: "5 Vital Lessons in 5 Years of Freelancing",
                preview: "Being self-employed and working from home, it’s easy to get …",
                date: "May 13, 2020",
                cover: "img/motivation-blog-03-480x325.jpg",
            },
            post2: {
                title: "11 Super Useful Tips for Small-Business Owners",
                preview: "Being a small-business owner poses a ton of challenges. We …",
                date: "May 13, 2020",
                cover: "img/motivation-blog-02-480x325.jpg",
            },
            post1: {
                title: "How to Give Yourself Grace to Start Again",
                preview: "Forgive yourself for bad habits you may have started or …",
                date: "May 13, 2020",
                cover: "img/motivation-blog-01-480x325.jpg",
            },
        },

        explore: {
            StartHere: {
                name: "Start Here"
            },
            Blog: {
                name: "Blog"
            }, 
            AboutUs:{ 
                name: "About Us"
            }, 
            SuccessStory:{ 
                name: "Success Story"
            }, 
            Courses:{ 
                name: "Courses"
            }, 
            ContactUs:{ 
                name: "Contact Us"
            },
        },

        information: {
            Memebrship: {
                name: "Memebrship"
            },
            Purchase: {
                name: "Purchase Guide"
            }, 
            Privacy:{ 
                name: "Privacy Policy"
            }, 
            Terms:{ 
                name: "Terms Of Service"
            },
        },

        testimonials: {
            mina: {
                name: "Mina Hollace",
                job:"Freelancer",
                quote: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
                proPic:"img/testimonial-avata-02.jpg",
            },
            madley: {
                name: "Madley Pondor",
                job: "IT Specialist",
                quote: "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
                proPic: "img/testimonial-avata-04.jpg",
            },
            luvic: {
                name: "Luvic Dubble",
                job: "Private Tutor",
                quote: "I am happy with their arrangement of lessons and subjects. They reflect a scientific  investigation into effective methods to adopt for learners.",
                proPic: "img/testimonial-avata-01.jpg",
            },
            florence: {
                name: "Florence Themes",
                job: "Multimedia Admin",
                quote: "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
                proPic: "img/testimonial-avata-03.jpg",
            }
        }
    },
    methods: {
        arrowDown: 
            function() {
                if (this.counter == 3) {
                    this.counter = 0;
                } else {
                
                    this.counter = this.counter + 1;

                }
               console.log(this.counter);
            },
            
        arrowUp: 
            function() {
                if (this.counter == 0) {
                    this.counter = 3;
                } else {
                
                    this.counter = this.counter - 1;

                }
               console.log(this.counter);
            }
    },
  });