import DetailPage from "@/app/components/DetailPage/DetailPage.jsx";
import { getData } from "@/app/utils/apiCall.js";

const MOVIES_SERVICE = process.env.MOVIES_SERVICE;

export default async function MovieDetail({ params }) {
  const url = MOVIES_SERVICE + "/" + params.id;
  const movie = await getData("movies", url);

  return (
    <>
      <DetailPage title="Películas" data={movie} />
    </>
  );
}
