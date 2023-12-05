/* eslint-disable react/prop-types */



const Carditem = ({data}) => {

  return <>
  {
    data?.map((item) => {
      return (
        <div key={item.id}>
          <img src={item.thumbnailUrl} alt="" />
          <h1>{item.title}</h1>
        </div>
      );
    })
  }
  
  </>;
};

export default Carditem;
