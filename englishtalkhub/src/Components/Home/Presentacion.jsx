import CardTemplate from '../CardTemplate';

const Presentacion = () => {
  let reasons = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/english-talk-hub.appspot.com/o/assets%2FDisen%CC%83o%20sin%20ti%CC%81tulo.png?alt=media&token=0818cfdb-e221-4caa-a176-792936b62cc4',
      title: 'Curiosidad',
      text: 'En nuestra academia, nos encanta usar retos divertidos para que aprendas inglés. Queremos aprovechar tu curiosidad y motivación para que aprendas con lo que disfrutas. ¡Es la mejor forma de sumergirse en el idioma!',
      textButton: 'Challenges',
      link: '/challenges',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/english-talk-hub.appspot.com/o/assets%2FDisen%CC%83o%20sin%20ti%CC%81tulo%20(2).png?alt=media&token=d818469e-b453-49f7-8378-17351ed34cb5',
      title: 'Inmersiones',
      text: 'No solo enseñamos inglés, ¡lo vivimos! Organizamos actividades inmersivas como hikings, mercados, salidas a restaurantes y clubes de conversación, todo en un ambiente completamente inglés. Queremos que aprendas con experiencias reales y ¡divirtiéndote al mismo tiempo!',
      textButton: 'Calendario',
      link: '/inmersiones',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/english-talk-hub.appspot.com/o/assets%2FDisen%CC%83o%20sin%20ti%CC%81tulo%20(1).png?alt=media&token=2f3c4c25-a1aa-4a89-8576-61cb4cb7c24e',
      title: 'Acompañamiento',
      text: 'Nuestro enfoque en la academia se basa en clases pequeñas, con un máximo de 5 estudiantes, lo que nos permite un acompañamiento personalizado. Trabajamos en un proceso colaborativo que se adapta a las necesidades de cada estudiante, asegurando un aprendizaje centrado en ti.',
      textButton: 'Metodología',
      link: '/metodologia',
    },
  ];
  return (
    <>
      <div className="PresentacionDiv">
        <h1 className="Presentacion_title">¿POR QUÉ ESCOGERNOS?</h1>
        <div className="Presentacion_CardsDiv">
          {reasons.map((reason) => {
            return <CardTemplate key={reason.title} CardInfo={reason} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Presentacion;
