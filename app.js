function myCurry(arr) {
  const p = [];
  const q = [];
  const r = [];
  const newArr = [...arr];
  const sum = arr.reduce((acc, item) => acc + item, 0);
  if (sum % 3 !== 0) return "no luck";
  let target = sum / 3;

  let sumP = 0,
    sumQ = 0,
    sumR = 0;

  sumP = arr[0];
  p.push(0);
  for (let j = 1; j < arr.length; j++) {
    for (let k = j; k < arr.length; k++) {
      let num = arr[k];
      if (sumP + num <= target) {
        sumP += num;
        p.push(k);
      }
    }
    if (sumP == target) {
      arr = arr.filter((item, index) => p.includes(index));
      break;
    }
    p.splice(0);
  }

  for (let j = 1; j < arr.length; j++) {
    for (let k = j; k < arr.length; k++) {
      let num = arr[k];
      if (sumQ + num <= target) {
        sumQ += num;
        q.push(k);
      }
    }
    if (sumQ == target) {
      arr = arr.filter((item, index) => q.includes(index));
      break;
    }
    q.splice(0);
  }

  for (let j = 1; j < arr.length; j++) {
    for (let k = j; k < arr.length; k++) {
      let num = arr[k];
      if (sumR + num <= target) {
        sumR += num;
        p.push(k);
      }
    }
    if (sumQ == target) {
      arr = arr.filter((item, index) => r.includes(index));
      break;
    }
    r.splice(0);
  }

  const str = formString(p, q, r, newArr);
  if (str.includes("P") && str.includes("Q") && str.includes("R")) return str;
  else return "no luck";
}

function formString(p, q, r, arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (p.includes(i)) {
      str += "P";
    } else if (q.includes(i)) str += "Q";
    else str += "R";
  }

  return str;
}

const arr = [3, 7, 2, 5, 4];

myCurry(arr);
