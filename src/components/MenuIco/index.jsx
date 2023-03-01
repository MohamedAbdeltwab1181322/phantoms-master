import React, { useEffect } from "react";
import anime from "animejs";

import "./menuIco.scoped.scss";

const MenuIco = (props) => {
  useEffect(() => {
    const clickx = document.getElementById("pencet");

    clickx.addEventListener("click", function() {
      clickx.classList.toggle("Diam");
      toggle();
    });
  });

  return (
    <div id="menu">
      <div id="pencet">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

const toggle = () => {
  const menu = document.querySelector("nav .list");
  const open = menu.style.opacity === "1";
  const animation = {
    targets: menu,
    translateY: open ? 0 : 100,
    opacity: open ? 0 : 1,
    easing: "easeInOutQuad",
    duration: 400,
  };

  if (open) {
    anime(animation);
    setTimeout(() => {
      menu.style.display = "none";
    }, 400);
  } else {
    menu.style.display = "flex";
    anime(animation);
  }
};

export default MenuIco;
