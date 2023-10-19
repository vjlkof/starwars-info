import PageData from "@/app/components/PageData/PageData.jsx";
import { getData } from "@/app/utils/apiCall.js";
import { urlBuilder } from "@/app/utils/urlBuilder.js";
import { LABELS, PAGINAS } from "@/app/constants/constants.js";

const PLANETS_SERVICE = process.env.PLANETS_SERVICE;

export default async function Planetas() {
  const { next: nextPage, results: planets } = await getData(
    PLANETS_SERVICE,
    urlBuilder(PLANETS_SERVICE)
  );
  return (
    <>
      <PageData
        title={LABELS.PLANETS}
        service={PLANETS_SERVICE}
        backendData={planets}
        url={PLANETS_SERVICE}
        paramData={nextPage}
        route={PAGINAS.PLANETS}
      />
    </>
  );
}
