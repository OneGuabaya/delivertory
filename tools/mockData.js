const usersDb = [
  {
    id: 0,
    nombre: 'jesus viloria',
    cedula: 25411385,
    estatus: 'activo',
    foto: 'img',
    camisass: 0,
    camisasm: 0,
    camisasl: 0,
    camisasxl: 0,
    chaquetass: 0,
    chaquetasm: 0,
    chaquetasl: 0,
    chaquetasxl: 0,
    impermebless: 0,
    impermeblesm: 0,
    impermeblesl: 0,
    impermeblesxl: 0,
    tapabocas: 0,
    gel: 0,
    bolsosNacionales: 0,
    bolsosImportados: 0,
},
]

const inventoryDb = [
  {
    id: 0,
    nombre: 'Camisas',
    foto: 'img',
    tallas: 0,
    tallam: 0,
    tallal: 0,
    tallaxl: 0,
  }, {
    id: 1,
    nombre: 'Chaquetas',
    foto: 'img',
    tallas: 0,
    tallam: 0,
    tallal: 0,
    tallaxl: 0,
  }, {
    id: 2,
    nombre: 'Bolsos',
    foto: 'img',
    nacionales: 0,
    importados: 0,
  },{
    id: 3,
    nombre: 'Tapabocas',
    foto: 'img',
    cantidad: 0,
  },{
    id: 4,
    nombre: 'Impermeables',
    foto: 'img',
    tallas: 0,
    tallam: 0,
    tallal: 0,
    tallaxl: 0,
  },{
    id: 5,
    nombre: 'Gel',
    foto: 'img',
    cantidad: 0,
  },

]

module.exports = {
  usersDb,
  inventoryDb,
}
