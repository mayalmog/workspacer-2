export const DeskPreview = ({ desk }) => {
  return (
    <section className="desk-preview">
      {desk.user && <p>{desk.user.fullname}</p>}
    </section>
  );
};
