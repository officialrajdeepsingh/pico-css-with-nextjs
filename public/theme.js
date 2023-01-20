var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

console.log("click me outer side ");

if (document.documentElement.getAttribute("data-theme") === "dark") {

    themeToggleDarkIcon.classList.remove('hidden');

}else{
    themeToggleLightIcon.classList.remove('hidden');
}


var themeToggleBtn = document.getElementById('theme-toggle');



themeToggleBtn.addEventListener('click', function() {

   // toggle icons inside button
   
   themeToggleDarkIcon.classList.toggle('hidden');
   themeToggleLightIcon.classList.toggle('hidden');


    console.log('click me');

    if (document.documentElement.getAttribute("data-theme") === "dark") {
        document.documentElement.setAttribute('data-theme','dark');
    }else{
        document.documentElement.setAttribute('data-theme','light')
    }
});