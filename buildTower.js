/*

Build Tower

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

function towerBuilder(nFloors){
    let star = '*'
    let floor = ''
    
    for(i = 0; i < nFloors; i++){
        //console.log(star)
        for(let x = 0; x < nFloors - i; x++){
            floor += ' ';
        }
        for(let y = 0; y < 2 * i - 1; y++) {
            floor += '*';
        }
        floor += "\n";
    }
    return floor
}


console.log(towerBuilder(9))