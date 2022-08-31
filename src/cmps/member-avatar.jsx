export const MemberAvatar = ({ size, user }) => {
  return (
    <div
      className={`member-avatar flex align-center justify-center`}
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
    >
      <img
        src={`/avatar/${user?.fullname.toLowerCase().replace(/-|\s/g, "")}.jpg`}
        alt=""
        title={`${user?.fullname}`}
        style={{ height: `${size}px`, width: `${size}px` }}
      />
    </div>
  );
};
