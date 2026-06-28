function writeTxt(element,speed,repet=false)
{
    if(!element) return;
    var txt=element,a=0, string="",txtString=txt.innerHTML;
    function write()
    {
        string +=txtString[a];
        txt.innerHTML=string+" <span class='cursor'>|</span>";
        a++;
        if(txtString.length !== a)
            setTimeout(write,speed);
        else
        {
            txt.innerHTML=string;
            a=0;string="";
        }
    }
    document.addEventListener("DOMContentLoaded",write);
    if(repet)
    {
       setInterval(()=>{write()},10000);
       repet=false;
    }
}

writeTxt(document.querySelector('#Home h2'),50);


// Scroll to Top
let bagToTop = document.getElementById('back-to-top');
document.onscroll = () => BackTop();
function BackTop()
{
    if(!bagToTop) return;
    let bagToTopValue = document.getElementById('progress');
    let scrTop = document.documentElement.scrollTop;
    let scrollVal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(scrTop * 100 / scrollVal);
    if (document.documentElement.scrollTop > 20) {
        bagToTop.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
        bagToTop.style.display = "flex";
    } else bagToTop.style.display = "none";
}

if(bagToTop) {
    bagToTop.addEventListener("click", () => document.documentElement.scrollTop = 0);
}


const scrollBtn = document.getElementById("scrollBtn");
const progressBar = document.getElementById("progressBar");
const circumference = 188.4;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = scrollTop / scrollHeight;

    let offset = circumference - (progress * circumference);
    progressBar.style.strokeDashoffset = offset;

    if (scrollTop > 200) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});