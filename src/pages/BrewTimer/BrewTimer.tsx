import { ComingSoonCard, PageContainer } from "../../components/ui";

export default function BrewTimer() {
  return (
    <PageContainer>
      <ComingSoonCard
        emoji="⏱️"
        title="Brew Timer"
        tagline="Because counting sucks."
        description="Unfortunately, we haven't taught the app to do it for you yet. Check back soon."
      />
    </PageContainer>
  );
}
