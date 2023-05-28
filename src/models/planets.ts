import { join, parse, BufReader, pick, log, readAll } from "../deps.ts";

type Planet = Record<string, string>;

// deno-lint-ignore prefer-const
let planets: Array<Planet>;

export function filterHabitablePlanets(planets: Array<Planet>) {
  return planets.filter((planet) => {
    const planetaryRadius = Number(planet["koi_prad"]);
    const stellarRadius = Number(planet["koi_srad"]);
    const stellarMass = Number(planet["koi_smass"]);

    return (
      planet["koi_disposition"] === "CONFIRMED" &&
      planetaryRadius > 0.5 &&
      planetaryRadius < 1.5 &&
      stellarRadius > 0.99 &&
      stellarRadius < 1.01 &&
      stellarMass > 0.78 &&
      stellarMass < 1.04
    );
  });
}

async function loadPlanetData() {
  const path = join(Deno.cwd(), "data", "kepler_exoplanets_nasa.csv");

  const file = await Deno.open(path);
  const bufReader = new BufReader(file);
  const decoder = new TextDecoder("utf-8");
  const fileContents = await readAll(bufReader);
  const data = decoder.decode(fileContents);
  const result = await parse(data, {
    skipFirstRow: true,
    comment: "#",
  });

  // Close file resource id (rid) to avoid leaking resources.
  Deno.close(file.rid);

  const planets = filterHabitablePlanets(result as Array<Planet>);

  return planets.map((planet) => {
    return pick(planet, [
      "kepler_name",
      "koi_prad",
      "koi_smass",
      "koi_srad",
      "koi_count",
      "koi_steff",
    ]);
  });
}

planets = await loadPlanetData();
log.info(`${planets.length} habitable planets found!`);

export function getAll() {
  return planets;
}
