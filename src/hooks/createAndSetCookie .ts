import Cookies from "js-cookie";

const createAndSetCookie = async (cookieValue: any) => {
  const expirationDays = 7;
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expirationDays);
  // Set the cookie using js-cookie
  Cookies.set("access-token", cookieValue, { expires: expirationDate });
  const data = Cookies.get("access-token");

  if (data) {
    return { status: true };
  }
};

export default createAndSetCookie;
