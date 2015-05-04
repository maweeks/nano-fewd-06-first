function AddressBook() {
	var self = this;
	contactList = [],
	self.addContact = function(contact) {
		contactList.push(contact);
		console.log(contactList)
	}
	self.getContact= function(index) {
		return contactList[0];
	}
}