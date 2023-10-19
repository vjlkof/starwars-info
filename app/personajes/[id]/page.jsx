import DetailPage from "@/app/components/DetailPage/DetailPage.jsx";
import { getData } from "@/app/utils/apiCall.js";
import { urlBuilder } from "@/app/utils/urlBuilder.js";
import { LABELS } from "@/app/constants/constants.js";

const CHARACTERS_SERVICE = process.env.CHARACTERS_SERVICE;

export default async function PersonajeDetail({ params }) {
  const character = await getData(
    CHARACTERS_SERVICE,
    urlBuilder(CHARACTERS_SERVICE, params.id)
  );

  return (
    <>
      <DetailPage title={LABELS.CHARACTERS} data={character} />
    </>
  );
}
