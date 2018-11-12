import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger,
  state
} from "@angular/animations";
declare const require;
const bowser = require("bowser");

export const scrollToElement = element => {
  if (element) {
    const distance =
      window.pageYOffset - Math.abs(element.getBoundingClientRect().y);

    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.getBoundingClientRect().top + window.scrollY - 150
    });

    setTimeout(() => {
      element.focus();
      element.blur(); // Trigger error messages
      element.focus();
    }, distance);
  }
};

export const isPalindrome = str => {
  const len = Math.floor(str.length / 2);
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};

export const isBrowserValid = () => {
  const browser = bowser.getParser(window.navigator.userAgent);
  return browser.satisfies({
    windows: {
      "internet explorer": ">10"
    },
    macos: {
      safari: ">10.1"
    },
    chrome: ">20.1.1432",
    firefox: ">31",
    opera: ">22"
  });
};

export const fadeInOut: AnimationTriggerMetadata = trigger("fadeInOut", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate(500, style({ opacity: 1 }))
  ]),
  transition(":leave", [animate(500, style({ opacity: 0 }))])
]);

export const leftSideMenu = trigger("leftSideMenu", [
  transition("void => *", [style({ right: "0" }), animate(2000)]),
  transition("* => void", [animate(2500, style({ right: "0" }))])
]);

export const dialogRight = trigger("dialogRight", [
  transition("void => *", [style({ left: "100%" }), animate(200)]),
  transition("* => void", [animate(250, style({ left: "100%" }))])
]);

export const modalDialog = trigger("modalDialog", [
  transition("void => *", [
    style({ transform: "scale3d(.3, .3, .3)" }),
    animate(100)
  ]),
  transition("* => void", [
    animate(100, style({ transform: "scale3d(.0, .0, .0)" }))
  ])
]);

export const collapse = trigger("collapse", [
  state("init", style({ height: 0 })),
  state("off", style({ height: 0 })),
  state("on", style({ height: "*" })),
  transition("* => on", [animate("400ms cubic-bezier(.39,.8,.5,.95)")]),
  transition("on => off", [animate("300ms cubic-bezier(.39,.8,.5,.95)")]),
  transition("init => off", [animate("0s")])
]);

export const fadeSlow = trigger("fadeSlow", [
  transition(":enter", [style({ opacity: 0 }), animate("200ms")]),
  transition(":leave", [style({ opacity: 1 }), animate("200ms")])
]);
