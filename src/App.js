import HomePage from './Pages/HomePage';
import { Helmet } from 'react-helmet';
import { styleProcessor } from './Utilities/StyleProcessor';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, []);

  const { styles } = styleProcessor(data);

  return (
    <div className="App">
      <Helmet >
        <style>{styles}</style>
      </Helmet>
      <HomePage data={data} />
    </div>
  );
}

export default App;
