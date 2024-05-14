import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
    try {
        const existingContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));

        const newContacts = createFakeContact();

        const allContacts = existingContacts.concat(newContacts);

        await fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2));

        console.log(`Successfully generated and added contacts`);
    } catch (error) {
        console.log(error, 'Failed to generate contacts');
    }
};

await addOneContact();





