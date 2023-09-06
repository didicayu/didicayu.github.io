class Complex {
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }

    static add(a, b){
        return new Complex(a.real + b.real, a.imaginary + b.imaginary);
    }

    static substract(a, b){
        return new Complex(a.real + b.real, a.imaginary + b.imaginary);
    }

    static multiply(a, b){
        //    A     |     B     |       RESULT
        // ----------------------------------------------
        // (a + bi) * (c + di) = (ac - bd) + (ad + bc)i

        return new Complex(a.real * b.real - a.imaginary * b.imaginary, a.real * b.imaginary + a.imaginary * b.real); 
    }

    abs(){
        return Math.sqrt((this.real*this.real) + (this.imaginary * this.imaginary));
    }

    fastAbs(){
        return ((this.real*this.real) + (this.imaginary * this.imaginary));
    }

    print(){
        console.log(this.real + " + " + this.imaginary + "i");
    }
}