interface Props {
  detail: string;
}
const UserDetail = ({ detail }: Props) => {
  return (
    <span className="px-4 py-2 text-sm font-medium border rounded-full shadow-xs">
      {detail}
    </span>
  );
};

export default UserDetail;
