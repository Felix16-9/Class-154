AFRAME.registerComponent("flying-birds", {
    init: function () {
        for (var i = 1; i <=20; i++) {
            var id = `hurdle${i}`

            var posX= Math.floor(Math.random()*3000+ (-1000));
            var posY= Math.floor(Math.random()*2+(-1));
            var posX= Math.floor(Math.random()*3000+(-1));

            var position= {x:posX, y:posY, z:posZ};

            this.FlyingBirds(id,position)
        } 
    },

    FlyingBirds:(id,position)=>{
       var BirdEl1 = document.createElement("a-entity")
       var BirdE1 = document.querySelector("#terrain")
       BirdE1.setAttribute ("id", id)
       BirdE1.setAttribute ("position", position)
       BirdE1.setAttribute ("scale", {x: 500, y: 500, z: 500})
       BirdE1.setAttribute ("gltf-model","./assets/models/flying_bird/scene.gltf")
       BirdE1.setAttribute ("animation-mixer",{})
       terrainE1.appendChild(BirdE1) 
    }
})