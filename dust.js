const dust_canvas = document.getElementById("dust_canvas");
const dust_ctx = dust_canvas.getContext("2d");

dust_canvas.width = window.innerWidth;
dust_canvas.height = window.innerHeight;

const particles = [];
const num_particles = 40;

class Particle {

    constructor() {
        this.x = dust_canvas.width * Math.random();      // Random X position
        this.y = dust_canvas.height * Math.random();     // Random Y position
        this.vx = -1;                               // Constant X speed
        this.vy = -1 + Math.random();               // Random Y speed
        this.opacity = Math.random() * (0.2 - 0.05) + 0.05;     // Random opacity 0.05 - 0.2;
    }

    Draw(dust_ctx) {
        dust_ctx.beginPath();
        dust_ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        dust_ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI);
        dust_ctx.fill();
    }

    Update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0)             // Reset to starting position
            this.x = dust_canvas.width;

        if (this.y < 0)             // When it hits the top or bottom, bounce
            this.y = dust_canvas.height;
    }
}

function loop() {
    dust_ctx.clearRect(0, 0, dust_canvas.width, dust_canvas.height);

    for (let i = 0; i < num_particles; i++) {
        particles[i].Update();
        particles[i].Draw(dust_ctx);
    }

    requestAnimationFrame(loop);
}

for (var i = 0; i < num_particles; i++)             // Spawn particles
    particles.push(new Particle());

loop();