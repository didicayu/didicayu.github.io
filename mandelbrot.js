function setup() {
    createCanvas(1000, 1000); // Create a canvas with a size of 800x800 pixels
    pixelDensity(1);

    loadPixels();

    let xmin = -2.0, xmax = 1.0, ymin = -1.5, ymax = 1.5;
    let MAX_ITER = 100;

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            
            let x = map(i, 0, width, xmin, xmax);
            let y = map(j, 0, height, ymin, ymax);

            let C = new Complex(x,y);

            let v = mandelbrot(C, MAX_ITER);
            console.log(v);

            let bright = map(v, 0, 100, 0, 255);

            if(v === MAX_ITER){
                bright = 0;
            } 

            let col = color(bright, bright, bright);
            
            set(i,j, col);
        }
    }

    updatePixels();
}

function mandelbrot(c, max_iter = 100, threshold = 2) {
    let z = new Complex(0, 0);

    for (let n = 0; n < max_iter; n++) {

        // z = z^2 + c
        z = Complex.multiply(z,z);
        z = Complex.add(z,c);

        //check threshold
        if(z.abs() > threshold){
            return n;
        }
    }

    return max_iter;
}

function draw() {

}