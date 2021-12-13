
let counter = 0;

/**
 * 
 * @param {string} event 
 * @param {function} callback 
 */
function demo(callback){
    return callback('shwarz')
}

function stoped() {
    console.log('timeout stop');
}

const interval = setTimeout(stoped, 10000);

function stopInterval() {
    clearTimeout(interval)
}



let btnFirst = document.getElementById('btn-first');

let counterView = document.getElementById('counter');

btnFirst.addEventListener('click', function() {
    increment(true);
});

btnFirst.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    increment(false);
});

function increment(incromentMode = true) {

    if(incromentMode){
        counter ++;
    }else if(counter > 0){
        counter --;
    }
    
    counterView.getElementsByTagName('span')[0].innerText = counter;
}


function addOne (delta, amount) {

    if(counter > 15){
        console.log('זה יותר מ15')
    }else if(counter > 10){
        return console.log('זה יותר מ10')
    } 
    
    counter += delta * amount;
}


let clockInterval; 

function clock() {
    const clockNode = document.querySelectorAll('#clock span');

    let counter = 0;

    function addZero(number) {

        if(number < 10){
            number = '0' + parseInt(number)
        }
        return number;
    }

    clockInterval = setInterval(function () {

        const time = new Date();

        // counter++;
        
        // clockNode[2].innerText = addZero(counter%60);
        clockNode[2].innerText = addZero(time.getSeconds());

        // if(counter%60 === 0){
        //     console.log(counter, counter/60)
        //     clockNode[1].innerText = addZero(counter/60%60);
            clockNode[1].innerText = addZero(time.getMinutes());
        // }

        // if(counter%3600 === 0){
        //     clockNode[0].innerText = addZero(counter/3600);
            clockNode[0].innerText = addZero(time.getHours());
        // }

    }, 1000)
}

function stopClock() {
    clearInterval(clockInterval)
}

