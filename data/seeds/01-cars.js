// STRETCH

const cars = [
  {
    vin: '1C4BJWKGXDL508578',
    make: 'toyota',
    model: 'prius',
    mileage: 215000,
    title: 'clean',
    transmission: 'manual',
  },
  {
    vin: 'JNKCA21A4XT770979',
    make: 'toyota',
    model: 'corolla',
    mileage: 115000,
    title: 'salvage',
  },
  {
    vin: '2GCEK13Z361252872',
    make: 'ford',
    model: 'focus',
    mileage: 15000,
  },
]

// exports.send = async function(knex) {
//   await knex('cars').truncate()
//   await knex('cars').insert(cars)
// }

exports.seed = function(knex) {
  return knex('cars')
    .truncate().then(() => {
      return knex('cars').insert(cars)
    })
}

