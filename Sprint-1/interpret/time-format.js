const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? 6 variables

// b) How many function calls are there? 1 function

// c) Using documentation, explain what the expression movieLength % 60 represents.
//finds the remaining seconds after converting to minutes.


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//It calculates the full number of minutes in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable? 
//Hours:Minutes:Seconds (HH:MM:SS). formatedTime OR convertedTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//Yes, it works for all non-negative values. 
//But there’s a formatting issue. It could not be able to show values less than 10 correctly. example: 10:1:8 should be 10:01:08
