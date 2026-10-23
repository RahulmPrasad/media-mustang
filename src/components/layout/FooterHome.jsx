import SocialLinks from "./SocialLinks";

// Each inner array is one `.swiper-slide` column; a column can hold several menus.
const columns = [
  [
    {
      title: "Agency",
      href: "https://technians.com/agency/",
      tagline: "Performance & Creativity",
      slug: "agency-footer-menu-one",
      links: ["Digital Marketing", "Social Media Marketing", "SEO Services", "E-commerce Marketing", "Lead Generation", "Amazon Marketing", "PPC Ads Management", "Influencer Marketing", "Search Engine Marketing", "Mobile Marketing", "Local SEO", "Content Marketing", "SMM & SEO"],
    },
  ],
  [
    {
      title: "Studio",
      href: "https://technians.com/studio/",
      tagline: "Story Telling & User Experience",
      slug: "studio-footer-menu-second",
      links: ["Website Design", "UI/UX Design", "Video Production", "Product Photography", "Crypto Marketing", "NFT Marketing", "MLM Marketing"],
    },
    {
      title: "Quick Links",
      href: "#",
      tagline: "Official Instant Clicks",
      slug: "quick-link-footer-menu-third",
      links: ["Privacy Policy", "Cookies Policy", "Legal Stuff", "Submit Feedback"],
    },
  ],
  [
    {
      title: "Technology",
      href: "https://technians.com/technology/",
      tagline: "Automations & Applications",
      slug: "technology-footer-menu-fourth",
      links: ["Website Development", "Mobile Apps Development", "WordPress Development", "Cloud Applications Development", "Odoo Development"],
    },
    {
      title: "Resources",
      href: "https://technians.com/resource/",
      tagline: "Pool of means and knowledge ",
      slug: "resources-footer-menu-fifth",
      links: ["Case Studies", "Reach Us", "Industry News", "Blogs", "Resource", "Admin Login"],
    },
  ],
  [
    {
      title: "Digital Audience",
      href: "https://technians.com/google-audience/",
      tagline: "Source to target accurate audience",
      slug: "digital-footer-menu-sixth",
      links: ["Facebook Audience", "Google Audience", "Linkedin Audience"],
    },
    {
      title: "Tools",
      href: "https://technians.com/resource/",
      tagline: "Handy tools for growth",
      slug: "tools-footer-menu-seventh",
      links: ["B2C Sales Calculator", "B2B Sales Calculator", "Lead generation Calculator", "ROI Calculator", "Keyword Match Tool", "Buyer Persona Builder", "Questionnaire"],
    },
  ],
];

function FooterMenu({ title, href, tagline, slug, links }) {
  return (
    <div className="ftrlist">
      <div className="ftr-titel out enterleave">
        <a href={href}>
          <span className="spanbg neg"></span>
          <span className="spntext cgqhmx">
            <h6 className="widget-title">{title}</h6>
          </span>
        </a>
        <p>{tagline}</p>
      </div>
      <div className={`menu-${slug}-container`}>
        <ul id={`menu-${slug}`} className="menu">
          {links.map((label) => (
            <li key={label} className="menu-item menu-item-type-custom menu-item-object-custom out enterleave">
              <a href="#" className="alst">
                <span className="spanbg neg"></span>
                <h6 className="spntext cgqhmx">{label}</h6>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function FooterHome() {
  return (
    <div className="rts-footer-two bg-dark-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-top-area-two rts-section-gapBottom">
              <div className="logo-area">
                <a href="#">
                  <img src="/assets/images/logo/logo-dark.png" width="250" height="30" alt="logo" />
                </a>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="swiper-container footer-Links mt-5">
          <div className="swiper-wrapper footer-wrapper" id="last-sec">
            {columns.map((menus) => (
              <div className="swiper-slide" key={menus[0].slug}>
                {menus.map((menu) => (
                  <FooterMenu key={menu.slug} {...menu} />
                ))}
              </div>
            ))}
          </div>
          <div className="ftr-cards-pagination text-center"></div>
        </div>
        <div className="row pb--80 pt--40">
          <div className="col-lg-12">
            <div className="copyright-area-start area-two">
              <p>© 2024 Media Mustang Copyright Policy.</p>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
