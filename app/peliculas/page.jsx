import PageData from "@/app/components/PageData/PageData.jsx";
import { getData } from "@/app/utils/apiCall.js";
import { urlBuilder } from "@/app/utils/urlBuilder.js";
import { LABELS, PAGINAS } from "@/app/constants/constants.js";

const MOVIES_SERVICE = process.env.MOVIES_SERVICE;

export default async function Peliculas() {
  const { next: nextPage, results: movies } = await getData(
    MOVIES_SERVICE,
    urlBuilder(MOVIES_SERVICE)
  );
  return (
    <>
      <PageData
        title={LABELS.MOVIES}
        service={MOVIES_SERVICE}
        backendData={movies}
        url={MOVIES_SERVICE}
        paramData={nextPage}
        route={PAGINAS.MOVIES}
      />
    </>
  );
}
