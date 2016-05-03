var bio = {
    "name" : "Luis Escobar",
    "role" : "Graphic Designer / Animator / Frontend Developer",
    "bioText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices bibendum pharetra.",
    "contactInfo" : {
        "linkedin": "pa.linkedin.com/in/lesco",
        "github": "leimagen",        
        "twitter": "@luiti",
        "skype": "luis.latam",
        "email": "luis.escobar.dev@gmail.com",
    }
};

/*var work = {
    "jobs": [
        {
            "employer": "Latinpago",
            "title": "Graphic Designer",
            "location": "Panama, Panama",
            "dates": "Actual",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices bibendum pharetra. Fusce lobortis laoreet ante et tristique. Praesent tortor dui, tristique at leo sed, aliquet facilisis mi. "
        },
        {
            "employer": "Revi",
            "title": "Web Designer",
            "location": "Panama, Panama",
            "dates": "2016",
            "description": "Proin lacus tortor, blandit volutpat risus nec, congue elementum sem. Donec tempor metus ac lorem aliquet vehicula."
        },
        {
            "employer": "Nex",
            "title": "Graphic Designer",
            "location": "Panama, Panama",
            "dates": "2015",
            "description": "Phasellus arcu dolor, aliquam in tellus eu, dictum malesuada neque. Aliquam aliquam tempus ultricies."
        },
        {
            "employer": "ModOp",
            "title": "Actionscript Developer",
            "location": "Panama, Panama",
            "dates": "2012 - 2015",
            "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus ornare lorem massa, sit amet fringilla est faucibus ut. Duis ac sem sit amet neque accumsan scelerisque."
        },
        {
            "employer": "AG Video",
            "title": "Graphic Designer / Animator",
            "location": "Panama, Panama",
            "dates": "2009 - 2012",
            "description": "Proin risus leo, sollicitudin nec congue vel, vestibulum vestibulum ante. Ut ligula felis, condimentum quis nibh vitae, consectetur tristique dui. Nulla quis mauris vel lorem ullamcorper porta a in neque. In vel pulvinar enim, at dictum quam. Mauris fringilla, sapien sed elementum sagittis, metus ligula congue arcu, at gravida sem eros a metus."
        }
    ],
    "display": function(){
        for(job in work.jobs){
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);
            //$(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}*/

/*var education = {
    "schools": [
        {
            "name": "Capeira",
            "location": "Guayaquil, Ecuador",
            "degree": "BA",
            "major": ["CompSci", "English"],
            "dates": "2000 - 2003",
            "url": "https://www.facebook.com/pages/Colegio-Particular-Mixto-Heidi-School-Capeira/367751236619550"
        },
        {
            "name": "La Salle",
            "location": "Valencia, Venezuela",
            "degree": "BA",
            "major": ["CompSci"],
            "dates": "2003 - 2008",
            "url": "http://www.colegiolasalleguaparo.com.ve/home/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "April 2016",
            "url": "https://classroom.udacity.com/courses/ud804"
        },
        {
            "title": "The Essencial Git Course",
            "school": "Udemy",
            "dates": "2016",
            "url": "https://www.udemy.com/essential-git/learn/v4/"
        },
        {
            "title": "Professional Python Web Development Using Flask",
            "school": "Udemy",
            "dates": "2016",
            "url": "https://www.udemy.com/python-flask-course/learn/v4/overview"
        },
        {
            "title": "Fun and creative web engineering with Python ",
            "school": "Udemy",
            "dates": "2016",
            "url": "https://www.udemy.com/web-engineering-with-python-and-web2py/learn/v4/overview"
        },
        {
            "title": "Python programming quick look",
            "school": "Udemy",
            "dates": "2016",
            "url": "https://www.udemy.com/python-programming-quick-look/learn/v4/overview"
        },
        {
            "title": "Rock Paper Scissors - Python Tutorial",
            "school": "Udemy",
            "dates": "2016",
            "url": "https://www.udemy.com/rock-paper-scissors-python/learn/v4/overview"
        },
        {
            "title": "Learn Javascript & JQuery From Scratch",
            "school": "Udemy",
            "dates": "2016",
            "url": "https://www.udemy.com/learn-javascript-jquery-from-scratch/learn/v4/overview"
        },
        {
            "title": "AngularJS For Beginners",
            "school": "Udemy",
            "dates": "2016",
            "url": "https://www.udemy.com/angularjs-for-beginners-udemy/learn/v4/overview"
        }
    ],
    "display": function(){
        for(school in education.schools){
            $("#education").append(HTMLschoolStart);
            
            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    
            $(".education-entry:last").append(formattedName);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").append(formattedMajor);
            $(".education-entry:last").append(formattedDates);
        }
        
        for(course in education.onlineCourses){
            $("#education").append(HTMLschoolStart);
            
            var formattedTitle = HTMLschoolName.replace("%data%", education.onlineCourses[course].title);
            var formattedSchool = HTMLschoolLocation.replace("%data%", education.onlineCourses[course].school);
            var formattedDates = HTMLschoolDates.replace("%data%", education.onlineCourses[course].dates);
            var formattedURL = HTMLschoolMajor.replace("%data%", education.onlineCourses[course].url);
            
            $(".education-entry:last").append(formattedTitle);
            $(".education-entry:last").append(formattedSchool);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedURL);
        }
    }
}*/

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBio = HTMLheaderBio.replace("%data%", bio.bioText);

var formattedLinkedin = HTMLlinkedin.replace("%data%", "  " + bio.contactInfo.linkedin);
var formattedGithub = HTMLgithub.replace("%data%", "  " + bio.contactInfo.github);
var formattedTwitter = HTMLtwitter.replace("%data%", "  " + bio.contactInfo.twitter);
var formattedSkype = HTMLskype.replace("%data%", "  " + bio.contactInfo.skype);
var formattedEmail = HTMLemail.replace("%data%", "  " + bio.contactInfo.email);

$("#name").append(formattedName);
$("#role").append(formattedRole);
$("#bio").append(formattedBio);

$("#contact").append(formattedLinkedin);
$("#contact").append(formattedGithub);
$("#contact").append(formattedTwitter);
$("#contact").append(formattedSkype);
$("#contact").append(formattedEmail);