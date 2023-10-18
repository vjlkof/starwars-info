import Character from "@/app/components/Character/Character.jsx";
import { getData } from "@/app/utils/apiCall.js";

const CHARACTERS_SERVICE = process.env.CHARACTERS_SERVICE;

export default async function Personajes() {
  const { next: nextPage, results: characters } = await getData(
    "characters",
    CHARACTERS_SERVICE
  );
  return (
    <>
      <Character
        title="Personajes"
        resource="characters"
        charactersData={characters}
        url={CHARACTERS_SERVICE}
        paramData={nextPage}
      />
    </>
  );
}
