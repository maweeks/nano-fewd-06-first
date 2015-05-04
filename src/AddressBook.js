function AddressBook() {
	var self = this;
	self.contactList = [];
	self.initialComplete = false;
	self.addContact = function(contact) {
		self.contactList.push(contact);
	}
	self.getContact= function(index) {
		return self.contactList[0];
	}

	self.getInitialContacts = function(cb) {
		var self = this;

		setTimeout(function() {
			self.initialComplete = true;
			if (cb) {
				return cb();
			}
		}, 3);
	}

	self.deleteContact = function(index) {
		self.contactList.splice(index, 1);
	}
}