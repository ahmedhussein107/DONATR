import { sample } from 'lodash';
import { faker, fakerAR } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const donors = [...Array(16)].map((_, index) => ({
    id: faker.string.uuid(),
    name: fakerAR.person.fullName(),
    email: faker.internet.email(),
    day: faker.number.int({min: 1 , max: 30}),
    month: faker.number.int({min: 1 , max: 12}),
    year: faker.number.int({min: 2019 , max: 2030}),
    image: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
    contact: faker.phone.number(),
    type: sample([
        'Teacher',
        'Doctor',
    ]),
}));
