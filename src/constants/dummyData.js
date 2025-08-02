const categories = [
  { name: 'Building materials', image: require('../assets/prod1.jpg') },
  { name: 'Cp & sanitary', image: require('../assets/prod2.jpg') },
  { name: 'Cp fittings', image: require('../assets/prod3.jpg') },
  { name: 'Building materials', image: require('../assets/prod1.jpg') },
  { name: 'Cp & sanitary', image: require('../assets/prod2.jpg') },
  { name: 'Cp fittings', image: require('../assets/prod3.jpg') },
];


const products = [
  {
    name: '8mm',
    image: require('../assets/prod1.jpg'),
    mrp: '550.00',
    sale: '555.76',
    discount: '5% off',
    rating: 0,
    reviews: 0,
  },
  {
    name: 'Dome Camera',
    image: require('../assets/prod2.jpg'),
    mrp: '1099.00',
    sale: '1614.05',
    discount: '5% off',
    rating: 2,
    reviews: 2,
  },
  {
    name: '12mm',
    image: require('../assets/prod3.jpg'),
    mrp: '800.00',
    sale: '6392.00',
    discount: '5% off',
    rating: 0,
    reviews: 0,
  },
   {
    name: '8mm',
    image: require('../assets/prod1.jpg'),
    mrp: '550.00',
    sale: '555.76',
    discount: '5% off',
    rating: 0,
    reviews: 0,
  },
  {
    name: 'Dome Camera',
    image: require('../assets/prod2.jpg'),
    mrp: '1099.00',
    sale: '1614.05',
    discount: '5% off',
    rating: 2,
    reviews: 2,
  },
  // Add more products as needed
];

const banners = [
    {
        id :1,
        image: require('../assets/banner1.jpg')
    },
     {
        id :2,
        image: require('../assets/banner2.jpg')
    },
  


]


export {categories , products , banners}


