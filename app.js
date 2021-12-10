var responseDiv=document.body.querySelector(".response");
var pages = ["Grade View", "Add Grade"];
var list = [];


function createSaber(){
    var saber = document.createElement("saber");
    saber.classList.add("saber");
    document.body.appendChild(saber);
}

function createNav() {
    var nav = document.createElement("nav");
    createbtn(pages[0]);
    createbtn(pages[1]);
    document.body.appendChild(nav);

    function createbtn(pg) {
        var button = document.createElement("btn");
        button.innerHTML = pg;
        button.addEventListener("click", function () {
            navigate(pg);
        })
        nav.appendChild(button);
    }
}

function navigate(pg){
    if (pg==="Grade View"){
        viewGrade();
    }else if(pg==="Add Grade"){
        addGrade();
    }
}


function addGrade(){
    var saber = document.body.querySelector(".saber");
    saber.innerHTML = " ";
    var headerTwo = document.createElement("h1");
    headerTwo.innerHTML = "Add grades below";
    saber.appendChild(headerTwo);

    var name = document.createElement("input");
    name.classList.add("nameEntry");
    name.placeholder = "Enter the students name here";
    saber.appendChild(name);

    var grade = document.createElement("input");
    grade.classList.add("gradeEntry");
    grade.placeholder = "Enter a numerical grade value from 1-100";
    saber.appendChild(grade);

    var submit = document.createElement("btn");
    submit.classList.add("submitBtn");
    submit.innerHTML = "Add grade";
    saber.appendChild(submit);

    var text = document.createElement("div");
    text.classList.add("txt");
    saber.appendChild(text);

    var state = false;
    submit.addEventListener("click", function (){
        var studentCheck = document.body.querySelector(".nameEntry").value;
        var numRange = document.body.querySelector(".gradeEntry").value;
        if (isNaN(parseInt(numRange))){
            text.innerHTML = "Grade must be a numerical number between 1-100 and student's name must be strictly letters.";
        }else if(parseInt(numRange) < 0 || parseInt(numRange) > 100){
            text.innerHTML = "Grade must be a numerical number between 1-100 and student's name must be strictly letters.";
        }else if(isNaN(studentCheck)){
            list.push(studentCheck);
            list.push(numRange);
            addstudentChk();
            navigate("Grade View");
            state = false;
        }else{
            state = true;
            text.innerHTML = "Please enter the student's name correctly";
        }
    })
    saber.appendChild(studentCheck);
    saber.appendChild(numRange);

    function addstudentChk(){
        text.innerHTML = " ";
        for (var i =0; i < list.length; i++){
            var NOTE = document.createElement("div");
            NOTE.innerHTML = list[i];
            text.appendChild(NOTE);
        }
    }

}

function viewGrade(){
    var saber = document.body.querySelector(".saber");
    saber.innerHTML = " ";
    var headerOne = document.createElement("h1");
    headerOne.innerHTML = "View grades below";
    saber.appendChild(headerOne);

    var submit=document.createElement("btn");
    submit.classList.add("submitBtn");
    saber.appendChild(submit);
    submit.addEventListener("click", function (){
      navigate("Add Grade");
    })
    var blank=document.createElement("div");
    addstudentChk();
    function addstudentChk(){
        blank.innerHTML = " ";
        for (var i = 0; i < list.length; i++){
            var txt = document.createElement("div");
            txt.innerHTML = list[i];
            blank.appendChild(txt);
        }
    }
    saber.appendChild(blank);
}

document.body.querySelector(".btn").addEventListener("click", function (){
    {
        var textValue = document.body.querySelector(".input").value;
        var textValuePass = document.body.querySelector(".inputPass").value;
        if (textValue==="cool"&&textValuePass==="password"){
            responseDiv.innerHTML = " ";
            createNav();
            createSaber();
            navigate("Grade View");
        }else{
            responseDiv.innerHTML="Wrong Username or Password"}
    }
})

