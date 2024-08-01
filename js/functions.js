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

