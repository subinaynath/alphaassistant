
listen = document.querySelector('.display')
btnListen = document.querySelector('.speak')

// creating SpeechRecognition API
SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

recognition = new SpeechRecognition();
console.log(recognition);
recognition.onstart = function () {
    console.log('Yes, Now You Can start to Talk!');
}



btnListen.addEventListener('click', function () {
    recognition.start();
    listen.textContent = 'Listening...';

})
// converting voice to text 
recognition.onresult = function (e) {
    resultReceived = e.results[0][0].transcript;


    listen.textContent = resultReceived;
    readOutLoud(resultReceived)
}



//  converting text to voice and executing commands
function readOutLoud(vtval) {

    speakIt = new SpeechSynthesisUtterance();

    if (vtval.includes('introduce yourself')) {
        vtval = 'Hello Sir, Myself Alpha, the digital assistant';
    }
    else if (vtval.includes('tell me about your creator')) {
        vtval = 'Hii, I had been created by Subinay Nath. He had used HTML CSS & Javascript to developed me.'
    }
    else if (vtval.includes('how are you')) {
        vtval = 'I am fine Sir,';
    }
    else if (vtval.includes('open Gmail')) {
        vtval = 'opening Gmail sir';
        window.open('https://www.gmail.com');
    }
    else if (vtval.includes('open YouTube')) {
        vtval = 'opening Youtube sir';
        window.open('https://youtube.com');
    }
    else if (vtval.includes('open Google')) {
        vtval = 'opening google sir';
        window.open('https://www.google.com');
    }
    else if (vtval.includes('open Facebook')) {
        vtval = 'opening facebook sir';
        window.open('https://www.fb.com');
    }
    else if (vtval.includes('open Twitter')) {
        vtval = 'opening twitter sir';
        window.open('https://www.twitter.com');
    }
    else if (vtval.includes('open Instagram')) {
        vtval = 'opening Instagram sir';
        window.open('https://www.instagram.com');
    }
    else if (vtval.includes('tell me a joke')) {
        vtval = 'here is a joke for you. Man: I could go to the end of the world for you. Woman: Yes, but would you stay there?Man: I offer you myself. Woman: I am sorry I never accept cheap gifts. Man: I want to share everything with you. Woman: Lets start from your bank account.';
    }
    else if(vtval.includes('play a video')){
        vtval = 'playing a video sir';
        window.open('https://www.youtube.com/watch?v=uijFo32c0zM');
    }
    else if(vtval.includes('play a movie')){
        vtval = 'playing a movie sir';
        window.open('https://www.youtube.com/watch?v=ZVtMBxFtuqg');
    }
    else if(vtval.includes('goodbye')){
        vtval = 'Good bye sir, take care';
    }
    else if(vtval.includes('Alpha')){
        vtval = 'hellow sir, please speak a command for me after clicking speak button';
    }


    else {
        vtval = 'Wrong voice command';
    }

    speakIt.text = vtval;
    speakIt.volume = 1;
    speakIt.rate = 1;
    speakIt.pitch = 1;
    window.speechSynthesis.speak(speakIt);

}