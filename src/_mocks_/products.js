import faker from 'faker';
// utils
import { mockImgProduct } from '../utils/mockImages';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Câmeras EspCam',
  'Sensor Temperatura Solo - DB18B20',
  'Sensor de Luminosidade',
  'Controlador Central - ESP 32',
  'Sensor de Umidade do Solo',
  'Sensor de Temperatura e Umidade do Ar',
  'Raspberry + Case Raspberry',
  'Raspberry',
  'Smartiny Estação Metereologica',
  'Smartiny Aqua',
  'Smartiny Hidroponia',
  'Smartiny Horticultura'
];

const PRODUCT_PRICE = [
  '80',
  '50',
  '30',
  '80',
  '30',
  '20',
  '400',
  '450',
  '820',
  '820',
  '820',
  '820'
];

const PRODUCT_COLOR = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107'
];

// ----------------------------------------------------------------------

const products = [...Array(12)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: mockImgProduct(setIndex),
    name: PRODUCT_NAME[index],
    price: PRODUCT_PRICE[index],
    // price: faker.datatype.number({ min: 7, max: 99, precision: 0.01 }),
    // priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR
    // status: sample(['sale', 'new', '', ''])
  };
});

export default products;
