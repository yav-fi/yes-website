import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function HomeSplit() {
  return (
    <section className="py-16">
      <Container className="grid gap-4 md:grid-cols-2">
        <Card>
          <div className="text-xl font-semibold">For students</div>
          <p className="mt-2 text-white/70">
            Find collaborators, ship fast, and learn the actual mechanics of building.
          </p>
          <div className="mt-5">
            <Button href="/join" variant="primary">
              Join YES
            </Button>
          </div>
        </Card>

        <Card>
          <div className="text-xl font-semibold">For partners</div>
          <p className="mt-2 text-white/70">
            Sponsor programs, recruit builders, and connect with Yale’s founder pipeline.
          </p>
          <div className="mt-5">
            <Button href="/partners" variant="secondary">
              Partner with us
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}