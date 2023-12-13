// console.log('Running');
let result

let display_el = document.getElementById('display');
display_el.back
display_el.value = ''; 

function display(str) {
    console.log(typeof display_el.value, display_el.value);
    if (display_el.innerHTML === '0') {
        console.log('Run_if',display_el.value);
        display_el.innerHTML = str;
        display_el.value = str;
        
    } else {
        console.log('Run_elif', typeof display_el.value);
        display_el.value += str;
        display_el.innerHTML = display_el.value;
    }
}

function del() {
    if (display_el.innerHTML === '0'){ //checking if already 0
        return
        console.log('run_if_del')
    }
    //console.log(display_el.value.length);
    if (display_el.innerHTML)
    display_el.value = display_el.value.substring(0, display_el.value.length - 1);
    display_el.innerHTML = display_el.value;
}

function erase() {
    console.log('Run_clear');
    display_el.value = '0';
    display_el.innerHTML = display_el.value;
}

function calculatefn() {
    console.log('cal_run');

    try {
        result = math.evaluate(display_el.value);
        display_el.value = result;
        display_el.innerHTML = result;
    } catch (error) {
        console.error('Error in calculation:', error);
        // Handle the error as needed
    }
}


function answer() {
    if (typeof result !== 'undefined') {
        display_el.innerHTML = result;
        display_el.value = result;
    } else {
        display_el.innerHTML = 'ERROR';
    }
}


function power() {
    display_el.value += '^';
    display_el.innerHTML = display_el.value;
}
function power2() {
    display_el.value += '^2';
    display_el.innerHTML = display_el.value;
}



function modulus() {
    if (!isNaN(display_el.innerHTML)) {
        let result = Math.abs(parseFloat(display_el.innerHTML));
        display_el.innerHTML = result;
    } else {
        display_el.innerHTML = 'ERROR';
    }
}


function sqrroot() {
    try {
        let result = Math.sqrt(parseFloat(display_el.value));
        display_el.value = result;
        display_el.innerHTML = result;
    } catch (error) {
        console.error('Error in square root:', error);
        // Handle the error as needed
    }
}


function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function sin() {
    try {
        let result = Math.sin(toRadians(parseFloat(display_el.value)));
        display_el.value = result;
        display_el.innerHTML = result;
    } catch (error) {
        console.error('Error in sine:', error);
        // Handle the error as needed
    }
}

function cos() {
    try {
        let result = Math.cos(toRadians(parseFloat(display_el.value)));
        display_el.value = result;
        display_el.innerHTML = result;
    } catch (error) {
        console.error('Error in cosine:', error);
        // Handle the error as needed
    }
}

function tan() {
    try {
        let result = Math.tan(toRadians(parseFloat(display_el.value)));
        display_el.value = result;
        display_el.innerHTML = result;
    } catch (error) {
        console.error('Error in tangent:', error);
        // Handle the error as needed
    }
}



function log() {
    try {
        let result = Math.log10(parseFloat(display_el.value));
        display_el.value = result;
        display_el.innerHTML = result;
    } catch (error) {
        console.error('Error in logarithm:', error);
        // Handle the error as needed
    }
}

function exp() {
    try {
        let result = Math.exp(parseFloat(display_el.value));
        display_el.value = result;
        display_el.innerHTML = result;
    } catch (error) {
        console.error('Error in exponential:', error);
        // Handle the error as needed
    }
}

function percentage() {
    try {
        let result = parseFloat(display_el.value) / 100;
        display_el.value = result;
        display_el.innerHTML = result;
    } catch (error) {
        console.error('Error in percentage:', error);
        // Handle the error as needed
    }
}


function ln() {
    try {
        let result = Math.log(parseFloat(display_el.value));
        display_el.value = result;
        display_el.innerHTML = result;
    } catch (error) {
        console.error('Error in natural logarithm:', error);
        // Handle the error as needed
    }
}


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
function factorialBtn() {
    try {
        let result = factorial(parseFloat(display_el.value));
        display_el.value = result;
        display_el.innerHTML = result;
    } catch (error) {
        console.error('Error in factorial calculation:', error);
        // Handle the error as needed
    }
}


// ...

function pi() {
    try {
        let result = Math.PI * parseFloat(display_el.value);
        display_el.value = result;
        display_el.innerHTML = result;
    } catch (error) {
        console.error('Error in pi calculation:', error);
        // Handle the error as needed
    }
}

// ...

