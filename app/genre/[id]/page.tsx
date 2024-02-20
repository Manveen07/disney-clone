import React from "react";
type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

function genrepage({ params: { id }, searchParams: { genre } }: Props) {
  return (
    <div>
      welcome to genre {genre} with id {id}
    </div>
  );
}

export default genrepage;
