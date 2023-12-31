/* eslint-disable react/prop-types */

const CardMyPurchase = ({ purchase }) => {
  return (
    <>
      {purchase?.map((book) => {
        
        const date = new Date(book.date).toDateString();
        const time = new Date(book.date).toLocaleTimeString();

        return (
          <div
            key={book._id}
            className="border-2 border-black py-4 px-8 h-auto w-full flex flex-col gap-10 bg-white"
          >
            <h1 className="font-semibold text-2xl">{date} {time}</h1>
            {book.book?.map((item) => (
              <div key={item._id} className="grid md:grid-cols-[180px_1fr] gap-x-10">
                <div className="max-[]">
                    <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-5">
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="text-xl font-semibold">{item.price}THB</p>
                </div>
              </div>
            ))}
            <h1 className="flex gap-3 text-xl font-semibold">
              Order Total:<p className="text-primary">{book.totalAmout}THB</p>
            </h1>
          </div>
        );
      })}
    </>
  );
};

export default CardMyPurchase;
