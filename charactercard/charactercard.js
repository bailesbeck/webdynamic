const character = {
    name: "Aelric",
    class: "Warrior",
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
        console.log(this.name + " leveled up! Level is now " + this.level);
    }
};