import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../shared/user.service';
import M from '../../../node_modules/materialize-css';

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
  var instance = M.Carousel.getInstance(elems);
});

var instance = M.Carousel.init({
  dist: 0,
  padding: 0,
  fullWidth: true,
  indicators: true,
  duration: 100,
});

// $(document).ready(function(){
//   $('#demo-carousel-auto').carousel();
//    setInterval(function() {
//      $('#demo-carousel-auto').carousel('next');
//    }, 1500);   
//  }); 

// instance.next();





@Component({
  selector: 'app-candiview',
  templateUrl: './candiview.component.html',
  styleUrls: ['./candiview.component.less']
})
export class CandiviewComponent implements OnInit {
  data: any = {};
  resumeFile: any;
  resumeLink: any;
  courses: any;

  coursess = [
    {
      title: "Data Science",
      desc:
        "In this course you will get an introduction to the main tools and ideas in the data scientist's toolbox. The course gives an overview of the data, questions, and tools that data analysts and data scientists work with. There are two components to this course. The first is a conceptual introduction to the ideas behind turning data into actionable knowledge. The second is a practical introduction to the tools that will be used in the program like version control, markdown, git, GitHub, R, and RStudio.",
      by: "Johns Hopkins University",
      photo: "./../../assets/image/team/gaurav_emoji.png",
      ref: "https://www.coursera.org/",
      rating: 5,
      apply: "https://www.coursera.org/learn/data-scientists-tools/"

    },
    {
      title: "Data Science",
      desc:
        "In this course you will get an introduction to the main tools and ideas in the data scientist's toolbox. The course gives an overview of the data, questions, and tools that data analysts and data scientists work with. There are two components to this course. The first is a conceptual introduction to the ideas behind turning data into actionable knowledge. The second is a practical introduction to the tools that will be used in the program like version control, markdown, git, GitHub, R, and RStudio.",
      by: "Johns Hopkins University",
      photo: "./../../assets/image/team/gaurav_emoji.png",
      ref: "https://www.coursera.org/",
      rating: 5,
      apply: "https://www.coursera.org/learn/data-scientists-tools/"

    },
    {
      title: "Data Science",
      desc:
        "In this course you will get an introduction to the main tools and ideas in the data scientist's toolbox. The course gives an overview of the data, questions, and tools that data analysts and data scientists work with. There are two components to this course. The first is a conceptual introduction to the ideas behind turning data into actionable knowledge. The second is a practical introduction to the tools that will be used in the program like version control, markdown, git, GitHub, R, and RStudio.",
      by: "Johns Hopkins University",
      photo: "./../../assets/image/team/gaurav_emoji.png",
      ref: "https://www.coursera.org/",
      rating: 5,
      apply: "https://www.coursera.org/learn/data-scientists-tools/"

    },
    {
      title: "Data Science",
      desc:
        "In this course you will get an introduction to the main tools and ideas in the data scientist's toolbox. The course gives an overview of the data, questions, and tools that data analysts and data scientists work with. There are two components to this course. The first is a conceptual introduction to the ideas behind turning data into actionable knowledge. The second is a practical introduction to the tools that will be used in the program like version control, markdown, git, GitHub, R, and RStudio.",
      by: "Johns Hopkins University",
      photo: "./../../assets/image/team/gaurav_emoji.png",
      ref: "https://www.coursera.org/",
      rating: 5,
      apply: "https://www.coursera.org/learn/data-scientists-tools/"

    },
    {
      title: "Data Science",
      desc:
        "In this course you will get an introduction to the main tools and ideas in the data scientist's toolbox. The course gives an overview of the data, questions, and tools that data analysts and data scientists work with. There are two components to this course. The first is a conceptual introduction to the ideas behind turning data into actionable knowledge. The second is a practical introduction to the tools that will be used in the program like version control, markdown, git, GitHub, R, and RStudio.",
      by: "Johns Hopkins University",
      photo: "./../../assets/image/team/gaurav_emoji.png",
      ref: "https://www.coursera.org/",
      rating: 5,
      apply: "https://www.coursera.org/learn/data-scientists-tools/"

    }
  ];

  constructor(
    private quizService: QuizService,
    public userService: UserService,
    public sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    this.view();
    this.getCourses();
    // this.handleFileInput();
  }

  view() {
    if (localStorage.getItem('Is_Candidate') === 'true') {
    this.quizService.canView().subscribe(data => {
      console.log(data);
      this.data = data;
      localStorage.setItem("cc_uname", this.data.data.Name)
      this.userService.aaya.next(true)
    });
  }
  }

  getCourses(){
    this.quizService.getRecommendedCourses().subscribe((data) => {
      this.courses = data;
    })
  }

  onClick(){
    alert("Clicked!")
    
  }

  handleFileInput() {
    // this.hide = false;
    this.quizService.canView().subscribe(data => {
      console.log(data);
      this.resumeFile = data
      // this.makeLink()
    });

    // Show image preview
    
    
  }

  makeLink(){
    const reader = new FileReader();

    reader.readAsDataURL(this.resumeFile.data.Resume);

    reader.onload = (event: any) => {
      this.resumeLink = event.target.result;
    };
  }

  resumeURL(){
    return this.sanitizer.bypassSecurityTrustUrl("https://harshraj.pythonanywhere.com{{data.data.Resume}})");
  }
 }