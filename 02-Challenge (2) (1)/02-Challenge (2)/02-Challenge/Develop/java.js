var container = document.querySelector(".container");
var article = document.createElement("article");
var input = document.createElement("input");
var savebtn=document.createElement("button");
var section = document.createElement("section");

// var timeslot = document.querySelector("#timeslot");
var currenttime = document.querySelector("#currentDay");



currenttime.innerHTML = moment();
// var earlyam = moment("9:00am","hh");
// console.log(earlyam)
// timeslot.innerHTML = earlyam;

// // This code is working, in terms of logic for color of background based on time
// if ( moment() > moment ('9:00am',"h:mma")){
//     coloredrow.style.backgroundColor = "lightgrey"
// }   else {
//         console.log("nos")
//     }

// var container=document.querySelector(".container");


// console.log(container);


for( i=8; i<18; i++){
    var sectioncreate = document.createElement("section");
    var articlecreate = document.createElement("article")
    var inputcreate = document.createElement("input");
    var buttoncreate = document.createElement("button");
    
    inputcreate.className ="calendarrow"+[i];
    articlecreate.className ="inputrow"+[i];
    buttoncreate.className ="button"+[i];
    inputcreate.setAttribute("id","coloredrow");
    articlecreate.setAttribute("id","timeslot");
    buttoncreate.setAttribute("id","iconsave");
    container.appendChild(sectioncreate);
    sectioncreate.appendChild(articlecreate);
    sectioncreate.appendChild(inputcreate);
    sectioncreate.appendChild(buttoncreate);
    buttoncreate.innerHTML="Save";

    articlecreate.innerHTML= moment().startOf('day').add(i,"hours").format("h:mm a");

    var hourblock = i;

    var currentdate = moment().hour();
    console.log(currentdate + " vs " + hourblock);

    if(currentdate > hourblock){
        inputcreate.style.backgroundColor = "lightgrey";
    } else if (currentdate == hourblock){
        inputcreate.style.backgroundColor ="orange"
    }

    localStorage.getItem("response"+[i]);
    
};

// for (i=8; i<18; i++){
//     var butn = document.getElementsByClassName(".button"+[i]);
//     console.log(butn);
//     butn.addEventListener("click", function(){
//         alert("it worked");
//     });
// };

// for( i=8; i<32; i++){
//     var butn = document.querySelector(".button"+[i])
 
//     butn.addEventListener("click", function(){
//         var response = document.querySelector(".calendarrow"+[i]).value;
//         alert(response);
        
//         // localStorage.setItem("response" +[i], result);
//     });
// };



    var butn8 = document.querySelector(".button8");
    butn8.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow8").value;
        localStorage.setItem("response8", JSON.stringify(response))
    });

    
    
    var butn9 = document.querySelector(".button9");
    butn9.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow9").value;
        localStorage.setItem("response9", JSON.stringify(response))
    });

    
    var butn10 = document.querySelector(".button10");
    butn10.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow10").value;
        localStorage.setItem("response10", JSON.stringify(response))
    });

    
    var butn11 = document.querySelector(".button11");
    butn11.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow11").value;
        localStorage.setItem("response11", JSON.stringify(response))
    });

    
    var butn12 = document.querySelector(".button12");
    butn12.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow12").value;
        localStorage.setItem("response13", JSON.stringify(response))
    });

    
    var butn13 = document.querySelector(".button13");
    butn13.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow8").value;
        localStorage.setItem("response13", JSON.stringify(response))
    });

    
    var butn14 = document.querySelector(".button14");
    butn14.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow14").value;
        localStorage.setItem("response14", JSON.stringify(response))
    });

    var butn15 = document.querySelector(".button15");
    butn15.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow15").value;
        localStorage.setItem("response15", JSON.stringify(response))
    });

    var butn16 = document.querySelector(".button16");
    butn16.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow16").value;
        localStorage.setItem("response16", JSON.stringify(response))
    });

    var butn17 = document.querySelector(".button17");
    butn17.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow17").value;
        localStorage.setItem("response17", JSON.stringify(response))
    });


// var moment = moment();
// var moment2 = 

// // if( moment()> articlecreate.innerHTML){
// //     inputcreate.style.backgroundColor = "lightgrey";
// // };

// console.log(moment());


// console.log(moment())
// console.log(articlecreate.innerHTML)

// const myDate = "2022-04-14 07:07:15";
// const newDate = moment(myDate).add(5, 'hours').format('YYYY-MM-DD hh:mm:ss');
// console.log(newDate)

// var date = moment().format("YYYY-MM-DD 9:00:00.000");
// console.log(date);

// var test3 = moment().hour("9");
// console.log(test3)

// const datePeriod = (dateFrom) => {
  
//     var dates = [];
//     for (var i = 0; i < 30; i++) {
//       const date = moment(dateFrom);
//       dates.push({ date: date.add(i, "hours").format("hh:mm") });
//     }
//     console.log(dates);
//   };
  
//    datePeriod("2020-05-13");