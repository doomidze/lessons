document.querySelector("#button").onclick = function () {

    let o = document.querySelectorAll("#input-select option");
    console.log(o);

    for(let i=0; i<o.length; i++) {
        console.log(o[i].value);
        console.log(o[i].selected);
        console.log(o[i].innerHTML);
    }

    let blocks = document.querySelectorAll(".block");
    let blocks2 = document.getElementsByClassName("block"); //not the same
    blocks.forEach(function (element) {
        console.log(element);
    });

    for (let i=0; i < blocks.length; i++) {
        blocks[i].onclick = one;
    }

    function one() {
        //console.log(this.innerHTML);
        this.style.background = "green";
    }

};

//tabs
function init() {
    let tabBody = document.querySelectorAll(".tab-body");
    for (let i =1; i<tabBody.length; i++) {
        tabBody[i].style.cssText = "display: none";
    }
}
init();

let tab = document.querySelectorAll(".tab");
tab.forEach( function (e) {
    e.style.cssText = "font-weight: 700; list-style: none; display: inline-block; padding: 0 10px; cursor: pointer";
    e.onclick = showTabs;
});

function showTabs() {
    let data = this.getAttribute("data");
    //console.log(data);
    let tabBody = document.querySelectorAll(".tab-body");
    for (let i =0; i<tabBody.length; i++) {
        tabBody[i].style.cssText = "display: none";
    }
    document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
}

let btn = document.querySelector("#button");
console.log(btn.dataset.huy);



//CSS Rules
document.querySelector(".tabs ul").style.cssText = "margin-left: 0; padding-left: 0";
//or
const $demo = document.querySelector('.tabs');
Object.assign(demo.style, {
    display: 'inline-block',
    padding: '0.2em 0.4em',
    border: '1px solid',
    borderRadius: '0.4em',
    color: '#3d3d3d',
    background: '#eee',
    marginLeft: '15px',
});

let activeTab = document.querySelector(".tab.active");
Object.assign(activeTab.style, {
    color: '#872f2f',
});