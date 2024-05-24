import CardTemplate from './CardTemplate';

const PresentacionHistoria = () => {
  let reasons = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/english-talk-hub.appspot.com/o/assets%2FBlack%20Simple%20Line%20art%20Book%20Logo%20(2).png?alt=media&token=07e2d658-2da5-4953-949f-08483bb0390c',
      title: 'Yo',
      text: 'Soy una persona dinamica,  creativa y practica. Amante de las experiencias y el aprender curioseando. Siempre estoy en movimiento, cuestionandolo todo y pensando en un mundo que puede hacer y sentir las cosas de una manera diferente.',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/english-talk-hub.appspot.com/o/assets%2FBlack%20Simple%20Line%20art%20Book%20Logo%20(3).png?alt=media&token=bd47619b-d196-49ed-a65a-ff86b5785fa9',
      title: 'Origen',
      text: 'Una carrera universitaria, casi 3 años viviendo en Estados unidos y una pasión particular por querer hacer las cosas diferentes. Viajar, pensar diferente y educar como tres cosas que siempre he buscado unificar, y que mejor que una academia donde puedo llevar a cabo las tres con mis estudiantes.',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/english-talk-hub.appspot.com/o/assets%2FBlack%20Simple%20Line%20art%20Book%20Logo.png?alt=media&token=782b7a63-954a-45ba-ba7f-7e3e78cf5b30',
      title: 'Teacher',
      text: 'Ya son más de 7 años ayudando a que otras personas empiecen a creer y alcancen sus metas con el inglés. Desde estudiantes niños/adolescentes de colegios públicos de Medellín, como estudiantes de academia de todas las edades. Tú puedes ser el proximo de ellos.',
    },
  ];
  return (
    <>
      <div className="PresentacionDiv">
        <h1 className="Presentacion_title">MI HISTORIA</h1>
        <div className="Presentacion_CardsDiv">
          {reasons.map((reason) => {
            return <CardTemplate key={reason.title} CardInfo={reason} />;
          })}
        </div>
      </div>
    </>
  );
};

export default PresentacionHistoria;
