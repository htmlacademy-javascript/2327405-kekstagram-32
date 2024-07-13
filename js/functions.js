const lineLength = function (line, maxLength) {
  if (line <= maxLength) {
    return true;
  } else {
    return false;
  }
};

const palidrom = function (string) {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }
  return string === reversed;
};

