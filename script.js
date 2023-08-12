if(localStorage.getItem('locked') == 1 && localStorage.getItem('lockedTwo') == 1){
    document.getElementById('startScreenOne').style.display = 'none';
    document.getElementById('startScreenTwo').style.display = 'none';
    document.getElementById('main').style.display = 'block';
}

const date = new Date();
let datte = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()
document.getElementById('date').innerText = `${datte}-${month +1}-${year}`;
var auth = undefined
function  fetchData(){
    let word = document.getElementById('word').value; 
    const settings = {
        url: `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
        method: 'GET',
    }
    $.ajax(settings).done(function (response) {
        console.log(response)
        document.getElementById('searchedWord').innerText = response[0].word;
        document.getElementById('definition').innerText =  response[0].meanings[0].definitions[0].definition 
        document.getElementById('ex').innerText = response[0].meanings[0].definitions[0].example 
        document.getElementById('synonyms').innerText = response[0].meanings[0].synonyms[0]
        document.getElementById('defOne').innerText = response[0].meanings[1].definitions[0].definition
        document.getElementById('symOne').innerText = response[0].meanings[1].synonyms[0]
        document.getElementById('symTwo').innerText = response[0].meanings[1].synonyms[1]
        document.getElementById('phonetics').innerText = response[0].phonetics[0].text
        document.getElementById('phoneticsAudio').src = response[0].phonetics[0].audio
        setTimeout(fetchData, 3000);
        document.getElementById('outputField').style.display = 'block', 4000
    });
} 
function closePageOne(){
    document.getElementById('startScreenOne').style.display = 'none';
    var lock =  localStorage.setItem("locked",1)
    document.getElementById('startScreenTwo').style.display = 'block';
}
function closePageTwo(){
    document.getElementById('startScreenTwo').style.display = 'none';
    document.getElementById('main').style.display = 'block';
    var lockTwo = localStorage.setItem("lockedTwo",1)
}

// DARK MODE
var darkmode = false
function darkMode(){
    if(darkmode == false){
        document.getElementById('main').style.backgroundColor = '#121212';
        document.getElementById('datepanel').style.color = '#ffffff'
        document.getElementById('inputField').style.color = "#ffffff"
        document.getElementById('outputField').style.color = "#ffffff"
        document.getElementById('body').style.backgroundColor = "#0d0d0d";
        localStorage.setItem('darked',true)
        darkmode = true
    }
    else{
        document.getElementById('main').style.backgroundColor = '#ffffff';
        document.getElementById('datepanel').style.color = '#0d0d0d'
        document.getElementById('inputField').style.color = "#0d0d0d"
        document.getElementById('outputField').style.color = "#0d0d0d"
        document.getElementById('body').style.backgroundColor = "#ffffff";
        localStorage.setItem('darked',false)
        darkmode = false   
    }
}