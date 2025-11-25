import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function JoinPage() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Join"
          title="Get involved."
          desc="Choose your path: founder, builder, operator, or curious explorer."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="text-xl font-semibold">Students</div>
            <p className="mt-2 text-white/70">
              Join programs, build nights, and meet collaborators.
            </p>
            <div className="mt-5">
              <Button href="#" variant="primary">
                Interest form ↗
              </Button>
            </div>
          </Card>

          <Card>
            <div className="text-xl font-semibold">Founders</div>
            <p className="mt-2 text-white/70">
              Apply to Launch, get mentorship, and demo what you ship.
            </p>
            <div className="mt-5">
              <Button href="#" variant="secondary">
                Apply ↗
              </Button>
            </div>
          </Card>

          <Card>
            <div className="text-xl font-semibold">Partners</div>
            <p className="mt-2 text-white/70">
              Sponsor events, meet talent, and support outcomes.
            </p>
            <div className="mt-5">
              <Button href="#" variant="secondary">
                Partner ↗
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold">Next upgrade</div>
          <p className="mt-2 text-white/70">
            Swap these placeholder buttons to a Typeform/Airtable link now — later
            we can connect Supabase + real analytics events.
          </p>
        </div>
      </Container>
    </section>
  );
}