import type { LocalePack } from "../index";

/**
 * pages.tmsProductV1 — "ITEM Freight Trust Platform" product deck.
 * Ported from the hosted single-file HTML original, which was English-only;
 * zh / ja / es are new translations. Product names, metrics and acronyms
 * (TMS, WMS, ERP, API, ePOD, eBOL, DIEV, ETA) stay unlocalised.
 */
const pack: LocalePack = {
  en: {
    common: {
      footer: "ITEM Freight Trust Platform — Confidential",
      sectionLabel: "Section",
    },
    nav: [
      "Cover",
      "Trust Problem",
      "Verified Freight",
      "Platform Overview",
      "System Architecture",
      "DIEV + TMS",
      "End-to-End Process",
      "Trailer Inspection",
      "Dock Loading",
      "eBOL & Seal",
      "Multi-Signal Tracking",
      "Checkpoint",
      "AI Control Tower",
      "Delivery & ePOD",
      "Claims",
      "Risk & Scorecard",
      "Data Flow",
      "Dashboard",
      "Integration",
      "Value",
    ],
    cover: {
      title: "ITEM Freight Trust Platform",
      subtitle: "AI-Powered Freight Execution, Verification & Risk Management",
      tagline:
        "Verify the Driver. Verify the Equipment. Verify Every Checkpoint. Trust Every Shipment.",
      chips: ["Shipper TMS", "Identity Verification", "Multi-Signal Tracking", "AI Risk Management"],
      scrollHint: "Scroll",
    },
    problem: {
      title: "Freight Has a Trust Problem",
      subtitle:
        "Traditional freight visibility tells you where a shipment might be. But as a shipper, you cannot verify whether the driver, vehicle, and cargo are actually what they claim to be. The real gap is not visibility — it is verifiability.",
      cards: {
        gps: {
          title: "GPS Can Be Spoofed",
          body: "Drivers or bad actors can disable, spoof, or manipulate GPS signals. A dot on a map does not prove a truck is actually there. Shippers have no way to independently confirm location claims.",
        },
        driverSwap: {
          title: "Drivers Can Be Swapped",
          body: "The person behind the wheel may not be the vetted, assigned driver. Identity fraud and unauthorized driver substitution expose shippers to liability and security risks.",
        },
        equipment: {
          title: "Equipment Can Be Substituted",
          body: "Tractors and trailers can be changed mid-route without shipper knowledge. This breaks the chain of custody and makes it impossible to trace responsibility for damage or theft.",
        },
        photos: {
          title: "Photos Can Be Fabricated",
          body: "Historical, edited, or screen-captured photos can be submitted as current evidence. Without AI verification, shippers cannot distinguish real-time proof from recycled images.",
        },
        seals: {
          title: "Seals Can Be Tampered",
          body: "Traditional bolt seals can be cut and replaced with matching numbers. Without electronic seal monitoring, shippers have no way to detect mid-route tampering.",
        },
        evidence: {
          title: "Claims Evidence is Scattered",
          body: "When cargo theft or damage occurs, evidence is fragmented across emails, phone calls, and disconnected systems. Building a claims case takes weeks instead of minutes.",
        },
      },
      highlight: {
        lead: "Tracked Freight is not Trusted Freight.",
        body: "Shippers need a platform that doesn't just show status updates — it proves transportation facts with multiple independent signals.",
      },
    },
    verified: {
      title: "From Tracked Freight to Verified Freight",
      subtitle:
        "ITEM transforms shipment status updates into verified transportation facts. Instead of relying on a single GPS signal, every critical event is corroborated by multiple independent data sources.",
      vs: "VS",
      traditional: {
        title: "Traditional TMS",
        note: "Single-signal, carrier-reported data",
        items: [
          "Plan shipment",
          "Tender to carrier",
          "Track via carrier GPS",
          "Receive delivery confirmation",
        ],
        result: "Result: You know what the carrier tells you, but cannot independently verify it.",
      },
      item: {
        title: "ITEM Freight Trust Platform",
        note: "Multi-signal, independently verified data",
        items: [
          "Verify driver identity before pickup",
          "Verify vehicle & carrier compliance",
          "Verify trailer condition & loading",
          "Verify seal integrity throughout transit",
          "Verify location via multiple signals",
          "Verify delivery with ePOD evidence",
          "Explain every exception with data",
        ],
        result: "Result: Every shipment event is backed by independent, auditable evidence.",
      },
      principle: {
        lead: "Core Principle:",
        body: "No single signal is trusted by itself. Every critical shipment event must be verified by multiple independent signals — this is what we call the Digital Chain of Custody.",
      },
    },
    platform: {
      title: "Platform Overview",
      subtitle:
        "ITEM Freight Trust Platform is built on a four-layer architecture designed specifically for shippers who need complete control and visibility over their freight operations — from the moment a load is created to final delivery and claims resolution.",
      layers: {
        identity: {
          title: "Layer 1 — Identity Trust Layer (ITEM DIEV)",
          body: "Verifies WHO is handling your freight before any movement begins. Ensures the driver, vehicle, and carrier are legitimate, compliant, and match your appointment.",
          modules: [
            "Driver Verification",
            "Vehicle Verification",
            "Carrier Compliance",
            "Insurance Validation",
            "Appointment Matching",
            "QR Credential",
          ],
        },
        execution: {
          title: "Layer 2 — Freight Execution Layer (Shipper TMS Core)",
          body: "Manages the complete shipment lifecycle from your perspective as a shipper — load planning, carrier assignment, trailer inspection, dock operations, and in-transit management.",
          modules: [
            "Order & Load Management",
            "Carrier & Capacity",
            "Tender & Assignment",
            "Trailer Inspection",
            "Dock Loading",
            "eBOL & Seal",
            "Tracking & Visibility",
            "Appointment Management",
          ],
        },
        evidence: {
          title: "Layer 3 — Evidence & Checkpoint Layer",
          body: "Continuously collects and verifies evidence at every checkpoint along the route. Automatically detects exceptions and builds a complete audit trail for claims and compliance.",
          modules: [
            "Checkpoint Intelligence",
            "AI Exception Management",
            "Delivery & ePOD",
            "Claims Investigation",
            "Analytics & Reporting",
            "Carrier Performance",
          ],
        },
        data: {
          title: "Layer 4 — Data & AI Layer",
          body: "Powers intelligent decision-making through a knowledge graph connecting all shipment entities, AI/ML models for anomaly detection, and real-time event processing.",
          modules: [
            "Verified Freight Graph",
            "AI & ML Engine",
            "Data Lake",
            "Event Streaming",
            "Security & Access Control",
          ],
        },
      },
    },
    architecture: {
      title: "System Architecture",
      subtitle:
        "The platform connects your identity verification layer, core TMS operations, and third-party integrations into a unified system — all powered by a shared Data & AI layer that enables intelligent automation and risk management.",
      altSystem: "System Architecture Diagram",
      altModules: "Business Modules Overview",
      explanation: {
        lead: "How it works for shippers:",
        body: "Your existing ERP, OMS, and WMS systems feed load and order data into ITEM. The platform then orchestrates identity verification (DIEV), freight execution (TMS Core), and integrates with telematics, cameras, GenLogs roadside networks, and smart seals to build a complete evidence trail. All data flows into the Verified Freight Graph for AI-powered analysis and risk scoring.",
      },
    },
    diev: {
      title: "ITEM DIEV + Shipper TMS",
      subtitle:
        "Two integrated products forming one unified trust chain. DIEV verifies WHO is handling your freight. Shipper TMS verifies WHAT HAPPENED during execution. Together, they create an unbroken Digital Chain of Custody from pickup to delivery.",
      identity: {
        name: "ITEM DIEV",
        subtitle: "Driver Identity & Equipment Verification",
        body: "Before a driver enters your facility, DIEV performs multi-layer verification to ensure the right person, with the right vehicle, from the right carrier, arrives for the right appointment. Results are instant: Pass, Review, or Decline.",
        tags: [
          "Liveness Selfie",
          "CDL Scan & Match",
          "Face-to-ID",
          "VIN / Plate",
          "USDOT / MC",
          "Insurance",
          "Geofence",
          "QR Credential",
        ],
        badges: { pass: "Pass", review: "Review", decline: "Decline" },
      },
      execution: {
        name: "ITEM Shipper TMS",
        subtitle: "Freight Execution, Verification & Risk Management",
        body: "Once identity is verified, Shipper TMS manages the complete freight lifecycle from your dock to final delivery. Every step generates verified evidence that accumulates into a complete shipment record.",
        tags: [
          "Load & Order",
          "Carrier Assignment",
          "Trailer Inspection",
          "Dock Loading",
          "eBOL & Seal",
          "Multi-Signal Tracking",
          "Checkpoint Verification",
          "Exception Management",
          "Delivery & ePOD",
          "Claims & Risk",
        ],
      },
      flow: [
        "DIEV Verify",
        "Gate Entry",
        "Inspect Trailer",
        "Dock & Load",
        "Seal & eBOL",
        "Track & Verify",
        "Checkpoints",
        "Delivery",
        "Evidence Complete",
      ],
    },
    process: {
      title: "End-to-End Shipment Process",
      subtitle:
        "From the shipper's perspective, every shipment passes through a structured sequence of verification stages. At each stage, the system automatically collects evidence and validates against expected conditions — building a complete digital chain of custody without requiring manual intervention.",
      altFlow: "End-to-End Process Flow",
      altEntities: "Key Data Entities Relationship",
      evidence: {
        lead: "Evidence accumulates automatically:",
        body: "As a shipment progresses through each stage, the system captures photos, GPS coordinates, timestamps, device identifiers, seal readings, and telematics data. This evidence is linked to the shipment record in real time, so if a claim occurs later, the complete case file already exists.",
      },
      entities: {
        lead: "Connected data entities:",
        body: "Every shipment connects Order, Carrier, Driver, Tractor, Trailer, Appointment, Route, Facility, and Seal/Device into a unified graph. This allows the system to detect inconsistencies (for example, a different trailer than expected) and flag them immediately.",
      },
    },
    inspection: {
      title: "Trailer Safety Inspection",
      subtitle:
        "Before loading begins, the system guides a structured trailer inspection at your facility. AI analyzes submitted photos to detect damage, verify the trailer is empty, and confirm the trailer number matches the appointment — protecting you from pre-existing damage claims.",
      scope: {
        title: "What Gets Inspected",
        body: "The inspection covers both exterior structural integrity and interior cleanliness and condition:",
        exteriorLabel: "Exterior",
        exterior: ["Trailer Number", "Door & Hinges", "Locking Bars", "Roof & Walls", "Underbody"],
        interiorLabel: "Interior",
        interior: [
          "Floor Condition",
          "Wall Integrity",
          "Moisture / Odor",
          "Cleanliness",
          "Empty Confirmed",
        ],
        reeferLabel: "Reefer (if applicable)",
        reefer: ["Unit Status", "Temperature", "Set Point", "Fuel Level"],
      },
      ai: {
        title: "AI Photo Analysis",
        body: "AI automatically validates every submitted photo:",
        items: [
          "Detects if the trailer is truly empty",
          "Identifies door hinge anomalies",
          "Flags duplicate or historical photos",
          "Verifies photo location matches the facility",
          "Detects screen captures or edits",
        ],
      },
      alt: "Shipment Detail with Inspection",
      explanation: {
        lead: "Why this matters for shippers:",
        body: "Pre-loading inspection evidence protects you in claims disputes. If cargo arrives damaged, you have timestamped, GPS-tagged, AI-verified photos proving the trailer was clean and undamaged before your goods were loaded.",
      },
    },
    dock: {
      title: "Dock Loading Intelligence",
      subtitle:
        "Your dock cameras and warehouse systems work together to create a complete, timestamped loading evidence package. AI monitors the entire process — from trailer arrival to seal application — detecting anomalies and counting cargo automatically.",
      timelineTitle: "Automated Loading Timeline",
      timeline: {
        docked: {
          title: "Trailer Docked",
          body: "Vehicle positioned at the assigned dock door, confirmed by dock sensor",
        },
        emptyConfirmed: {
          title: "Empty Confirmed",
          body: "AI vision verifies the trailer interior is empty before loading begins",
        },
        loading: { title: "Loading in Progress", body: "Pallet movements tracked, count verified against order" },
        loaded: {
          title: "Loading Complete",
          body: "Final count confirmed, any discrepancies flagged immediately",
        },
        sealed: {
          title: "Door Closed & Sealed",
          body: "Seal number captured via camera OCR, linked to the shipment",
        },
        departed: {
          title: "Trailer Departed",
          body: "Departure timestamp recorded, custody transferred to the carrier",
        },
      },
      camera: {
        title: "AI Dock Camera Capabilities",
        items: [
          "Automatic pallet / carton counting from video",
          "Barcode and SSCC label recognition",
          "Missing load detection (order vs actual)",
          "Unauthorized re-unloading detection",
          "Packaging damage identification",
          "Unauthorized personnel alerts",
        ],
      },
      systems: {
        title: "Integrates With Your Systems",
        tags: [
          "WMS",
          "Barcode Scanner",
          "RFID Portal",
          "Weight Scale",
          "Dock Door Sensor",
          "Forklift System",
        ],
      },
      output: {
        lead: "Output:",
        body: "A complete Loading Evidence Package — visual proof of what was loaded, when, and in what condition. This becomes critical evidence if a shortage or damage claim is filed later.",
      },
    },
    ebol: {
      title: "eBOL & Smart Seal",
      subtitle:
        "The electronic Bill of Lading captures the exact moment custody transfers from your facility to the carrier — with digital signatures, GPS, timestamps, and seal numbers all recorded simultaneously. Smart seals then monitor door integrity throughout transit.",
      bol: {
        title: "Electronic Bill of Lading",
        body: "Every eBOL signature is synchronized with identity verification, GPS location, device fingerprint, and cargo condition — creating an immutable custody transfer record.",
        items: [
          "Digital signature with identity verification",
          "GPS-stamped at the moment of signing",
          "Commodity, quantity, weight, pallet count",
          "Seal number linked at signing",
          "Exception notes and special instructions",
          "Loading evidence package attached",
        ],
      },
      seal: {
        title: "Smart Seal & Door Monitoring",
        body: "Multiple seal technologies supported — from basic photo verification to real-time electronic monitoring. The system continuously watches for unauthorized access.",
        kinds: {
          traditional: {
            title: "Traditional Seal",
            body: "Photo OCR + GPS + timestamp at application and removal",
          },
          rfid: {
            title: "RFID Seal",
            body: "Tamper detection at every gate or checkpoint with RFID readers",
          },
          electronic: {
            title: "Electronic Seal",
            body: "Real-time open / close alerts via BLE or cellular, with location",
          },
          sensor: { title: "Door Sensor", body: "Light, shock, motion, and temperature monitoring 24/7" },
        },
      },
      doorEvents: {
        title: "AI Classifies Every Door Event",
        body: "When a door event is detected, AI automatically classifies it based on context — location, time, route plan, and supporting signals:",
        badges: [
          "Authorized Open (at delivery)",
          "Unverified Open (unexpected location)",
          "Suspicious Stop + Open (high-risk area)",
          "Possible Seal Replacement",
        ],
      },
    },
    tracking: {
      title: "Multi-Signal Tracking",
      subtitle:
        "Traditional tracking shows a single GPS dot. ITEM fuses multiple independent signal sources to generate a Tracking Confidence Score — giving you certainty about where your freight actually is, not just where a phone app claims it is.",
      sourcesTitle: "Signal Sources Fused by the Platform",
      groups: {
        carrier: {
          title: "Carrier-Provided Signals",
          body: "Data from the carrier's own systems — useful, but not independently verifiable by the shipper alone:",
          tags: ["Tractor Telematics (ELD)", "Trailer GPS Tracker", "Smart Seal Location"],
        },
        independent: {
          title: "Independent Verification Signals",
          body: "Third-party data that confirms or contradicts carrier-reported location:",
          tags: [
            "GenLogs Roadside Sighting",
            "LPR Camera Match",
            "Toll Event Records",
            "Gate Camera Recognition",
          ],
        },
        contextual: {
          title: "Contextual Signals",
          body: "Environmental data that validates location claims:",
          tags: ["Geofence Events", "Route Consistency", "Wi-Fi Fingerprint", "Photo Background Match"],
        },
      },
      confidence: {
        title: "Tracking Confidence Example",
        locationLabel: "Current Location:",
        location: "I-40 Eastbound, near Flagstaff, AZ",
        scoreLabel: "Tracking Confidence:",
        score: "96%",
        signalsLabel: "Supporting Signals:",
        signals: [
          "Tractor Telematics",
          "Trailer GPS",
          "GenLogs Sighting (independent)",
          "Route Consistency",
          "ETA on track",
        ],
      },
      explanation: {
        lead: "What this means:",
        body: "When confidence is 96%, you know the shipment location is corroborated by 5 independent signals. If confidence drops — for example, if telematics goes offline — the system immediately alerts you and explains which signals are missing.",
      },
    },
    checkpoint: {
      title: "Checkpoint Intelligence",
      subtitle:
        "Checkpoints are not just geofences — they are multi-signal verification nodes placed along the route. At each checkpoint, the system collects and cross-references multiple independent signals to confirm the shipment's identity, integrity, and location.",
      alt: "Checkpoint Verification Mechanism",
      kinds: {
        active: {
          title: "1. Active Checkpoint",
          body: "Triggered by shipper-defined rules. The driver's app prompts a check-in action at specific locations:",
          items: ["App check-in with selfie", "Seal photo scan", "QR / NFC verification"],
        },
        passive: {
          title: "2. Passive Checkpoint",
          body: "Automatically collected without driver action. These signals come from infrastructure you or your partners control:",
          items: [
            "Telematics / ELD ping",
            "LPR camera match",
            "RFID seal reading",
            "GenLogs roadside sighting",
          ],
        },
        corroborated: {
          title: "3. Corroborated Checkpoint",
          body: "Multiple independent signals agree — this is the gold standard. No single source can be faked when 3 or more signals confirm:",
          items: ["Telematics + Trailer GPS", "+ GenLogs sighting", "+ LPR camera", "= Verified"],
        },
      },
      status: {
        label: "Checkpoint Status:",
        badges: ["Verified", "Partial", "Missed", "Conflicted"],
        note: "A “Conflicted” status means signals disagree, triggering immediate investigation.",
      },
    },
    controlTower: {
      title: "AI Freight Control Tower",
      subtitle:
        "AI continuously monitors all active shipments, comparing real-time signals against expected behavior. When anomalies are detected, it automatically classifies the risk level and takes action — from requesting a driver check-in to escalating to your security team.",
      monitor: {
        title: "What AI Monitors",
        body: "Continuous real-time analysis of all shipment signals:",
        critical: [
          "Route Deviation",
          "Tracking Signal Loss",
          "Missed Checkpoint",
          "Unexpected Stop",
          "Door Open Event",
          "Seal Integrity Alert",
        ],
        warning: ["Equipment Change", "Late vs ETA", "Temperature Excursion", "Suspicious Photo"],
      },
      actions: {
        title: "Automated Actions",
        body: "AI responds proportionally based on risk level:",
        items: [
          "Create exception with full context",
          "Request immediate driver check-in",
          "Alert your operations team",
          "Notify security for high-risk events",
          "Recommend next-best action",
          "Auto-generate incident report",
        ],
      },
      alt: "Operations Dashboard",
      explanation: {
        lead: "Shipper benefit:",
        body: "Instead of your team manually monitoring dozens of shipments and making phone calls, AI handles routine verification and only escalates true anomalies. Your team focuses on decisions, not data gathering.",
      },
    },
    delivery: {
      title: "Delivery & ePOD",
      subtitle:
        "At delivery, the system verifies seal integrity, captures unloading evidence, and generates a complete electronic Proof of Delivery. AI compares loading photos against unloading photos to automatically detect discrepancies in quantity or condition.",
      sequenceTitle: "Delivery Verification Sequence",
      sequence: [
        "Arrival confirmed at delivery geofence",
        "Tractor / trailer identity re-verified via LPR",
        "Seal number verified — matches original",
        "Seal integrity confirmed (no tamper)",
        "Door open event recorded with timestamp",
        "Unloading photos captured",
        "Pallet count verified against eBOL",
        "Any damage or shortage documented",
        "Receiver signature captured digitally",
        "ePOD generated and linked to the shipment",
      ],
      compare: {
        title: "AI Comparison Engine",
        body: "Automatically compares pickup vs delivery evidence:",
        loadingLabel: "At Loading",
        loadingValue: "Photos + Count",
        vs: "vs",
        deliveryLabel: "At Delivery",
        deliveryValue: "Photos + Count",
        items: [
          "Shipped quantity vs received quantity",
          "Original seal vs delivery seal number",
          "Packaging condition comparison",
          "Pallet count verification",
        ],
      },
      output: {
        lead: "Output:",
        body: "Complete Shipment Evidence Package — an auditable record from pickup to delivery that serves as the foundation for any claims process.",
      },
    },
    claims: {
      title: "AI Claims Investigation",
      subtitle:
        "With ITEM, evidence accumulates continuously during shipment execution — not after a claim is filed. When a claim occurs, the system instantly generates a complete case file with timeline, evidence, and AI-powered responsibility analysis.",
      vs: "VS",
      traditional: {
        title: "Traditional Approach",
        body: "Claim happens → start searching for evidence across emails, calls, and disconnected systems → weeks of investigation → incomplete case",
      },
      item: {
        title: "ITEM Approach",
        body: "Evidence accumulates during execution → claim happens → complete case file generated instantly → AI identifies responsibility",
      },
      caseFile: {
        title: "Auto-Generated Claims Case File",
        body: "Everything already collected during execution:",
        tags: [
          "DIEV Verification Record",
          "Trailer Inspection Photos",
          "Dock Loading Video",
          "eBOL with Signatures",
          "Seal Installation Record",
          "Complete Tracking Timeline",
          "All Checkpoint Records",
          "Door / Seal Events",
          "Delivery Photos & ePOD",
          "Temperature Records",
        ],
      },
      investigator: {
        title: "AI Claims Investigator",
        body: "AI analyzes the evidence and produces:",
        items: [
          "Complete reconstructed timeline",
          "Responsibility transfer points identified",
          "Evidence gaps flagged",
          "Suspicious stops and door events highlighted",
          "Probable loss stage determined",
          "Insurance submission package generated",
          "Executive summary for management",
        ],
      },
    },
    risk: {
      title: "Risk Scoring & Carrier Scorecard",
      subtitle:
        "Every shipment receives a dynamic risk score based on cargo value, route, carrier history, and available security measures. High-risk shipments automatically trigger enhanced security protocols. Carrier performance is tracked with two unique metrics that go beyond on-time delivery.",
      columns: {
        shipmentScore: {
          title: "Shipment Risk Score",
          body: "Per-shipment assessment considering:",
          items: [
            "Cargo value & theft attractiveness",
            "Route risk (high-theft corridors)",
            "Carrier risk profile",
            "Time of day / weekend / holiday",
            "Available tracking coverage",
            "Smart seal availability",
            "Historical claims on this lane",
          ],
        },
        carrierScorecard: {
          title: "Carrier Scorecard",
          body: "Beyond traditional on-time metrics:",
          items: [
            "Safety & compliance rating",
            "On-time performance",
            "Evidence Compliance — do they complete all verification steps?",
            "Identity Consistency — does the same driver and vehicle stay throughout?",
            "Claims ratio",
            "Security event history",
          ],
        },
        autoPolicies: {
          title: "Auto Security Policies",
          body: "Risk-driven actions triggered automatically:",
          items: [
            "Require smart seal",
            "Require trailer GPS tracker",
            "Add extra checkpoints",
            "Restrict to approved routes",
            "Require team driver",
            "Increase insurance coverage",
            "Require manual approval",
          ],
        },
      },
    },
    dataflow: {
      title: "Data Flow Architecture",
      subtitle:
        "Data flows from multiple sources into the ITEM platform through a unified ingestion API. Real-time event processing feeds the Verified Freight Graph and AI engine, which power operational dashboards, alerts, documents, and analytics for your team.",
      alt: "Data Flow Architecture",
      columns: {
        sources: {
          title: "Data Sources (Input)",
          body: "ITEM DIEV · ERP / OMS / WMS · Carrier / TMS · Telematics / ELD · Trailer Tracker · Dock Camera · LPR / Gate Camera · RFID / Smart Seal · GenLogs / Roadside",
        },
        processing: {
          title: "Processing Engine",
          body: "Data Ingestion API · Event Stream (real-time) · Verified Freight Graph · AI & Rules Engine · Data Lake / Storage",
        },
        outputs: {
          title: "Operational Outputs",
          body: "Operations Dashboard · Real-time Visibility · Exception Alerts · eBOL / Documents · Customer Portal · Claims Portal · BI / Analytics · API / Webhooks",
        },
      },
    },
    experience: {
      title: "Product Experience",
      subtitle:
        "Purpose-built interfaces for shipper operations teams — from high-level dashboards showing all active shipments to detailed checkpoint verification views. Every screen is designed to surface actionable insights, not just raw data.",
      altDashboard: "Shipper Operations Dashboard",
      altShipment: "Shipment Detail View",
      captionShipment: "Shipment Detail — complete timeline, evidence, and status",
      altCheckpoint: "Checkpoint Detail View",
      captionCheckpoint: "Checkpoint Detail — multi-signal verification evidence",
      altDriverApp: "Driver Mobile App",
      captionDriverApp: "Driver Mobile App — guided check-in workflow at your facilities",
    },
    integration: {
      title: "Open Integration Ecosystem",
      subtitle:
        "ITEM connects with your existing technology stack — no rip-and-replace required. The platform ingests data from your ERP, WMS, and existing TMS, while adding verification capabilities through telematics, camera, and sensor integrations.",
      cards: {
        erp: { title: "ERP Systems", body: "SAP · Oracle · NetSuite · Dynamics 365 · Infor" },
        wms: { title: "WMS", body: "Manhattan · Blue Yonder · Korber · SAP EWM" },
        telematics: { title: "Telematics", body: "Samsara · Motive · Geotab · Omnitracs · Trimble" },
        visibility: { title: "Visibility", body: "project44 · FourKites · MacroPoint · Trucker Tools" },
        compliance: { title: "Compliance", body: "FMCSA · Highway · RMIS · CargoNet · Carrier411" },
        hardware: { title: "Hardware", body: "Dock Camera · LPR · RFID Reader · Smart Seal · Door Sensor" },
        tms: { title: "TMS / Brokerage", body: "Oracle TM · MercuryGate · McLeod · Turvo · Descartes" },
        insurance: { title: "Insurance", body: "Claims Systems · Insurance Platforms · Risk Assessment" },
      },
      explanation: {
        lead: "Integration approach:",
        body: "ITEM provides pre-built connectors for major platforms and a REST API for custom integrations. Data flows bidirectionally — your systems feed shipment data in, and ITEM pushes verified status, alerts, and evidence back to your dashboards and workflows.",
      },
    },
    value: {
      title: "Customer Value",
      subtitle:
        "ITEM Freight Trust Platform delivers measurable improvements across cargo security, operational efficiency, visibility confidence, and claims management — specifically designed for shippers who need to protect high-value freight.",
      cards: {
        security: {
          title: "Cargo Security",
          body: "Dramatically reduce theft, identity fraud, and double-brokering through multi-layer verification at every stage.",
        },
        visibility: {
          title: "Verified Visibility",
          body: "Know where your freight is with confidence — backed by multiple independent signals, not just a single GPS dot.",
        },
        speed: {
          title: "Operational Speed",
          body: "Faster gate processing, fewer manual check calls, automated exception handling, and streamlined dock operations.",
        },
        claims: {
          title: "Claims Resolution",
          body: "Complete evidence packages generated automatically. Faster responsibility determination and higher claim success rates.",
        },
      },
      stats: {
        theftRisk: { value: "↓ 70%", label: "Cargo Theft Risk" },
        claimsCycle: { value: "↓ 50%", label: "Claims Cycle Time" },
        gateEfficiency: { value: "↑ 40%", label: "Gate Efficiency" },
        trackingConfidence: { value: "96%", label: "Tracking Confidence" },
      },
      closing: [
        "Every Shipment Visible.",
        "Every Checkpoint Verified.",
        "Every Exception Explainable.",
      ],
      brand: "ITEM Freight Trust Platform",
    },
  },

  zh: {
    common: {
      footer: "ITEM Freight Trust Platform — 机密",
      sectionLabel: "章节",
    },
    nav: [
      "封面",
      "信任难题",
      "可验证货运",
      "平台总览",
      "系统架构",
      "DIEV + TMS",
      "端到端流程",
      "挂车检查",
      "月台装货",
      "eBOL 与铅封",
      "多信号追踪",
      "验证节点",
      "AI 控制塔",
      "交付与 ePOD",
      "理赔",
      "风险与评分卡",
      "数据流",
      "操作台",
      "集成生态",
      "客户价值",
    ],
    cover: {
      title: "ITEM Freight Trust Platform",
      subtitle: "AI 驱动的货运执行、验证与风险管理",
      tagline: "验证司机，验证设备，验证每一个节点，信任每一票货。",
      chips: ["货主 TMS", "身份验证", "多信号追踪", "AI 风险管理"],
      scrollHint: "向下滚动",
    },
    problem: {
      title: "货运存在信任问题",
      subtitle:
        "传统的货运可视化只能告诉你货物「可能」在哪里。但作为货主，你无法验证司机、车辆与货物是否与申报一致。真正的缺口不是可视化，而是可验证性。",
      cards: {
        gps: {
          title: "GPS 可被伪造",
          body: "司机或不法分子可以关闭、伪造或篡改 GPS 信号。地图上的一个圆点并不能证明卡车真的在那里。货主没有任何独立手段核实位置信息。",
        },
        driverSwap: {
          title: "司机可被顶替",
          body: "方向盘后面的人未必是经过背景审核、被指派的司机。身份冒用与未经授权的换人驾驶，让货主直接暴露在责任与安全风险之下。",
        },
        equipment: {
          title: "设备可被调换",
          body: "牵引车与挂车可能在途中被更换，而货主毫不知情。这会切断监管链条，使损坏或失窃的责任无法追溯。",
        },
        photos: {
          title: "照片可被伪造",
          body: "历史照片、修图照片或翻拍截图都可能被当作当前证据提交。没有 AI 验证，货主无法区分实时凭证与重复使用的旧图。",
        },
        seals: {
          title: "铅封可被破坏",
          body: "传统螺栓铅封可以被剪断，再换上编号相同的替代品。缺少电子铅封监控，货主无从发现途中的开封行为。",
        },
        evidence: {
          title: "理赔证据分散",
          body: "一旦发生货物失窃或损坏，证据散落在邮件、电话和彼此割裂的系统里。搭建一份理赔案卷需要数周，而不是几分钟。",
        },
      },
      highlight: {
        lead: "被追踪的货运，并不等于被信任的货运。",
        body: "货主需要的平台不只是推送状态更新，而是用多路独立信号证明运输事实。",
      },
    },
    verified: {
      title: "从可追踪货运到可验证货运",
      subtitle:
        "ITEM 把货运状态更新转化为经过验证的运输事实。系统不依赖单一 GPS 信号，而是让每一个关键事件都获得多个独立数据源的相互印证。",
      vs: "VS",
      traditional: {
        title: "传统 TMS",
        note: "单一信号、由承运商上报的数据",
        items: ["制定运输计划", "向承运商派单", "通过承运商 GPS 追踪", "接收送达确认"],
        result: "结果：你只知道承运商告诉你的信息，却无法独立核实。",
      },
      item: {
        title: "ITEM Freight Trust Platform",
        note: "多信号、可独立验证的数据",
        items: [
          "提货前验证司机身份",
          "验证车辆与承运商合规性",
          "验证挂车状况与装载过程",
          "全程验证铅封完整性",
          "通过多路信号验证位置",
          "以 ePOD 证据验证交付",
          "用数据解释每一次异常",
        ],
        result: "结果：每一个运输事件都有独立、可审计的证据支撑。",
      },
      principle: {
        lead: "核心原则：",
        body: "任何单一信号都不能被单独信任。每一个关键运输事件都必须由多路独立信号交叉验证——这就是我们所说的数字监管链。",
      },
    },
    platform: {
      title: "平台总览",
      subtitle:
        "ITEM Freight Trust Platform 采用四层架构，专为需要完全掌控货运执行与可视化的货主设计——覆盖从创建货载到最终交付与理赔结案的全过程。",
      layers: {
        identity: {
          title: "第一层 — 身份信任层（ITEM DIEV）",
          body: "在任何货物移动之前，先验证「谁」在经手你的货物，确保司机、车辆与承运商真实合法、符合合规要求，并与预约信息一致。",
          modules: ["司机验证", "车辆验证", "承运商合规", "保险校验", "预约匹配", "二维码凭证"],
        },
        execution: {
          title: "第二层 — 货运执行层（货主 TMS 核心）",
          body: "以货主视角管理完整的运输生命周期——货载计划、承运商指派、挂车检查、月台作业与在途管理。",
          modules: [
            "订单与货载管理",
            "承运商与运力",
            "派单与指派",
            "挂车检查",
            "月台装货",
            "eBOL 与铅封",
            "追踪与可视化",
            "预约管理",
          ],
        },
        evidence: {
          title: "第三层 — 证据与验证节点层",
          body: "沿途在每一个验证节点持续采集并校验证据，自动识别异常，并为理赔与合规沉淀完整的审计轨迹。",
          modules: ["节点智能", "AI 异常管理", "交付与 ePOD", "理赔调查", "分析与报表", "承运商绩效"],
        },
        data: {
          title: "第四层 — 数据与 AI 层",
          body: "通过连接全部运输实体的知识图谱、用于异常检测的 AI/ML 模型以及实时事件处理，支撑智能决策。",
          modules: ["可验证货运图谱", "AI 与 ML 引擎", "数据湖", "事件流", "安全与访问控制"],
        },
      },
    },
    architecture: {
      title: "系统架构",
      subtitle:
        "平台将身份验证层、TMS 核心作业与第三方集成整合为统一系统，并由共享的数据与 AI 层驱动，实现智能自动化与风险管理。",
      altSystem: "系统架构图",
      altModules: "业务模块总览",
      explanation: {
        lead: "对货主而言如何运转：",
        body: "你现有的 ERP、OMS 与 WMS 系统将货载与订单数据送入 ITEM。平台随后编排身份验证（DIEV）与货运执行（TMS 核心），并对接车载终端、摄像头、GenLogs 路侧网络与智能铅封，构建完整的证据链。所有数据汇入可验证货运图谱，用于 AI 分析与风险评分。",
      },
    },
    diev: {
      title: "ITEM DIEV + 货主 TMS",
      subtitle:
        "两款相互集成的产品，构成一条统一的信任链。DIEV 验证「谁」在经手你的货物，货主 TMS 验证执行过程中「发生了什么」。二者共同形成从提货到交付不间断的数字监管链。",
      identity: {
        name: "ITEM DIEV",
        subtitle: "司机身份与设备验证",
        body: "在司机进入你的场站之前，DIEV 会执行多层验证，确保正确的人、驾驶正确的车辆、代表正确的承运商，前来履行正确的预约。结果即时给出：通过、待复核或拒绝。",
        tags: [
          "活体自拍",
          "CDL 扫描与比对",
          "人脸证件比对",
          "VIN / 车牌",
          "USDOT / MC",
          "保险",
          "电子围栏",
          "二维码凭证",
        ],
        badges: { pass: "通过", review: "待复核", decline: "拒绝" },
      },
      execution: {
        name: "ITEM 货主 TMS",
        subtitle: "货运执行、验证与风险管理",
        body: "身份验证完成后，货主 TMS 接管从你的月台到最终交付的完整货运生命周期。每一个环节都会生成经过验证的证据，逐步沉淀为完整的运输档案。",
        tags: [
          "货载与订单",
          "承运商指派",
          "挂车检查",
          "月台装货",
          "eBOL 与铅封",
          "多信号追踪",
          "节点验证",
          "异常管理",
          "交付与 ePOD",
          "理赔与风险",
        ],
      },
      flow: [
        "DIEV 验证",
        "门岗进场",
        "挂车检查",
        "靠台装货",
        "施封与 eBOL",
        "追踪与验证",
        "沿途节点",
        "交付",
        "证据完整",
      ],
    },
    process: {
      title: "端到端运输流程",
      subtitle:
        "从货主视角看，每一票货都会经过一组结构化的验证阶段。系统在每个阶段自动采集证据并与预期条件比对，无需人工介入即可构建完整的数字监管链。",
      altFlow: "端到端流程图",
      altEntities: "关键数据实体关系图",
      evidence: {
        lead: "证据自动沉淀：",
        body: "随着运输推进到各个阶段，系统会采集照片、GPS 坐标、时间戳、设备标识、铅封读数与车载数据，并实时关联到运输单据。因此当日后发生理赔时，完整案卷早已就绪。",
      },
      entities: {
        lead: "互联的数据实体：",
        body: "每一票货都会把订单、承运商、司机、牵引车、挂车、预约、路线、场站与铅封/设备连接为统一图谱。系统据此发现不一致（例如挂车与预期不符）并立即预警。",
      },
    },
    inspection: {
      title: "挂车安全检查",
      subtitle:
        "装货开始前，系统会在你的场站引导一次结构化的挂车检查。AI 分析上传的照片，识别破损、确认挂车已清空，并核对挂车号与预约是否一致——避免你为既有损伤承担理赔责任。",
      scope: {
        title: "检查哪些内容",
        body: "检查同时覆盖外部结构完整性与内部清洁与状况：",
        exteriorLabel: "外部",
        exterior: ["挂车号", "车门与合页", "锁杆", "顶板与侧板", "底盘"],
        interiorLabel: "内部",
        interior: ["地板状况", "内壁完整性", "潮湿 / 异味", "清洁度", "确认空箱"],
        reeferLabel: "冷藏机组（如适用）",
        reefer: ["机组状态", "温度", "设定值", "油量"],
      },
      ai: {
        title: "AI 照片分析",
        body: "AI 自动校验每一张提交的照片：",
        items: [
          "识别挂车是否确已清空",
          "发现车门合页异常",
          "标记重复使用或历史照片",
          "核验拍摄位置是否在场站内",
          "识别翻拍截图或修图痕迹",
        ],
      },
      alt: "含检查记录的运输详情页",
      explanation: {
        lead: "对货主的意义：",
        body: "装货前的检查证据能在理赔争议中保护你。若货物到达时受损，你手上有带时间戳、GPS 标记且经 AI 验证的照片，可证明装货前挂车干净且完好。",
      },
    },
    dock: {
      title: "月台装货智能",
      subtitle:
        "月台摄像头与仓储系统协同工作，生成一份完整且带时间戳的装货证据包。AI 全程监控从挂车到位到施加铅封的每一步，自动识别异常并清点货物。",
      timelineTitle: "自动化装货时间线",
      timeline: {
        docked: { title: "挂车靠台", body: "车辆停靠至指定月台门，由月台传感器确认" },
        emptyConfirmed: { title: "确认空箱", body: "AI 视觉在装货前确认挂车内部为空" },
        loading: { title: "装货进行中", body: "跟踪托盘移动，并与订单数量逐一核对" },
        loaded: { title: "装货完成", body: "确认最终数量，任何差异即时预警" },
        sealed: { title: "关门施封", body: "通过摄像头 OCR 采集铅封号并关联到运输单" },
        departed: { title: "挂车离场", body: "记录离场时间戳，监管责任移交承运商" },
      },
      camera: {
        title: "AI 月台摄像头能力",
        items: [
          "从视频中自动清点托盘 / 纸箱",
          "识别条码与 SSCC 标签",
          "漏装检测（订单与实际比对）",
          "未授权卸货检测",
          "包装破损识别",
          "未授权人员告警",
        ],
      },
      systems: {
        title: "与你的现有系统集成",
        tags: ["WMS", "条码扫描枪", "RFID 通道", "地磅", "月台门传感器", "叉车系统"],
      },
      output: {
        lead: "输出：",
        body: "一份完整的装货证据包——用影像证明装了什么、何时装的、状态如何。一旦日后发生短少或破损理赔，这将成为关键证据。",
      },
    },
    ebol: {
      title: "eBOL 与智能铅封",
      subtitle:
        "电子提单精确记录监管责任从你的场站移交给承运商的那一刻，同时留存电子签名、GPS、时间戳与铅封号。智能铅封随后在全程监控车门完整性。",
      bol: {
        title: "电子提单",
        body: "每一次 eBOL 签署都与身份验证、GPS 位置、设备指纹与货物状态同步绑定，形成不可篡改的责任移交记录。",
        items: [
          "带身份验证的电子签名",
          "签署瞬间加盖 GPS 位置",
          "品名、数量、重量与托盘数",
          "签署时关联铅封号",
          "异常备注与特别指示",
          "随附装货证据包",
        ],
      },
      seal: {
        title: "智能铅封与车门监控",
        body: "支持多种铅封技术——从基础的照片核验到实时电子监控。系统持续监视未授权开启行为。",
        kinds: {
          traditional: { title: "传统铅封", body: "施封与拆封时留存照片 OCR + GPS + 时间戳" },
          rfid: { title: "RFID 铅封", body: "在配备 RFID 读头的门岗或节点检测开封" },
          electronic: { title: "电子铅封", body: "通过 BLE 或蜂窝网络实时上报开关门告警与位置" },
          sensor: { title: "车门传感器", body: "全天候监测光照、震动、运动与温度" },
        },
      },
      doorEvents: {
        title: "AI 对每一次开门事件分类",
        body: "检测到开门事件时，AI 会结合位置、时间、路线计划与佐证信号自动判定其性质：",
        badges: [
          "授权开门（交付现场）",
          "未验证开门（位置异常）",
          "可疑停车并开门（高风险区域）",
          "疑似更换铅封",
        ],
      },
    },
    tracking: {
      title: "多信号追踪",
      subtitle:
        "传统追踪只呈现一个 GPS 圆点。ITEM 融合多个独立信号源，生成追踪置信度评分——让你确知货物真实所在，而不是手机应用声称的位置。",
      sourcesTitle: "平台融合的信号来源",
      groups: {
        carrier: {
          title: "承运商提供的信号",
          body: "来自承运商自有系统的数据——有价值，但货主无法独立核实：",
          tags: ["牵引车车载终端（ELD）", "挂车 GPS 追踪器", "智能铅封位置"],
        },
        independent: {
          title: "独立验证信号",
          body: "可印证或推翻承运商上报位置的第三方数据：",
          tags: ["GenLogs 路侧识别", "车牌识别摄像头比对", "通行费事件记录", "门岗摄像头识别"],
        },
        contextual: {
          title: "情境信号",
          body: "用于校验位置声明的环境数据：",
          tags: ["电子围栏事件", "路线一致性", "Wi-Fi 指纹", "照片背景比对"],
        },
      },
      confidence: {
        title: "追踪置信度示例",
        locationLabel: "当前位置：",
        location: "I-40 东行，靠近 Flagstaff, AZ",
        scoreLabel: "追踪置信度：",
        score: "96%",
        signalsLabel: "佐证信号：",
        signals: ["牵引车车载终端", "挂车 GPS", "GenLogs 路侧识别（独立）", "路线一致性", "ETA 正常"],
      },
      explanation: {
        lead: "这意味着什么：",
        body: "当置信度为 96% 时，说明该位置已由 5 路独立信号相互印证。若置信度下降（例如车载终端离线），系统会立即告警并说明缺失了哪些信号。",
      },
    },
    checkpoint: {
      title: "验证节点智能",
      subtitle:
        "验证节点不只是电子围栏，而是布设在路线上的多信号验证点。系统在每个节点采集并交叉比对多路独立信号，以确认这票货的身份、完整性与位置。",
      alt: "节点验证机制图",
      kinds: {
        active: {
          title: "1. 主动节点",
          body: "由货主自定义规则触发，司机端应用会在指定地点提示完成签到动作：",
          items: ["应用签到并自拍", "扫描铅封照片", "二维码 / NFC 验证"],
        },
        passive: {
          title: "2. 被动节点",
          body: "无需司机操作即可自动采集，信号来自你或合作伙伴掌控的基础设施：",
          items: ["车载终端 / ELD 上报", "车牌识别摄像头比对", "RFID 铅封读取", "GenLogs 路侧识别"],
        },
        corroborated: {
          title: "3. 交叉印证节点",
          body: "多路独立信号相互一致，这是最高标准。当 3 路以上信号同时确认时，任何单一来源都无法造假：",
          items: ["车载终端 + 挂车 GPS", "+ GenLogs 路侧识别", "+ 车牌识别摄像头", "= 已验证"],
        },
      },
      status: {
        label: "节点状态：",
        badges: ["已验证", "部分验证", "缺失", "冲突"],
        note: "「冲突」状态表示各路信号互相矛盾，将立即触发调查。",
      },
    },
    controlTower: {
      title: "AI 货运控制塔",
      subtitle:
        "AI 持续监控所有在途运输，将实时信号与预期行为比对。一旦发现异常，即自动判定风险等级并采取行动——从要求司机签到，到升级至你的安保团队。",
      monitor: {
        title: "AI 监控哪些内容",
        body: "对所有运输信号进行持续的实时分析：",
        critical: ["路线偏离", "追踪信号丢失", "节点缺失", "非计划停车", "开门事件", "铅封完整性告警"],
        warning: ["设备更换", "晚于 ETA", "温度越限", "可疑照片"],
      },
      actions: {
        title: "自动化处置",
        body: "AI 按风险等级采取相称的应对措施：",
        items: [
          "创建带完整上下文的异常单",
          "要求司机立即签到",
          "通知你的运营团队",
          "高风险事件通报安保部门",
          "推荐下一步最佳动作",
          "自动生成事件报告",
        ],
      },
      alt: "运营操作台",
      explanation: {
        lead: "对货主的收益：",
        body: "你的团队不必再人工盯着几十票货并逐一打电话核实。AI 承担常规验证，只把真正的异常升级上来，团队因此专注于决策而非收集数据。",
      },
    },
    delivery: {
      title: "交付与 ePOD",
      subtitle:
        "交付环节中，系统核验铅封完整性、采集卸货证据，并生成完整的电子送达凭证。AI 会比对装货与卸货照片，自动识别数量或状态上的差异。",
      sequenceTitle: "交付验证流程",
      sequence: [
        "在交付电子围栏内确认到达",
        "通过车牌识别复核牵引车 / 挂车身份",
        "核验铅封号——与原始记录一致",
        "确认铅封完整（无破坏痕迹）",
        "记录开门事件与时间戳",
        "采集卸货照片",
        "托盘数量与 eBOL 核对",
        "记录任何破损或短少",
        "电子采集收货人签名",
        "生成 ePOD 并关联运输单",
      ],
      compare: {
        title: "AI 比对引擎",
        body: "自动比对提货与交付两端的证据：",
        loadingLabel: "装货时",
        loadingValue: "照片 + 数量",
        vs: "对比",
        deliveryLabel: "交付时",
        deliveryValue: "照片 + 数量",
        items: ["发货数量与收货数量比对", "原始铅封号与交付铅封号比对", "包装状态比对", "托盘数量核验"],
      },
      output: {
        lead: "输出：",
        body: "完整的运输证据包——一份从提货到交付均可审计的记录，可作为任何理赔流程的基础。",
      },
    },
    claims: {
      title: "AI 理赔调查",
      subtitle:
        "在 ITEM 上，证据是在运输执行过程中持续沉淀的，而不是等理赔提出后才去收集。理赔发生时，系统可即时生成包含时间线、证据与 AI 责任分析的完整案卷。",
      vs: "VS",
      traditional: {
        title: "传统做法",
        body: "发生理赔 → 到邮件、电话与割裂系统中翻找证据 → 数周调查 → 案卷仍不完整",
      },
      item: {
        title: "ITEM 做法",
        body: "证据在执行中持续沉淀 → 发生理赔 → 即时生成完整案卷 → AI 判定责任归属",
      },
      caseFile: {
        title: "自动生成的理赔案卷",
        body: "全部内容都已在执行过程中采集完毕：",
        tags: [
          "DIEV 验证记录",
          "挂车检查照片",
          "月台装货视频",
          "带签名的 eBOL",
          "施封记录",
          "完整追踪时间线",
          "全部节点记录",
          "车门 / 铅封事件",
          "交付照片与 ePOD",
          "温度记录",
        ],
      },
      investigator: {
        title: "AI 理赔调查员",
        body: "AI 分析证据并输出：",
        items: [
          "完整重建的时间线",
          "识别责任移交节点",
          "标记证据缺口",
          "高亮可疑停车与开门事件",
          "判定最可能的货损环节",
          "生成保险报案材料包",
          "面向管理层的执行摘要",
        ],
      },
    },
    risk: {
      title: "风险评分与承运商评分卡",
      subtitle:
        "每一票货都会依据货值、路线、承运商历史与可用安防手段获得动态风险评分。高风险运输将自动触发增强的安防策略。承运商绩效则以两项超越准时率的独有指标来衡量。",
      columns: {
        shipmentScore: {
          title: "运输风险评分",
          body: "逐票评估，考量因素包括：",
          items: [
            "货值与被盗吸引力",
            "路线风险（高失窃走廊）",
            "承运商风险画像",
            "时段 / 周末 / 节假日",
            "可用的追踪覆盖",
            "智能铅封可得性",
            "该线路的历史理赔",
          ],
        },
        carrierScorecard: {
          title: "承运商评分卡",
          body: "超越传统的准时率指标：",
          items: [
            "安全与合规评级",
            "准时率表现",
            "证据合规度——是否完成全部验证步骤？",
            "身份一致性——司机与车辆是否全程保持不变？",
            "理赔率",
            "安全事件历史",
          ],
        },
        autoPolicies: {
          title: "自动安防策略",
          body: "由风险驱动、自动触发的处置动作：",
          items: [
            "强制使用智能铅封",
            "强制加装挂车 GPS 追踪器",
            "增加额外验证节点",
            "限定在批准路线内行驶",
            "要求双人驾驶",
            "提高保险保额",
            "要求人工审批",
          ],
        },
      },
    },
    dataflow: {
      title: "数据流架构",
      subtitle:
        "多种来源的数据通过统一的接入 API 汇入 ITEM 平台。实时事件处理为可验证货运图谱与 AI 引擎供能，进而驱动面向团队的操作台、告警、单证与分析。",
      alt: "数据流架构图",
      columns: {
        sources: {
          title: "数据来源（输入）",
          body: "ITEM DIEV · ERP / OMS / WMS · 承运商 / TMS · 车载终端 / ELD · 挂车追踪器 · 月台摄像头 · 车牌识别 / 门岗摄像头 · RFID / 智能铅封 · GenLogs / 路侧",
        },
        processing: {
          title: "处理引擎",
          body: "数据接入 API · 实时事件流 · 可验证货运图谱 · AI 与规则引擎 · 数据湖 / 存储",
        },
        outputs: {
          title: "运营输出",
          body: "运营操作台 · 实时可视化 · 异常告警 · eBOL / 单证 · 客户门户 · 理赔门户 · BI / 分析 · API / Webhooks",
        },
      },
    },
    experience: {
      title: "产品体验",
      subtitle:
        "为货主运营团队量身打造的界面——从展示全部在途运输的总览操作台，到细粒度的节点验证视图。每一个界面都以呈现可执行的洞察为目标，而不是堆砌原始数据。",
      altDashboard: "货主运营操作台",
      altShipment: "运输详情页",
      captionShipment: "运输详情——完整时间线、证据与状态",
      altCheckpoint: "节点详情页",
      captionCheckpoint: "节点详情——多信号验证证据",
      altDriverApp: "司机移动应用",
      captionDriverApp: "司机移动应用——在你的场站引导完成签到流程",
    },
    integration: {
      title: "开放集成生态",
      subtitle:
        "ITEM 与你现有的技术栈相连，无需推倒重来。平台从你的 ERP、WMS 与既有 TMS 接入数据，并通过车载终端、摄像头与传感器集成补齐验证能力。",
      cards: {
        erp: { title: "ERP 系统", body: "SAP · Oracle · NetSuite · Dynamics 365 · Infor" },
        wms: { title: "WMS", body: "Manhattan · Blue Yonder · Korber · SAP EWM" },
        telematics: { title: "车载终端", body: "Samsara · Motive · Geotab · Omnitracs · Trimble" },
        visibility: { title: "可视化平台", body: "project44 · FourKites · MacroPoint · Trucker Tools" },
        compliance: { title: "合规数据", body: "FMCSA · Highway · RMIS · CargoNet · Carrier411" },
        hardware: { title: "硬件设备", body: "月台摄像头 · 车牌识别 · RFID 读头 · 智能铅封 · 车门传感器" },
        tms: { title: "TMS / 经纪系统", body: "Oracle TM · MercuryGate · McLeod · Turvo · Descartes" },
        insurance: { title: "保险", body: "理赔系统 · 保险平台 · 风险评估" },
      },
      explanation: {
        lead: "集成方式：",
        body: "ITEM 为主流平台提供预置连接器，并开放 REST API 支持定制集成。数据双向流动——你的系统输入运输数据，ITEM 则把已验证的状态、告警与证据回推到你的操作台与工作流中。",
      },
    },
    value: {
      title: "客户价值",
      subtitle:
        "ITEM Freight Trust Platform 在货物安全、运营效率、可视化置信度与理赔管理上带来可量化的提升——专为需要保护高价值货物的货主而设计。",
      cards: {
        security: { title: "货物安全", body: "通过各环节的多层验证，大幅降低失窃、身份冒用与二次转包风险。" },
        visibility: {
          title: "可验证的可视化",
          body: "由多路独立信号支撑，而非单一 GPS 圆点，让你确信货物所在。",
        },
        speed: { title: "运营提速", body: "门岗处理更快，人工催单更少，异常自动处置，月台作业更顺畅。" },
        claims: { title: "理赔结案", body: "自动生成完整证据包，责任判定更快，理赔成功率更高。" },
      },
      stats: {
        theftRisk: { value: "↓ 70%", label: "货物失窃风险" },
        claimsCycle: { value: "↓ 50%", label: "理赔周期" },
        gateEfficiency: { value: "↑ 40%", label: "门岗效率" },
        trackingConfidence: { value: "96%", label: "追踪置信度" },
      },
      closing: ["每一票货可见。", "每一个节点可验。", "每一次异常可解释。"],
      brand: "ITEM Freight Trust Platform",
    },
  },

  ja: {
    common: {
      footer: "ITEM Freight Trust Platform — 社外秘",
      sectionLabel: "セクション",
    },
    nav: [
      "表紙",
      "信頼の課題",
      "検証された輸送",
      "プラットフォーム概要",
      "システムアーキテクチャ",
      "DIEV + TMS",
      "エンドツーエンド業務",
      "トレーラー点検",
      "バース荷積み",
      "eBOL とシール",
      "マルチシグナル追跡",
      "チェックポイント",
      "AI コントロールタワー",
      "納品と ePOD",
      "クレーム対応",
      "リスクとスコアカード",
      "データフロー",
      "ダッシュボード",
      "連携エコシステム",
      "提供価値",
    ],
    cover: {
      title: "ITEM Freight Trust Platform",
      subtitle: "AI による輸送実行・検証・リスク管理プラットフォーム",
      tagline:
        "ドライバーを検証し、車両を検証し、すべてのチェックポイントを検証する。すべての輸送を信頼できるものに。",
      chips: ["荷主向け TMS", "本人確認", "マルチシグナル追跡", "AI リスク管理"],
      scrollHint: "スクロール",
    },
    problem: {
      title: "輸送には信頼の課題がある",
      subtitle:
        "従来の輸送可視化が示すのは、貨物が「おそらくどこにあるか」までです。荷主の立場では、ドライバー・車両・貨物が申告どおりかを検証できません。真の課題は可視性ではなく、検証可能性にあります。",
      cards: {
        gps: {
          title: "GPS は偽装され得る",
          body: "ドライバーや悪意ある第三者は、GPS 信号を停止・偽装・改ざんできます。地図上の点は、トラックが実際にそこにいる証明にはなりません。荷主が位置情報を独自に確認する手段はありません。",
        },
        driverSwap: {
          title: "ドライバーは入れ替わり得る",
          body: "ハンドルを握っているのが、審査を経て割り当てられたドライバーとは限りません。なりすましや無断の交代乗務は、荷主を賠償責任とセキュリティリスクにさらします。",
        },
        equipment: {
          title: "機材は差し替えられ得る",
          body: "トラクターやトレーラーが荷主の知らないうちに途中で交換されることがあります。これにより管理継承が途切れ、破損や盗難の責任追跡が不可能になります。",
        },
        photos: {
          title: "写真は捏造され得る",
          body: "過去の写真、加工写真、画面キャプチャが現時点の証拠として提出され得ます。AI による検証がなければ、荷主はリアルタイムの証跡と使い回しの画像を区別できません。",
        },
        seals: {
          title: "シールは破られ得る",
          body: "従来のボルトシールは切断され、同じ番号のものに付け替えられます。電子シール監視がなければ、荷主は輸送途上の開封を検知できません。",
        },
        evidence: {
          title: "クレーム証拠が散在する",
          body: "貨物の盗難や破損が起きても、証拠はメール・電話・分断されたシステムに散らばっています。案件の組み立てに数分ではなく数週間を要します。",
        },
      },
      highlight: {
        lead: "追跡されている輸送は、信頼できる輸送とは限りません。",
        body: "荷主に必要なのは、ステータス更新を表示するだけでなく、複数の独立したシグナルで輸送の事実を証明するプラットフォームです。",
      },
    },
    verified: {
      title: "追跡できる輸送から、検証できる輸送へ",
      subtitle:
        "ITEM は輸送ステータスの更新を、検証済みの輸送事実へと変換します。単一の GPS 信号に依存せず、重要イベントごとに複数の独立したデータソースで裏付けを取ります。",
      vs: "VS",
      traditional: {
        title: "従来型 TMS",
        note: "単一シグナル・運送会社申告ベースのデータ",
        items: [
          "輸送計画の作成",
          "運送会社への配車依頼",
          "運送会社の GPS で追跡",
          "納品確認の受領",
        ],
        result: "結果：運送会社が伝えた内容は分かるが、荷主が独自に検証することはできない。",
      },
      item: {
        title: "ITEM Freight Trust Platform",
        note: "マルチシグナル・独立検証されたデータ",
        items: [
          "集荷前にドライバーの本人確認を実施",
          "車両と運送会社のコンプライアンスを検証",
          "トレーラーの状態と積み付けを検証",
          "輸送中を通じてシールの完全性を検証",
          "複数シグナルで位置情報を検証",
          "ePOD の証拠で納品を検証",
          "すべての例外をデータで説明",
        ],
        result: "結果：すべての輸送イベントが、独立した監査可能な証拠に裏付けられる。",
      },
      principle: {
        lead: "基本原則：",
        body: "いかなる単一シグナルもそれ単独では信頼しません。重要な輸送イベントは必ず複数の独立シグナルで検証する——これを当社はデジタル管理継承（Digital Chain of Custody）と呼んでいます。",
      },
    },
    platform: {
      title: "プラットフォーム概要",
      subtitle:
        "ITEM Freight Trust Platform は 4 層アーキテクチャで構成され、輸送業務を完全にコントロールし可視化したい荷主のために設計されています。積み荷の作成から最終納品、クレーム解決までを一貫してカバーします。",
      layers: {
        identity: {
          title: "レイヤー 1 — アイデンティティ信頼層（ITEM DIEV）",
          body: "貨物が動き出す前に、「誰が」貨物を扱うのかを検証します。ドライバー・車両・運送会社が正規かつ適法であり、予約内容と一致していることを保証します。",
          modules: [
            "ドライバー検証",
            "車両検証",
            "運送会社コンプライアンス",
            "保険の有効性確認",
            "予約とのマッチング",
            "QR クレデンシャル",
          ],
        },
        execution: {
          title: "レイヤー 2 — 輸送実行層（荷主 TMS コア）",
          body: "積み荷計画、運送会社の割り当て、トレーラー点検、バース作業、輸送中の管理まで、荷主視点で輸送ライフサイクル全体を管理します。",
          modules: [
            "受注・積み荷管理",
            "運送会社と輸送能力",
            "配車依頼と割り当て",
            "トレーラー点検",
            "バース荷積み",
            "eBOL とシール",
            "追跡と可視化",
            "予約管理",
          ],
        },
        evidence: {
          title: "レイヤー 3 — 証拠・チェックポイント層",
          body: "ルート上の各チェックポイントで証拠を継続的に収集・検証します。例外を自動検知し、クレーム対応と法令順守のための完全な監査証跡を構築します。",
          modules: [
            "チェックポイントインテリジェンス",
            "AI 例外管理",
            "納品と ePOD",
            "クレーム調査",
            "分析とレポート",
            "運送会社パフォーマンス",
          ],
        },
        data: {
          title: "レイヤー 4 — データ・AI 層",
          body: "全輸送エンティティを結ぶナレッジグラフ、異常検知のための AI/ML モデル、リアルタイムのイベント処理により、高度な意思決定を支えます。",
          modules: [
            "検証済み輸送グラフ",
            "AI・ML エンジン",
            "データレイク",
            "イベントストリーミング",
            "セキュリティとアクセス制御",
          ],
        },
      },
    },
    architecture: {
      title: "システムアーキテクチャ",
      subtitle:
        "本プラットフォームは、本人確認層・TMS のコア業務・外部システム連携を一つのシステムに統合します。すべては共通のデータ・AI 層に支えられ、インテリジェントな自動化とリスク管理を実現します。",
      altSystem: "システムアーキテクチャ図",
      altModules: "業務モジュール一覧",
      explanation: {
        lead: "荷主にとっての動作イメージ：",
        body: "既存の ERP・OMS・WMS が積み荷と受注データを ITEM に送信します。プラットフォームは本人確認（DIEV）と輸送実行（TMS コア）をオーケストレーションし、テレマティクス、カメラ、GenLogs の路側ネットワーク、スマートシールと連携して完全な証跡を構築します。すべてのデータは検証済み輸送グラフに集約され、AI 分析とリスクスコアリングに活用されます。",
      },
    },
    diev: {
      title: "ITEM DIEV + 荷主向け TMS",
      subtitle:
        "統合された 2 つのプロダクトが、一本の信頼チェーンを形成します。DIEV は「誰が」貨物を扱うのかを、荷主 TMS は実行過程で「何が起きたか」を検証します。両者が集荷から納品まで途切れないデジタル管理継承を実現します。",
      identity: {
        name: "ITEM DIEV",
        subtitle: "ドライバー本人確認・機材検証",
        body: "ドライバーが施設に入る前に、DIEV が多層的な検証を実施し、正しい人物が、正しい車両で、正しい運送会社から、正しい予約のために来場していることを確認します。結果は即時に「合格」「要確認」「却下」のいずれかで返されます。",
        tags: [
          "ライブネス自撮り",
          "CDL スキャンと照合",
          "顔と身分証の照合",
          "VIN / ナンバープレート",
          "USDOT / MC",
          "保険",
          "ジオフェンス",
          "QR クレデンシャル",
        ],
        badges: { pass: "合格", review: "要確認", decline: "却下" },
      },
      execution: {
        name: "ITEM 荷主向け TMS",
        subtitle: "輸送実行・検証・リスク管理",
        body: "本人確認が完了すると、荷主 TMS が自社バースから最終納品までの輸送ライフサイクル全体を管理します。各ステップで検証済みの証拠が生成され、完全な輸送記録として蓄積されます。",
        tags: [
          "積み荷と受注",
          "運送会社の割り当て",
          "トレーラー点検",
          "バース荷積み",
          "eBOL とシール",
          "マルチシグナル追跡",
          "チェックポイント検証",
          "例外管理",
          "納品と ePOD",
          "クレームとリスク",
        ],
      },
      flow: [
        "DIEV 検証",
        "ゲート入場",
        "トレーラー点検",
        "着車・荷積み",
        "施封と eBOL",
        "追跡と検証",
        "チェックポイント",
        "納品",
        "証拠の完成",
      ],
    },
    process: {
      title: "エンドツーエンドの輸送プロセス",
      subtitle:
        "荷主の視点では、すべての輸送が構造化された検証ステージを順に通過します。各ステージでシステムが自動的に証拠を収集し、想定条件と照合することで、人手を介さずに完全なデジタル管理継承を構築します。",
      altFlow: "エンドツーエンド業務フロー図",
      altEntities: "主要データエンティティ関連図",
      evidence: {
        lead: "証拠は自動的に蓄積されます：",
        body: "輸送が各ステージを進むにつれ、システムは写真、GPS 座標、タイムスタンプ、デバイス識別子、シールの読み取り値、テレマティクスデータを取得します。これらはリアルタイムで輸送記録に紐づくため、後にクレームが発生しても完全な案件ファイルがすでに存在します。",
      },
      entities: {
        lead: "つながったデータエンティティ：",
        body: "すべての輸送は、受注・運送会社・ドライバー・トラクター・トレーラー・予約・ルート・拠点・シール/デバイスを一つのグラフに結び付けます。これにより、想定と異なるトレーラーなどの不整合を検知し、直ちに警告できます。",
      },
    },
    inspection: {
      title: "トレーラー安全点検",
      subtitle:
        "荷積み開始前に、システムが自社拠点での構造化されたトレーラー点検をガイドします。AI が提出写真を解析して損傷を検知し、空荷であることを確認し、トレーラー番号が予約と一致するかを照合します。既存損傷に起因するクレームから荷主を守ります。",
      scope: {
        title: "点検対象",
        body: "点検は外装の構造的健全性と、内部の清潔さ・状態の両方を対象とします：",
        exteriorLabel: "外装",
        exterior: ["トレーラー番号", "ドアとヒンジ", "ロッキングバー", "屋根と側壁", "床下"],
        interiorLabel: "内部",
        interior: ["床の状態", "内壁の健全性", "湿気 / 臭気", "清潔さ", "空荷の確認"],
        reeferLabel: "冷凍機（該当する場合）",
        reefer: ["ユニット状態", "庫内温度", "設定温度", "燃料残量"],
      },
      ai: {
        title: "AI 写真解析",
        body: "AI が提出されたすべての写真を自動検証します：",
        items: [
          "トレーラーが本当に空荷かを検知",
          "ドアヒンジの異常を検出",
          "重複写真や過去写真を検知",
          "撮影位置が拠点と一致するかを検証",
          "画面キャプチャや加工の痕跡を検出",
        ],
      },
      alt: "点検情報を含む輸送詳細画面",
      explanation: {
        lead: "荷主にとっての意義：",
        body: "荷積み前の点検証拠は、クレーム紛争時にあなたを守ります。貨物が損傷して到着した場合でも、タイムスタンプと GPS が付与され AI が検証した写真により、荷積み前のトレーラーが清潔で無損傷だったことを証明できます。",
      },
    },
    dock: {
      title: "バース荷積みインテリジェンス",
      subtitle:
        "バースのカメラと倉庫システムが連携し、タイムスタンプ付きの完全な荷積み証拠パッケージを生成します。AI はトレーラー到着からシール施封までの全工程を監視し、異常を検知して貨物を自動カウントします。",
      timelineTitle: "自動化された荷積みタイムライン",
      timeline: {
        docked: { title: "トレーラー着車", body: "指定バースドアへの着車をバースセンサーが確認" },
        emptyConfirmed: { title: "空荷の確認", body: "荷積み開始前に AI ビジョンが庫内の空荷を確認" },
        loading: { title: "荷積み進行中", body: "パレットの移動を追跡し、受注数量と照合" },
        loaded: { title: "荷積み完了", body: "最終数量を確定し、差異があれば即座に警告" },
        sealed: { title: "ドア閉鎖・施封", body: "カメラ OCR でシール番号を取得し、輸送記録に紐付け" },
        departed: { title: "トレーラー出発", body: "出発時刻を記録し、管理責任を運送会社へ移転" },
      },
      camera: {
        title: "AI バースカメラの機能",
        items: [
          "映像からのパレット / カートン自動カウント",
          "バーコードおよび SSCC ラベルの認識",
          "積み残し検知（受注と実績の照合）",
          "無断の荷降ろし検知",
          "梱包破損の識別",
          "無許可者の立ち入り警告",
        ],
      },
      systems: {
        title: "既存システムとの連携",
        tags: [
          "WMS",
          "バーコードスキャナー",
          "RFID ゲート",
          "計量器",
          "バースドアセンサー",
          "フォークリフト管理",
        ],
      },
      output: {
        lead: "アウトプット：",
        body: "完全な荷積み証拠パッケージ——何を、いつ、どのような状態で積んだかを映像で証明します。後日の数量不足や破損クレームにおいて決定的な証拠となります。",
      },
    },
    ebol: {
      title: "eBOL とスマートシール",
      subtitle:
        "電子船荷証券（eBOL）は、管理責任が自社拠点から運送会社へ移転する瞬間を、電子署名・GPS・タイムスタンプ・シール番号とともに同時記録します。以降はスマートシールが輸送中のドアの完全性を監視します。",
      bol: {
        title: "電子船荷証券（eBOL）",
        body: "eBOL の署名はすべて、本人確認・GPS 位置・デバイスフィンガープリント・貨物状態と同期し、改ざん不能な管理責任移転記録を生成します。",
        items: [
          "本人確認を伴う電子署名",
          "署名時点の GPS 情報を付与",
          "品目・数量・重量・パレット数",
          "署名時にシール番号を紐付け",
          "例外メモと特別指示",
          "荷積み証拠パッケージを添付",
        ],
      },
      seal: {
        title: "スマートシールとドア監視",
        body: "写真による基本確認からリアルタイム電子監視まで、複数のシール技術に対応します。システムは無断アクセスを継続的に監視します。",
        kinds: {
          traditional: { title: "従来型シール", body: "施封時と開封時に写真 OCR + GPS + タイムスタンプを記録" },
          rfid: { title: "RFID シール", body: "RFID リーダーを備えたゲートやチェックポイントで開封を検知" },
          electronic: {
            title: "電子シール",
            body: "BLE またはセルラー経由で開閉アラートと位置情報をリアルタイム通知",
          },
          sensor: { title: "ドアセンサー", body: "光・衝撃・振動・温度を 24 時間 365 日監視" },
        },
      },
      doorEvents: {
        title: "AI がすべてのドアイベントを分類",
        body: "ドアイベントを検知すると、AI が位置・時刻・運行計画・補助シグナルという文脈に基づき、自動で分類します：",
        badges: [
          "正当な開扉（納品時）",
          "未検証の開扉（想定外の位置）",
          "不審な停車と開扉（高リスク地域）",
          "シール付け替えの疑い",
        ],
      },
    },
    tracking: {
      title: "マルチシグナル追跡",
      subtitle:
        "従来の追跡が示すのは単一の GPS ポイントだけです。ITEM は複数の独立したシグナルソースを統合し、追跡信頼度スコアを算出します。アプリが主張する位置ではなく、貨物が実際にどこにあるかを確信できます。",
      sourcesTitle: "プラットフォームが統合するシグナルソース",
      groups: {
        carrier: {
          title: "運送会社提供のシグナル",
          body: "運送会社自身のシステム由来のデータ。有用ですが、荷主単独では独立検証できません：",
          tags: [
            "トラクターテレマティクス（ELD）",
            "トレーラー GPS トラッカー",
            "スマートシールの位置情報",
          ],
        },
        independent: {
          title: "独立検証シグナル",
          body: "運送会社の申告位置を裏付ける、あるいは否定する第三者データ：",
          tags: [
            "GenLogs 路側検知",
            "ナンバープレート認識カメラの照合",
            "有料道路の通過記録",
            "ゲートカメラによる認識",
          ],
        },
        contextual: {
          title: "コンテキストシグナル",
          body: "位置情報の申告を検証する環境データ：",
          tags: [
            "ジオフェンスイベント",
            "ルート整合性",
            "Wi-Fi フィンガープリント",
            "写真背景の照合",
          ],
        },
      },
      confidence: {
        title: "追跡信頼度の例",
        locationLabel: "現在位置：",
        location: "I-40 東行き、Flagstaff, AZ 付近",
        scoreLabel: "追跡信頼度：",
        score: "96%",
        signalsLabel: "裏付けシグナル：",
        signals: [
          "トラクターテレマティクス",
          "トレーラー GPS",
          "GenLogs 路側検知（独立）",
          "ルート整合性",
          "ETA どおり進行",
        ],
      },
      explanation: {
        lead: "この数値が意味すること：",
        body: "信頼度 96% とは、その位置が 5 つの独立したシグナルで裏付けられている状態です。信頼度が低下した場合（テレマティクスのオフラインなど）、システムは直ちに通知し、どのシグナルが欠落しているかを説明します。",
      },
    },
    checkpoint: {
      title: "チェックポイントインテリジェンス",
      subtitle:
        "チェックポイントは単なるジオフェンスではなく、ルート上に配置されたマルチシグナル検証ノードです。各ポイントで複数の独立シグナルを収集・相互照合し、貨物の同一性・完全性・位置を確認します。",
      alt: "チェックポイント検証の仕組み図",
      kinds: {
        active: {
          title: "1. アクティブチェックポイント",
          body: "荷主が定義したルールで起動します。ドライバーアプリが特定地点でチェックイン操作を促します：",
          items: ["自撮り付きアプリチェックイン", "シール写真のスキャン", "QR / NFC による検証"],
        },
        passive: {
          title: "2. パッシブチェックポイント",
          body: "ドライバーの操作なしに自動収集されます。荷主やパートナーが管理するインフラ由来のシグナルです：",
          items: [
            "テレマティクス / ELD の発信",
            "ナンバープレート認識カメラの照合",
            "RFID シールの読み取り",
            "GenLogs 路側検知",
          ],
        },
        corroborated: {
          title: "3. 相互裏付けチェックポイント",
          body: "複数の独立シグナルが一致した状態で、最も信頼度の高い水準です。3 つ以上のシグナルが確認すれば、単一のソースだけで偽装することはできません：",
          items: [
            "テレマティクス + トレーラー GPS",
            "+ GenLogs 路側検知",
            "+ ナンバープレート認識カメラ",
            "= 検証済み",
          ],
        },
      },
      status: {
        label: "チェックポイントの状態：",
        badges: ["検証済み", "一部検証", "未通過", "矛盾あり"],
        note: "「矛盾あり」はシグナル同士が食い違っている状態を指し、直ちに調査が開始されます。",
      },
    },
    controlTower: {
      title: "AI 輸送コントロールタワー",
      subtitle:
        "AI はすべての進行中の輸送を継続的に監視し、リアルタイムのシグナルを想定される挙動と比較します。異常を検知すると、リスクレベルを自動判定し、ドライバーへのチェックイン要請から自社セキュリティ部門へのエスカレーションまで、適切な措置を実行します。",
      monitor: {
        title: "AI が監視する対象",
        body: "すべての輸送シグナルをリアルタイムで継続分析します：",
        critical: [
          "ルート逸脱",
          "追跡シグナルの喪失",
          "チェックポイント未通過",
          "想定外の停車",
          "ドア開放イベント",
          "シール完全性アラート",
        ],
        warning: ["機材の変更", "ETA に対する遅延", "温度逸脱", "不審な写真"],
      },
      actions: {
        title: "自動アクション",
        body: "AI はリスクレベルに応じて段階的に対応します：",
        items: [
          "文脈情報を含む例外レコードを作成",
          "ドライバーに即時チェックインを要請",
          "運用チームへ通知",
          "高リスク事象はセキュリティ部門へ通報",
          "次に取るべき最善策を提案",
          "インシデントレポートを自動生成",
        ],
      },
      alt: "オペレーションダッシュボード",
      explanation: {
        lead: "荷主にとってのメリット：",
        body: "数十件の輸送を人手で監視し電話で確認する必要はありません。AI が定型的な検証を担い、真の異常だけをエスカレーションします。チームはデータ収集ではなく意思決定に集中できます。",
      },
    },
    delivery: {
      title: "納品と ePOD",
      subtitle:
        "納品時、システムはシールの完全性を検証し、荷降ろしの証拠を取得して、完全な電子納品証明（ePOD）を生成します。AI が荷積み時と荷降ろし時の写真を比較し、数量や状態の差異を自動検知します。",
      sequenceTitle: "納品検証シーケンス",
      sequence: [
        "納品先ジオフェンス内で到着を確認",
        "ナンバープレート認識でトラクター / トレーラーの同一性を再検証",
        "シール番号を検証——原本と一致",
        "シールの完全性を確認（改ざんなし）",
        "ドア開放イベントをタイムスタンプ付きで記録",
        "荷降ろし写真を取得",
        "パレット数を eBOL と照合",
        "破損・数量不足があれば記録",
        "受領者の署名を電子的に取得",
        "ePOD を生成し輸送記録に紐付け",
      ],
      compare: {
        title: "AI 比較エンジン",
        body: "集荷時と納品時の証拠を自動的に比較します：",
        loadingLabel: "荷積み時",
        loadingValue: "写真 + 数量",
        vs: "対比",
        deliveryLabel: "納品時",
        deliveryValue: "写真 + 数量",
        items: [
          "出荷数量と受領数量の照合",
          "原本シール番号と納品時シール番号の照合",
          "梱包状態の比較",
          "パレット数の検証",
        ],
      },
      output: {
        lead: "アウトプット：",
        body: "完全な輸送証拠パッケージ——集荷から納品までを監査可能な形で記録し、あらゆるクレーム対応の基礎となります。",
      },
    },
    claims: {
      title: "AI クレーム調査",
      subtitle:
        "ITEM では、証拠はクレーム発生後ではなく、輸送の実行中に継続的に蓄積されます。クレームが発生した時点で、タイムライン・証拠・AI による責任分析を含む完全な案件ファイルを即座に生成します。",
      vs: "VS",
      traditional: {
        title: "従来のアプローチ",
        body: "クレーム発生 → メール・電話・分断されたシステムから証拠を探索 → 数週間の調査 → 不完全な案件",
      },
      item: {
        title: "ITEM のアプローチ",
        body: "実行中に証拠が蓄積 → クレーム発生 → 完全な案件ファイルを即時生成 → AI が責任所在を特定",
      },
      caseFile: {
        title: "自動生成されるクレーム案件ファイル",
        body: "実行段階ですでに収集済みの情報がすべて揃います：",
        tags: [
          "DIEV 検証記録",
          "トレーラー点検写真",
          "バース荷積み映像",
          "署名済み eBOL",
          "シール施封記録",
          "完全な追跡タイムライン",
          "全チェックポイント記録",
          "ドア / シールイベント",
          "納品写真と ePOD",
          "温度記録",
        ],
      },
      investigator: {
        title: "AI クレーム調査アシスタント",
        body: "AI が証拠を分析し、次を出力します：",
        items: [
          "再構成された完全なタイムライン",
          "責任移転ポイントの特定",
          "証拠の欠落箇所の指摘",
          "不審な停車およびドアイベントのハイライト",
          "損失発生段階の推定",
          "保険申請用パッケージの生成",
          "経営層向けのエグゼクティブサマリー",
        ],
      },
    },
    risk: {
      title: "リスクスコアリングと運送会社スコアカード",
      subtitle:
        "すべての輸送は、貨物価値・ルート・運送会社の実績・利用可能なセキュリティ手段に基づく動的なリスクスコアを持ちます。高リスク輸送では強化されたセキュリティ手順が自動的に適用されます。運送会社の実績は、定時運行率を超える 2 つの独自指標で評価します。",
      columns: {
        shipmentScore: {
          title: "輸送リスクスコア",
          body: "輸送単位で以下を考慮して評価します：",
          items: [
            "貨物価値と盗難対象としての狙われやすさ",
            "ルートリスク（盗難多発回廊）",
            "運送会社のリスクプロファイル",
            "時間帯 / 週末 / 祝日",
            "利用可能な追跡カバレッジ",
            "スマートシールの利用可否",
            "当該レーンの過去クレーム",
          ],
        },
        carrierScorecard: {
          title: "運送会社スコアカード",
          body: "従来の定時運行指標にとどまりません：",
          items: [
            "安全性・コンプライアンス評価",
            "定時運行実績",
            "証拠遵守率——すべての検証ステップを完了しているか",
            "同一性の一貫性——同じドライバーと車両が最後まで維持されているか",
            "クレーム発生率",
            "セキュリティ事象の履歴",
          ],
        },
        autoPolicies: {
          title: "自動セキュリティポリシー",
          body: "リスクに応じて自動的に発動される措置：",
          items: [
            "スマートシールの使用を必須化",
            "トレーラー GPS トラッカーの装着を必須化",
            "チェックポイントを追加",
            "承認済みルートに限定",
            "2 名乗務を必須化",
            "保険金額の引き上げ",
            "手動承認を必須化",
          ],
        },
      },
    },
    dataflow: {
      title: "データフローアーキテクチャ",
      subtitle:
        "複数のソースからのデータが、統一された取り込み API を通じて ITEM プラットフォームに流入します。リアルタイムのイベント処理が検証済み輸送グラフと AI エンジンに供給され、運用ダッシュボード・アラート・帳票・分析を支えます。",
      alt: "データフローアーキテクチャ図",
      columns: {
        sources: {
          title: "データソース（入力）",
          body: "ITEM DIEV · ERP / OMS / WMS · 運送会社 / TMS · テレマティクス / ELD · トレーラートラッカー · バースカメラ · ナンバープレート認識 / ゲートカメラ · RFID / スマートシール · GenLogs / 路側",
        },
        processing: {
          title: "処理エンジン",
          body: "データ取り込み API · イベントストリーム（リアルタイム） · 検証済み輸送グラフ · AI・ルールエンジン · データレイク / ストレージ",
        },
        outputs: {
          title: "運用アウトプット",
          body: "オペレーションダッシュボード · リアルタイム可視化 · 例外アラート · eBOL / 帳票 · カスタマーポータル · クレームポータル · BI / 分析 · API / Webhooks",
        },
      },
    },
    experience: {
      title: "プロダクト体験",
      subtitle:
        "荷主の運用チームのために設計された専用インターフェース。進行中の全輸送を俯瞰するダッシュボードから、詳細なチェックポイント検証画面まで。すべての画面が、生データではなく行動につながる示唆を提示します。",
      altDashboard: "荷主向けオペレーションダッシュボード",
      altShipment: "輸送詳細画面",
      captionShipment: "輸送詳細——完全なタイムライン、証拠、ステータス",
      altCheckpoint: "チェックポイント詳細画面",
      captionCheckpoint: "チェックポイント詳細——マルチシグナル検証の証拠",
      altDriverApp: "ドライバー向けモバイルアプリ",
      captionDriverApp: "ドライバー向けモバイルアプリ——自社拠点でのチェックイン手順をガイド",
    },
    integration: {
      title: "オープンな連携エコシステム",
      subtitle:
        "ITEM は既存の技術スタックと連携し、システムの総入れ替えを必要としません。ERP・WMS・既存 TMS からデータを取り込みつつ、テレマティクス・カメラ・センサー連携によって検証機能を追加します。",
      cards: {
        erp: { title: "ERP システム", body: "SAP · Oracle · NetSuite · Dynamics 365 · Infor" },
        wms: { title: "WMS", body: "Manhattan · Blue Yonder · Korber · SAP EWM" },
        telematics: { title: "テレマティクス", body: "Samsara · Motive · Geotab · Omnitracs · Trimble" },
        visibility: { title: "可視化サービス", body: "project44 · FourKites · MacroPoint · Trucker Tools" },
        compliance: { title: "コンプライアンス", body: "FMCSA · Highway · RMIS · CargoNet · Carrier411" },
        hardware: {
          title: "ハードウェア",
          body: "バースカメラ · ナンバープレート認識 · RFID リーダー · スマートシール · ドアセンサー",
        },
        tms: { title: "TMS / 求貨求車", body: "Oracle TM · MercuryGate · McLeod · Turvo · Descartes" },
        insurance: { title: "保険", body: "クレーム管理システム · 保険プラットフォーム · リスク評価" },
      },
      explanation: {
        lead: "連携のアプローチ：",
        body: "ITEM は主要プラットフォーム向けの標準コネクタと、個別連携のための REST API を提供します。データは双方向に流れ、自社システムが輸送データを送り込む一方、ITEM は検証済みステータス・アラート・証拠をダッシュボードや業務フローへ返します。",
      },
    },
    value: {
      title: "提供価値",
      subtitle:
        "ITEM Freight Trust Platform は、貨物セキュリティ・運用効率・可視化の信頼度・クレーム管理のそれぞれで測定可能な改善をもたらします。高価値貨物を守る必要がある荷主のために設計されています。",
      cards: {
        security: {
          title: "貨物セキュリティ",
          body: "各段階での多層検証により、盗難・なりすまし・無断の再委託を大幅に低減します。",
        },
        visibility: {
          title: "検証された可視性",
          body: "単一の GPS ポイントではなく、複数の独立シグナルに裏付けられた位置情報を確信を持って把握できます。",
        },
        speed: {
          title: "業務スピード",
          body: "ゲート処理の高速化、確認電話の削減、例外対応の自動化、バース作業の効率化を実現します。",
        },
        claims: {
          title: "クレーム解決",
          body: "完全な証拠パッケージを自動生成。責任所在の判断が速くなり、クレームの認容率も高まります。",
        },
      },
      stats: {
        theftRisk: { value: "↓ 70%", label: "貨物盗難リスク" },
        claimsCycle: { value: "↓ 50%", label: "クレーム処理期間" },
        gateEfficiency: { value: "↑ 40%", label: "ゲート効率" },
        trackingConfidence: { value: "96%", label: "追跡信頼度" },
      },
      closing: [
        "すべての輸送を可視化。",
        "すべてのチェックポイントを検証。",
        "すべての例外を説明可能に。",
      ],
      brand: "ITEM Freight Trust Platform",
    },
  },

  es: {
    common: {
      footer: "ITEM Freight Trust Platform — Confidencial",
      sectionLabel: "Sección",
    },
    nav: [
      "Portada",
      "Problema de confianza",
      "Carga verificada",
      "Visión general",
      "Arquitectura del sistema",
      "DIEV + TMS",
      "Proceso integral",
      "Inspección de remolque",
      "Carga en muelle",
      "eBOL y precinto",
      "Rastreo multiseñal",
      "Puntos de control",
      "Torre de control con AI",
      "Entrega y ePOD",
      "Reclamaciones",
      "Riesgo y scorecard",
      "Flujo de datos",
      "Panel de operaciones",
      "Integraciones",
      "Valor para el cliente",
    ],
    cover: {
      title: "ITEM Freight Trust Platform",
      subtitle: "Ejecución, verificación y gestión de riesgos del transporte con AI",
      tagline:
        "Verifique al conductor. Verifique el equipo. Verifique cada punto de control. Confíe en cada embarque.",
      chips: [
        "TMS para el cargador",
        "Verificación de identidad",
        "Rastreo multiseñal",
        "Gestión de riesgos con AI",
      ],
      scrollHint: "Desplácese",
    },
    problem: {
      title: "El transporte tiene un problema de confianza",
      subtitle:
        "La visibilidad tradicional le indica dónde podría estar un embarque. Pero como cargador, usted no puede verificar si el conductor, el vehículo y la carga son realmente lo que dicen ser. La brecha real no es la visibilidad, sino la verificabilidad.",
      cards: {
        gps: {
          title: "El GPS se puede falsificar",
          body: "Conductores o actores malintencionados pueden desactivar, falsificar o manipular la señal GPS. Un punto en un mapa no demuestra que el camión esté realmente allí. El cargador no tiene forma de confirmar la ubicación de manera independiente.",
        },
        driverSwap: {
          title: "El conductor se puede sustituir",
          body: "Quien va al volante puede no ser el conductor verificado y asignado. La suplantación de identidad y la sustitución no autorizada exponen al cargador a riesgos de responsabilidad y seguridad.",
        },
        equipment: {
          title: "El equipo se puede cambiar",
          body: "Tractores y remolques pueden cambiarse en ruta sin que el cargador lo sepa. Esto rompe la cadena de custodia e impide rastrear la responsabilidad por daños o robos.",
        },
        photos: {
          title: "Las fotos se pueden fabricar",
          body: "Se pueden presentar como evidencia actual fotos antiguas, editadas o capturas de pantalla. Sin verificación con AI, el cargador no puede distinguir una prueba en tiempo real de una imagen reutilizada.",
        },
        seals: {
          title: "Los precintos se pueden manipular",
          body: "Los precintos de perno tradicionales se cortan y se reemplazan por otros con la misma numeración. Sin monitoreo electrónico, el cargador no puede detectar una violación en ruta.",
        },
        evidence: {
          title: "La evidencia está dispersa",
          body: "Cuando ocurre un robo o un daño, la evidencia queda fragmentada entre correos, llamadas y sistemas desconectados. Armar un expediente toma semanas en lugar de minutos.",
        },
      },
      highlight: {
        lead: "Carga rastreada no es carga confiable.",
        body: "El cargador necesita una plataforma que no solo muestre actualizaciones de estado, sino que demuestre los hechos del transporte con múltiples señales independientes.",
      },
    },
    verified: {
      title: "De la carga rastreada a la carga verificada",
      subtitle:
        "ITEM convierte las actualizaciones de estado en hechos de transporte verificados. En lugar de depender de una sola señal GPS, cada evento crítico se corrobora con múltiples fuentes de datos independientes.",
      vs: "VS",
      traditional: {
        title: "TMS tradicional",
        note: "Datos de señal única, reportados por el transportista",
        items: [
          "Planificar el embarque",
          "Asignar al transportista",
          "Rastrear con el GPS del transportista",
          "Recibir la confirmación de entrega",
        ],
        result:
          "Resultado: usted sabe lo que le dice el transportista, pero no puede verificarlo de forma independiente.",
      },
      item: {
        title: "ITEM Freight Trust Platform",
        note: "Datos multiseñal, verificados de forma independiente",
        items: [
          "Verificar la identidad del conductor antes del retiro",
          "Verificar el cumplimiento del vehículo y del transportista",
          "Verificar el estado del remolque y la carga",
          "Verificar la integridad del precinto durante todo el tránsito",
          "Verificar la ubicación con múltiples señales",
          "Verificar la entrega con evidencia ePOD",
          "Explicar cada excepción con datos",
        ],
        result: "Resultado: cada evento del embarque se respalda con evidencia independiente y auditable.",
      },
      principle: {
        lead: "Principio fundamental:",
        body: "Ninguna señal se considera confiable por sí sola. Cada evento crítico debe verificarse con múltiples señales independientes: a esto lo llamamos la cadena de custodia digital.",
      },
    },
    platform: {
      title: "Visión general de la plataforma",
      subtitle:
        "ITEM Freight Trust Platform se apoya en una arquitectura de cuatro capas, diseñada para cargadores que necesitan control y visibilidad completos sobre su operación de transporte, desde la creación de la carga hasta la entrega final y la resolución de reclamaciones.",
      layers: {
        identity: {
          title: "Capa 1 — Capa de confianza de identidad (ITEM DIEV)",
          body: "Verifica QUIÉN maneja su carga antes de que comience cualquier movimiento. Garantiza que el conductor, el vehículo y el transportista sean legítimos, cumplan la normativa y coincidan con la cita programada.",
          modules: [
            "Verificación del conductor",
            "Verificación del vehículo",
            "Cumplimiento del transportista",
            "Validación del seguro",
            "Coincidencia con la cita",
            "Credencial QR",
          ],
        },
        execution: {
          title: "Capa 2 — Capa de ejecución del transporte (núcleo TMS del cargador)",
          body: "Gestiona el ciclo de vida completo del embarque desde su perspectiva como cargador: planificación de cargas, asignación de transportista, inspección del remolque, operación de muelle y gestión en tránsito.",
          modules: [
            "Pedidos y cargas",
            "Transportistas y capacidad",
            "Oferta y asignación",
            "Inspección de remolque",
            "Carga en muelle",
            "eBOL y precinto",
            "Rastreo y visibilidad",
            "Gestión de citas",
          ],
        },
        evidence: {
          title: "Capa 3 — Capa de evidencia y puntos de control",
          body: "Recoge y verifica evidencia de forma continua en cada punto de control de la ruta. Detecta excepciones automáticamente y construye una pista de auditoría completa para reclamaciones y cumplimiento.",
          modules: [
            "Inteligencia de puntos de control",
            "Gestión de excepciones con AI",
            "Entrega y ePOD",
            "Investigación de reclamaciones",
            "Analítica e informes",
            "Desempeño del transportista",
          ],
        },
        data: {
          title: "Capa 4 — Capa de datos y AI",
          body: "Impulsa la toma de decisiones mediante un grafo de conocimiento que conecta todas las entidades del embarque, modelos de AI/ML para detección de anomalías y procesamiento de eventos en tiempo real.",
          modules: [
            "Grafo de carga verificada",
            "Motor de AI y ML",
            "Data lake",
            "Streaming de eventos",
            "Seguridad y control de acceso",
          ],
        },
      },
    },
    architecture: {
      title: "Arquitectura del sistema",
      subtitle:
        "La plataforma conecta su capa de verificación de identidad, las operaciones centrales del TMS y las integraciones de terceros en un sistema unificado, todo impulsado por una capa compartida de datos y AI que habilita la automatización inteligente y la gestión de riesgos.",
      altSystem: "Diagrama de arquitectura del sistema",
      altModules: "Panorama de módulos de negocio",
      explanation: {
        lead: "Cómo funciona para el cargador:",
        body: "Sus sistemas ERP, OMS y WMS existentes alimentan a ITEM con datos de cargas y pedidos. La plataforma orquesta la verificación de identidad (DIEV) y la ejecución del transporte (núcleo TMS), e integra telemática, cámaras, la red de captación en carretera de GenLogs y precintos inteligentes para construir una pista de evidencia completa. Todos los datos fluyen al grafo de carga verificada para el análisis con AI y la calificación de riesgo.",
      },
    },
    diev: {
      title: "ITEM DIEV + TMS para el cargador",
      subtitle:
        "Dos productos integrados que forman una única cadena de confianza. DIEV verifica QUIÉN maneja su carga. El TMS del cargador verifica QUÉ OCURRIÓ durante la ejecución. Juntos crean una cadena de custodia digital ininterrumpida, del retiro a la entrega.",
      identity: {
        name: "ITEM DIEV",
        subtitle: "Verificación de identidad del conductor y del equipo",
        body: "Antes de que un conductor ingrese a sus instalaciones, DIEV realiza una verificación multicapa para asegurar que la persona correcta, con el vehículo correcto y del transportista correcto, se presente a la cita correcta. El resultado es inmediato: aprobado, en revisión o rechazado.",
        tags: [
          "Selfi con prueba de vida",
          "Escaneo y cotejo de CDL",
          "Cotejo rostro-documento",
          "VIN / placa",
          "USDOT / MC",
          "Seguro",
          "Geocerca",
          "Credencial QR",
        ],
        badges: { pass: "Aprobado", review: "En revisión", decline: "Rechazado" },
      },
      execution: {
        name: "ITEM TMS para el cargador",
        subtitle: "Ejecución, verificación y gestión de riesgos del transporte",
        body: "Una vez verificada la identidad, el TMS del cargador gestiona el ciclo de vida completo, desde su muelle hasta la entrega final. Cada paso genera evidencia verificada que se acumula en un expediente completo del embarque.",
        tags: [
          "Cargas y pedidos",
          "Asignación de transportista",
          "Inspección de remolque",
          "Carga en muelle",
          "eBOL y precinto",
          "Rastreo multiseñal",
          "Verificación en puntos de control",
          "Gestión de excepciones",
          "Entrega y ePOD",
          "Reclamaciones y riesgo",
        ],
      },
      flow: [
        "Verificación DIEV",
        "Ingreso por portería",
        "Inspección del remolque",
        "Muelle y carga",
        "Precinto y eBOL",
        "Rastreo y verificación",
        "Puntos de control",
        "Entrega",
        "Evidencia completa",
      ],
    },
    process: {
      title: "Proceso integral del embarque",
      subtitle:
        "Desde la perspectiva del cargador, cada embarque atraviesa una secuencia estructurada de etapas de verificación. En cada etapa el sistema recoge evidencia automáticamente y la contrasta con las condiciones esperadas, construyendo una cadena de custodia digital completa sin intervención manual.",
      altFlow: "Diagrama del proceso integral",
      altEntities: "Relación entre las entidades de datos clave",
      evidence: {
        lead: "La evidencia se acumula de forma automática:",
        body: "A medida que el embarque avanza por cada etapa, el sistema captura fotos, coordenadas GPS, marcas de tiempo, identificadores de dispositivo, lecturas de precinto y datos telemáticos. Esta evidencia se vincula al expediente del embarque en tiempo real, de modo que si más adelante surge una reclamación, el expediente completo ya existe.",
      },
      entities: {
        lead: "Entidades de datos conectadas:",
        body: "Cada embarque conecta pedido, transportista, conductor, tractor, remolque, cita, ruta, instalación y precinto o dispositivo en un grafo unificado. Esto permite detectar inconsistencias (por ejemplo, un remolque distinto al previsto) y señalarlas de inmediato.",
      },
    },
    inspection: {
      title: "Inspección de seguridad del remolque",
      subtitle:
        "Antes de comenzar la carga, el sistema guía una inspección estructurada del remolque en sus instalaciones. La AI analiza las fotos enviadas para detectar daños, confirmar que el remolque está vacío y validar que el número coincide con la cita, protegiéndolo frente a reclamaciones por daños preexistentes.",
      scope: {
        title: "Qué se inspecciona",
        body: "La inspección cubre tanto la integridad estructural exterior como la limpieza y el estado del interior:",
        exteriorLabel: "Exterior",
        exterior: [
          "Número de remolque",
          "Puertas y bisagras",
          "Barras de cierre",
          "Techo y paredes",
          "Bajos",
        ],
        interiorLabel: "Interior",
        interior: [
          "Estado del piso",
          "Integridad de paredes",
          "Humedad / olores",
          "Limpieza",
          "Vacío confirmado",
        ],
        reeferLabel: "Equipo de frío (si aplica)",
        reefer: ["Estado de la unidad", "Temperatura", "Punto de ajuste", "Nivel de combustible"],
      },
      ai: {
        title: "Análisis de fotos con AI",
        body: "La AI valida automáticamente cada foto enviada:",
        items: [
          "Detecta si el remolque está realmente vacío",
          "Identifica anomalías en las bisagras de la puerta",
          "Señala fotos duplicadas o antiguas",
          "Verifica que la ubicación de la foto coincida con la instalación",
          "Detecta capturas de pantalla o ediciones",
        ],
      },
      alt: "Detalle del embarque con inspección",
      explanation: {
        lead: "Por qué importa para el cargador:",
        body: "La evidencia de inspección previa a la carga lo protege en disputas por reclamaciones. Si la carga llega dañada, usted cuenta con fotos fechadas, geolocalizadas y verificadas con AI que prueban que el remolque estaba limpio e intacto antes de cargar su mercancía.",
      },
    },
    dock: {
      title: "Inteligencia de carga en muelle",
      subtitle:
        "Las cámaras de su muelle y sus sistemas de almacén trabajan en conjunto para generar un paquete de evidencia de carga completo y fechado. La AI supervisa todo el proceso, desde la llegada del remolque hasta la colocación del precinto, detectando anomalías y contando la carga de forma automática.",
      timelineTitle: "Línea de tiempo automatizada de la carga",
      timeline: {
        docked: {
          title: "Remolque en muelle",
          body: "Vehículo posicionado en la puerta asignada, confirmado por el sensor de muelle",
        },
        emptyConfirmed: {
          title: "Vacío confirmado",
          body: "La visión con AI verifica que el interior está vacío antes de iniciar la carga",
        },
        loading: {
          title: "Carga en curso",
          body: "Se rastrean los movimientos de tarimas y se cotejan contra el pedido",
        },
        loaded: {
          title: "Carga completada",
          body: "Se confirma el conteo final y se señala de inmediato cualquier diferencia",
        },
        sealed: {
          title: "Puerta cerrada y precintada",
          body: "El número de precinto se captura por OCR de cámara y se vincula al embarque",
        },
        departed: {
          title: "Salida del remolque",
          body: "Se registra la marca de tiempo de salida y la custodia pasa al transportista",
        },
      },
      camera: {
        title: "Capacidades de la cámara de muelle con AI",
        items: [
          "Conteo automático de tarimas y cajas a partir de video",
          "Reconocimiento de códigos de barras y etiquetas SSCC",
          "Detección de carga faltante (pedido frente a real)",
          "Detección de descarga no autorizada",
          "Identificación de daños en el embalaje",
          "Alertas de personal no autorizado",
        ],
      },
      systems: {
        title: "Se integra con sus sistemas",
        tags: [
          "WMS",
          "Lector de códigos de barras",
          "Portal RFID",
          "Báscula",
          "Sensor de puerta de muelle",
          "Sistema de montacargas",
        ],
      },
      output: {
        lead: "Resultado:",
        body: "Un paquete de evidencia de carga completo: prueba visual de qué se cargó, cuándo y en qué condición. Se convierte en evidencia decisiva si más adelante se presenta una reclamación por faltante o daño.",
      },
    },
    ebol: {
      title: "eBOL y precinto inteligente",
      subtitle:
        "El conocimiento de embarque electrónico registra el momento exacto en que la custodia pasa de sus instalaciones al transportista, con firmas digitales, GPS, marcas de tiempo y números de precinto capturados de forma simultánea. Los precintos inteligentes vigilan luego la integridad de las puertas durante todo el tránsito.",
      bol: {
        title: "Conocimiento de embarque electrónico",
        body: "Cada firma de eBOL se sincroniza con la verificación de identidad, la ubicación GPS, la huella del dispositivo y el estado de la carga, creando un registro inalterable de transferencia de custodia.",
        items: [
          "Firma digital con verificación de identidad",
          "Sello GPS en el momento de la firma",
          "Mercancía, cantidad, peso y número de tarimas",
          "Número de precinto vinculado al firmar",
          "Notas de excepción e instrucciones especiales",
          "Paquete de evidencia de carga adjunto",
        ],
      },
      seal: {
        title: "Precinto inteligente y monitoreo de puertas",
        body: "Se admiten múltiples tecnologías de precinto, desde la verificación básica por foto hasta el monitoreo electrónico en tiempo real. El sistema vigila de forma continua cualquier acceso no autorizado.",
        kinds: {
          traditional: {
            title: "Precinto tradicional",
            body: "OCR de foto + GPS + marca de tiempo al colocarlo y al retirarlo",
          },
          rfid: {
            title: "Precinto RFID",
            body: "Detección de manipulación en cada portería o punto de control con lectores RFID",
          },
          electronic: {
            title: "Precinto electrónico",
            body: "Alertas de apertura y cierre en tiempo real vía BLE o celular, con ubicación",
          },
          sensor: {
            title: "Sensor de puerta",
            body: "Monitoreo de luz, impacto, movimiento y temperatura las 24 horas",
          },
        },
      },
      doorEvents: {
        title: "La AI clasifica cada evento de puerta",
        body: "Cuando se detecta un evento de puerta, la AI lo clasifica automáticamente según el contexto: ubicación, hora, plan de ruta y señales de apoyo.",
        badges: [
          "Apertura autorizada (en la entrega)",
          "Apertura no verificada (ubicación inesperada)",
          "Parada sospechosa con apertura (zona de alto riesgo)",
          "Posible sustitución del precinto",
        ],
      },
    },
    tracking: {
      title: "Rastreo multiseñal",
      subtitle:
        "El rastreo tradicional muestra un único punto GPS. ITEM fusiona múltiples fuentes de señal independientes para generar una puntuación de confianza de rastreo, dándole certeza sobre dónde está realmente su carga y no solo dónde dice una aplicación que está.",
      sourcesTitle: "Fuentes de señal que la plataforma fusiona",
      groups: {
        carrier: {
          title: "Señales del transportista",
          body: "Datos de los sistemas propios del transportista: útiles, pero no verificables de forma independiente por el cargador.",
          tags: [
            "Telemática del tractor (ELD)",
            "Rastreador GPS del remolque",
            "Ubicación del precinto inteligente",
          ],
        },
        independent: {
          title: "Señales de verificación independiente",
          body: "Datos de terceros que confirman o contradicen la ubicación reportada por el transportista.",
          tags: [
            "Avistamiento en carretera de GenLogs",
            "Coincidencia de cámara LPR",
            "Registros de peaje",
            "Reconocimiento en cámara de portería",
          ],
        },
        contextual: {
          title: "Señales contextuales",
          body: "Datos del entorno que validan la ubicación declarada.",
          tags: [
            "Eventos de geocerca",
            "Consistencia de ruta",
            "Huella de Wi-Fi",
            "Coincidencia del fondo de la foto",
          ],
        },
      },
      confidence: {
        title: "Ejemplo de confianza de rastreo",
        locationLabel: "Ubicación actual:",
        location: "I-40 en dirección este, cerca de Flagstaff, AZ",
        scoreLabel: "Confianza de rastreo:",
        score: "96%",
        signalsLabel: "Señales de apoyo:",
        signals: [
          "Telemática del tractor",
          "GPS del remolque",
          "Avistamiento de GenLogs (independiente)",
          "Consistencia de ruta",
          "ETA en tiempo",
        ],
      },
      explanation: {
        lead: "Qué significa esto:",
        body: "Con una confianza del 96%, usted sabe que la ubicación está corroborada por 5 señales independientes. Si la confianza baja —por ejemplo, si la telemática se desconecta— el sistema le avisa de inmediato y explica qué señales faltan.",
      },
    },
    checkpoint: {
      title: "Inteligencia de puntos de control",
      subtitle:
        "Los puntos de control no son simples geocercas: son nodos de verificación multiseñal situados a lo largo de la ruta. En cada uno, el sistema recoge y contrasta varias señales independientes para confirmar la identidad, la integridad y la ubicación del embarque.",
      alt: "Mecanismo de verificación en puntos de control",
      kinds: {
        active: {
          title: "1. Punto de control activo",
          body: "Se activa según reglas definidas por el cargador. La aplicación del conductor solicita un registro en ubicaciones específicas.",
          items: [
            "Registro en la app con selfi",
            "Escaneo de la foto del precinto",
            "Verificación por QR o NFC",
          ],
        },
        passive: {
          title: "2. Punto de control pasivo",
          body: "Se recopila automáticamente, sin acción del conductor. Las señales provienen de infraestructura que usted o sus socios controlan.",
          items: [
            "Ping de telemática / ELD",
            "Coincidencia de cámara LPR",
            "Lectura de precinto RFID",
            "Avistamiento en carretera de GenLogs",
          ],
        },
        corroborated: {
          title: "3. Punto de control corroborado",
          body: "Varias señales independientes coinciden: este es el estándar de oro. Ninguna fuente aislada puede falsificarse cuando 3 o más señales confirman.",
          items: [
            "Telemática + GPS del remolque",
            "+ avistamiento de GenLogs",
            "+ cámara LPR",
            "= verificado",
          ],
        },
      },
      status: {
        label: "Estado del punto de control:",
        badges: ["Verificado", "Parcial", "Omitido", "En conflicto"],
        note: "Un estado «en conflicto» significa que las señales no coinciden y se activa una investigación inmediata.",
      },
    },
    controlTower: {
      title: "Torre de control de carga con AI",
      subtitle:
        "La AI supervisa de forma continua todos los embarques activos, comparando las señales en tiempo real con el comportamiento esperado. Cuando detecta anomalías, clasifica automáticamente el nivel de riesgo y actúa, desde solicitar un registro del conductor hasta escalar a su equipo de seguridad.",
      monitor: {
        title: "Qué supervisa la AI",
        body: "Análisis continuo y en tiempo real de todas las señales del embarque:",
        critical: [
          "Desvío de ruta",
          "Pérdida de señal de rastreo",
          "Punto de control omitido",
          "Parada inesperada",
          "Evento de apertura de puerta",
          "Alerta de integridad del precinto",
        ],
        warning: [
          "Cambio de equipo",
          "Retraso frente al ETA",
          "Excursión de temperatura",
          "Foto sospechosa",
        ],
      },
      actions: {
        title: "Acciones automatizadas",
        body: "La AI responde de forma proporcional al nivel de riesgo:",
        items: [
          "Crear una excepción con todo el contexto",
          "Solicitar un registro inmediato del conductor",
          "Alertar a su equipo de operaciones",
          "Notificar a seguridad en eventos de alto riesgo",
          "Recomendar la siguiente mejor acción",
          "Generar automáticamente el informe del incidente",
        ],
      },
      alt: "Panel de operaciones",
      explanation: {
        lead: "Beneficio para el cargador:",
        body: "En lugar de que su equipo supervise decenas de embarques y haga llamadas manuales, la AI se encarga de la verificación rutinaria y solo escala las anomalías reales. Su equipo se concentra en decidir, no en recopilar datos.",
      },
    },
    delivery: {
      title: "Entrega y ePOD",
      subtitle:
        "En la entrega, el sistema verifica la integridad del precinto, captura la evidencia de descarga y genera un comprobante electrónico de entrega completo. La AI compara las fotos de carga con las de descarga para detectar automáticamente diferencias de cantidad o condición.",
      sequenceTitle: "Secuencia de verificación de la entrega",
      sequence: [
        "Llegada confirmada en la geocerca de entrega",
        "Identidad del tractor y del remolque reverificada por LPR",
        "Número de precinto verificado: coincide con el original",
        "Integridad del precinto confirmada (sin manipulación)",
        "Evento de apertura de puerta registrado con marca de tiempo",
        "Fotos de descarga capturadas",
        "Conteo de tarimas cotejado contra el eBOL",
        "Todo daño o faltante documentado",
        "Firma del receptor capturada digitalmente",
        "ePOD generado y vinculado al embarque",
      ],
      compare: {
        title: "Motor de comparación con AI",
        body: "Compara automáticamente la evidencia de retiro y de entrega:",
        loadingLabel: "En la carga",
        loadingValue: "Fotos + conteo",
        vs: "vs",
        deliveryLabel: "En la entrega",
        deliveryValue: "Fotos + conteo",
        items: [
          "Cantidad embarcada frente a cantidad recibida",
          "Precinto original frente al precinto de entrega",
          "Comparación del estado del embalaje",
          "Verificación del conteo de tarimas",
        ],
      },
      output: {
        lead: "Resultado:",
        body: "Paquete completo de evidencia del embarque: un registro auditable del retiro a la entrega que sirve de base para cualquier proceso de reclamación.",
      },
    },
    claims: {
      title: "Investigación de reclamaciones con AI",
      subtitle:
        "Con ITEM, la evidencia se acumula de forma continua durante la ejecución del embarque, no después de presentar una reclamación. Cuando surge una, el sistema genera al instante un expediente completo con línea de tiempo, evidencia y análisis de responsabilidad asistido por AI.",
      vs: "VS",
      traditional: {
        title: "Enfoque tradicional",
        body: "Ocurre la reclamación → se busca evidencia en correos, llamadas y sistemas desconectados → semanas de investigación → expediente incompleto",
      },
      item: {
        title: "Enfoque ITEM",
        body: "La evidencia se acumula durante la ejecución → ocurre la reclamación → el expediente completo se genera al instante → la AI determina la responsabilidad",
      },
      caseFile: {
        title: "Expediente de reclamación generado automáticamente",
        body: "Todo lo recopilado durante la ejecución:",
        tags: [
          "Registro de verificación DIEV",
          "Fotos de inspección del remolque",
          "Video de carga en muelle",
          "eBOL con firmas",
          "Registro de colocación del precinto",
          "Línea de tiempo completa de rastreo",
          "Todos los registros de puntos de control",
          "Eventos de puerta y precinto",
          "Fotos de entrega y ePOD",
          "Registros de temperatura",
        ],
      },
      investigator: {
        title: "Investigador de reclamaciones con AI",
        body: "La AI analiza la evidencia y produce:",
        items: [
          "Línea de tiempo reconstruida por completo",
          "Puntos de transferencia de responsabilidad identificados",
          "Vacíos de evidencia señalados",
          "Paradas y aperturas de puerta sospechosas destacadas",
          "Etapa probable de la pérdida determinada",
          "Paquete de presentación para la aseguradora",
          "Resumen ejecutivo para la dirección",
        ],
      },
    },
    risk: {
      title: "Calificación de riesgo y scorecard del transportista",
      subtitle:
        "Cada embarque recibe una puntuación de riesgo dinámica basada en el valor de la carga, la ruta, el historial del transportista y las medidas de seguridad disponibles. Los embarques de alto riesgo activan automáticamente protocolos reforzados. El desempeño del transportista se mide con dos métricas propias que van más allá de la puntualidad.",
      columns: {
        shipmentScore: {
          title: "Puntuación de riesgo del embarque",
          body: "Evaluación por embarque que considera:",
          items: [
            "Valor de la carga y atractivo para el robo",
            "Riesgo de la ruta (corredores de alta incidencia)",
            "Perfil de riesgo del transportista",
            "Hora del día / fin de semana / feriado",
            "Cobertura de rastreo disponible",
            "Disponibilidad de precinto inteligente",
            "Historial de reclamaciones en este carril",
          ],
        },
        carrierScorecard: {
          title: "Scorecard del transportista",
          body: "Más allá de las métricas tradicionales de puntualidad:",
          items: [
            "Calificación de seguridad y cumplimiento",
            "Desempeño de puntualidad",
            "Cumplimiento de evidencia: ¿completa todos los pasos de verificación?",
            "Consistencia de identidad: ¿se mantienen el mismo conductor y vehículo de principio a fin?",
            "Índice de reclamaciones",
            "Historial de eventos de seguridad",
          ],
        },
        autoPolicies: {
          title: "Políticas de seguridad automáticas",
          body: "Acciones activadas automáticamente según el riesgo:",
          items: [
            "Exigir precinto inteligente",
            "Exigir rastreador GPS en el remolque",
            "Añadir puntos de control adicionales",
            "Restringir a rutas aprobadas",
            "Exigir conducción en equipo",
            "Aumentar la cobertura del seguro",
            "Exigir aprobación manual",
          ],
        },
      },
    },
    dataflow: {
      title: "Arquitectura de flujo de datos",
      subtitle:
        "Los datos llegan a la plataforma ITEM desde múltiples fuentes a través de una API de ingesta unificada. El procesamiento de eventos en tiempo real alimenta el grafo de carga verificada y el motor de AI, que impulsan los paneles operativos, las alertas, los documentos y la analítica de su equipo.",
      alt: "Diagrama de arquitectura de flujo de datos",
      columns: {
        sources: {
          title: "Fuentes de datos (entrada)",
          body: "ITEM DIEV · ERP / OMS / WMS · Transportista / TMS · Telemática / ELD · Rastreador de remolque · Cámara de muelle · LPR / cámara de portería · RFID / precinto inteligente · GenLogs / carretera",
        },
        processing: {
          title: "Motor de procesamiento",
          body: "API de ingesta de datos · Flujo de eventos (tiempo real) · Grafo de carga verificada · Motor de AI y reglas · Data lake / almacenamiento",
        },
        outputs: {
          title: "Salidas operativas",
          body: "Panel de operaciones · Visibilidad en tiempo real · Alertas de excepción · eBOL / documentos · Portal de clientes · Portal de reclamaciones · BI / analítica · API / webhooks",
        },
      },
    },
    experience: {
      title: "Experiencia de producto",
      subtitle:
        "Interfaces creadas específicamente para los equipos de operaciones del cargador, desde paneles generales con todos los embarques activos hasta vistas detalladas de verificación en puntos de control. Cada pantalla está diseñada para revelar información accionable, no datos en bruto.",
      altDashboard: "Panel de operaciones del cargador",
      altShipment: "Vista de detalle del embarque",
      captionShipment: "Detalle del embarque: línea de tiempo completa, evidencia y estado",
      altCheckpoint: "Vista de detalle del punto de control",
      captionCheckpoint: "Detalle del punto de control: evidencia de verificación multiseñal",
      altDriverApp: "Aplicación móvil para el conductor",
      captionDriverApp:
        "Aplicación móvil del conductor: flujo guiado de registro en sus instalaciones",
    },
    integration: {
      title: "Ecosistema abierto de integraciones",
      subtitle:
        "ITEM se conecta con su stack tecnológico actual, sin necesidad de reemplazarlo. La plataforma consume datos de su ERP, su WMS y su TMS existente, y añade capacidades de verificación mediante integraciones de telemática, cámaras y sensores.",
      cards: {
        erp: { title: "Sistemas ERP", body: "SAP · Oracle · NetSuite · Dynamics 365 · Infor" },
        wms: { title: "WMS", body: "Manhattan · Blue Yonder · Korber · SAP EWM" },
        telematics: { title: "Telemática", body: "Samsara · Motive · Geotab · Omnitracs · Trimble" },
        visibility: { title: "Visibilidad", body: "project44 · FourKites · MacroPoint · Trucker Tools" },
        compliance: { title: "Cumplimiento", body: "FMCSA · Highway · RMIS · CargoNet · Carrier411" },
        hardware: {
          title: "Hardware",
          body: "Cámara de muelle · LPR · Lector RFID · Precinto inteligente · Sensor de puerta",
        },
        tms: { title: "TMS / correduría", body: "Oracle TM · MercuryGate · McLeod · Turvo · Descartes" },
        insurance: {
          title: "Seguros",
          body: "Sistemas de reclamaciones · Plataformas de seguros · Evaluación de riesgo",
        },
      },
      explanation: {
        lead: "Enfoque de integración:",
        body: "ITEM ofrece conectores preconstruidos para las principales plataformas y una API REST para integraciones a medida. Los datos fluyen en ambos sentidos: sus sistemas aportan la información del embarque e ITEM devuelve estados verificados, alertas y evidencia a sus paneles y flujos de trabajo.",
      },
    },
    value: {
      title: "Valor para el cliente",
      subtitle:
        "ITEM Freight Trust Platform aporta mejoras medibles en seguridad de la carga, eficiencia operativa, confianza en la visibilidad y gestión de reclamaciones, y está diseñada específicamente para cargadores que necesitan proteger mercancía de alto valor.",
      cards: {
        security: {
          title: "Seguridad de la carga",
          body: "Reduce de forma drástica el robo, la suplantación de identidad y la subcontratación indebida mediante verificación multicapa en cada etapa.",
        },
        visibility: {
          title: "Visibilidad verificada",
          body: "Sepa dónde está su carga con certeza, respaldado por múltiples señales independientes y no por un único punto GPS.",
        },
        speed: {
          title: "Velocidad operativa",
          body: "Procesamiento más ágil en portería, menos llamadas de seguimiento, gestión automatizada de excepciones y operación de muelle más fluida.",
        },
        claims: {
          title: "Resolución de reclamaciones",
          body: "Paquetes de evidencia completos generados automáticamente. Determinación de responsabilidad más rápida y mayor tasa de éxito en las reclamaciones.",
        },
      },
      stats: {
        theftRisk: { value: "↓ 70%", label: "Riesgo de robo de carga" },
        claimsCycle: { value: "↓ 50%", label: "Ciclo de reclamaciones" },
        gateEfficiency: { value: "↑ 40%", label: "Eficiencia en portería" },
        trackingConfidence: { value: "96%", label: "Confianza de rastreo" },
      },
      closing: [
        "Cada embarque, visible.",
        "Cada punto de control, verificado.",
        "Cada excepción, explicable.",
      ],
      brand: "ITEM Freight Trust Platform",
    },
  },
};

export default pack;
