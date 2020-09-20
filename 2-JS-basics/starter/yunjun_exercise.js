(function(){
    /**
     * use_strict
     */
    /*****************************
    * CODING CHALLENGE 1
    */

    /*
    Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs
    3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
    4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

    GOOD LUCK 😀
    */

    var markMass, johnMass, 
    markHeight, johnHeight,
    markBMI, johnBMI,
    isMarkHigherBMI;

    markMass = 155;
    johnMass = 200;
    markHeight = 180;
    johnHeight = 178;
    isMarkHigherBMI = false;

    function calculateBMI(mass, height) {
        return mass / (height * height);
    }

    markBMI = calculateBMI(markMass, markHeight);
    johnBMI = calculateBMI(johnMass, johnHeight);

    isMarkHigherBMI = markBMI > johnBMI;

    console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkHigherBMI);
})();