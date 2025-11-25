import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const stories = [
  { quote: "Weekly demos forced us to ship. That changed everything.", name: "Founder, ’26" },
  { quote: "I met my cofounder through YES. We built in 3 weeks.", name: "Builder, ’27" },
  { quote: "Office hours saved us months. One call rewired our roadmap.", name: "Founder, ’25" },
];

export default function HomeFounderStories() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Proof"
          title="Built in the room."
          desc="YES is designed to turn ambition into shipped work."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {stories.map((s) => (
            <Card key={s.quote} className="h-full">
              <p className="text-white/80">“{s.quote}”</p>
              <div className="mt-4 text-sm font-semibold text-white/70">{s.name}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}