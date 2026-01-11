import Container from "@/components/ui/Container";
import SocialDock from "@/components/ui/SocialDock";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="grid gap-10 py-12 md:grid-cols-2">
        <div>
          <div className="text-lg font-semibold tracking-tight">
            Yale Entrepreneurial Society
          </div>
          <p className="mt-2 text-sm text-white/70">
            
          </p>
          <p className="mt-4 text-xs text-white/45">
            © {new Date().getFullYear()} YES
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-white/80">Social</div>
          <div className="mt-3">
            <SocialDock />
          </div>
        </div>

      </Container>
    </footer>
  );
}
