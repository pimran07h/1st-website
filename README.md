# 🌾 AGRI ADVISORY // FARMER INTELLIGENCE SYSTEM

A centralized, institutional agricultural intelligence portal designed for regional cultivators and agronomic advisory.

## 📌 Portal Modules & Features
* **Crop Advisory & Gazetteer**: Detailed agronomic cultivation metrics across 8 statutory crops (Wheat, Rice, Cotton, Soybean, Onion, Tomato, Maize, Sugarcane).
* **Soil Stoichiometry Diagnostics**: Zonal soil analysis measuring pH, gravimetric moisture, electrical conductivity, and N-P-K-OC nutritional ratios.
* **Fertilizer Dosage & Urea Partitioning**: Basal and top-dressing application schedules calibrated for vegetative tillering.
* **Meteorological Telemetry**: High-precision ambient temperature tracking, barometric gradient monitoring, and 7-day algorithmic forecasts.
* **Phytosanitary & Pest Warnings**: Early warning alerts for Fall Armyworm and regional defoliation risks.
* **APMC Mandi Quotations**: Real-time daily wholesale prices, market arrivals, and modal price trends.
* **Farmer Diagnostic Instrument**: Form for cultivating parameters, soil classifications, and custom advisories.
* **Advanced Agronomic Telemetry**: Cognitive inference coupling and multi-variable index evaluations.

## 🚀 Running Locally
You can run this project locally using any static web server:

### Option 1: Native PowerShell Server (Windows)
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Option 2: Python HTTP Server
```bash
python -m http.server 8080
```

### Option 3: Node / NPX
```bash
npx serve .
```

## 📁 Repository Structure
```
├── index.html        # Primary HTML structure
├── styles.css        # Enterprise styling & layout
├── app.js            # Interactive logic & diagnostic calculation
├── server.ps1        # Lightweight native PowerShell HTTP server
├── README.md         # Project documentation
└── assets/           # High-resolution agricultural cultivar photography
    ├── wheat.jpg
    ├── rice.jpg
    ├── soybean.jpg
    ├── tomato.jpg
    ├── onion.jpg
    ├── maize.jpg
    └── sugarcane.jpg
```

---
*Administered under the Department of Agronomic Informatics & Rural Equilibrium.*
