import { sample } from 'lodash';
import { faker} from '@faker-js/faker';

// ----------------------------------------------------------------------



export const organization = () => ([...Array(8)].map((_, index) => { 
    const name = faker.person.fullName();
    const company = faker.company.name();
    const email = faker.internet.email(name, company);
    return{
        id: faker.string.uuid(),
        name: name,
        email: email,
        company: company,
        day: faker.number.int({min: 1 , max: 30}),
        month: faker.number.int({min: 1 , max: 12}),
        year: faker.number.int({min: 2018 , max: 2023}),
        image:  `/assets/avatars/avatar_${faker.number.int({min: 1 , max: 23})}.jpg`,
        birthdate: faker.date.birthdate(),
        contact: faker.phone.number(),
        type: sample([
            'Charity',
            'Medical',
            'Education',
            'Orphanage',
        ]),
    }
}));

