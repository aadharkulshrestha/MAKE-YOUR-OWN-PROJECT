// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `ring${i}`;

      //position variables
      var posX = Math.random() * 10000 + -1000;
      var posY = Math.random() * 50 + -1;
      var posZ = Math.random() * 1000 + -1000;

      var blackPosition = { x: posX + 100, y: posY + 25, z: posZ + 100 };
      var greenPosition = { x: posX + 300, y: posY + 25, z: posZ + 100 };
      var redPosition = { x: posX + 500, y: posY + 25, z: posZ + 100 };

      //call the function
      this.createRedRings(id, blackPosition);
      this.createBlackRings(id, greenPosition);
      this.createGreenRings(id, redPosition);
    }
  },

  createGreenRings: function (id, position) {
    var terrainEl = document.querySelector("#terrain");
    var ringEl = document.createElement("a-entity");

    ringEl.setAttribute("id", id);
    ringEl.setAttribute("material", "color", "#19ff00");
    ringEl.setAttribute("position", position);
    ringEl.setAttribute("geometry", { primitive: "torus", radius: 10 });

    //set the static body attribute of physics system
    ringEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 5,
    });

    ringEl.setAttribute("game-play", {
      elementId: `#${id}`,
    });

    terrainEl.appendChild(ringEl);
  },

  createBlackRings: function (id, position) {
    var terrainEl = document.querySelector("#terrain");
    var ringEl = document.createElement("a-entity");

    ringEl.setAttribute("id", id);
    ringEl.setAttribute("material", "color", "#000000");
    ringEl.setAttribute("position", position);
    ringEl.setAttribute("geometry", { primitive: "torus", radius: 10 });

    //set the static body attribute of physics system
    ringEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 5,
    });

    ringEl.setAttribute("game-play", {
      elementId: `#${id}`,
    });

    terrainEl.appendChild(ringEl);
  },

  createRedRings: function (id, position) {
    var terrainEl = document.querySelector("#terrain");
    var ringEl = document.createElement("a-entity");

    ringEl.setAttribute("id", id);
    ringEl.setAttribute("material", "color", "#ff0000");
    ringEl.setAttribute("position", position);
    ringEl.setAttribute("geometry", { primitive: "torus", radius: 10 });

    //set the static body attribute of physics system
    ringEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 5,
    });

    ringEl.setAttribute("game-play", {
      elementId: `#${id}`,
    });

    terrainEl.appendChild(ringEl);
  },
});
