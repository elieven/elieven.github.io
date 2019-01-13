function cl(t) {console.log(t)}

//initiate as false
var isMobile = false;

// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  isMobile = true;
}

var scroll_top_btn = document.querySelector('#back-to-top-btn');

// init overlay scrollbars
document.addEventListener("DOMContentLoaded", function() {
	//The first argument are the elements to which the plugin shall be initialized
	//The second argument has to be at least a empty object or a object with your desired options
  OverlayScrollbars(document.querySelector("body"), { 
    callbacks: {
      onInitialized: function() {
        // adds class to body that removes scroll disabling
        document.querySelector("html").className += " scrolling-ready";
      },
      onScroll: function() {
        // settings
        var scroll_top_btn_show_threshold = 2000;
        // Showhs the back to top button if scrolled over a threshold
        if (this.scroll().position.y > scroll_top_btn_show_threshold) {
          scroll_top_btn.classList.add("lift");
        } else {
          scroll_top_btn.classList.remove("lift");
        }
      }
    }
  });

  // Nardi custom scrollbare tui za code samples v documentih
  // Trenutno disablano kr jebe prevec performance zgleda
  //OverlayScrollbars(document.querySelectorAll("pre"), {});
});


// Scroll back to top button functionality
scroll_top_btn.addEventListener("click", function() {
  OverlayScrollbars(document.querySelector("body"), {}).scroll({y: "0px"}, 320, "easeOutQuart");
});


// SW registering
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/assets/js/sw.js');
}


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
