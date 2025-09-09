import atmos from "../assets/atmos-furnaces.jpg";
import batch from "../assets/batch-type.jpg";
import bogie from "../assets/Bogie-Hearth-Furnace.jpg";
import main from "../assets/main.jpg";
import materialHandling from "../assets/Material-handling-systems.png";
import mesh from "../assets/Mesh-belt-furnaces.jpg";
import rotaryHearth from "../assets/Rotary Hearth Furnace.jpg";
import rotaryRetort from "../assets/rotary-retort-furnace.jpg";
import rxEndo from "../assets/RX-Endothermic-Generator2.jpg";
import Comphrehensive from "../assets/Comphrehensive.png";

export const PRODUCTS = [
  {
    id: "mesh-belt-furnace",
    name: "Mesh Belt Continuous Conveyor Furnace",
    image: `${mesh}`,
    details: {
      temperature: "180°C – 900°C",
      atmosphere: "N₂–Methanol or Endothermic gas",
      features: [
        "80–1000 kg/hr production rate",
        "Hardening, Carburising, Carbonitriding",
        "Washing, Annealing, Tempering",
        "Isothermal Annealing & Stress Relieving",
      ],
      applications: [
        "Automotive stampings & fasteners",
        "Precision machined components",
        "Valve lifters and small castings",
        "Bearings and general hardware",
      ],
    },
  },
  {
    id: "sealed-quench",
    name: "Batch Type Sealed Quench Furnace",
    image: `${batch}`,
    details: {
      temperature: "Process-specific",
      atmosphere: "Endo gas, N₂–Methanol, Fine Carburising",
      features: [
        "Uniform side heating via radiant tubes",
        "Integral fan for temperature uniformity",
        "PLC w/ PID, Carbon potential control",
        "Touchscreen HMI & data recording",
      ],
      applications: [
        "Carburising & carbonitriding of gears",
        "Hardening of tool parts",
        "Bright hardening and annealing",
        "Precipitation hardening and normalizing",
      ],
    },
  },
  {
    id: "rotary-hearth",
    name: "Rotary Hearth Furnace",
    image: `${rotaryHearth}`,
    details: {
      temperature: "Process-specific",
      atmosphere: "Application-specific",
      features: ["High throughput", "Uniform heating", "Robust build"],
      applications: ["Forgings reheating", "Isothermal treatments", "Large rings & components"],
    },
  },
  {
    id: "rotary-retort",
    name: "Rotary Retort Furnace",
    image: `${rotaryRetort}`,
    details: {
      temperature: "Process-specific",
      atmosphere: "Application-specific",
      features: ["Continuous processing", "Consistent atmosphere", "Compact layout"],
    },
  },
  {
    id: "endo-gas",
    name: "Endo‑gas Generator",
    image: `${rxEndo}`,
    details: {
      temperature: "N/A",
      atmosphere: "Endothermic gas",
      features: ["Stable gas generation", "Process integration", "High reliability"],
    },
  },
  {
    id: "material-handling",
    name: "Material Handling Systems",
    image: `${materialHandling}`,
    details: { features: ["Integrated conveyors", "Elevators", "Turnkey integration"] },
  },
  {
    id: "annealing-Bluing",
    name: "Annealing cum Bluing Furnace",
    image: `${bogie}`,
    details: {
      temperature: "Process-specific",
      atmosphere: "Controlled",
      features: ["Two-stage processing", "Tight control", "Repeatable results"],
    },
  },
  {
    id: "tempering",
    name: "Tempering Furnace",
    image: `${atmos}`,
    details: {
      atmosphere: "Air or controlled",
      features: ["Tight temperature control", "Automated recipes", "Data logging"],
    },
  },
]

export const CAROUSEL_ITEMS = [
  {
    title: "Mesh Belt Furnace Line",
    description: "Continuous thermal processing for hardening, carburising and carbonitriding applications.",
    image: `${Comphrehensive}`,
  },
  {
    title: "Sealed Quench System",
    description: "Uniform heating via radiant tubes and integral fan for precise metallurgical results.",
    image: `${batch}`,
  },
  {
    title: "Endo‑Gas Generator",
    description: "Reliable atmosphere generation supporting carburising at scale.",
    image: `${rxEndo}`,
  },
  {
    title: "SCADA & Commissioning",
    description: "SCADA integration and on‑site commissioning for dependable production operations.",
    image: `${main}`,
  },
]
