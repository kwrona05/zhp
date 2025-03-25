export function Home() {
  return (
    <div className="homeContainer">
      <div className="homeHeader">
        <h1 className="homeTitle">Ocalić od zapomnienia</h1>
      </div>
      <div className="homeMenu">
        <div className="homeBtn">Strona Główna</div>
        <div className="comisionBtn">Komisja Historyczna</div>
        <div className="panteonBtn">Panteon</div>
        <div className="publicationsBtn">Publikacje</div>
        <div className="bannersBtn">Sztandary</div>
        <div className="museumBtn">Muzeum</div>
        <div className="ensignBtn">Chorągiew</div>
        <div className="detachment">Hufiec</div>
        <div className="contact">Kontakt</div>
        <div className="fenBtn">FEN</div>
      </div>
      <p>------------------------</p>
      <div className="homePhotos">
        <p>Tu pojawiać się będą zajawki zdjęciowe</p>
        {/* In the future add connection to the database and downloading photos to scrolling anim */}
      </div>
      <p>-------------------------</p>
      <div className="aboutUs">
        <h2 className="aboutTitle">Poznaj nas lepiej!</h2>
        <p>
          Tutaj w przyszłości będzie konkretny opis naszej wspaniałej
          organizacji ZHP, która ma 80. lecie w kwietniu biezącego roku.
        </p>
      </div>
      <p>-------------------------</p>
      <div className="contactFooter">
        <h2 className="contactFooterTitle">
          Chcesz dowiedzieć się więcej? Zapraszamy do kontaktu!
        </h2>
        <p>Telefon: XXX XXX XXX</p>
        <p>Mail: zhpjg@gmail.com</p>
        <p>Adres: Jelenia Góra ul. Iksińska 25</p>
      </div>
    </div>
  );
}
