import {
  FaCreditCard,
  FaCartShopping,
  FaPaypal,
  FaRegMoneyBill1,
  FaLink,
  FaFingerprint,
  FaMortarPestle,
  FaArrowsRotate,
  FaShop,
  FaChartPie,
  FaLayerGroup,
  FaLightbulb,
  FaWallet,
  FaEarthAmericas,
  FaSquarePlus,
  FaBellConcierge,
  FaHandshake,
  FaBook,
  FaBars,
  FaWaveSquare,
  FaCode,
  FaCopy,
  FaLifeRing,
  FaFolderOpen,
  FaFileCircleCheck,
  FaPersonShelter,
  FaPenNib,
  FaCakeCandles,
  FaComments,
  FaNewspaper,
  FaBookOpen,
  FaMedal,
} from "react-icons/fa6";
import { nanoid } from "nanoid";
import { GiRadarSweep } from "react-icons/gi";
import {
  MdAccountBalance,
  MdAccountBalanceWallet,
  MdAttachMoney,
  MdCorporateFare,
  MdCurrencyExchange,
  MdIncompleteCircle,
  MdOutlineEnergySavingsLeaf,
  MdOutlineHub,
  MdOutlineReceiptLong,
  MdOutlineRestorePage,
  MdOutlineSavings,
  MdOutlineSummarize,
  MdSell,
} from "react-icons/md";

const sublinks = [
  {
    pageId: nanoid(),
    page: "products",
    links: [
      {
        Id: nanoid(),
        label: "payment",
        url: "products.html",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, sit?",
        items: [
          {
            Id: nanoid(),
            label: "payment",
            icon: <FaCreditCard />,
            url: "products.html",
            desc: "Online payments",
          },
          {
            Id: nanoid(),
            label: "Checkout",
            icon: <FaCartShopping />,
            url: "products.html",
            desc: "Pre-built payments page",
          },
          {
            Id: nanoid(),
            label: "Elements",
            icon: <FaPaypal />,
            url: "products.html",
            desc: "Customizable payments UIs",
          },
          {
            Id: nanoid(),
            label: "Payment Links",
            icon: <FaRegMoneyBill1 />,
            url: "products.html",
            desc: "No-code payments",
          },
          {
            Id: nanoid(),
            label: "Radar",
            icon: <GiRadarSweep />,
            url: "products.html",
            desc: "Fraud & risk management",
          },
          {
            Id: nanoid(),
            label: "Connect",
            icon: <MdOutlineHub />,
            url: "products.html",
            desc: "Payments for platforms",
          },
          {
            Id: nanoid(),
            label: "Billing",
            icon: <MdAttachMoney />,
            url: "products.html",
            desc: "Subscription management",
          },
          {
            Id: nanoid(),
            label: "Invoicing",
            icon: <MdOutlineReceiptLong />,
            url: "products.html",
            desc: "Online invoices",
          },
          {
            Id: nanoid(),
            label: "Terminal",
            icon: <MdCurrencyExchange />,
            url: "products.html",
            desc: "In-person payments",
          },
          {
            Id: nanoid(),
            label: "Financial Connections",
            icon: <FaLink />,
            url: "products.html",
            desc: "Linked financial account data",
          },
          {
            Id: nanoid(),
            label: "Identity",
            icon: <FaFingerprint />,
            url: "products.html",
            desc: "Online identity verification",
          },
        ],
      },
      {
        Id: nanoid(),
        label: "revenue",
        url: "products.html",
        desc: "Lorem ipsum dolor sit amet.",
        items: [
          {
            Id: nanoid(),
            label: "Billing",
            icon: <MdAttachMoney />,
            url: "products.html",
            desc: "Subscription management",
          },
          {
            Id: nanoid(),
            label: "Invoicing",
            icon: <MdOutlineReceiptLong />,
            url: "products.html",
            desc: "Online invoices",
          },
          {
            Id: nanoid(),
            label: "Tax",
            icon: <MdIncompleteCircle />,
            url: "products.html",
            desc: "Sales tax & VAT automation",
          },
          {
            Id: nanoid(),
            label: "Revenue Recognition",
            icon: <MdAccountBalance />,
            url: "products.html",
            desc: "Accounting automation",
          },
          {
            Id: nanoid(),
            label: "Sigma",
            icon: <MdOutlineSummarize />,
            url: "products.html",
            desc: "Custom reports",
          },
          {
            Id: nanoid(),
            label: "Data Pipeline",
            icon: <MdOutlineRestorePage />,
            url: "products.html",
            desc: "Data warehouse sync",
          },
          {
            Id: nanoid(),
            label: "Atlas",
            icon: <MdCorporateFare />,
            url: "products.html",
            desc: "Startup incorporation",
          },
          {
            Id: nanoid(),
            label: "Climate",
            icon: <MdOutlineEnergySavingsLeaf />,
            url: "products.html",
            desc: "Carbon removal",
          },
        ],
      },
      {
        Id: nanoid(),
        label: "service",
        url: "products.html",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        items: [
          {
            Id: nanoid(),
            label: "Connect",
            icon: <FaLink />,
            url: "products.html",
            desc: "Payments for platforms",
          },
          {
            Id: nanoid(),
            label: "Capital",
            icon: <MdOutlineSavings />,
            url: "products.html",
            desc: "Business financing",
          },
          {
            Id: nanoid(),
            label: "Issuing",
            icon: <MdSell />,
            url: "products.html",
            desc: "Card creation",
          },
          {
            Id: nanoid(),
            label: "Treasury",
            icon: <MdAccountBalanceWallet />,
            url: "products.html",
            desc: "Banking-as-a-service",
          },
        ],
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "solutions",
    links: [
      {
        Id: nanoid(),
        title: "usecase",
        items: [
          {
            Id: nanoid(),
            label: "Ecommerce",
            icon: <FaMortarPestle />,
            url: "solutions.html",
          },
          {
            Id: nanoid(),
            label: "SaaS",
            icon: <FaArrowsRotate />,
            url: "solutions.html",
          },
          {
            Id: nanoid(),
            label: "Marketplaces",
            icon: <FaShop />,
            url: "solutions.html",
          },
          {
            Id: nanoid(),
            label: "Embedded Finance",
            icon: <FaChartPie />,
            url: "solutions.html",
          },
          {
            Id: nanoid(),
            label: "Platforms",
            icon: <FaLayerGroup />,
            url: "solutions.html",
          },
          {
            Id: nanoid(),
            label: "Creator Economy",
            icon: <FaLightbulb />,
            url: "solutions.html",
          },
          {
            Id: nanoid(),
            label: "Crypto",
            icon: <FaWallet />,
            url: "solutions.html",
          },
          {
            Id: nanoid(),
            label: "Enterprise",
            icon: <FaEarthAmericas />,
            url: "solutions.html",
          },
        ],
      },
      {
        Id: nanoid(),
        title: "Integrations & Custom Solutions",
        items: [
          {
            Id: nanoid(),
            label: "App Marketplace",
            icon: <FaSquarePlus />,
            url: "solutions.html",
          },
          {
            Id: nanoid(),
            label: "Professional Services",
            icon: <FaBellConcierge />,
            url: "solutions.html",
          },
          {
            Id: nanoid(),
            label: "Partner Ecosystem",
            icon: <FaHandshake />,
            url: "solutions.html",
          },
        ],
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "developers",
    links: [
      {
        Id: nanoid(),
        label: "Documentation",
        icon: <FaBook />,
        url: "developers.html",
        subs: [
          {
            Id: nanoid(),
            title: "Get started",
            items: [
              {
                Id: nanoid(),
                label: "Prebuilt checkout",
                url: "developers.html",
              },
              {
                Id: nanoid(),
                label: "Libraries and SDKs",
                url: "developers.html",
              },
              { Id: nanoid(), label: "Plugins", url: "developers.html" },
            ],
          },
          {
            Id: nanoid(),
            title: "Guides",
            items: [
              {
                Id: nanoid(),
                label: "Accept Online Payments",
                url: "developers.html",
              },
              {
                Id: nanoid(),
                label: "Manage Subscriptions",
                url: "developers.html",
              },
              { Id: nanoid(), label: "Send Payments", url: "developers.html" },
            ],
          },
        ],
      },
      {
        Id: nanoid(),
        label: "Full API Reference",
        icon: <FaBars />,
        url: "developers.html",
      },
      {
        Id: nanoid(),
        label: "API Status",
        icon: <FaWaveSquare />,
        url: "developers.html",
      },
      {
        Id: nanoid(),
        label: "API Changelog",
        icon: <FaCode />,
        url: "developers.html",
      },
      {
        Id: nanoid(),
        label: "Build a Stripe App",
        icon: <FaCopy />,
        url: "developers.html",
      },
    ],
  },

  {
    pageId: nanoid(),
    page: "resources",
    links: [
      {
        Id: nanoid(),
        label: "Support Center",
        icon: <FaLifeRing />,
        url: "resources.html",
      },
      {
        Id: nanoid(),
        label: "Support Plans",
        icon: <FaFolderOpen />,
        url: "resources.html",
      },
      {
        Id: nanoid(),
        label: "Guides",
        icon: <FaFileCircleCheck />,
        url: "resources.html",
      },
      {
        Id: nanoid(),
        label: "Customer Stories",
        icon: <FaPersonShelter />,
        url: "resources.html",
      },
      {
        Id: nanoid(),
        label: "Blog",
        icon: <FaPenNib />,
        url: "resources.html",
      },
      {
        Id: nanoid(),
        label: "Annual Conference",
        icon: <FaCakeCandles />,
        url: "resources.html",
      },
      {
        Id: nanoid(),
        label: "Contact Sales",
        icon: <FaComments />,
        url: "resources.html",
      },
      {
        Id: nanoid(),
        label: "Jobs",
        icon: <FaCreditCard />,
        url: "resources.html",
      },
      {
        Id: nanoid(),
        label: "Newsroom",
        icon: <FaNewspaper />,
        url: "resources.html",
      },
      {
        Id: nanoid(),
        label: "Stripe Press",
        icon: <FaBookOpen />,
        url: "resources.html",
      },
      {
        Id: nanoid(),
        label: "Become a Partner",
        icon: <FaMedal />,
        url: "resources.html",
      },
    ],
  },
];

export default sublinks;
