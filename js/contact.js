  // Mock database
  let contacts = [];

  // Function to display contacts
  function displayContacts() {
    const contactList = document.getElementById("contactList");
    contactList.innerHTML = "";
    contacts.forEach((contact) => {
      const contactDiv = document.createElement("div");
      contactDiv.className = "border rounded p-2 mb-2 flex justify-between";
      contactDiv.innerHTML = `
      <div>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone}</p>
        <p><strong>Feedback:</strong> ${contact.feedback}</p>
        <p><strong>Date & Time:</strong> ${contact.datetime}</p>
      </div>
      <div>
        <button onclick="editContact(${contact.id})" class="bg-green-500 text-white px-2 py-1 rounded mr-2">Edit</button>
        <button onclick="deleteContact(${contact.id})" class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
      </div>
    `;
      contactList.appendChild(contactDiv);
    });
  }

  // Function to add or update a contact
  function addOrUpdateContact(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const contactId = formData.get("contactId");
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const feedback = formData.get("feedback");
    const datetime = new Date().toLocaleString()

    if (contactId) {
      // Update existing contact
      const existingContact = contacts.find(
        (contact) => contact.id === parseInt(contactId)
      );
      if (existingContact) {
        existingContact.name = name;
        existingContact.email = email;
        existingContact.phone = phone;
        existingContact.feedback = feedback;
        existingContact.datetime = datetime; 
      }
    } else {
      // Add new contact
      const newContact = {
        id: Date.now(),
        name: name,
        email: email,
        phone: phone,
        feedback: feedback,
        datetime: datetime,
      };
      contacts.push(newContact);
    }

    form.reset();
    document.getElementById("contactId").value = "";
    displayContacts();
  }

  // Function to delete a contact
  function deleteContact(id) {
    contacts = contacts.filter((contact) => contact.id !== id);
    displayContacts();
  }

  // Function to edit a contact
  function editContact(id) {
    const contact = contacts.find((contact) => contact.id === id);
    if (contact) {
      // Fill the form fields with contact details
      document.getElementById("contactId").value = contact.id;
      document.getElementById("name").value = contact.name;
      document.getElementById("email").value = contact.email;
      document.getElementById("phone").value = contact.phone;
      document.getElementById("feedback").value = contact.feedback;
    }
  }

  document
    .getElementById("contactForm")
    .addEventListener("submit", addOrUpdateContact);
  displayContacts();