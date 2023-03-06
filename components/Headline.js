import React from 'react';

const Headline = () => {
  const headline = [
    { title: "Makanan Lokal", sub: "Bangga Buatan Indonesia", image: "https://images.unsplash.com/photo-1634871572365-8bc444e6faea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
    { title: "Makanan Jepang", sub: "Sensasi Makan di Negeri Matahari Terbit", image: "https://images.unsplash.com/photo-1576863514292-542ef379c13b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" },
    { title: "Makanan Korea", sub: "Sambil makan nonton drakor", image: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
  ]
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      {headline.map((isi) => (
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-4 pt-4'>{isi.title}</p>
          <p className='px-4'>{isi.sub}</p>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={isi.image}
          alt='/'
        />
      </div>
      ))}
    </div>
  );
};

export default Headline;
