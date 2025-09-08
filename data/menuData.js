export const menuData = {
  coffee: [
    {
      id: "espresso-based",
      name: "Espresso Based",
      description: "Kopi strong biar melek, pas buat ngoding, nugas, atau sekadar nongkrong.",
      items: [
        { id: 1, name: "Americano", price: "20.000", description: "Kopi hitam klasik, bold dan strong." },
        { id: 2, name: "Caffe Latte", price: "25.000", description: "Espresso dengan susu creamy yang balance." },
        { id: 3, name: "Piccolo", price: "23.000", description: "Mini latte dengan espresso lebih kuat." },
        { id: 4, name: "Split Shot", price: "25.000", description: "Dua layer espresso & susu dengan sensasi unik." },
        { id: 5, name: "Cappuccino", price: "28.000", description: "Espresso dengan susu dan foam lembut." }
      ]
    },
    {
      id: "special-beans-filter",
      name: "Special Beans Filter",
      description: "Kopi filter dengan biji lokal maupun internasional pilihan, buat pecinta kopi sejati.",
      items: [
        { id: 6, name: "Lokal", price: "27.000", description: "Kopi filter dari biji lokal pilihan." },
        { id: 7, name: "Internasional", price: "30.000", description: "Kopi filter dari biji internasional berkualitas." }
      ]
    },
    {
      id: "kopi-susu",
      name: "Kopi Susu",
      description: "Kopi manis creamy ala anak tongkrongan. Enak diminum kapan aja.",
      items: [
        { id: 12, name: "Nera", price: "20.000", description: "Kopi susu dengan rasa ringan." },
        { id: 13, name: "Cheeza", price: "25.000", description: "Kopi susu creamy dengan sentuhan keju." },
        { id: 14, name: "Zulle", price: "25.000", description: "Kopi susu dengan karakter bold." },
        { id: 15, name: "Seline", price: "25.000", description: "Kopi susu manis lembut." },
        { id: 16, name: "Nasty", price: "25.000", description: "Kopi susu dengan cita rasa khas." },
        { id: 17, name: "Scooties", price: "25.000", description: "Kopi susu dengan aftertaste unik." }
      ]
    },
    {
      id: "signature",
      name: "Signature",
      description: "Menu khas yang jadi andalan, wajib dicoba!",
      items: [
        { id: 18, name: "Kopi Susu Kilat", price: "15.000", description: "Kopi susu dengan espresso ice cube, simple tapi nendang." }
      ]
    }
  ],
  mocktail: [
    {
      id: "mocktail-series",
      name: "Mocktail Series",
      description: "Kreasi kopi segar dengan rasa unik, bikin nongkrong makin seru.",
      items: [
        { id: 8, name: "Splash", price: "23.000", description: "Mocktail kopi segar rasa Splash yang fresh." },
        { id: 9, name: "Enigma", price: "23.000", description: "Mocktail kopi dengan racikan rasa unik Enigma." },
        { id: 10, name: "Fairy", price: "25.000", description: "Mocktail kopi manis lembut rasa Fairy." },
        { id: 11, name: "Oriental", price: "25.000", description: "Mocktail kopi dengan sentuhan rasa Oriental." }
      ]
    }
  ],
  nonCoffee: [
    {
      id: "milk-based",
      name: "Milk Based",
      description: "Buat yang nggak suka kopi, ada pilihan manis & creamy biar tetep asik.",
      items: [
        { id: 19, name: "Coklat", price: "23.000", description: "Minuman coklat creamy manis." },
        { id: 20, name: "Matcha", price: "23.000", description: "Matcha Jepang dengan susu lembut." },
        { id: 21, name: "Red Velvet", price: "23.000", description: "Minuman manis khas red velvet." },
        { id: 22, name: "Cendol", price: "20.000", description: "Minuman segar ala tradisional dengan cendol." },
        { id: 23, name: "Popcorn", price: "20.000", description: "Minuman unik dengan rasa popcorn manis gurih." },
        { id: 24, name: "Regal Rakyat", price: "20.000", description: "Minuman nostalgia dengan biskuit regal klasik." }
      ]
    },
    {
      id: "tea-series",
      name: "Tea Series",
      description: "Teh fruity segar, cocok buat pelepas dahaga pas cuaca panas.",
      items: [
        { id: 25, name: "Peach Tea", price: "23.000", description: "Teh segar dengan sentuhan buah peach manis." },
        { id: 26, name: "Leci Tea", price: "23.000", description: "Teh harum dengan rasa leci segar." },
        { id: 27, name: "Manggo Tea", price: "23.000", description: "Teh tropis dengan rasa mangga segar." }
      ]
    },
  ],
  food: [
    {
      id: "main-course",
      name: "Makanan Berat",
      description: "Makan kenyang, rasa nendang. Cocok buat isi tenaga sebelum lanjut aktivitas.",
      items: [
        { id: 28, name: "Ayam Saos Mentega", price: "35.000", description: "Ayam goreng dengan saus mentega gurih, nasi hangat, dan telur." },
        { id: 29, name: "Ayam Black Pepper", price: "35.000", description: "Ayam dengan saus lada hitam pedas gurih, nasi dan telur." },
        { id: 30, name: "Gyudon", price: "42.000", description: "Rice bowl ala Jepang dengan daging sapi empuk, saus manis gurih, telur, dan sayur." },
        { id: 31, name: "Taichan No-Stick", price: "35.000", description: "Ayam panggang ala Taichan tanpa tusuk, sambal pedas, nasi, dan telur." },
        { id: 32, name: "Kwetiaw", price: "33.000", description: "Kwetiaw goreng gurih dengan bumbu khas dan telur mata sapi." },
        { id: 33, name: "Daging Mercon", price: "42.000", description: "Daging sapi pedas khas 'mercon' dengan nasi, telur, dan kerupuk." }
      ]
    }
  ],
  snack: [
    {
      id: "snack-series",
      name: "Snack",
      description: "Cemilan santai buat sharing bareng temen, makin rame makin seru.",
      items: [
        { id: 34, name: "Kentang", price: "20.000", description: "Kentang goreng renyah." },
        { id: 35, name: "Nugget", price: "23.000", description: "Nugget ayam crispy." },
        { id: 36, name: "Mix Plater", price: "36.000", description: "Kombinasi snack lengkap dalam satu piring." },
        { id: 37, name: "Roti Bakar", price: "22.000", description: "Roti bakar manis gurih pilihan." },
        { id: 38, name: "Tempe Mendoan", price: "18.000", description: "Tempe goreng tipis khas tradisional." },
        { id: 39, name: "Sosis", price: "23.000", description: "Sosis goreng gurih." },
        { id: 40, name: "Pisang Wijen", price: "22.000", description: "Pisang goreng balut wijen manis." },
        { id: 41, name: "Curos", price: "27.000", description: "Churros manis dengan gula/kayu manis." },
        { id: 42, name: "Onion Rings", price: "20.000", description: "Cincin bawang goreng crispy." },
        { id: 43, name: "Tahu Cireng", price: "18.000", description: "Tahu isi aci khas Bandung, gurih kenyal." }
      ]
    }
  ]
};
