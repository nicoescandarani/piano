const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ','];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const btns = document.querySelectorAll('.btn');
const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

// ! Functions

function playNote (key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
      noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
      });

      console.log(key);
      
};

function stopNote (key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0;
    noteAudio.pause();
    key.classList.remove('active');
}

function playBtnOne (btn) {
    const loops = document.getElementById(btn.dataset.loop)
    loops.currentTime = 0;
    loops.play();
    btn.classList.add('active');
      loops.addEventListener('ended', () => {
        btn.classList.remove('active');
      });

      console.log(btn);
      
};

// playNote();


// ! Events

keys.forEach (key => {
  key.addEventListener('click', () => playNote(key))
});

btns.forEach (btn => {
  btn.addEventListener('click', () => playBtnOne(btn))
});

document.addEventListener('keydown', e => {
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

document.addEventListener('keyup', e => {
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) stopNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) stopNote(blackKeys[blackKeyIndex]);
});