const link1 = document.getElementsByTagName("a")[0];
const link2 = document.getElementsByTagName("a")[1];
const input = document.querySelector("input");
// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// console.log(link1.getAttribute("href"));
// 3. Select a-two & set "href" attribute
link2.setAttribute("href", "https://udemy.com");
// setAttribute(attrName, value)
input.setAttribute("placeholder", "type your password");
input.setAttribute("type", "password");

