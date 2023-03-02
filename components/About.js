import Testi from "./Testi";

const About = () => {
  return (
    <div className="md:min-h-fit md:h-fit w-full items-center text-center flex flex-col gap-8 md:my-12 mx-auto overflow-x-hidden">
      <h1 className="text-orange-600 font-bold text-4xl">Tentang Kami</h1>
      <div className="flex flex-col md:flex-row w-full items-center">
        <div className="text-justify">
          <h4 className="text-lg md:leading-normal leading-5 text-sec mt-2 mb-4 mx-12 md:ml-20">
            <span className="font-bold">JanCook</span> adalah ecommerce penjualan makanan matang yang didirikan pada tahun 2023. Dengan menghidangkan kuliner asli mancanegara yang dapat Anda pesan melalui genggaman tangan Anda.
            Kami adalah jasa pesan antar makanan yang berbasis di Malang, Indonesia. Kami mengedepakan kepuasaan customer dalam menikmati cita rasa makanan manca negara.  Tujuan kami adalah mengenalkan makanan-makanan manca negara agar dapat dijangkau semua orang.  
          </h4>
        </div>
      </div>
      <Testi />
    </div>
  );
};

export default About;
