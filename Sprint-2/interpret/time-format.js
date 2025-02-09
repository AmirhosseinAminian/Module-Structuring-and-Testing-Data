function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?  Pad will be called 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?  It is for totalHours, which is 0.

// c) What is the return value of pad is called for the first time?  "00" To make it two digits.


// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//When pad is called for the last time, it is for remainingSeconds, which is 1.


// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
//It would be "01" because .padStart(2, "0") adds a leading zero to 1 to make it "01".