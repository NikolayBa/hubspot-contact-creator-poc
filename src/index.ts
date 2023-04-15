import { createHubSpotContact } from "./createHubSpotContact";
import { Contact } from './Contact';

const contact: Contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
};

createHubSpotContact(contact);
