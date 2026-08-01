import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  ChartPieSlice,
  EnvelopeSimple,
  Leaf,
  LinkedinLogo,
  List,
  MapPin,
  Phone,
  SealCheck,
  ShieldCheck,
  UsersThree,
  X,
} from "@phosphor-icons/react";

const assetPath = (file) => `${import.meta.env.BASE_URL}assets/${file}`;

const services = [
  {
    icon: Briefcase,
    title: "Business Services",
    text: "Practical advice to help your business thrive — from structure and compliance to strategic support, we help you make better decisions with confidence.",
  },
  {
    icon: ChartPieSlice,
    title: "Tax Services",
    text: "Specialist tax advice to legitimately minimise risk and optimise outcomes for your business, your wealth and your future.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Estate Services",
    text: "Thoughtful guidance for protecting what matters — from trust formation to succession and estate planning, we're here for the long term.",
  },
];

const testimonials = [
  {
    quote: "Their fantastic client communication, forward thinking and savvy business advice continues to help us year on year.",
    name: "Ginal Chauhan",
    detail: "Client feedback · Google review",
  },
  {
    quote: "The team is professional, attentive and efficient — they handle everything with great care and expertise.",
    name: "Liu Jerry",
    detail: "Client feedback · Google review",
  },
];

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [testimonial, setTestimonial] = useState(0);

  useEffect(() => {
    document.body.style.overflow = modalOpen || menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen, menuOpen]);

  const openConsultation = () => {
    setSubmitted(false);
    setModalOpen(true);
    setMenuOpen(false);
  };

  const closeModal = () => setModalOpen(false);

  const nextTestimonial = (delta) => {
    setTestimonial((testimonial + delta + testimonials.length) % testimonials.length);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Greenlane CA home">
          <img src={assetPath("glca-logo.png")} alt="Greenlane CA Limited" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#resources">Resources</a>
          <a href="#insights">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-action">
          <button className="button button-primary button-small" onClick={openConsultation}>Book a free consultation</button>
          <a className="header-phone" href="tel:+6495225182"><Phone weight="regular" />09 522 5182</a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu"><List /></button>
      </header>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
          <img src={assetPath("glca-logo.png")} alt="Greenlane CA Limited" />
          <nav>
            {[['About','#about'],['Services','#services'],['Resources','#resources'],['Blog','#insights'],['Contact','#contact']].map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowRight /></a>
            ))}
          </nav>
          <button className="button button-primary" onClick={openConsultation}>Book a free consultation</button>
          <a className="mobile-phone" href="tel:+6495225182"><Phone />09 522 5182</a>
        </div>
      )}

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Chartered accountants & business advisers</p>
            <h1 id="hero-title">Clarity.<br />Strategy.<br />Confidence<span>.</span></h1>
            <p className="hero-intro">For over 30 years, we’ve helped Auckland businesses, families and individuals make confident financial decisions for the long term.</p>
            <button className="button button-primary" onClick={openConsultation}>Book a free consultation <ArrowRight /></button>
            <a className="hero-phone" href="tel:+6495225182"><Phone weight="regular" />09 522 5182</a>
          </div>
          <div className="hero-image" style={{ "--hero-image": `url("${assetPath("hero-advisory.png")}")` }} role="img" aria-label="Chartered accountant meeting with a client" />
          <div className="trust-row" aria-label="Why clients choose Greenlane CA">
            <div><UsersThree /><p><strong>30+ years</strong><span>supporting Kiwi businesses and families</span></p></div>
            <div><SealCheck /><p><strong>Chartered Accountants</strong><span>trusted, experienced and independent</span></p></div>
            <div><Leaf /><p><strong>Auckland based</strong><span>local knowledge, personal service</span></p></div>
          </div>
        </section>

        <section className="services" style={{ "--botanical-image": `url("${assetPath("botanical.png")}")` }} id="services" aria-labelledby="services-title">
          <div className="services-heading">
            <div>
              <p className="eyebrow">Our services</p>
              <h2 id="services-title">Guidance for every stage<br />of your financial journey.</h2>
              <span className="accent-rule" />
            </div>
            <p>We translate complexity into clarity so you can focus on what matters most — growing your business, supporting your family and planning for the future.</p>
          </div>
          <div className="service-list">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service" key={title}>
                <Icon weight="regular" />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact">Explore {title.replace(' Services','')} <ArrowRight /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="relationship" id="about">
          <div className="relationship-team-stage" style={{ "--botanical-image": `url("${assetPath("botanical.png")}")` }}>
            <span>Greenlane CA senior team</span>
            <img src={assetPath("about-feature-original.png")} alt="Greenlane CA senior team" />
          </div>
          <div className="relationship-copy">
            <p className="eyebrow">Our senior team</p>
            <h2>People you can rely on.<br />Advice that moves with you.</h2>
            <p>Our experienced chartered accountants and specialists bring deep expertise across business, tax, trusts and estates — with the personal attention of a team that knows your story.</p>
            <p className="team-principal"><strong>Led by Daran Nair</strong><span>Principal, Chartered Accountant</span></p>
            <a className="text-link" href="https://glca.co.nz/about">Meet the full senior team <ArrowRight /></a>
          </div>
        </section>

        <section className="testimonial" id="insights" aria-live="polite">
          <div className="quote-mark">“</div>
          <blockquote>“{testimonials[testimonial].quote}”</blockquote>
          <div className="quote-person">
            <strong>{testimonials[testimonial].name}</strong>
            <span>{testimonials[testimonial].detail}</span>
          </div>
          <div className="quote-controls">
            <button onClick={() => nextTestimonial(-1)} aria-label="Previous testimonial"><ArrowLeft /></button>
            <button onClick={() => nextTestimonial(1)} aria-label="Next testimonial"><ArrowRight /></button>
          </div>
        </section>

        <section className="resources" id="resources">
          <p className="eyebrow">Useful resources</p>
          <h2>Clear thinking, shared.</h2>
          <div className="resource-links">
            <a href="https://glca.co.nz/resources">Business resources <ArrowRight /></a>
            <a href="https://glca.co.nz/blog">Latest tax insights <ArrowRight /></a>
          </div>
        </section>

        <section className="final-cta" id="contact">
          <div>
            <h2>Ready to take the next step?</h2>
            <p>Book your free initial consultation today.</p>
          </div>
          <button className="button button-light" onClick={openConsultation}>Book a free consultation <ArrowRight /></button>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={assetPath("glca-logo.png")} alt="Greenlane CA Limited" />
          <p>Chartered Accountants, Business & Tax Advisers</p>
        </div>
        <div><strong>Services</strong><a href="#services">Business Services</a><a href="#services">Tax Services</a><a href="#services">Trust & Estate Services</a></div>
        <div><strong>Company</strong><a href="#about">About</a><a href="#resources">Resources</a><a href="#insights">Blog</a></div>
        <div><strong>Get in touch</strong><a href="tel:+6495225182"><Phone />09 522 5182</a><a href="mailto:info@glca.co.nz"><EnvelopeSimple />info@glca.co.nz</a><span><MapPin />97 Great South Road, Epsom</span><a href="https://linkedin.com"><LinkedinLogo />LinkedIn</a></div>
      </footer>

      {modalOpen && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}>
          <div className="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-close" onClick={closeModal} aria-label="Close consultation form"><X /></button>
            {!submitted ? (
              <>
                <p className="eyebrow">Free initial consultation</p>
                <h2 id="modal-title">Let’s start with what matters to you.</h2>
                <p>Leave a few details and our team will be in touch within one business day.</p>
                <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                  <label htmlFor="consultation-name">Name<input id="consultation-name" name="name" required autoFocus /></label>
                  <label htmlFor="consultation-email">Email<input id="consultation-email" name="email" type="email" required /></label>
                  <label htmlFor="consultation-service">What would you like help with?<select id="consultation-service" name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Business Services</option><option>Tax Services</option><option>Trust & Estate Services</option><option>Something else</option></select></label>
                  <label htmlFor="consultation-message">Message<textarea id="consultation-message" name="message" rows="3" /></label>
                  <button className="button button-primary" type="submit">Request a consultation <ArrowRight /></button>
                </form>
              </>
            ) : (
              <div className="success-state">
                <SealCheck weight="regular" />
                <p className="eyebrow">Request received</p>
                <h2 id="modal-title">Thank you — we’ll be in touch.</h2>
                <p>This is a demo interaction. In the live site, the enquiry would be securely sent to the Greenlane CA team.</p>
                <button className="button button-primary" onClick={closeModal}>Return to website</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
