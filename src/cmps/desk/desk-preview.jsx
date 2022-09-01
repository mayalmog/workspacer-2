import { useSelector, useDispatch } from "react-redux";
import { MemberAvatar } from "../member-avatar";
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
      console.log("You haven't booked a desk yet, let's book it!");
      let updatedDesk = JSON.parse(JSON.stringify(desk));
      updatedDesk.user = loggedinUser;
      dispatch(bookDesk({ updatedDesk, currDay }));
    }
  };

  const onRemoveBooking = () => {
    if (isRemoveBtnShown) {
      dispatch(cancelBooking({ desk, currDay }));
    } else {
      console.log("You are not authorized to remove this booking");
    }
  };

  const isLoggedinUser = () => {
    return desk.user?.fullname === loggedinUser.fullname;
  };

  const isRemoveBtnShown = () => {
    return (
      desk.user === loggedinUser || desk.user?.email === "admin@fireblocks.com"
    );
  };

  return (
    <section
      className={`${desk.user ? "booked" : ""} ${
        isLoggedinUser() ? "marked" : ""
      } desk-preview flex column align-center justify-center`}
    >
      <p className="desk-id">Desk-{desk.id}</p>
      {desk.user && desk.user.email !== "admin@fireblocks.com" && (
        <MemberAvatar size={"32"} user={desk.user} />
      )}

      {desk.user && <p>{desk.user.fullname}</p>}
      {!desk.user && (
        <button className="btn btn-primary" onClick={onBookDesk}>
          Book
        </button>
      )}
      {isRemoveBtnShown() && (
        <button className="btn remove-btn" onClick={onRemoveBooking}>
          Unbook
        </button>
      )}
    </section>
  );
};
