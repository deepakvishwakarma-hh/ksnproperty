import Landing from "@/blocks/sections/landing";
import Container from "@/blocks/atoms/container";
import Job_Card from "@/blocks/molecules/cards/job-card";
import { Main } from "@/types/job";
import Form from "@/blocks/molecules/forms/job";

export default async function Page() {
  const data = await getData();
  const jobs = data.map((it, i) => <Job_Card key={i} {...it} />);
  return (
    <div>
      <Landing background="url('https://www.allsoppandallsopp.com/images/banners/career.jpg')">
        <div>
          <h5 className="text-white text-center mb-10">Join us</h5>
          <h1 className="text-5xl font-semibold text-white text-center">
            Careers at Allsopp{" "}
          </h1>
        </div>
      </Landing>

      <Container>
        <section className="grid lg:grid-cols-2 grid-cols-1 py-20 gap-5">
          <div className="px-10 ">
            <h2 className="text-2xl font-semibold mb-5 capitalize">
              work with us
            </h2>
            <p className="text mb-5">
              Dubai is diverse. So are we. We employ people from a variety of
              backgrounds and levels of experience. After your induction, we
              invest heavily in your ongoing development. We help you maximize
              your existing skills whilst teaching you new skill sets, ensuring
              you are fully confident in your job and future career.
            </p>
            {jobs}
          </div>

          <div className="px-10">
            <Form />
          </div>
        </section>
      </Container>
    </div>
  );
}

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/job`, {
    cache: "force-cache",
  });
  const team: Main[] = await res.json();
  return team;
}
