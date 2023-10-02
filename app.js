const music = new Audio('songs/1.mp3'); //New music variable with Audio type
//music.play();

//For music poster and song
//making an array
const songs = [
    {
        id: '1', //for 1st song name, artist and poster
        songName: 'Harleys in Hawaii<br> <div class="subtitle">Katy Perry</div>',
        poster: "img/01.png",
    },
    {
        id: '2',
        songName: 'Apna Bana Le<br> <div class="subtitle">Sachin-Jigar & Arijit Singh</div>',
        poster: "img/02.jpg",
    },
    {
        id: '3',
        songName: 'Shower<br> <div class="subtitle">Becky G</div>',
        poster: "img/03.jpg",
    },
    {
        id: '4',
        songName: 'Light Switch<br> <div class="subtitle">Charlie Puth</div>',
        poster: "img/04.jpg",
    },
    {
        id: '5',
        songName: 'Deva Deva<br> <div class="subtitle">Arijit Singh</div>',
        poster: "img/05.jpg",
    },
    {
        id: '6',
        songName: 'Without Me<br> <div class="subtitle">Halsey</div>',
        poster: "img/06.jpg",
    },
    {
        id: '7',
        songName: 'Wasting My Emotions<br> <div class="subtitle">Braden Ross</div>',
        poster: "img/07.jpg",
    },
    {
        id: '8',
        songName: 'Bones<br> <div class="subtitle">Imagine Dragons</div>',
        poster: "img/08.jpg",
    },
    {
        id: '9',
        songName: 'Industry Baby<br> <div class="subtitle">Lil Nas X & Jack Harlow</div>',
        poster: "img/09.jpg",
    },
    {
        id: '10',
        songName: 'Hall of Fame <br> <div class="subtitle">The Script feat. Will.I.Am</div>',
        poster: "img/10.jpg",
    },
    {
        id: '11',
        songName: 'Blinding Lights<br> <div class="subtitle">The Weeknd</div>',
        poster: "img/11.jpg",
    },
    {
        id: '12',
        songName: 'Raataan Lambiyan<br> <div class="subtitle">Tanishk Bagchi, Jubin Nautiyal & Asees Kaur</div>',
        poster: "img/12.jpg",
    },
    {
        id: '13',
        songName: 'Sunroof<br> <div class="subtitle">Nicky Youre, dazy & 24kgoldn</div>',
        poster: "img/13.jpg",
    },
    {
        id: '14',
        songName: 'Until I Found You<br> <div class="subtitle">Stephen Sanchez & Em Beihold</div>',
        poster: "img/14.jpg",
    },
    {
        id: '15',
        songName: 'Maan Meri Jaan<br> <div class="subtitle">King</div>',
        poster: "img/15.jpg",
    },
    {
        id: '16',
        songName: 'Mera Safar<br> <div class="subtitle">Iqlipse Nova</div>',
        poster: "img/16.jpg",
    },
    {
        id: '17',
        songName: 'O Bedardeya<br> <div class="subtitle">Pritam & Arijit Singh</div>',
        poster: "img/17.jpg",
    },
    {
        id: '18',
        songName: 'Tere Pyaar Mein<br> <div class="subtitle">Pritam & Arijit Singh</div>',
        poster: "img/18.jpg",
    },
    {
        id: '19',
        songName: 'Tere Vaaste <br> <div class="subtitle">Varun Jain, Sachin-Jigar, Shadab Faridi & Altamash Faridi</div>',
        poster: "img/19.jpg",
    },
    {
        id: '20',
        songName: 'Obsessed<br> <div class="subtitle">Riar Saab & Abhijay Sharma</div>',
        poster: "img/20.jpg",
    }, //To add 21st music we have to change and add it in js as well as in html file
]

//made a array for songitem class to get the elements fro document and aplied a loop 'forEach' and function e,i
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster; // basically we are doing for poster //parameter is img and is first image from the source = songs ka array
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName; //for song name and parameter is h5
})

//Master play button
let masterPlay = document.getElementById('masterPlay'); //main button to play the song taken by masterplay id
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{ //music is played when the button is clicked
    if (music.paused || music.currentTime <= 0){ //music array wala h 
        music.play(); //isse music play ho rha h
        wave.classList.add('active1'); //waves when the music is played

        //Isme basically ye ho rha h ki jab apan play button press krte h toh pause button upar dikhta h and jab pause krte h toh play button upar aata h
        masterPlay.classList.remove('bi-play-fill'); 
        masterPlay.classList.add('bi-pause-fill'); //button interface from bootstrap
    } else {
        music.pause(); //This is pause upper one is paused
        wave.classList.remove('active1'); //waves when the music is not played
        masterPlay.classList.add('bi-play-fill'); 
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () => { //songs play krne ke liye and button on of krne ke liye
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill'); 
        el.classList.remove('bi-pause-circle-fill'); 
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)'; //to set the bg when the song is played
    })
}


//making a index variable [isse pta chalega konse number ka music play ho rha h]
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => { //foreach loop isiliye kyuki ek se zyada h
    e.addEventListener('click', (el) => { //click krne ke baad play hona chahiye
        index = el.target.id; //jiss element pe click hua h uski id ko target karo
        // console.log(index); //isse element ki value pta chalegi web page pe
        music.src = `songs/${index}.mp3`; // jis index pe click kiya uss index ka music play hoga
        poster_master_play.src = `img/${index}.jpg`; // jis index pe click kiya uss index ka poster show hoga
        music.play();

        //Isme basically ye ho rha h ki jab apan play button press krte h toh pause button upar dikhta h and jab pause krte h toh play button upar aata h
        masterPlay.classList.remove('bi-play-fill'); 
        masterPlay.classList.add('bi-pause-fill');

        //Ek array bana rhe h songTitles jisme songs array se songs ke title ko filter karenge
        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName; //targeting the title
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)"; //yaha click hone ke baad index ki value se pta chalega

        makeAllplays();
        //play pause Button config of left side panel
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})

//Seek bar
let currentStart = document.getElementById('currentStart'); //start for timing
let currentEnd = document.getElementById('currentEnd'); //end for timing
let seek = document.getElementById('seek'); //Seek bar update
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

//Time set and update as the slider goes forward
music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime; //To see the current time of music
    let music_dur = music.duration; //To check the duration of the music [means kitne min ka song h]

    let min1 = Math.floor(music_dur / 60); // music ko minutes me convert kr rhe h [isme math floor use kr rhe h jisse ki apanko point ke just aage ki value nhi chahiye]
    let sec1 = Math.floor(music_dur % 60); //music ko seconds me convert kr rhe h

    if (sec1 < 10) { //Condition for single digit number
        sec1 = `0${sec1}`; //back ticks number ya words ke pehele lgane ke liye use kiye
    }
    currentEnd.innerText = `${min1}:${sec1}`;


    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) { //Condition for single digit number
        sec2 = `0${sec2}`; //back ticks number ya words ke pehele lgane ke liye use kiye
    }
    currentEnd.innerText = `${min2}:${sec2}`;

    //Seek bar update
    let progressBar = parseInt((music_curr / music_dur) * 100); //parseinteger kyuki point me kuch value nhi chhaiye
    seek.value = progressBar;
    
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`; //bar aage badhne ke liye
    dot.style.left = `${seekbar}%`; //bar ka dot aage badhne ke liye
});

seek.addEventListener('change', () => { //ye isiliye ki jab seek baar pe kahi bhi click kiya toh music and bar change hona chhaiye
    music.currentTime = seek.value * music.duration / 100;
});

// volume button and icon agjustment
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    //Now conditions
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    //Volume control
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`; //bar to and fro
    vol_dot.style.left = `${vol_a}%`; // dot to and fro
    music.volume = vol_a / 100; 
});

//Next music play button [master button ki baaju wali]
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) { //Condition jab first song play kr rhe h ans uske pehele waale button me error na aaye
        index = Array.from(document.getElementsByClassName('songItem')).length;
         
    }
    music.src = `audio/${index}.mp3`; // jis index pe click kiya uss index ka music play hoga
        poster_master_play.src = `img/${index}.jpg`; // jis index pe click kiya uss index ka poster show hoga
        music.play();

        //Isme basically ye ho rha h ki jab apan play button press krte h toh pause button upar dikhta h and jab pause krte h toh play button upar aata h
        masterPlay.classList.remove('bi-play-fill'); 
        masterPlay.classList.add('bi-pause-fill');

        //Ek array bana rhe h songTitles jisme songs array se songs ke title ko filter karenge
        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName; //targeting the title
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)"; //yaha click hone ke baad index ki value se pta chalega

        makeAllplays();
        //play pause Button config of left side panel
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener('click', () => {
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) { //Condition jab last song play kr rhe h ans uske baad waale button me error na aaye
        index = 1;
         
    }
    music.src = `audio/${index}.mp3`; // jis index pe click kiya uss index ka music play hoga
        poster_master_play.src = `img/${index}.jpg`; // jis index pe click kiya uss index ka poster show hoga
        music.play();

        //Isme basically ye ho rha h ki jab apan play button press krte h toh pause button upar dikhta h and jab pause krte h toh play button upar aata h
        masterPlay.classList.remove('bi-play-fill'); 
        masterPlay.classList.add('bi-pause-fill');

        //Ek array bana rhe h songTitles jisme songs array se songs ke title ko filter karenge
        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName; //targeting the title
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)"; //yaha click hone ke baad index ki value se pta chalega

        makeAllplays();
        //play pause Button config of left side panel
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

//Upper buttons for Songs
let pop_song_left = document.getElementById('pop_song_left');  //To activate left button (element taken by ID)
let pop_song_right = document.getElementById('pop_song_right'); //To activate right Button (element taken by ID)
let pop_song = document.getElementsByClassName('pop_song')[0]; //first Element taken by class


pop_song_right.addEventListener('click', () => { //To activate button to scroll to right after clicking, () is a listner func
    pop_song.scrollLeft += 330 ; //330 is the pixel size at the time of scrolling in left side
});

pop_song_left.addEventListener('click', () => { //To activate button to scroll to left after clicking, () is a listner func
    pop_song.scrollLeft -= 330; //330 is the pixel size at the time of scrolling in left side
});

//Lower buttons for Artists
let pop_art_left = document.getElementById('pop_art_left');  //To activate left button (element taken by ID)
let pop_art_right = document.getElementById('pop_art_right'); //To activate right Button (element taken by ID)
let Artists_bx = document.getElementsByClassName('Artists_bx')[0]; //first Element taken by class


pop_song_right.addEventListener('click', () => { //To activate button to scroll to right after clicking, () is a listner func
    Artists_bxpop_song.scrollLeft += 330; //330 is the pixel size at the time of scrolling in left side
});

pop_song_left.addEventListener('click', () => { //To activate button to scroll to left after clicking, () is a listner func
    Artists_bx.scrollLeft -= 330; //330 is the pixel size at the time of scrolling in left side
});