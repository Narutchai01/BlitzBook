/* eslint-disable react/prop-types */


const CardCollection = ({ data }) => {

  return (
    <>
      {data.map((item) => {
        return (
          <a href=""
            key={item.bookID}
            className="card-item" download={item.bookPDF}
           
          >
            <div className="">
              <img src={item.bookImage} alt="" className="w-full" />
            </div>
            <div className="h-full">
              <h1 className="line-clamp-[2]">{item.bookName}</h1>
            </div>
          </a>
        );
      })}
    </>
  );
};
export default CardCollection;
