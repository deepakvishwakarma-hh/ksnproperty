import member from "../../../../../sample/team.json";
import Container from "@/blocks/atoms/container";
import { Main } from "@/types/team";
import Image from "next/image";

export default async function Page({ params: { slug } }: any) {
  const data: Main = await getData(slug);
  return (
    <main>
      <Container>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 p-5 xl:h-[60vh]">
          <section className="flex items-center xl:justify-end justify-center">
            <div className="relative h-[300px] w-[300px]  rounded-full overflow-hidden">
              <Image
                src={`https://ksnpropertiesstrapi-production.up.railway.app${data.attributes.Profile.data.attributes.url}`}
                fill
                alt={data.attributes.Name}
              />
            </div>
          </section>
          <section className="flex items-center">
            <div>
              <h3 className="xl:text-left text-center capitalize text-xl group-hover:underline mb-1">
                {data.attributes.Name}
              </h3>
              <p className="xl:text-left text-center capitalize text-sm mb-2">
                {data.attributes.Position}
              </p>

              <p className="xl:text-left text-center text-sm font-light">
                {data.attributes.Description}
              </p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}

async function getData(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/team/${slug}`, {
    cache: "force-cache",
  });
  const team = await res.json();
  return team[0];
}
