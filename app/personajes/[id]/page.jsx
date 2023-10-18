import DetailPage from "@/app/components/DetailPage/DetailPage.jsx";
import { getData } from "@/app/utils/apiCall.js";

const CHARACTERS_SERVICE = process.env.CHARACTERS_SERVICE;

export default async function PersonajeDetail({ params }) {
  const url = CHARACTERS_SERVICE + "/" + params.id;
  const character = await getData("characters", url);

  return (
    <>
      <DetailPage title="Personajes" data={character} />
    </>
  );
}
