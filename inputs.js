var location = document.getElementsbyname("place").value

var people = document.getElementsbyname("people").value

var time = document.getElementsbyname("time").value

//const datastrings = data3.toString();

//console.log(typeof datastrings)

//document.getElementbyClass("data").innerHTML = <img

var ls = location + ""

var ps = people + ""

var ts = time + ""

const data3 = [ls, ps, ts]

var newText = document.createElement ('p');

var newcontent = document.createTextNode(data3);

newText.appendChild(newcontent);document.body.appendchild(newText);