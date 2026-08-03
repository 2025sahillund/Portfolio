const researchData = {
  company: "International Institute of Information Technology (I²IT), Pune",
  role: "GIS Research Intern",
  duration: " July 2024 - August 2024 ",

  about: [
    "During my internship at the International Institute of Information Technology (I²IT), Pune, I worked on a GIS-based Flood Risk Assessment project for Pune District. This internship gave me hands-on experience in Geographic Information Systems (GIS), spatial data processing, and Python-based analysis.",

    "My work involved preparing, processing, and analyzing multiple geospatial datasets to understand how different environmental factors contribute to flooding. I learned how satellite data, elevation models, river networks, land use, soil properties, and population information can be combined to identify flood-prone areas.",

    "Using QGIS and Python, I created thematic maps, performed raster and vector analysis, implemented the Analytical Hierarchy Process (AHP), and generated flood hazard and flood risk maps for disaster management and planning."
  ],

  work: [
    "Collected and prepared geospatial datasets required for flood risk analysis.",
    "Processed DEM, river networks, land use, soil, and population datasets using QGIS.",
    "Performed clipping, buffering, raster calculations, vector overlays, and spatial analysis.",
    "Created thematic maps including river proximity, slope, land use, and flood hazard layers.",
    "Implemented the Analytical Hierarchy Process (AHP) using Python to calculate weighted flood hazard indices.",
    "Generated professional GIS layouts with legends, north arrows, coordinate grids, and scale bars.",
    "Prepared final flood hazard and flood risk maps for Pune District.",
    "Learned practical GIS workflows used in environmental analysis and disaster management."
  ],

  gallery: [
  {
    image: "/assets/internship/img1.jpg",
    title: "River & Stream Network",
    description:
      "Mapped the complete river and stream network of Pune District using QGIS. This dataset was one of the primary inputs for flood risk assessment."
  },

  {
    image: "/assets/internship/img2.jpg",
    title: "Land Use & Land Cover",
    description:
      "Classified land into vegetation, built-up areas, water bodies, and barren land to understand how land cover influences flood vulnerability."
  },

  {
    image: "/assets/internship/img3.jpg",
    title: "Slope Analysis",
    description:
      "Generated slope maps from Digital Elevation Models (DEM) to identify terrain characteristics and water flow patterns."
  },

  {
    image: "/assets/internship/img4.jpg",
    title: "Flood Hazard Index",
    description:
      "Combined multiple GIS layers using the Analytical Hierarchy Process (AHP) in Python to generate flood hazard zones."
  },

  {
    image: "/assets/internship/img6.jpg",
    title: "Final Flood Risk Map",
    description:
      "Produced the final flood risk assessment map by integrating environmental and geographical parameters."
  },

    {
    image: "/assets/internship/img8.jpg",
    title: "District Flood Risk Map",
    description:
        "Generated the final district-wide flood risk map by integrating hazard, vulnerability, population, and environmental datasets. The map classifies different areas into risk zones, providing valuable insights for disaster management and urban planning."
    }
    
],

recommendation: {
  image: "/assets/achievements/ppcrc_offer.jpg",
  pdf: "/assets/achievements/ppcrc_offer.jpg"
},

certificate: {
  image: "/assets/achievements/ppcrc_recommendation.jpg",
  pdf: "/assets/achievements/ppcrc_recommendation.jpg"
}

};

export default researchData;

