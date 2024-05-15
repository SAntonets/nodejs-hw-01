import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
    try {
        const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
        console.log(contacts);
    } catch (error) {
        console.log(error, 'Failed to get contacts');
    }
};

await getAllContacts();
