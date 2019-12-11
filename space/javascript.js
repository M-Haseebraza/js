window.onload = function () {
    let game = {
        addRocks(){
            for(let i = 0; i<3; i++){
                let rock = document.createElement("img");
                rock.src = "space/r1.png";
                rock.style.width = "60px";
                rock.style.position = "absolute";
                rock.style.right = "0px";
                rock.style.top = Math.round(Math.random() * window.innerHeight - 100) + "px";
                gameContainer.appendChild(rock);
            }
        },
        moveRocks(){
            console.log(rock)
        },
        movespaceship() {
            setInterval(() => {
                spaceShipContainer.style.top = spaceShipContainer.offsetTop + 1 + "px";
            }, 75);
        },
        moveLeft() {
            spaceShipContainer.style.left = spaceShipContainer.offsetLeft - 5 + "px";
        },
        moveRight() {
            spaceShipContainer.style.left = spaceShipContainer.offsetLeft + 5 + "px";
        },
        moveTop() {
            spaceShipContainer.style.top = spaceShipContainer.offsetTop - 5 + "px";
        },
        moveBottom() {
            spaceShipContainer.style.top = spaceShipContainer.offsetTop + 5 + "px";
        },
        bindKeys() {
            document.body.onkeydown = function (evt) {
                switch (evt.keyCode) {
                    case 37:
                        game.moveLeft();
                        break;
                    case 38:
                        game.moveTop()
                        break;
                    case 39:
                        game.moveRight()
                        break;
                    case 40:
                        game.moveBottom();
                        break;
                }
            }
        },
        start() {
            game.movespaceship();
            game.bindKeys();
            game.addRocks();
            game.moveRocks();
        }
    }

    game.start()

}