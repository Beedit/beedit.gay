// Get the hour
var today = new Date();
var Hr = today.getHours();

// Here you can change your name
var name = '';

// Here you can change your greetings
var gree1 = 'Go to Sleep!!!!';
var gree2 = 'Good morning!';
var gree3 = 'Good afternoon' + name +  '.';
var gree4 = 'Good evening' + name +  '.';
var gree5 = 'Its almost sleepy time.';
var gree6 = 'Good evening.';

if (Hr >= 23 && Hr < 5) {
    document.getElementById('greetings').innerText = gree1;
    document.title = gree1
} else if (Hr >= 6 && Hr < 12) {
    document.getElementById('greetings').innerText = gree2 ;
    document.title = gree2
} else if (Hr >= 12 && Hr < 17) {
    document.getElementById('greetings').innerText = gree3;
    document.title = gree3
} else if (Hr >= 17 && Hr < 22) {
    document.getElementById('greetings').innerText = gree4;
    document.title = gree4
} else if (Hr >= 22 && Hr < 23) {
    document.getElementById('greetings').innerText = gree5;
    document.title = gree5
}
