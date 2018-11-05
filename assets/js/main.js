function cl(t) {console.log(t)}

//initiate as false
var isMobile = false;

// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  isMobile = true;
}


// if desktop activate smooth smoothScrollbar
if (!isMobile) {
  var Scrollbar = window.Scrollbar;
  Scrollbar.use(window.OverscrollPlugin);
  Scrollbar.init(document.querySelector("#sscon"), {
    damping: 0.3
  });
}



// scroll back to top function
const scrollTopBtn = document.querySelector('#back-to-top-btn');
const scrollbar = Scrollbar.get(document.querySelector('#sscon'));
const scrollTopBtnShowThreshold = 2000;

function addScrollTopBtnFunctionality() {
  if (!isMobile && scrollTopBtn != null) {
    // desktop part
    scrollTopBtn.addEventListener("click", function () {
      scrollbar.scrollTo(0, 0, 300);
      stripToCleanURL();
    });
  } else if (scrollTopBtn != null) {
    // mobile part
    scrollTopBtn.addEventListener("click", function () {
      document.querySelector('html').scrollTo({
        top: 0,
        behavior: "instant"
      });
      stripToCleanURL();
    });
  }
}

// odstrani #id-naslova iz URLja
function stripToCleanURL() {
  if (window.location.href.indexOf('#') > 0) {
    let pageUrl = window.location.href;
    let url = pageUrl.slice(0, pageUrl.indexOf('#'));
    history.pushState({}, "zvezek", url);
  }
}

// checks if scrollTop btn should be shown and 
// shows it if and when needed
function addCheckForScrolltopBtn() {
  if (!isMobile && scrollTopBtn != null) {
    // desktop part
    window.setInterval(function () {
      if (scrollbar.offset.y > scrollTopBtnShowThreshold) {
        scrollTopBtn.className = 'lift';
      } else {
        scrollTopBtn.className = '';
      }
    }, 16);
  } else if (scrollTopBtn != null) {
    // mobile part
    window.setInterval(function(){
      if (window.pageYOffset > scrollTopBtnShowThreshold) {
        scrollTopBtn.className = 'lift';
      } else {
        scrollTopBtn.className = '';
      }
    }, 16);
  }
}

// TOC setup za desktop (mobile itak dela samo od sebe)
function addDesktopTocFunctionality() {
  // dobi vse linke
  const TOCLinks = Array.from(document.querySelectorAll('#markdown-toc a'));
  // vsem linkom da onclick function
  for (let i = 0; i < TOCLinks.length; i++) {
    TOCLinks[i].addEventListener('click', function(evt){
      const id = TOCLinks[i].id.slice(13);
      console.log(i);
      const elt = document.getElementById(id);
      scrollbar.scrollIntoView(elt, {
        onlyScrollIfNeeded: false,
        offsetTop: 16
      });
    });
  }

  const pageUrl = window.location.href;

  if ( pageUrl.indexOf('#') > 0 ) {
    let linkElementId = decodeURIComponent(pageUrl.slice(pageUrl.indexOf('#')+1));
    let linkedEl = document.getElementById(linkElementId);
    scrollbar.scrollIntoView(linkedEl, {
      onlyScrollIfNeeded: false,
      offsetTop: 16
    });
  }
}

// kao "class" za kazanje in brisanje notificationou
var Notification = {

  create: function() {
    console.log("meh");
  },

  show: function() {
    console.log("nyee");
  }

}

function getBrowser() {
  // returns string that matches browser
  if ( (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0 ) {
    return 'opera';
  } else if ( typeof InstallTrigger !== 'undefined' ) {
    return 'firefox';
  } else if ( /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)) ) {
    return 'safari';
  } else if ( /*@cc_on!@*/false || !!document.documentMode ) {
    return 'ie';
  } else if ( (/*@cc_on!@*/false || !!document.documentMode) && !!window.StyleMedia ) {
    return 'edge';
  } else if ( !!window.chrome && !!window.chrome.webstore ) {
    return 'chrome';
  } else if ( (isChrome || isOpera) && !!window.CSS ) {
    return 'blink';
  } else {
    return undefined;
  }
}

// CALL STACK & PAGE SETUP
if (!isMobile) {

  addDesktopTocFunctionality();

} else if (isMobile) {

  document.querySelector('html').className = 'mobile';

}

addCheckForScrolltopBtn();
addScrollTopBtnFunctionality();

function unsupportedBrowserAlert() {
  // preveri kiri browser mas
  // preveri ce si kliknu "pusti me na miru" za ta notification

  // ce je unsupportan browser in nisi kliknu "pusti me na miru"
    // ti priporoci da menjaj browser
  // cne cne pa samo returna
  console.log("wip lad");
}

function getBrowser() {
  // Opera 8.0+
  const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  // Firefox 1.0+
  const isFirefox = typeof InstallTrigger !== 'undefined';
  // Safari 3.0+ "[object HTMLElementConstructor]" 
  const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
  // Internet Explorer 6-11
  const isIE = /*@cc_on!@*/false || !!document.documentMode;
  // Edge 20+
  const isEdge = !isIE && !!window.StyleMedia;
  // Chrome 1+
  const isChrome = !!window.chrome && !!window.chrome.webstore;
  // Blink engine detection
  const isBlink = (isChrome || isOpera) && !!window.CSS;

  // tell what browser it is
  if (isOpera) {
    return 'opera';
  } else if (isFirefox) {
    return 'firefox';
  } else if (isSafari) {
    return 'safari';
  } else if (isIE) {
    return 'ie';
  } else if (isEdge) {
    return 'edge';
  } else if (isChrome) {
    return 'chrome';
  } else if (isBlink) {
    return 'blink';
  } else {
    return 'unknown';
  }
}
