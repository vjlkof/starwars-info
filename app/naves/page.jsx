import PageData from "@/app/components/PageData/PageData.jsx";
import { getData } from "@/app/utils/apiCall.js";

const STARSHIPS_SERVICE = process.env.STARSHIPS_SERVICE;

export default async function Naves() {
  const { next: nextPage, results: starships } = await getData(
    "starships",
    STARSHIPS_SERVICE
  );
  return (
    <>
      <PageData
        title="Naves"
        resource="starships"
        backendData={starships}
        url={STARSHIPS_SERVICE}
        paramData={nextPage}
      />
    </>
  );
}
