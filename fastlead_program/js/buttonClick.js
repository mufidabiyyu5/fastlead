const btn1 = document.getElementById('1');
let params1 = 0;
let click = 0;

btn1.addEventListener('click', function active1(event) {
  // 👇️ change background color
  if (params1 == 0) {
    event.target.style.backgroundColor = '#F66B0E';
    params1 = 1;
    console.log(params1);
  } else {
    event.target.style.backgroundColor = 'transparent';
    params1 = 0;
    click += 1;
    document.getElementById('count-set').innerHTML = click;
    console.log(params1);
  }

});

const btn2 = document.getElementById('2');
let params2 = 0;

btn2.addEventListener('click', function active(event) {
  // 👇️ change background color
  if (params2 == 0) {
    event.target.style.backgroundColor = '#F66B0E';
    params2 = 1;
    console.log(params2);
  } else {
    event.target.style.backgroundColor = 'transparent';
    params2 = 0;
    click += 1;
    document.getElementById('count-set').innerHTML = click;
    console.log(params2);
  }
  
});

const btn3 = document.getElementById('3');
let params3 = 0;

btn3.addEventListener('click', function active(event) {
  // 👇️ change background color
  if (params3 == 0) {
    event.target.style.backgroundColor = '#F66B0E';
    params3 = 1;
    console.log(params3);
  } else {
    event.target.style.backgroundColor = 'transparent';
    params3 = 0;
    click += 1;
    document.getElementById('count-set').innerHTML = click;
    console.log(params3);
  }
  
});

const btn4 = document.getElementById('4');
let params4 = 0;

btn4.addEventListener('click', function active(event) {
  // 👇️ change background color
  if (params4 == 0) {
    event.target.style.backgroundColor = '#F66B0E';
    params4 = 1;
    console.log(params4);
  } else {
    event.target.style.backgroundColor = 'transparent';
    params4 = 0;
    click += 1;
    document.getElementById('count-set').innerHTML = click;
    console.log(params4);
  }
  
});

const btn5 = document.getElementById('5');
let params5 = 0;

btn5.addEventListener('click', function active(event) {
  // 👇️ change background color
  if (params5 == 0) {
    event.target.style.backgroundColor = '#F66B0E';
    params5 = 1;
    console.log(params5);
  } else {
    event.target.style.backgroundColor = 'transparent';
    params5 = 0;
    click += 1;
    document.getElementById('count-set').innerHTML = click;
    console.log(params5);
  }
  
});

const btn6 = document.getElementById('6');
let params6 = 0;

btn6.addEventListener('click', function active(event) {
  // 👇️ change background color
  if (params6 == 0) {
    event.target.style.backgroundColor = '#F66B0E';
    params6 = 1;
    console.log(params6);
  } else {
    event.target.style.backgroundColor = 'transparent';
    params6 = 0;
    click += 1;
    document.getElementById('count-set').innerHTML = click;
    console.log(params6);
  }
  
});