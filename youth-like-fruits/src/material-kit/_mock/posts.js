import { sample } from 'lodash';
import { faker} from '@faker-js/faker';

// ----------------------------------------------------------------------



export const posts = [...Array(16)].map((_, index) => { 
    return{
        id: faker.string.uuid(),
        day: faker.number.int({min: 1 , max: 30}),
        month: faker.number.int({min: 1 , max: 12}),
        year: faker.number.int({min: 2018 , max: 2023}),
        name: faker.person.fullName(),
        status: sample([
            'Fullfilled',
            'Non-fullfilled'
        ]),
        type: sample([
            'Food',
            'Medical Supplies',
            'Clothes',
            'Blood Donation',
            'School Supplies',
            'Toys'
        ]),
    }
});

