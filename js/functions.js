const lineLength = function (line, maxLength) {
  if (line <= maxLength) {
    return true;
  } else {
    return false;
  }
};

const pallidrom = function (string) {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed.length + string[i];
  }
  return string === reversed;
};

function chekMinutes(time) {
  const hour = time.split(':')[0];
  const minutes = time.split(':')[1];
  return hour * 60 + minutes;
}


const workingDay = (start, finish, meet, duration) => {
  let getStart = checkMinutes(start);
  let getFinish = checkMinutes(finish);
  let getMeet = checkMinutes(meet);
  return getStart >= getMeet && getStart + duration <= getFinish;
};

console.log(workingDay('08:00', '17:30', '14:00', 90));
console.log(workingDay('8:0', '10:0', '8:0', 120));
console.log(workingDay('08:00', '14:30', '14:00', 90));
console.log(workingDay('14:00', '17:30', '08:0', 90));
console.log(workingDay('8:00', '17:30', '08:00', 900));

