const smoke_canvas = document.getElementById('smoke_canvas');
const smoke_ctx = smoke_canvas.getContext('2d');

smoke_canvas.width = window.innerWidth;
smoke_canvas.height = window.innerHeight;

const smoker = SmokeMachine(smoke_ctx, [200, 200, 200]);

smoker.start();

const spread = 10;
const density = 4;

function spawn() {
    for (let x = 0; x < smoke_canvas.width + 1; x += (smoke_canvas.width / spread))
        smoker.addSmoke(x, smoke_canvas.height + (Math.random() * (600 - 400) + 400), density);
}

spawn();
setInterval(spawn, 2500);