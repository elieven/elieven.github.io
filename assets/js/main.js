function cl(t) {
  if (typeof t == "object") {
    for (i = 0; i < t.length; i++) {
      console.log(t[i]);
    }
  } else {
    console.log(t);
  }
}

//initiate as false
var isMobile = false;

// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  isMobile = true;
}

var ScrollTopBtnOptions = {
  scrollTopBtnElement: document.querySelector('#back-to-top-btn'),
  showThreshold: 2000
}

var OverlayScrollbarsOptions = {
  callbacks: {
    onInitialized: function () {
      // adds class to body that removes scroll disabling
      document.querySelector("html").className += " scrolling-ready";
    },
    onScroll: function () {
      if (ScrollTopBtnOptions.scrollTopBtnElement != null) {
        // Showhs the back to top button if scrolled over a threshold
        if (this.scroll().position.y > ScrollTopBtnOptions.showThreshold) {
          ScrollTopBtnOptions.scrollTopBtnElement.classList.add("lift");
        } else {
          ScrollTopBtnOptions.scrollTopBtnElement.classList.remove("lift");
        }
      }
    }
  },
  scrollbars: {
    autoHide: "scroll",
    autoHideDelay: 800
  },
  className: isMobile ? "os-theme-minimal-dark" : "os-theme-dark"
}

// init overlay scrollbars
document.addEventListener("DOMContentLoaded", function () {
  // Ce je sheran link al neki te da na naslov v urlju
  alignPageToAnchor();
  // on mobile i' prefer native scrollbars
  if (!isMobile) {

    cl("Detected desktop device");
    // OverlayScrollbars scrollbar instance
    var desktopScrollbar = OverlayScrollbars(document.querySelector("body"), OverlayScrollbarsOptions);
    // Scroll back to top button functionality
    desktopScrollBackToTopBtnHandler(desktopScrollbar);
    // Popstate handler
    window.onpopstate = function(){desktopPopStateHandler(desktopScrollbar)};

  } else {

    cl("Detected desktop device");
    // Enable scrolling - disable overflow hidden
    document.querySelector("html").className += " scrolling-ready";
    // ScrollTop button show event listener
    mobileScrollBackToTopBtnShowHandler(ScrollTopBtnOptions.scrollTopBtnElement, ScrollTopBtnOptions.showThreshold);
    // ScrollTop button functionality for mobile
    mobileScrollBackToTopBtnHandler(ScrollTopBtnOptions.scrollTopBtnElement);
    // Popstate handler
    window.onpopstate = mobilePopStateHandler;
  }

  tableOfContentInit();

  document.querySelector("html").className += " scrolling-ready";

});

function tableOfContentInit() {
  var toc_toggle = document.querySelector("#toc-toggle");

  if (toc_toggle != null) {
    toc_toggle.addEventListener("click", function () {
      document.querySelector("#table-of-content").classList.toggle("collapsed");
    });
  }
}

function alignPageToAnchor() {
  if (window.location.hash.indexOf("#") > -1) {
    scrollToAnchorElement(window.location.hash);
    cl("Aligned page to anchor element");
  } else {
    document.documentElement.scrollTop = 0;
  }
}

function scrollToAnchorElement(anchor) {
  document.querySelector(decodeURIComponent(anchor)).scrollIntoView();
  cl("Scrolled to anchor element");
}

function mobileScrollBackToTopBtnShowHandler() {
  if (ScrollTopBtnOptions.scrollTopBtnElement) {
    window.setInterval(function(){
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      if (top > ScrollTopBtnOptions.showThreshold) {
        ScrollTopBtnOptions.scrollTopBtnElement.classList.add("lift");
      } else {
        ScrollTopBtnOptions.scrollTopBtnElement.classList.remove("lift");
      }
    }, 16);
  }
}

function desktopScrollBackToTopBtnHandler(desktopScrollbar) {
  if (ScrollTopBtnOptions.scrollTopBtnElement != null) {
    ScrollTopBtnOptions.scrollTopBtnElement.addEventListener("click", function () {
      desktopScrollbar.scroll({ y: "0px" }, 320, "easeOutQuart");
    });
  }
}

function mobileScrollBackToTopBtnHandler(scroll_top_btn) {
  if (scroll_top_btn != null) {
    scroll_top_btn.addEventListener("click", function () {
      document.documentElement.scrollTop = 0;
    });
  }
}

function desktopPopStateHandler(desktopScrollbar) {
  if (window.location.hash.indexOf("#") > -1) {
    scrollToAnchorElement(window.location.hash);
  } else {
    desktopScrollbar.scroll({y: 0});
  }
}

function mobilePopStateHandler() {
  if (window.location.hash.indexOf("#") > -1) {
    scrollToAnchorElement(window.location.hash);
  } else {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollY = 0;
  }
}


// SW registering
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/assets/js/sw.js');
}