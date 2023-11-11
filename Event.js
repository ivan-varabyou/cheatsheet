window.document.addEventListener(
  "click",
  (event) => console.log(Object.prototype.toString.call(event)),
  {
    capture: true, // сработает ли событие на элементе, true => ELEMENT => OTHER_ELEMENT, false => OTHER_ELEMENT
    once: true, // отписка от события при первом срабатывании
    passive: true, // => никогда не вызовится event.preventDefault(), если preventDefault вызовится то будет ошибка в консоли
  } || capture
);

const currentTarget = event.currentTarget.getAttribute("id"); // не всегда сходится с событием target
const target = event.target.getAttribute("id"); // Всегда гдепроисходит событие

event.preventDefault(); // disanled default evenet
event?.stopImmediatePropagation(); // disanled other evenet this tarrget Event
event?.stopPropagation(); // disabled bubbling Опустится но не всплывет ловит на страдии погружения

event?.composed; /// => boolean
event.composedPAth; // => path events in array Array [ p, ShadowRoot, open-shadow, body, html, HTMLDocument (document), Window ]

event?.eventPhase; // 0 => event don't  work, 1 => capture phase, 2 => if bubling: true => else stop, 3 => ELL WORK PHASES EVENTS BUBBING

event?.isTrusted; // true event создано пользователем
event.type; // click, mouse
