import PageData from "@/app/components/PageData/PageData.jsx";
import { getData } from "@/app/utils/apiCall.js";

const MOVIES_SERVICE = process.env.MOVIES_SERVICE;

export default async function Peliculas() {
  const { next: nextPage, results: movies } = await getData(
    "Movies",
    MOVIES_SERVICE
  );
  return (
    <>
      <PageData
        title="Peliculas"
        resource="movies"
        backendData={movies}
        url={MOVIES_SERVICE}
        paramData={nextPage}
      />
    </>
  );
}
