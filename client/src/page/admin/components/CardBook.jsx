/* eslint-disable react/prop-types */
import { axiosInstance } from "../../../lib/axios";
import Swal from "sweetalert2";

const CardBook = ({ databook }) => {

  const upDateBook = (bookid) => {
    Swal.fire({
      title: "Update Book",
      html: `<input id="swal-input1" class="swal2-input" placeholder="title">
      <input id="swal-input2" class="swal2-input" placeholder="price">`,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
        ];
      },
    }).then((result) => {
      const [title, price] = result.value;
      axiosInstance
        .put(`/api/updatebook/${bookid}`, {
          title,
          price,
        })
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }).catch(() => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    });
  };

  const deleteBook = (bookID) => {
    axiosInstance
      .delete(`/api/deletebook/${bookID}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {databook.map((book) => (
        <div key={book._id} className="card-item">
          <div>
            <img src={book.image} alt="" />
          </div>
          <p className="line-clamp-2">{book.title}</p>
          <p>{book.price}</p>
          <div className="flex justify-between">
            <button className="bg-primary px-2 py-1 border-2 border-black text-xl font-semibold text-white"
              onClick={() => deleteBook(book._id)}
            >
              delete
            </button>
            <button onClick={()=>upDateBook(book._id)} className="px-2 py-1 border-2 border-black text-xl font-semibold text-white bg-yellow">Edit</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardBook;
