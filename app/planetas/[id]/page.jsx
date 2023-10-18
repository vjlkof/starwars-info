import DetailPage from "@/app/components/DetailPage/DetailPage.jsx";
import { getData } from "@/app/utils/apiCall.js";

const PLANETS_SERVICE = process.env.PLANETS_SERVICE;

export default async function PersonajesDetail({ params }) {
  const url = PLANETS_SERVICE + "/" + params.id;
  const character = await getData("planets", url);

  return (
    <>
      <DetailPage title="Planetas" data={character} />
    </>
  );
}
