import React, { useState } from "react";
export const mobil = [
    {
        id: 1,
        nama: 'Civic Type R',
        path: 'civic-type-r.jpg',
        merek: 'Honda',
        warna: 'Merah',
        tipe: 'Sedan'
    },
    {
        id: 2,
        nama: 'Innova Venture',
        path: 'innova-venture.jpg',
        merek: 'Toyota',
        warna: 'Putih',
        tipe: 'Mini Bus'
    },
    {
        id: 3,
        nama: 'APV',
        path: 'apv.jpg',
        merek: 'Suzuki',
        warna: 'Hitam',
        tipe: 'Mini Bus'
    },
    {
        id: 4,
        nama: 'M4 Competition',
        path: 'm4-competition.jpg',
        merek: 'BMW',
        warna: 'Biru Tua',
        tipe: 'Sport Car'
    },
    {
        id: 5,
        nama: 'S Class 3000',
        path: 's-class-3000.jpg',
        merek: 'Mercedes',
        warna: 'Abu-abu',
        tipe: 'Sedan'
    },
    {
        id: 6,
        nama: 'Aventador',
        path: 'aventador.jpg',
        merek: 'Lamborghini',
        warna: 'Kuning',
        tipe: 'Sport Car'
    },
    {
        id: 7,
        nama: 'Almaz',
        path: 'almaz.jpg',
        merek: 'Wuling',
        warna: 'Abu-abu',
        tipe: 'SUV'
    },
    {
        id: 8,
        nama: 'Sigra',
        path: 'sigra.jpg',
        merek: 'Daihatsu',
        warna: 'Hitam',
        tipe: 'Mini Bus'
    },
    {
        id: 9,
        nama: 'Cullinan',
        path: 'cullinan.jpg',
        merek: 'Rolls Royce',
        warna: 'Emas',
        tipe: 'SUV'
    },
    {
        id: 10,
        nama: 'Macan',
        path: 'macan.jpg',
        merek: 'Porsche',
        warna: 'Orange',
        tipe: 'SUV'
    },
    {
        id: 11,
        nama: 'Veyron',
        path: 'veyron.jpg',
        merek: 'Bugatti',
        warna: 'Hitam',
        tipe: 'Sport Car'
    },
    {
        id: 12,
        nama: 'Aventador',
        path: 'aventador-merah.jpg',
        merek: 'Lamborghini',
        warna: 'Merah',
        tipe: 'Sport Car'
    },
]

const CarList = ({ cars }) => {
  return (
     <div className="car-grid">
        {cars.map((car) => (
          <div className="car-item" key={car.id}>
          <h3>{car.nama}</h3>
          <img src={(`${car.path}`).default} alt={car.nama} />
          <p><b>Merek:</b>{car.merek}</p>
          <p><b>Warna:</b> {car.warna}</p>
          <p><b>Tipe:</b>{car.tipe}</p>
          <button className="blue-button">Lihat Detail</button>
        </div>
      ))}
    </div>
  );
};


const CarSearch = ({ cars, setSearchResults }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const results = cars.filter(
      (car) =>
        car.nama.toLowerCase().includes(searchTerm) ||
        car.merek.toLowerCase().includes(searchTerm) ||
        car.warna.toLowerCase().includes(searchTerm) ||
        car.tipe.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  };

  return <input type="text" placeholder="Search" onChange={handleSearch} />;
};

const CarsShowroom = () => {
  const [searchResults, setSearchResults] = useState(mobil);

  return (
    <div>
      <h1>Zilla Showroom</h1>
      <h2>Cari Mobil Impian Anda </h2>
      <CarSearch cars={mobil} setSearchResults={setSearchResults} />
      <CarList cars={searchResults} />
    </div>
  );
};

export default CarsShowroom;
