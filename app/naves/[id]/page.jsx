import DetailPage from "@/app/components/DetailPage/DetailPage.jsx";
import { getData } from "@/app/utils/apiCall.js";
import { urlBuilder } from "@/app/utils/urlBuilder.js";
import { LABELS } from "@/app/constants/constants.js";

const STARSHIPS_SERVICE = process.env.STARSHIPS_SERVICE;

export default async function PersonajesDetail({ params }) {
  const starship = await getData(
    STARSHIPS_SERVICE,
    urlBuilder(STARSHIPS_SERVICE, params.id)
  );

  return (
    <>
      <DetailPage title={LABELS.STARSHIPS} data={starship} />
    </>
  );
}
