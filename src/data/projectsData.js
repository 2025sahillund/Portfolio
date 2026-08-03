const projectsData = [
  {
    id: 1,

    featured: true,

    title: "FRZIT",

    subtitle: "Flood Risk Zone Identification Tool",

    category: "Desktop GIS Application",

   description:
"A desktop GIS application that identifies flood-prone areas through terrain analysis, rainfall modelling, and OpenStreetMap integration to support disaster planning.",
    problem:
"Flood-risk mapping requires multiple GIS tools and repetitive manual processing, making the workflow slow, fragmented, and difficult to manage.",
    solution:
"FRZIT integrates terrain analysis, rainfall processing, flood-risk mapping, and OpenStreetMap visualization into one desktop GIS application.",

    impact: [
      "Integrated terrain, rainfall, and flood analysis into a single desktop GIS application.",
      "Reduced repetitive manual GIS processing through workflow automation.",
      "Visualized nearby emergency facilities using OpenStreetMap integration.",
      "Simplified flood-risk assessment for disaster planning."
    ],

    technologies: [
      "Python",
      "QGIS",
      "PyQt5",
      "GDAL",
      "Rasterio",
      "GeoPandas",
      "NumPy",
      "Folium"
    ],

    features: [
      "Raster Display",
      "Raster Clipping",
      "Rainfall Interpolation",
      "Slope Analysis",
      "Flood Risk Mapping",
      "Hospital Mapping",
      "OpenStreetMap Integration",
      "AHP Weight Matrix"
    ],

    heroImage: "/assets/projects/frzit/frzit2.jpg",

   gallery: [
  {
    id: 1,
    title: "Desktop GIS Workspace",
    shortTitle: "Workspace",
    image: "/assets/projects/frzit/frzit2.jpg",
    description:
      "Import datasets and configure flood-risk analysis before processing terrain and rainfall layers."
  },

  {
    id: 2,
    title: "Flood Risk Analysis",
    shortTitle: "Flood Analysis",
    image: "/assets/projects/frzit/frzit5.jpg",
    description:
      "Visualize flood susceptibility zones and nearby emergency facilities using OpenStreetMap."
  },

  {
    id: 3,
    title: "Rainfall Surface",
    shortTitle: "Rainfall",
    image: "/assets/projects/frzit/frzit7.jpg",
    description:
      "Generate rainfall interpolation to support accurate flood-risk modelling."
  },

  {
    id: 4,
    title: "AHP Configuration",
    shortTitle: "AHP",
    image: "/assets/projects/frzit/frzit4.jpg",
    description:
      "Configure weighted criteria using the Analytical Hierarchy Process."
  },

  {
    id: 5,
    title: "Raster Visualization",
    shortTitle: "Raster",
    image: "/assets/projects/frzit/frzit3.jpg",
    description:
      "Preview processed raster layers before exporting the final flood-risk map."
  }
],
    github: "#",

    demo: "#"
  },
  

  {
    id: 2,

    featured: false,

    title: "CareSync",
    showInProjects: false,

    subtitle: "Smart Healthcare Management Platform",

    category: "Cross Platform Mobile Application",

    description:
      "A Flutter-based healthcare platform for medicine reminders, patient records and health monitoring using Firebase backend services.",

    challenge:
      "Patients often struggle to manage medications and maintain health records efficiently.",

    contribution: [
      "Developed Flutter UI.",
      "Implemented Firebase Authentication.",
      "Integrated Firestore database.",
      "Created medicine reminder system.",
      "Built patient management workflow."
    ],

    technologies: [
      "Flutter",
      "Firebase",
      "Firestore",
      "Dart",
      "REST API"
    ],

    features: [
      "Medicine Reminder",
      "Health Tracking",
      "Patient Records",
      "Authentication",
      "Emergency Contact"
    ],

    heroImage: "/assets/projects/caresync/dashboard.jpg",

    gallery: [
      {
        title: "Dashboard",
        description: "Application dashboard.",
        image: "/assets/projects/caresync/dashboard.jpg"
      },

      {
        title: "Medicine Reminder",
        description: "Medication reminder module.",
        image: "/assets/projects/caresync/reminder.jpg"
      },

      {
        title: "Patient Records",
        description: "Patient management screen.",
        image: "/assets/projects/caresync/patient.jpg"
      },

      {
        title: "Health Tracking",
        description: "Health monitoring dashboard.",
        image: "/assets/projects/caresync/health.jpg"
      }
    ],

    github: "#",

    demo: "#"
  }
];

export default projectsData;