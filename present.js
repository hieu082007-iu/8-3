var to = 'mylove!';
var gift_url = 'https://www.google.com/search?q=mai+cho+anh+%C3%B4m+c%C3%A1i+nh%C3%A9&sca_esv=43ae779aae43ea66&sxsrf=AHTn8zrG7aqAa8PHEHds6EKuQYJTV1g5eA%3A1741165606161&ei=JhTIZ83HCd2g1e8P9bnRmQk&ved=0ahUKEwjN8syry_KLAxVdUPUHHfVcNJMQ4dUDCBA&uact=5&oq=mai+cho+anh+%C3%B4m+c%C3%A1i+nh%C3%A9&gs_lp=Egxnd3Mtd2l6LXNlcnAiGW1haSBjaG8gYW5oIMO0bSBjw6FpIG5ow6kyBRAhGKABSILNBFCcBVi2yQRwC3gBkAEAmAG0AaAB3iiqAQUxMC4zNbgBA8gBAPgBAZgCNqACqCmoAhDCAgoQABiwAxjWBBhHwgIEECMYJ8ICBxAAGIAEGArCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIFEAAYgATCAhEQLhiABBixAxjRAxiDARjHAcICCBAuGIAEGLEDwgIQEC4YgAQY0QMYxwEYJxiKBcICChAjGIAEGCcYigXCAgcQIxgnGOoCwgINEC4Y0QMYxwEYJxjqAsICDRAjGPAFGCcYyQIY6gLCAgcQLhgnGOoCwgIUEAAYgAQY4wQYtAIY6QQY6gLYAQHCAhAQABgDGLQCGOoCGI8B2AEBwgIOEAAYgAQYsQMYgwEYigXCAgsQLhiABBixAxiDAcICBBAAGAPCAg4QLhiABBixAxiDARiKBcICBRAuGIAEwgIOEC4YgAQYsQMYgwEY1ALCAg0QABiABBixAxiDARgKwgIKEAAYgAQYsQMYCsICCBAuGIAEGNQCwgILEC4YgAQYsQMY1ALCAhEQLhiABBjHARiYBRiaBRivAcICERAuGIAEGMcBGJgFGJkFGK8BwgIXEC4YgAQYsQMYlwUY3AQY3gQY4ATYAQHCAgIQJsICBhAAGBYYHsICFBAuGIAEGJcFGNwEGN4EGOAE2AEBwgIEECEYFcICBxAhGKABGAqYAwvxBac48JPG8wUAiAYBkAYIugYGCAEQARgBkgcFMTkuMzWgB46TAw&sclient=gws-wiz-serp';
var gift_image_url = 'IMG_2408.PNG';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();
