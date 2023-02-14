import { useEffect } from "react";
import ReactGA from "react-ga";

const Biodata = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <section className="pb-10">
        <div className="w-full relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:flex lg:flex-row lg:px-8">
          <div className="justify-center items-center sm:text-left text-justify">
            <h1 className="text-xl sm:text-md mt-4 font-bold">Profil</h1>
            <ul>
              <li>
                <span className="font-bold">Nama Penuh:</span>Anuar Bin Abd
                Manap
              </li>
              <li>
                <span className="font-bold">Tarikh lahir:</span> 30 Disember
                1976
              </li>
            </ul>
            <h1 className="text-xl sm:text-md mt-4 font-bold">Pengenalan</h1>
            <div>
              Memegang jawatan Ahli Parlimen bagi kawasan P141 Sekijang, Johor
              yang telah dilantik pada 2013 sehingga 2018 merupakan jawatan
              tertinggi saya di dalam politik.
              {/* Selain daripada itu, saya pernah
              berkhidmat sebagai Presiden Majlis Belia Felda Malaysia pada tahun
              2010 sehingga 2017. Saya juga pengasas bagi Pertubuhan Belia
              Generasi Baru yang ditubuhkan pada tahun 2006 dan telah menjadi
              Pengerusi yang pertama. */}
            </div>
            <h1 className="text-xl sm:text-md mt-4 font-bold">
              Kehidupan Awal dan Pendidikan
            </h1>
            <p>
              Mendapat Pendidikan awal di Sekolah Menengah Buloh Kasap, Segamat
              bagi kelulusan Sijil Pelajaran Malaysia (1993). Saya meneruskan
              pelajaran saya di peringkat diploma dalam bidang Teknologi
              Maklumat di Kolej SAL, Kuala Lumpur (1995). Kemudian saya
              melanjutkan pelajaran ke luar negara di peringkat Ijazah Sarjana
              Muda juga dalam bidang Teknologi Maklumat di Universiti Charles
              Sturt, Australia (1988). Sepanjang di Australia, saya juga
              merupakan Ahli Jawatankuasa Persatuan Mahasiswa Islam Riverina.
            </p>
            {/* <h1 className="text-xl sm:text-md mt-4 font-bold">Kerjaya Awal</h1>
            <p>
              Setelah menghabiskan pengajian, saya bekerja sebagai Jurubina di
              sebuah syarikat tempatan selama beberapa tahun. Setelah berkhidmat
              selama beberapa tahun, saya telah membuka syarikat perniagaan
              sendiri pada tahun 2003
            </p> */}
            <h1 className="text-xl sm:text-md mt-4 font-bold">
              Kerjaya Politik
            </h1>
            <p>
              Saya telah giat dalam bidang politik seawal belia dan memegang
              pelbagai jawatan. Saya merupakan Pengerusi Unit Media Baru Pemuda
              UMNO negeri Johor. Saya juga pernah menjadi setiausaha dan
              pengerusi dalam Majlis Belia Daerah Segamat. Selama 7 tahun, saya
              telah menjawat jawatan sebagai Ahli Dewan Tertinggi Belia Malaysia
              pada tahun 2009 sehingga 2016. Dalam pada masa yang sama, saya
              juga Presiden Majlis Belia Felda Malaysia sepanjang tahun 2010
              sehingga 2017.
            </p>
            <h1 className="text-xl sm:text-md mt-4 font-bold">
              Pengalaman Dalam Syarikat Perniagaan
            </h1>
            <p>
              Saya mempunyai beberapa pengalaman dalam bidang perniagaan.
              Pertama, saya merupakan ahli lembaga pengarah di Institut Sukan
              Negara di bawah Kementerian Belia dan Sukan Malaysia. Selain itu,
              saya juga pernah menjadi pengerusi di Glokal Link Sdn Bhd, sebuah
              anak syarikat di bawah Majlis Amanah Rakyat (MARA). Seterusnya,
              saya turut menjadi ahli lembaga pengarah di Syarikat Delima Oil
              Product Sdn Bhd dan telah mendapat pengiktirafan ISO 9001:2015
              oleh SIRIM dan KOSHER CERTIFIED by London Beth Din Kashrut
              Division. Begitu juga di Syarikat Felda Security Sdn Bhd dan
              Syarikat Felda Johor Bulkers Sdn Bhd yang merupakan anak syarikat
              di bawah FGV Holding Sdn Bhd. Saya juga mempunyai pengalaman
              sebagai ahli lembaga pengarah di Koperasi Permodalan Felda 2
              Berhad dan pernah mendapat ranking ke-95 dalam senarai 100
              Koperasi-Koperasi Terbaik Seluruh Malaysia.
            </p>
            {/* <h1 className="text-xl sm:text-md mt-4 font-bold">
              Penglibatan di dalam belia
            </h1>
            <p>
              menubuhkan Pertubuhan Belia Generasi Baru pada tahun 2006 dan
              memegang jawatan pengerusi sehingga kini. Setelah bergiat aktif
              sebagai aktivis belia selama beberapa tahun, saya telah dilantik
              menjadi Bendahari Majlis Belia Daerah Segamat (2008) dan memegang
              pelbagai jawatan sehinggalah saya diberikan mandat sebagai
              Presiden Majlis Belia Negeri Johor daripada tahun 2018 sehingga
              kini. Antara posisi yang telah dipegang sewaktu menjadi Presiden
              Majlis Belia Negeri Johor, saya juga merupakan ahli Dewan
              Tertinggi Majlis Belia Malaysia (2020) dan Ahli Lembaga
              Kementerian Perdagangan Dalam Negeri dan Hal Ehwal Pengguna Negeri
              Johor 2020 sehingga kini.
            </p> */}
            <h1 className="text-xl sm:text-md mt-4 font-bold">
              Penglibatan di dalam sukan dan sosial
            </h1>
            <ul>
              <li>
                Ahli Jawatankuasa Persatuan Mahasiswa Islam Riverina 1997- 1998
              </li>
              <li>Ahli Jawatankuasa Perhimpunan Antara Parlimen Asean</li>
              <li>Ahli Jawatankuasa Persatuan Parlimen Komanwel</li>
              <li>Ahli Jawatankuasa Kesatuan Antara Parlimen</li>
              <li>Delegasi Forum Parlimen Asia Pasifik</li>
              <li>Delegasi Persidangan Antarabangsa Parti Asia Pasifik</li>
            </ul>
            <h1 className="text-xl sm:text-md mt-4 font-bold">
              Anugerah dan pencapaian
            </h1>
            <ul>
              <li>
                <span className="font-bold">2013 - 2018:</span> Exco Pergerakan
                Pemuda UMNO Malaysia
              </li>
              <li>
                <span className="font-bold">2013 - 2018:</span> Ahli Parlimen
                bagi Kawasan P141 Sekijang
              </li>
              <li>
                <span className="font-bold">2011:</span> Tokoh Belia Negeri
                Johor
              </li>
              <li>
                <span className="font-bold">2006:</span> Johan, Kategori
                Kepimpinan dalam Anugerah Belia Negara
              </li>
              <li>
                <span className="font-bold">2006:</span> Johan, Kepimpinan Belia
                Terbilang dalam Anugerah Belia Felda Malaysia
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Biodata;
