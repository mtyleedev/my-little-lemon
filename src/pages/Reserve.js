import { useNavigate } from 'react-router-dom';
import '../App.css';
import Layout from '../components/Layout';
import ReserveMain from '../components/ReserveMain';

const Reserve = () => {

  // Navigate

  const navigate = useNavigate();


  return (
    <>
      <Layout>
        <ReserveMain navigate={navigate}/>
      </Layout>
    </>
  );
}

export default Reserve;
