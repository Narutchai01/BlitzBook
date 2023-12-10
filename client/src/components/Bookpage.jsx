import {useParams} from 'react-router-dom';

const Bookpage = () => {

  const {id} = useParams();


  return (
    <>
      <h1>
        Bookpage {id}
      </h1>
    </>
  );
};

export default Bookpage;
