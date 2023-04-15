import axios from "axios";
import * as fs from 'fs';

import { Contact } from "./Contact";

const createHubSpotContact = async (contact: Contact): Promise<void> => {
    const endpoint = `https://api.hubapi.com/crm/v3/objects/contacts`;
    const data = {
        properties: {
            email: contact.email,
            firstname: contact.firstName,
            lastname: contact.lastName
        },
    };
    const accessToken = fs.readFileSync("accessToken.txt", "utf-8").trim();
    const headers = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    }

    try {
        await axios.post(endpoint, data, headers);
        console.log(`Contact created: ${contact.firstName} ${contact.lastName} (${contact.email})`);
    } catch (error) {
        console.error(error.message);
        if (error.response && error.response.data) {
            console.log(error.response.data)
        }
    }
};

export { createHubSpotContact };