// Shared project data used by the portfolio grid and the project detail page.
// Each project ships with a matching 3D render (photo) AND a hand-authored 2D
// floor plan (SVG room layout) so the 2D plan view always matches the 3D home.

// Real hand-drawn architectural plan (user-provided). Used as a plan override.
import realPlan from "../../imports/Professional_2D_architectural_floor_plan_202606210843__1_.jpeg";
import zenith3D from "../../imports/Copilot_20260724_021406.png";
import willow3D from "../../imports/Dramatic_architectural_3D_visualization_of_202606030723.jpeg";
import willow2D from "../../imports/Professional_architectural_2D_floor_plan_202606030657.jpeg";
import oasis3D from "../../imports/Ground_Floor_details__A_wide__202606211937.jpeg";
import oasis2D from "../../imports/Ground_Floor_details_include_all_202606211937.jpeg";
import forest3D from "../../imports/A_high-quality_3D_architectural_render__202606071736.jpeg";
import forest2D from "../../imports/A_detailed__precise__professional-grade_architectural_202606071730.jpeg";
import serenity2D from "../../imports/Ground_Floor_details_include_all_202606211937-1.jpeg";

export type Room = {
  name: string;
  // Coordinates within a 100 x 80 grid (tiled so rooms never overlap).
  x: number;
  y: number;
  w: number;
  h: number;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  value: string;
  beds: number;
  baths: number;
  area: string;
  desc: string;
  longDesc: string;
  features: string[];
  image3D: string;
  rooms: Room[];
  planTitle?: string;
  // Optional: a real 2D plan image (imported binding). Overrides the SVG plan.
  plan2DImage?: string;
};

// ---- Reusable floor-plan layouts (each tiles the full 100 x 80 canvas) ----

const villaLayout: Room[] = [
  { name: "Living Area", x: 0, y: 0, w: 40, h: 50 },
  { name: "Dining Area", x: 40, y: 0, w: 32, h: 28 },
  { name: "Kitchen", x: 72, y: 0, w: 28, h: 28 },
  { name: "Bath Room", x: 40, y: 28, w: 22, h: 22 },
  { name: "Bedroom 1", x: 62, y: 28, w: 38, h: 22 },
  { name: "Bedroom 2", x: 0, y: 50, w: 34, h: 30 },
  { name: "Bedroom 3", x: 34, y: 50, w: 30, h: 30 },
  { name: "Verandah & Car Park", x: 64, y: 50, w: 36, h: 30 },
];

const cabinLayout: Room[] = [
  { name: "Living / Kitchen", x: 0, y: 0, w: 58, h: 50 },
  { name: "Dining Area", x: 0, y: 50, w: 30, h: 30 },
  { name: "Bath Room", x: 30, y: 50, w: 28, h: 30 },
  { name: "Bedroom", x: 58, y: 0, w: 42, h: 80 },
];

const minimalLayout: Room[] = [
  { name: "Open Living", x: 0, y: 0, w: 54, h: 46 },
  { name: "Kitchen", x: 54, y: 0, w: 46, h: 26 },
  { name: "Dining Area", x: 54, y: 26, w: 46, h: 20 },
  { name: "Bedroom 1", x: 0, y: 46, w: 38, h: 34 },
  { name: "Bath Room", x: 38, y: 46, w: 24, h: 34 },
  { name: "Bedroom 2", x: 62, y: 46, w: 38, h: 34 },
];

const ecoLayout: Room[] = [
  { name: "Living", x: 0, y: 0, w: 48, h: 44 },
  { name: "Kitchen", x: 48, y: 0, w: 52, h: 24 },
  { name: "Dining Area", x: 48, y: 24, w: 52, h: 20 },
  { name: "Bedroom 1", x: 0, y: 44, w: 34, h: 36 },
  { name: "Bath Room", x: 34, y: 44, w: 28, h: 36 },
  { name: "Bedroom 2", x: 62, y: 44, w: 38, h: 36 },
];

export const categories = ["All", "Modern Villa", "Cozy Cabin", "Minimalist", "Eco-Home"];

export const projects: Project[] = [
  {
    slug: "willow-modern-villa",
    title: "Willow Modern Villa",
    category: "Modern Villa",
    location: "Kandy",
    year: "2026",
    value: "LKR 22M",
    beds: 3,
    baths: 1,
    area: "1,450 sq ft",
    desc: "A compact 3-bedroom family villa with an open living area and plenty of natural light.",
    longDesc:
      "Willow Modern Villa is a smart, budget-friendly family home designed for growing families. The single-storey layout keeps construction simple and affordable while a large glazed living room brings in daylight all day long. Three well-proportioned bedrooms share a central bath, and the kitchen opens directly onto the living space.",
    features: ["Open-plan living", "Three bedrooms", "Large windows", "Low-maintenance finishes"],
    image3D: willow3D,
    rooms: villaLayout,
    planTitle: "Ground Floor Plan",
    plan2DImage: willow2D,
  },
  {
    slug: "pine-retreat-cabin",
    title: "Pine Retreat Cabin",
    category: "Cozy Cabin",
    location: "Nuwara Eliya",
    year: "2026",
    value: "LKR 9M",
    beds: 1,
    baths: 1,
    area: "620 sq ft",
    desc: "A charming one-bedroom timber cabin with a warm, open living and kitchen space.",
    longDesc:
      "Pine Retreat is an affordable weekend cabin built from locally sourced timber. The open living-and-kitchen zone flows to a single cozy bedroom with an adjoining bath, making it ideal as a starter home or holiday getaway in the hills.",
    features: ["Timber construction", "Open living & kitchen", "One bedroom", "Passive insulation"],
    image3D:
      "https://images.unsplash.com/photo-1595521624992-48a59aef95e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
    rooms: cabinLayout,
  },
  {
    slug: "oasis-minimalist-home",
    title: "Oasis Minimalist Home",
    category: "Minimalist",
    location: "Colombo",
    year: "2026",
    value: "LKR 16M",
    beds: 2,
    baths: 1,
    area: "980 sq ft",
    desc: "A clean two-bedroom home focused on simple geometry and uncluttered flow.",
    longDesc:
      "Oasis is a minimalist two-bedroom residence built around a bright open living space and a functional kitchen. Its simple rectangular footprint keeps costs down while the pared-back finishes give the home a calm, modern feel.",
    features: ["Two bedrooms", "Open living space", "Simple footprint", "Modern finishes"],
    image3D: oasis3D,
    rooms: minimalLayout,
    planTitle: "Ground Floor Plan",
    plan2DImage: oasis2D,
  },
  {
    slug: "serenity-eco-bungalow",
    title: "Serenity Eco-Bungalow",
    category: "Eco-Home",
    location: "Galle",
    year: "2026",
    value: "LKR 12M",
    beds: 2,
    baths: 1,
    area: "870 sq ft",
    desc: "A small energy-efficient bungalow using sustainable materials and passive cooling.",
    longDesc:
      "Serenity is a two-bedroom eco-bungalow designed for coastal living. Cross-ventilation and shaded openings keep interiors cool without air-conditioning, while sustainable materials keep both the budget and the carbon footprint low.",
    features: ["Passive cooling", "Sustainable materials", "Two bedrooms", "Rain-water ready"],
    image3D:
      "https://images.unsplash.com/photo-1756706718604-ef4af3970e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
    rooms: ecoLayout,
    planTitle: "Ground Floor Plan",
    plan2DImage: serenity2D,
  },
  {
    slug: "zenith-family-home",
    title: "Zenith Family Home",
    category: "Modern Villa",
    location: "Negombo",
    year: "2026",
    value: "LKR 24M",
    beds: 4,
    baths: 3,
    area: "1,850 sq ft",
    desc: "A two-storey four-bedroom family home with a covered car park and terrace.",
    longDesc:
      "Zenith is our flagship two-storey family home. The ground floor holds an open living and dining area, wet + dry kitchen and a covered verandah car park, while the first floor adds four bedrooms, three baths and a balcony terrace — everything a growing family needs, built to a real drafted plan.",
    features: ["Four bedrooms", "Two storeys", "Covered car park", "Balcony & terrace"],
    image3D: zenith3D,
    rooms: villaLayout,
    planTitle: "Ground & First Floor Plan",
    plan2DImage: realPlan,
  },
  {
    slug: "forest-edge-cabin",
    title: "Forest Edge Cabin",
    category: "Cozy Cabin",
    location: "Ella",
    year: "2026",
    value: "LKR 8M",
    beds: 1,
    baths: 1,
    area: "540 sq ft",
    desc: "A secluded studio-style cabin getaway that blends into the woodlands.",
    longDesc:
      "Forest Edge is our most affordable build — a compact studio-style cabin with an open living-kitchen area and a single private bedroom. Perfect as a first home or a quiet retreat tucked into the trees.",
    features: ["Most affordable build", "Studio-style layout", "Timber deck ready", "Quick to build"],
    image3D: forest3D,
    rooms: cabinLayout,
    planTitle: "Floor Plan",
    plan2DImage: forest2D,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
