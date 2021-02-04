(function(){
    "use strict";
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

    /*****************************
    * CODING CHALLENGE 2
    */

    /*
    John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, 
    while Mike's team scored 116, 94 and 123 points.

    1. Calculate the average score for each team
    2. Decide which teams wins in average (highest average score), and print the winner to the console. 
    Also include the average score in the output.
    3. Then change the scores to show different winners. 
    Don't forget to take into account there might be a draw (the same average score)

    4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. 
    Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. 
    If you can't solve this one, just watch the solution, it's no problem :)
    5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

    GOOD LUCK 😀
    */

    var scoresJohn, scoresMike, scoresMary;

    scoresJohn = [89, 120, 103];
    scoresMike = [116, 94, 123];
    scoresMary = [97, 134, 105];
    
    
    var getAveScore = function(scores) {
        var sum, i, size;
        sum = 0;
        size = scores.length;

        for ( i = 0; i < size; i++) {
            sum += scores[i];
        }

        return size ? sum / size : 0;
    };



    var getWinnerBtw = function(name_1, scores_1, name_2, scores_2) {
        var ave_1 = getAveScore(scores_1); 
        var ave_2 = getAveScore(scores_2);
        
        switch(true) {
            case ave_1 > ave_2:
                return 'The winner is: ' + name_1 + 
                ' and the highest average score is: ' + ave_1;
            case ave_2 > ave_1:
                return 'The winner is: ' + name_2 + 
                ' and the highest average score is: ' + ave_2;
            case ave_1 === ave_2:
                return 'It\s a draw, and the highest average score is: ' + ave_1;
        }
    };
    
    
    console.log(getWinnerBtw('John', scoresJohn, 'Mike', scoresMike));


    var getWinnerThree = function(name_1, scores_1, name_2, scores_2, name_3, scores_3) {
        var ave_1 = getAveScore(scores_1);
        var ave_2 = getAveScore(scores_2);
        var ave_3 = getAveScore(scores_3);

        switch(true) {
            case ave_1 > ave_2 && ave_1 > ave_3:
                return 'The winner is: ' + name_1 + 
                    ' and the highest average score is: ' + ave_1;
            case ave_2 > ave_1 && ave_2 > ave_3:
                return 'The winner is: ' + name_2 + 
                    ' and the highest average score is: ' + ave_2;
            case ave_3 > ave_1 && ave_3 > ave_2:
                return 'The winner is: ' + name_3 + 
                    ' and the highest average score is: ' + ave_3;
            case ave_1 === ave_2 && ave_1 === ave_3:
                return 'It\s a draw, and the highest average score is: ' + ave_1;
        }
    };
    

    console.log(getWinnerThree('John', scoresJohn, 'Mike', scoresMike,'Mary', scoresMary));



    /*****************************
    * CODING CHALLENGE 3
    */

    /*
    John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

    To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

    In the end, John would like to have 2 arrays:
    1) Containing all three tips (one for each bill)
    2) Containing all three final paid amounts (bill + tip).

    (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

    GOOD LUCK 😀
    */

    var tipCalculator = function(bill) {
        switch(true) {
            case bill < 50:
                return (20 / 100) * bill;
            case bill >= 50 && bill <= 200:
                return (15 / 100) * bill;
            case bill > 200:
                return (10 / 100) * bill;
        }
    };

    var bills = [124, 48, 268];
    var tips = [];
    var finalPayments = [];
    var i, tip, bill;
    for(i = 0; i < bills.length; i++) {
        bill = bills[i];
        tip = tipCalculator(bill);
        tips.push(tip);
        finalPayments.push(bill + tip);
    }

    console.log(bills, tips, finalPayments);


    /*****************************
    * CODING CHALLENGE 4
    */

    /*
    Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
    1. For each of them, create an object with properties for their full name, mass, and height
    2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
    3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

    Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

    GOOD LUCK 😀
    */
   var massMark = 78; // kg
   var heightMark = 1.69; // meters
   
   var massJohn = 92;
   var heightJohn = 1.95;
   
   var BMIMark = massMark / (heightMark * heightMark);
   var BMIJohn = massJohn / (heightJohn * heightJohn);
    var personJohn = {
        fullName: 'John Smith',
        height: 1.95, // meters
        mass: 92, // kg
        calBMI: function() {
            this.bmi = this.mass / (this.height * this.height);
            return this.bmi;
        }
    };

    var personMark = {
        fullName: 'Mark Miller',
        height: 1.69, // meters
        mass: 78, // kg
        calBMI: function() {
            this.bmi = this.mass / (this.height * this.height);
            return this.bmi;
        }
    };

    personJohn.calBMI();
    personMark.calBMI();

    if (personJohn.bmi > personMark.bmi) {
        console.log(personJohn.fullName + 
            '\'s BMI is higher with value of: ' + 
            personJohn.bmi);
    } else if(personJohn.bmi < personMark.bmi) {
        console.log(personMark.fullName + 
            '\'s BMI is higher with value of: ' + 
            personMark.bmi);

    } else {
        console.log(personJohn.fullName + ' and ' + 
        personMark.fullName + 
        ' have the same BMI with value of: ' + 
        personJohn.bmi);

    }


    /*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var billsJohn = {
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        var bill;
        var percentage;
        var tip = 0;
        this.tips = [];
        this.payments = [];
        
        for(var i = 0; i < this.bills.length; i++) {
            bill = this.bills[i];
            switch(true) {
                case bill < 50:
                    percentage = .2;
                    break;
                case bill >= 50 && bill < 200:
                    percentage = .15;
                    break;
                case bill >= 200:
                    percentage = .1;
                    break;
            }

            tip = bill * percentage;
            this.tips[i] = tip;
            this.payments[i] = bill + tip;
        }
        
    }
};

var billsMark = {
    bills: [77, 375, 110, 45],
    calcTips: function() {
        var bill;
        var percentage;
        var tip = 0;
        this.tips = [];
        this.payments = [];
        
        for(var i = 0; i < this.bills.length; i++) {
            bill = this.bills[i];
            switch(true) {
                case bill < 100:
                    percentage = .2;
                    break;
                case bill >= 100 && bill < 300:
                    percentage = .1;
                    break;
                case bill >= 300:
                    percentage = .25;
                    break;
            }

            tip = bill * percentage;
            this.tips[i] = tip;
            this.payments[i] = bill + tip;
        }
        
    }
};

function calcAverageTip (tips) {
    var sum = 0;
    var size = tips.length;

    for(var i = 0; i < size; i++) {
        sum += tips[i];
    }

    return sum / size;
}
billsJohn.calcTips();
billsMark.calcTips();
john.ave = calcAverageTip(billsJohn.tips);
mark.ave = calcAverageTip(billsMark.tips);

if(john.ave > mark.ave) {
    console.log('John family paid the highest tips on average: ' + john.ave);
} else if( mark.ave > john.ave) {
    console.log('Mark family paid the highest tips on average: ' + mark.ave);
} else {
    console.log('John and Mark families paid the same tips on average: ' + john.ave);
}


})();