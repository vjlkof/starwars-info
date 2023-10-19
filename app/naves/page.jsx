import PageData from "@/app/components/PageData/PageData.jsx";
import { getData } from "@/app/utils/apiCall.js";
import { urlBuilder } from "@/app/utils/urlBuilder.js";
import { LABELS, PAGINAS } from "@/app/constants/constants.js";

const STARSHIPS_SERVICE = process.env.STARSHIPS_SERVICE;

export default async function Naves() {
  const { next: nextPage, results: starships } = await getData(
    STARSHIPS_SERVICE,
    urlBuilder(STARSHIPS_SERVICE)
  );
  return (
    <>
      <PageData
        title={LABELS.STARSHIPS}
        service={STARSHIPS_SERVICE}
        backendData={starships}
        url={STARSHIPS_SERVICE}
        paramData={nextPage}
        route={PAGINAS.STARSHIPS}
      />
    </>
  );
}
