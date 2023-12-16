/* eslint-disable react/prop-types */

const CardMyPurchase = ({ purchase }) => {
  return (
    <>
      {purchase?.map((book) => {
        return (
          <div
            key={book._id}
            className="border-2 border-black py-4 px-8 h-auto w-full flex flex-col gap-10"
          >
            <h1>{book.date}</h1>
            {book.book?.map((item) => (
              <div key={item._id} className="flex gap-3">
                <div>
                    <img
                        src={item.image}
                        alt=""
                        className="w-[100px] h-[150px] object-cover"
                    />
                </div>
                <div className="flex flex-col gap-5">
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="text-xl font-semibold">{item.price}THB</p>
                </div>
              </div>
            ))}
            <h1 className="flex gap-3 text-xl font-semibold">
              Order Total:<p className="text-primary">{book.totalAmout}</p>
            </h1>
          </div>
        );
      })}
    </>
  );
};

export default CardMyPurchase;
