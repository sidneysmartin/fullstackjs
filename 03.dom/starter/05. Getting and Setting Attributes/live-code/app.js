const link = document.querySelector("a");
const input = document.querySelector("input");
// href
link.href = "https://facebook.com";
link.target = "_blank";
// value
input.value = "Hello";
// type
input.type = "text";
// getAttribute(attrName)
console.log(link.getAttribute("href"));
// setAttribute(attrName, value)
input.setAttribute("type", "password");
