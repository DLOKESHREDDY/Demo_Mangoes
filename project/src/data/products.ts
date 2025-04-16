import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Banginpalle',
    description: 'Perfect for making traditional pickles, these raw mangoes are handpicked for the best taste.',
    price: 100,
    image: '/images/Banginpalle.jpg',
    category: 'Traditional',
    weight: '1kg',
    inStock: true
  },
  {
    id: '2',
    name: 'Suvarnarekha',
    description: 'Sweet and juicy mangoes perfect for making coconut-based mango dishes.',
    price: 120,
    image: '/images/SuvarnaRekha.png',
    category: 'Traditional',
    weight: '1kg',
    inStock: true
  },
  {
    id: '3',
    name: 'Kobbari Mamidi',
    description: 'Premium variety known for its rich taste and perfect texture.',
    price: 150,
    image: '/images/KobbariMamidi.jpg',
    category: 'Premium',
    weight: '1kg',
    inStock: true
  },
  {
    id: '4',
    name: 'Cheruku Rasallu',
    description: 'A local favorite known for its unique flavor and aroma.',
    price: 130,
    image: '/images/CherukuRasalu.png',
    category: 'Local',
    weight: '1kg',
    inStock: true
  },
  {
    id: '5',
    name: 'Thiyya Mamidi',
    description: 'The king of mangoes, known for its sweet taste and golden color.',
    price: 90,
    image: '/images/Mango5.jpg',
    category: 'Premium',
    weight: '1kg',
    inStock: true
  },
  {
    id: '6',
    name: 'Pickle Mangoes',
    description: 'Extra sweet variety perfect for making juices and desserts.',
    price: 120,
    image: '/images/PickelMango.png',
    category: 'Special',
    weight: '1kg',
    inStock: true
  },
  {
    id: '7',
    name: 'BangloreMangoes',
    description: 'Traditional variety loved for its authentic taste.',
    price: 100,
    image: '/images/BangloreMangoes.png',
    category: 'Traditional',
    weight: '1kg',
    inStock: true
  }
];

export const reviews = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Best Banginapalli mangoes I have ever tasted. Will definitely order again!',
    language: 'en',
    date: '2024-02-15',
    verified: true
  },
  {
    id: '2',
    name: 'రాధిక',
    rating: 5,
    comment: 'చాలా బాగున్నాయి మామిడి పండ్లు. మా పిల్లలకి చాలా ఇష్టమైంది. తప్పకుండా మళ్ళీ ఆర్డర్ చేస్తాను.',
    language: 'te',
    date: '2024-02-10',
    verified: true
  },
  {
    id: '3',
    name: 'Priya Sharma',
    rating: 4,
    comment: 'Fresh and sweet mangoes. Packaging was also very good.',
    language: 'en',
    date: '2024-02-08',
    verified: true
  },
  {
    id: '4',
    name: 'వెంకటేష్',
    rating: 5,
    comment: 'కొబ్బరి మామిడి పండ్లు చాలా రుచిగా ఉన్నాయి. డెలివరీ కూడా చాలా త్వరగా చేసారు.',
    language: 'te',
    date: '2024-02-05',
    verified: true
  },
  {
    id: '5',
    name: 'Sarah Wilson',
    rating: 5,
    comment: 'Amazing quality mangoes! The Cheruku Rasalu variety is exceptionally sweet.',
    language: 'en',
    date: '2024-02-01',
    verified: true
  }
] as const;