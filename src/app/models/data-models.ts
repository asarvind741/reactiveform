export class Hero {

    id =0;
    name ='';
    address: Address[];
}

export class Address {
    street = '';
  city   = '';
  state  = '';
  zip    = '';
}

export const heroes: Hero[] = [
    {
      id: 1,
      name: 'Whirlwind',
      address: [
        {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
        {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
      ]
    },
    {
      id: 2,
      name: 'Bombastic',
      address: [
        {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
      ]
    },
    {
      id: 3,
      name: 'Magneta',
      address: [ ]
    },
  ];
  
  export const states = ['CA', 'MD', 'OH', 'VA'];
