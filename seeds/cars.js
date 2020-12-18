exports.seed = async function(knex) {
  await knex('cars').truncate()
  await knex('cars').insert([
    { 
      VIN: 'R7WNW0TR1KS964731', 
      make: 'Tesla', 
      model: 'Roadster', 
      mileage: 14000,
      transmission: 'automatic',
      titleStatus: 'clean',
    },
    { 
      VIN: 'WGHATF3F9AX556661', 
      make: 'Chevrolet', 
      model: 'Corvette', 
      mileage: 56000,
      transmission: 'automatic',
      titleStatus: 'salvage',
    },
    { 
      VIN: 'BBSLW30IZLFK88280', 
      make: 'Chevrolet', 
      model: 'Camaro', 
      mileage: 88000,
      transmission: 'manual',
      titleStatus: 'clean',
    },
    { 
      VIN: 'LRM2UNYUQSEO16746', 
      make: 'Tesla', 
      model: 'Model S', 
      mileage: 32000,
      transmission: 'automatic',
      titleStatus: 'clean',
    },
    { 
      VIN: 'XIM6T7VE6MVO82201', 
      make: 'Ford', 
      model: 'Mustang', 
      mileage: 77000,
      transmission: 'manual',
      titleStatus: 'clean',
    },
    { 
      VIN: 'GBYG2H889QZ479727', 
      make: 'Porsche', 
      model: '911', 
      mileage: 19000,
      transmission: 'automatic',
      titleStatus: 'clean',
    },
  ])
}
