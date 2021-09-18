

document.getElementById('explainsheet').style.visibility = 'hidden';
for (let i = 0; i < document.getElementsByClassName('c1').length; i++) {
    console.log(document.getElementsByClassName('c1')[i].innerText);
    document.getElementsByClassName('c1')[i].onclick = function (ev) {


        document.getElementById('Sid').innerHTML = '';
        var Sid = document.getElementById('Sid');
        var d = document.getElementsByClassName('c1')[i].innerText.toLowerCase();


        for (let v = 0; v < sss[0][d].length; v++) {
            var Soption = document.createElement('option');
            Sid.appendChild(Soption);
            Soption.innerText = sss[0][d][v]['otitle'];
        }
        showexplainsheet(i, 0);

        Sid.onchange = function () {
            // var ind = sss[0][d].indexOf({
            //     otitle : this.value,
            //   });
            var sel = Sid.selectedIndex;
            showexplainsheet(i, sel);
        }


        ////
        /////
        ///onclick
        ////
        ///
    }

}




/////
//looping datas
////

// for (let i = 0; i < sss.length; i++) {

//     sss

// }

// document.getElementById('eTitle').innerText = 'll';

function showexplainsheet(i, sel) {
    console.log(i);
    console.log(sel);
    document.getElementById('req').innerHTML = '';
    document.getElementById('steps').innerHTML = '';
    document.getElementById('duration').innerHTML = '';
    var dul = document.createElement('ul');
    var ul = document.createElement('ul');
    var ol = document.createElement('ol');

    document.getElementById('eTitle').innerText = document.getElementsByClassName('c1')[i].innerText;
    document.getElementById('explainsheet').style.visibility = 'visible';
    var d = document.getElementsByClassName('c1')[i].innerText.toLowerCase();
    // document.getElementById('eTitle').innerText = sss[0][d]['req'][1];



    document.getElementById('req').appendChild(ul);
    var ultitle = document.createElement('h3');
    ul.appendChild(ultitle);
    ultitle.innerText = 'REQUIREMENTS';

    for (let j = 0; j < sss[0][d][sel]['req'].length; j++) {
        var li = document.createElement('li')
        ul.appendChild(li);
        li.innerText = sss[0][d][sel]['req'][j];
    }

    /////
    ////


    document.getElementById('steps').appendChild(ol);
    ol.style.marginTop = '50px';

    var oltitle = document.createElement('h3');
    ol.appendChild(oltitle);
    oltitle.innerText = 'STEPS';

    for (let j = 0; j < sss[0][d][sel]['steps'].length; j++) {
        var oli = document.createElement('li')
        ol.appendChild(oli);
        oli.innerText = sss[0][d][sel]['steps'][j];
    }

    document.getElementById('duration').appendChild(dul);
    dul.style.marginTop = '50px';

    var dh3 = document.createElement('h3');
    dul.appendChild(dh3);
    dh3.innerText = 'DURATION';

    for (let j = 0; j < sss[0][d][sel]['duration'].length; j++) {
        var dli = document.createElement('li')
        dul.appendChild(dli);
        dli.innerText = sss[0][d][sel]['duration'][j];
    }


    ////////
    ///////onmou
    document.getElementById('closex').onmousedown = function (ev) {
        document.getElementById('x').style.color = 'black';
    }
    document.getElementById('closex').onmouseup = function (ev) {
        document.getElementById('x').style.color = 'white';
    }
    document.getElementById('closex').onmouseout = function (ev) {
        document.getElementById('x').style.color = 'white';
    }
    document.getElementById('closex').onclick = function (ev) {
        document.getElementById('explainsheet').style.visibility = 'hidden';
        ul.remove();
        ol.remove();
        dul.remove();
        document.getElementById('Sid').innerHTML = '';
    }

}