type Props = {
  params: {
    id: string;
  };
};
function page({ params: { id } }: Props) {
  const url = "https://api.themoviedb.org/3/find/{external_id}";
  return <div>page {id}</div>;
}

export default page;
