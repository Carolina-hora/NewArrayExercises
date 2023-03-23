let coordinatesArray = [[33.747252,-112.633853],[-33.867886, -63.987],[41.303921, -81.901693],[-33.350534, -71.653268]];

const flatArray = coordinatesArray.flat();
//console.log(flatArray);

for (let i=-1; i<flatArray.length-1; i=i+2) {
    console.log (flatArray[i+2]);
}
//Another way:
// for (let i = 0; i < newArray.length; i++) {
//     if (i%2!==0) console.log(newArray[i])
// };