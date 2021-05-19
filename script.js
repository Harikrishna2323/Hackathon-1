const domain = "https://newaccount1621351342017.freshdesk.com/";
const my_api = "NROuwNyQPz0CcbU9XBd"
const container = document.querySelector(".container")

//Base64 encoding of api
const Base64_key = window.btoa(my_api);
let contactData='';
const config = {
    headers: {
      Authorization: "Basic " + btoa(my_api),
    },
  };
  const contacts_path = "api/v2/contacts";

async function getContacts() {
  try {
    const res = await fetch(domain + contacts_path, config);
    const data = await res.json();
    contactData = data;
    console.log(contactData);
  } catch (err) {
    console.log(err);
  }
}

getContacts();


