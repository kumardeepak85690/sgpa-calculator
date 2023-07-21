const result = document.getElementById('calculate');
const pointer = document.getElementById('pointer');
const mes = document.getElementById('message');

const credits = {
  madTheory: 2,
  madPractical: 1,
  iotTheory: 3,
  iotPractical: 1,
  dmTheory: 2,
  dmPractical: 1,
  ccLab: 1,
  tocTheory: 3,
  project: 3,
  dMath: 4,
  ise: 3
};

const {
  madTheory,
  madPractical,
  iotTheory,
  iotPractical,
  dmTheory,
  dmPractical,
  ccLab,
  tocTheory,
  project,
  dMath,
  ise
} = credits;

function grade(g) {
  if (g === 'A+') {
    return 10;
  } else if (g === 'A') {
    return 9;
  } else if (g === 'B+') {
    return 8;
  } else if (g === 'B') {
    return 7;
  } else if (g === 'C+') {
    return 6;
  } else if (g === 'C') {
    return 5;
  } else if (g === 'D') {
    return 4;
  } else {
    return 0;
  }
}

result.addEventListener('click', function () {
  const mad = document.getElementById('mad').value;
  const madlab = document.getElementById('madlab').value;
  const iot = document.getElementById('iot').value;
  const iotlab = document.getElementById('iotlab').value;
  const dm = document.getElementById('dm').value;
  const dmlab = document.getElementById('dmlab').value;
  const cc = document.getElementById('cc').value;
  const toc = document.getElementById('toc').value;
  const proj = document.getElementById('proj').value;
  const math = document.getElementById('math').value;
  const iseInput = document.getElementById('ise').value;

  const calculate =
    grade(mad) * madTheory +
    grade(madlab) * madPractical +
    grade(iot) * iotTheory +
    grade(iotlab) * iotPractical +
    grade(dm) * dmTheory +
    grade(dmlab) * dmPractical +
    grade(cc) * ccLab +
    grade(toc) * tocTheory +
    grade(proj) * project +
    grade(math) * dMath +
    grade(iseInput) * ise;
  const sgpa = calculate / 24;
  const calculatedSgpa = parseFloat(sgpa).toFixed(2);
  showOutputOnUI(calculatedSgpa);
});

function showOutputOnUI(sgpa) {
  if (sgpa === 0) {
    mes.innerHTML = `Please select a proper Grade 😬`;
    animate(mes, 'heartBeat');
    pointer.innerHTML = `🎃`;
    animate(pointer, 'rubberBand');
  } else {
    let message = '';
    if (sgpa > 9.00) {
      message = `Teach me, Master! 🙏🏻`;
    } else if (sgpa > 8.00) {
      message = `Machaya! Decent Score 🍻`;
    } else if (sgpa > 7.00) {
      message = `Push yourself, just a little 🙌`;
    } else if (sgpa > 6.00) {
      message = `Need to work harder 🔨`;
    } else if (sgpa > 5) {
      message = `Apna time Aayega 💪`;
    } else if (sgpa > 4) {
      message = `Tumse na ho payega 😂`;
    } else {
      message = `No words! 🤐`;
    }

    mes.innerHTML = message;
    animate(mes, 'flipInY');
    pointer.innerHTML = sgpa + `<span class="outof">/10</span>`;
    animate(pointer, 'wobble');
  }
}

function animate(element, animation) {
  element.classList.add('animated', animation);
  const wait = setTimeout(() => {
    element.classList.remove('animated', animation);
  }, 1000);
}

document.oncontextmenu = function () {
  return false;
};

document.onkeydown = function (event) {
  if (event.which === 123) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
    return false;
  } else if (event.ctrlKey && event.which === 85) {
    return false;
  }
};
