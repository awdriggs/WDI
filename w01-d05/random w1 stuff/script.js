//Change the conditionals so the console prints out star wars quotes rather than geology quotes
var hasFallen = true; var willBeCaught = true;
var one = 1;
var two = 2;
var three = 'thing';
var four = 'thing';
var five = 5;
var six = 6;
var seven = 88;
var eight = '88';

if (one == two) {
    console.log('There are three major types of rock: igneous, sedimentary, and metamorphic.');
} else if ( hasFallen && willBeCaught) {
    console.log('Death is a natural part of life. Rejoice for those around you who transform into the Force.');
}

if (three !== four) {
    console.log('The rock cycle is an important concept in geology ');
} else {
    console.log('Hokey religions and ancient weapons are no match for a good blaster at your side, kid.');
}

if (five > six) {
    console.log('Geology gives insight into the history of the Earth');
} else {
    console.log('It\'s against my programming to impersonate a deity.');
}

if (typeof(seven) !== typeof(eight)) {
    console.log('Always in motion is the future.');
} else {
    console.log('The geologic time scale encompasses the history of the Earth');
}

if (seven == parseInt(eight)) {
    console.log('R2-D2, you know better than to trust a strange computer.');
} else {
    console.log('The principle of Uniformitarianism states that the geologic processes observed in operation that modify the Earth\'s crust at present have worked in much the same way over geologic time.');
}