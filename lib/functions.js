export function checkCookie(cookieName) {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();

    // Check if the cookie starts with the given name
    if (cookie.indexOf(cookieName + "=") === 0) {
      return true;
    }
  }

  return false;
}
