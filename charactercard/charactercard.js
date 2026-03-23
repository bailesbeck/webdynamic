    const character = {
    name: "Findlebrock",
    class: "Alliwarriogator",
    level: 1,
    health: 100,
    image: "charactercard.png",

    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            console.log(this.name + " has died 💀");
        } else {
            console.log(this.name + " was attacked! Health is now " + this.health);
        }
    },

    levelUp() {
        this.level += 1;
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            alert(this.name + " has died 💀");
        }

        updateCard();
    }
};

function updateCard() {
    document.getElementById("name").textContent = character.name;
    document.getElementById("class").textContent = character.class;
    document.getElementById("level").textContent = character.level;
    document.getElementById("health").textContent = character.health;
    document.getElementById("image").src = character.image;
}

function attack() {
    character.attacked();
}

function levelUp() {
    character.levelUp();
}

updateCard();