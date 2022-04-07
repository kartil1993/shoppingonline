let mylandingpic = document.querySelector(".landing");
let backgroundchange = true;
let backinterval;

let arrypic = ["1.webp", "2.webp", "3.webp"];

function randompic() {
  if (backgroundchange === true) {
    backinterval = setInterval(function () {
      let myrandom = Math.floor(Math.random() * arrypic.length);
      mylandingpic.style.backgroundImage = `url("img/${arrypic[myrandom]}")`;
    }, 4000);
  } else {
    clearInterval;
  }
}
randompic();
//setting box

let settingbox = document.querySelector(".toggle-setting");
settingbox.onclick = function () {
  document.querySelector(".settingbox").classList.toggle("opened");
  settingbox.classList.toggle("fa-spin");
};

//seeting color

let clorli = document.querySelectorAll(".color-box li");

clorli.forEach(function (li) {
  li.addEventListener("click", function (e) {
    console.log(e.target.dataset.color);
    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );
    e.target.parentElement.querySelectorAll(".active").forEach(function (el) {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

let changebackEl = document.querySelectorAll(".randomchoice span");

changebackEl.forEach(function (li) {
  li.addEventListener("click", function (e) {
    e.target.parentElement.querySelectorAll(".active").forEach(function (el) {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.dataset.background === "yes") {
      backgroundchange = true;
      randompic();
    } else {
      backgroundchange = false;
      clearInterval(backinterval);
    }
  });
});

// spicality

let myspicality = document.querySelector(".spicality");

window.onscroll = function () {
  let myspicalityoffset = myspicality.offsetTop;
  let myspicalityhight = myspicality.offsetHeight;
  let windowheight = this.innerHeight;
  let windowscrolltop = this.pageYOffset;
  if (
    windowscrolltop + 1 >
    myspicalityoffset + myspicalityhight - windowheight
  ) {
    let myspi = document.querySelectorAll(".spichality-progress span");
    myspi.forEach(function (skill) {
      skill.style.width = skill.dataset.progress;
    });
  }
};

let progallery = document.querySelectorAll(".imgsbox img");

progallery.forEach(function (e) {
  e.addEventListener("click", function (el) {
    let overlays = document.createElement("div");
    overlays.className = "popupgallery";
    document.body.appendChild(overlays);
    let popupboxs = document.createElement("div");
    popupboxs.className = "popupboxcss";
    let popim = document.createElement("img");

    popim.src = e.src;

    popupboxs.appendChild(popim);
    document.body.appendChild(popupboxs);

    let closebutton = document.createElement("span");
    closebutton.className = "close-button";
    let closetext = document.createTextNode("X");
    closebutton.appendChild(closetext);
    popupboxs.appendChild(closebutton);
  });
});

document.addEventListener("click", function (e) {
  if (e.target.className === "close-button") {
    e.target.parentNode.remove();
    document.querySelector(".popupgallery").remove();
  }
});

let navbulit = document.querySelectorAll(".nav-bullet .bullet");

navbulit.forEach(function (bulit) {
  bulit.addEventListener("click", function (el) {
    document.querySelector(el.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let alllinks = document.querySelectorAll(".landing a");

alllinks.forEach(function (link) {
  link.addEventListener("click", function (el) {
    el.preventDefault();
    document.querySelector(el.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//handele active
function handleactive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach(function (el) {
    el.classList.remove("active");
  });
  ev.target.classList.add("active");
}

let bulitshow = document.querySelectorAll(".bullit-option span");

let bulitnav = document.querySelector(".nav-bullet");

bulitshow.forEach(function (el) {
  el.addEventListener("click", function (e) {
    if (e.target.dataset.display === "yes") {
      bulitnav.style.display = "block";
    } else {
      bulitnav.style.display = "none";
    }
    handleactive(e);
  });
});

let togglebtn = document.querySelector(".toggle-menu");

let togglelink = document.querySelector(".headerul");

togglebtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  togglelink.classList.toggle("opens");
};

document.addEventListener("click", function (e) {
  if (e.target !== togglebtn && e.target !== togglelink) {
    if(togglelink.classList.contains("opens")) {
      togglebtn.classList.toggle("menu-active");
      togglelink.classList.toggle("opens");
    }
  }
});

togglelink.onclick = function (e) {
  e.stopPropagation();
};
