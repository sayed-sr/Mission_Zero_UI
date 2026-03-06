function showPage(page){

const home = document.getElementById("homePage");
const dashboard = document.getElementById("dashboardPage");

home.style.display="none";
dashboard.style.display="none";

if(page==="home"){
home.style.display="block";
}

if(page==="dashboard"){
dashboard.style.display="block";
}

}



// ============================================LINE CHART============================================

const lineCtx = document.getElementById("lineChart");

new Chart(lineCtx,{

type:"line",

data:{

labels:["Jan","Feb","Mar","Apr","May","Jun"],

datasets:[{

label:"Form Responses",

data:[50,120,180,250,300,400],

borderColor:"#6366f1",
fill:false

}]

}

});



// ==========================================================PIE CHART==========================================================

const pieCtx = document.getElementById("pieChart");

new Chart(pieCtx,{

type:"doughnut",

data:{

labels:[
"CSV Files",
"Audio Files",
"Image Files",
"JSON Files"
],

datasets:[{

data:[
120,
80,
45,
30
],

backgroundColor:[
"#6366f1",
"#22c55e",
"#f59e0b",
"#ef4444"
]

}]

}

});


// =======================================================For Logout=======================================================
function logout(){

// Remove login state
localStorage.removeItem("loggedIn");

// Redirect back to login page
window.location.href = "login.html";

}