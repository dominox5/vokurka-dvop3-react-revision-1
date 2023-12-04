import Card from './components/Card.jsx';
import CardDynamic from './components/CardDynamic.jsx';

function App() {

  const cardData1 = {
    title: 'Název 1',
    description: 'Popis 1',
    link: 'Odkaz 1',
  };
  const cardData2 = {
    title: 'Název 2',
    description: 'Popis 2',
    link: 'Odkaz 2',
  };
  const cardData3 = {
    title: 'Název 3',
    description: 'Popis 3',
    link: 'Odkaz 3',
  };
  const cardData4 = {
    title: 'Název 4',
    description: 'Popis 4',
    link: 'Odkaz 4',
  };

  return (
    <>
      <Card />
      <CardDynamic {...cardData1}/>
      <CardDynamic {...cardData2}/>
      <CardDynamic {...cardData3}/>
      <CardDynamic {...cardData4}/>
    </>
  )
}

export default App
