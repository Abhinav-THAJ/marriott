export interface HospitalFacility {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  operatingHours: string;
  location: string;
  amenities: string[];
  guidelines: string[];
  imageUrl: string;
}

export const facilitiesData: HospitalFacility[] = [
  {
    id: "fac-rooms",
    slug: "patient-rooms",
    title: "Patient Rooms & Suites",
    summary: "A spectrum of patient accommodations from economical shared rooms to executive deluxe suites designed for rest and healing.",
    description: "Every room at Marriott Hospital is engineered for clinical safety, hygiene, and patient dignity. Natural light, acoustic damping materials, private en-suite bathrooms, motorized hospital beds, and nurse-call emergency switches ensure an optimal environment for recuperation.",
    operatingHours: "24/7 Inpatient Service",
    location: "Inpatient Towers (Floors 4 to 9)",
    amenities: [
      "Motorized multi-position orthopaedic hospital bed",
      "Ergonomic companion sofa-bed for attending family member",
      "Nurse-Aid Emergency Intercom by bedside and in washroom",
      "High-speed fiber Wi-Fi, telephone, and LED Smart TV",
      "Individually controlled climate air-conditioning with HEPA filtering"
    ],
    guidelines: [
      "Only one overnight attendant is permitted in private and shared rooms.",
      "Quiet hours are observed across all inpatient wards between 09:30 PM and 06:30 AM.",
      "Outside cooked food is restricted to prevent bacterial contamination."
    ],
    imageUrl: "/images/hospital/reception.jpg"
  },
  {
    id: "fac-waiting",
    slug: "waiting-areas",
    title: "Comfortable Waiting Lounges",
    summary: "Spacious, naturally lit reception areas with ergonomic seating, charging stations, and live queue displays.",
    description: "Waiting areas are designed to ease anxiety with panoramic garden views, soft indoor biophilic greenery, clean ambient air, accessible restrooms, and convenient cafeteria access.",
    operatingHours: "07:00 AM - 09:00 PM",
    location: "All OPD Floors and Surgical Reception",
    amenities: [
      "Cushioned antimicrobial ergonomic seating",
      "High-definition digital token display monitors",
      "Universal USB device charging stations",
      "Complimentary purified chilled and warm drinking water",
      "Dedicated reading materials and health awareness monitors"
    ],
    guidelines: [
      "Please keep mobile phones on silent mode in all waiting lounges.",
      "Children must be supervised at all times by an adult."
    ],
    imageUrl: "/images/hospital/reception.jpg"
  },
  {
    id: "fac-pharmacy",
    slug: "pharmacy",
    title: "24x7 In-Campus Pharmacy",
    summary: "Fully computerized dispensing pharmacy stocking genuine pharmaceuticals, surgical supplies, and critical care medicines.",
    description: "Our hospital pharmacy adheres to stringent temperature-controlled cold chain storage for vaccines, insulins, and biologicals. Computerized barcode verification ensures 100% medication accuracy before dispensing.",
    operatingHours: "24 Hours / 365 Days",
    location: "Ground Floor Main Lobby & Emergency Entrance",
    amenities: [
      "Direct electronic prescription receipt from OPD consulting suites",
      "Round-the-clock clinical pharmacist consultation and drug interaction review",
      "Wide inventory of specialized oncology, cardiology, and paediatric formulations",
      "Emergency bedside medication delivery for admitted patients"
    ],
    guidelines: [
      "A valid physical or digital medical prescription is mandatory for scheduled medications.",
      "Keep all medicine bills safely for insurance reimbursement."
    ],
    imageUrl: "/images/facilities/diagnostic-imaging.jpg"
  },
  {
    id: "fac-dietary",
    slug: "cafeteria-dietary",
    title: "Clinical Dietary & Visitor Cafeteria",
    summary: "Nutritious, hygienic culinary services curated by clinical dietitians alongside a wholesome public dining cafe.",
    description: "The Marriott Hospital Department of Clinical Nutrition formulates customized therapeutic diets based on each patient's medical condition (e.g. low-sodium, renal, diabetic, soft post-op). Our visitor cafeteria offers wholesome, fresh meals and beverages in a bright, spotless dining hall.",
    operatingHours: "Cafeteria: 06:30 AM - 10:30 PM; Patient Room Service: Scheduled meal times",
    location: "Ground Floor Atrium (West Wing)",
    amenities: [
      "Nutrient-balanced vegetarian and non-vegetarian meal choices",
      "FSSAI certified commercial kitchen with automated steam cooking",
      "Specialty diabetic-friendly snacks, herbal teas, and fresh cold-pressed juices",
      "Clean dining tables, contactless digital payments, and hand sanitizing stations"
    ],
    guidelines: [
      "Patients must consume only the clinically prescribed diet prepared by the hospital kitchen.",
      "Outside commercial food deliveries are strictly restricted to inpatient wards."
    ],
    imageUrl: "/images/hospital/reception.jpg"
  },
  {
    id: "fac-parking",
    slug: "parking-accessibility",
    title: "Parking & Campus Accessibility",
    summary: "Multi-level covered vehicle parking, dedicated disabled access, ramps, elevators, and golf-cart transit.",
    description: "The hospital campus provides seamless barrier-free transit for elderly patients and individuals with mobility impairments, conforming with universal design accessibility norms.",
    operatingHours: "24 Hours / 7 Days",
    location: "South Campus Gate 2",
    amenities: [
      "Over 450 covered car parking spaces with valet parking service",
      "Designated wide-berth parking bays reserved for differently-abled visitors",
      "Smooth non-slip gradient ramps and wide automated sliding doors",
      "Spacious hospital bed-lifts with braille floor buttons and audio floor annunciators",
      "Electric buggies for patient transport across campus courtyards"
    ],
    guidelines: [
      "Emergency ambulance lanes must be kept clear at all times. Violating vehicles will be towed.",
      "Valet parking tokens should be retained until vehicle retrieval."
    ],
    imageUrl: "/images/hospital/exterior.jpg"
  },
  {
    id: "fac-bloodbank",
    slug: "blood-bank",
    title: "Licensed Blood Bank & Component Separation",
    summary: "24/7 certified blood bank providing leukoreduced red cells, fresh frozen plasma, platelets, and cryoprecipitate.",
    description: "Operating with advanced chemiluminescence nucleic acid testing (NAT) to ensure ultra-safe blood products. Dedicated voluntary donor couches and mobile donation vans serve emergency trauma, open-heart surgeries, and oncology patients.",
    operatingHours: "24 Hours / 365 Days",
    location: "Level 1, Diagnostic Pavilion",
    amenities: [
      "Aphaeresis cell separator for single-donor platelet (SDP) harvesting",
      "Automatic blood group serology and cross-matching systems",
      "Ultra-low deep freezers with 24/7 temperature monitoring and power backups",
      "Comfortable donor screening booths and refreshment lounge"
    ],
    guidelines: [
      "Voluntary donors must be aged 18-65, weight > 45 kg, with normal haemoglobin.",
      "Replacement donors are encouraged to maintain blood inventory for scheduled surgeries."
    ],
    imageUrl: "/images/departments/cardiology.jpg"
  }
];

export const facilities = facilitiesData;
