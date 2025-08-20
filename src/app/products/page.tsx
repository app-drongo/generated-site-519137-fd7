import PageHeaderProducts from '../../components/PageHeaderProducts';
import Features from '../../components/Features';
import Services from '../../components/Services';
import Pricing from '../../components/Pricing';
import Cta from '../../components/Cta';

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderProducts />
      </section>
      <section id="features" className="scroll-mt-16">
        <Features />
      </section>
      <section id="services" className="scroll-mt-16">
        <Services />
      </section>
      <section id="pricing" className="scroll-mt-16">
        <Pricing />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}