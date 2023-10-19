import DetailPage from "@/app/components/DetailPage/DetailPage.jsx";
import { getData } from "@/app/utils/apiCall.js";
import { urlBuilder } from "@/app/utils/urlBuilder.js";
import { LABELS } from "@/app/constants/constants.js";

const PLANETS_SERVICE = process.env.PLANETS_SERVICE;

export default async function PersonajesDetail({ params }) {
  const character = await getData(
    PLANETS_SERVICE,
    urlBuilder(PLANETS_SERVICE, params.id)
  );

  return (
    <>
      <DetailPage title={LABELS.PLANETS} data={character} />
    </>
  );
}
