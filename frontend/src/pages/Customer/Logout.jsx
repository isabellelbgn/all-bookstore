function Logout() {
  localStorage.removeItem("customer_login");
  localStorage.removeItem("customer_username");
  localStorage.removeItem("customer_email");

  window.location.href = "/customer/login";
}

export default Logout;
