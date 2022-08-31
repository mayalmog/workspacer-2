import { useSelector, useDispatch } from "react-redux";
import { bookDesk, cancelBooking } from "../../store/desk/deskSlice";

export const DeskPreview = ({ desk, currDay }) => {
  const loggedinUser = useSelector((state) => state.user.loggedinUser);
  const dispatch = useDispatch();

  const onBookDesk = () => {
    if (
      currDay.desks.some(
        (desk) => desk.user && desk.user.email === loggedinUser.email
      )
    ) {
      console.log("You already have a desk!");
    } else {
      console.log("You haven't booked a desk yet, let's book it!", desk);
      let updatedDesk = JSON.parse(JSON.stringify(desk));
      updatedDesk.user = loggedinUser;
      dispatch(bookDesk({ updatedDesk, currDay }));
    }
  };

  const onRemoveBooking = () => {
    if (desk.user === loggedinUser) {
      dispatch(cancelBooking({ desk, currDay }));
    }
  };

  return (
    <section className="desk-preview flex column align-center">
      <p>{desk.id}</p>
      {desk.user && <p>{desk.user.fullname}</p>}
      {!desk.user && (
        <button className="btn book-btn" onClick={onBookDesk}>
          Book work station
        </button>
      )}
      {desk.user === loggedinUser && (
        <button className="btn remove-btn" onClick={onRemoveBooking}>
          Unbook
        </button>
      )}
    </section>
  );
};
