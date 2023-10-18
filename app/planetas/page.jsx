import PageData from "@/app/components/PageData/PageData.jsx";
import { getData } from "@/app/utils/apiCall.js";

const PLANETS_SERVICE = process.env.PLANETS_SERVICE;

export default async function Planetas() {
  const { next: nextPage, results: planets } = await getData(
    "planets",
    PLANETS_SERVICE
  );
  return (
    <>
      <PageData
        title="Planetas"
        resource="planets"
        backendData={planets}
        url={PLANETS_SERVICE}
        paramData={nextPage}
      />
    </>
  );
}
