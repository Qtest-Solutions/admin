export const services = [
  {
    name: "Manual Testing",
    slug: "manual-testing",
    intro:
      "Comprehensive manual testing services that ensure your software delivers flawless user experiences. Our expert QA engineers meticulously validate every feature, workflow, and edge case to catch issues before your customers do.",
    whenToUse: [
      {
        title: "Pre-Release Validation",
        description: "Critical testing before major product launches and feature releases"
      },
      {
        title: "UX & Usability Assessment",
        description: "Human-centered evaluation of user interfaces and workflows"
      },
      {
        title: "Complex Scenario Testing",
        description: "When automation cannot capture nuanced user behaviors"
      },
      {
        title: "Exploratory Testing",
        description: "Discovering unexpected issues through creative test approaches"
      },
    ],
    whatWeTest: [
      {
        title: "End-to-End User Journeys",
        description: "Complete validation of critical business workflows from start to finish"
      },
      {
        title: "Edge Cases & Negative Scenarios",
        description: "Testing boundary conditions and error handling mechanisms"
      },
      {
        title: "Cross-Browser Compatibility",
        description: "Ensuring consistent experience across Chrome, Firefox, Safari, and Edge"
      },
      {
        title: "Responsive Design Validation",
        description: "Testing across desktop, tablet, and mobile breakpoints"
      },
      {
        title: "Accessibility Compliance",
        description: "WCAG 2.1 AA compliance testing for inclusive user experiences"
      },
      {
        title: "Localization Testing",
        description: "Validation of multi-language and regional implementations"
      },
    ],
    businessImpact: [
      {
        metric: "73%",
        title: "Fewer Production Defects",
        description: "Catch critical bugs before they impact your customers"
      },
      {
        metric: "2.5x",
        title: "Faster Issue Resolution",
        description: "Detailed bug reports accelerate developer fix times"
      },
      {
        metric: "40%",
        title: "Reduced Support Tickets",
        description: "Higher quality releases mean fewer customer complaints"
      },
    ],
    process: [
      { step: "01", title: "Requirements Analysis", description: "Deep dive into your product specifications and user stories" },
      { step: "02", title: "Test Strategy Design", description: "Custom test plan tailored to your release goals" },
      { step: "03", title: "Test Execution", description: "Systematic testing with detailed documentation" },
      { step: "04", title: "Defect Reporting", description: "Comprehensive bug reports with reproduction steps" },
      { step: "05", title: "Regression Validation", description: "Re-testing fixed issues and impact analysis" },
    ],
    seo: {
      title: "Manual Testing Services | Enterprise QA Solutions | QTest Solutions",
      description:
        "Professional manual testing services for enterprise software. Expert QA engineers validate usability, functionality, and cross-browser compatibility to ensure flawless releases.",
    },
  },
  {
    name: "Automation Testing",
    slug: "automation-testing",
    intro:
      "Accelerate your release velocity with intelligent test automation. Our automation frameworks integrate seamlessly into your CI/CD pipeline, providing rapid feedback and comprehensive regression coverage for every deployment.",
    whenToUse: [
      {
        title: "Continuous Deployment",
        description: "Automated validation for teams releasing multiple times per day"
      },
      {
        title: "Regression Testing",
        description: "Efficient re-testing of existing functionality after changes"
      },
      {
        title: "Data-Driven Testing",
        description: "Validating functionality across thousands of data combinations"
      },
      {
        title: "Performance Benchmarking",
        description: "Continuous monitoring of application response times"
      },
    ],
    whatWeTest: [
      {
        title: "API Integration Testing",
        description: "Comprehensive REST and GraphQL API validation with contract testing"
      },
      {
        title: "UI Regression Suites",
        description: "Automated browser testing with Selenium, Playwright, and Cypress"
      },
      {
        title: "Database Validation",
        description: "Data integrity and migration testing across environments"
      },
      {
        title: "Microservices Testing",
        description: "Component and integration testing for distributed architectures"
      },
      {
        title: "Mobile App Automation",
        description: "Native and hybrid app testing on iOS and Android platforms"
      },
      {
        title: "Visual Regression Testing",
        description: "Pixel-perfect UI comparison across releases"
      },
    ],
    businessImpact: [
      {
        metric: "85%",
        title: "Faster Test Execution",
        description: "Run comprehensive test suites in minutes, not days"
      },
      {
        metric: "10x",
        title: "Greater Test Coverage",
        description: "Execute thousands of test cases with every build"
      },
      {
        metric: "60%",
        title: "Reduced QA Costs",
        description: "Lower long-term testing expenses through automation ROI"
      },
    ],
    process: [
      { step: "01", title: "Automation Assessment", description: "Evaluate testability and identify automation candidates" },
      { step: "02", title: "Framework Architecture", description: "Design scalable, maintainable automation infrastructure" },
      { step: "03", title: "Script Development", description: "Build robust test scripts with proper error handling" },
      { step: "04", title: "CI/CD Integration", description: "Seamless pipeline integration with reporting dashboards" },
      { step: "05", title: "Maintenance & Optimization", description: "Ongoing script updates and execution optimization" },
    ],
    seo: {
      title: "Test Automation Services | CI/CD Integration | QTest Solutions",
      description:
        "Enterprise test automation services with CI/CD integration. Accelerate releases with Selenium, Playwright, and API automation frameworks.",
    },
  },
  {
    name: "Performance Testing",
    slug: "performance-testing",
    intro:
      "Ensure your application scales under pressure with comprehensive performance testing. We identify bottlenecks, validate capacity, and optimize response times to deliver exceptional user experiences at any load.",
    whenToUse: [
      {
        title: "Pre-Launch Validation",
        description: "Ensure infrastructure readiness before major product launches"
      },
      {
        title: "Capacity Planning",
        description: "Determine system limits and plan for growth"
      },
      {
        title: "SLA Compliance",
        description: "Validate that performance meets contractual obligations"
      },
      {
        title: "Cloud Migration",
        description: "Benchmark performance before and after infrastructure changes"
      },
    ],
    whatWeTest: [
      {
        title: "Load Testing",
        description: "Validate system behavior under expected user volumes"
      },
      {
        title: "Stress Testing",
        description: "Identify breaking points and failure modes"
      },
      {
        title: "Endurance Testing",
        description: "Detect memory leaks and degradation over time"
      },
      {
        title: "Spike Testing",
        description: "Assess response to sudden traffic surges"
      },
      {
        title: "Scalability Testing",
        description: "Validate horizontal and vertical scaling capabilities"
      },
      {
        title: "API Performance",
        description: "Measure response times and throughput of backend services"
      },
    ],
    businessImpact: [
      {
        metric: "99.9%",
        title: "Uptime Confidence",
        description: "Launch with certainty that your system can handle the load"
      },
      {
        metric: "3x",
        title: "Faster Response Times",
        description: "Optimize bottlenecks for improved user experience"
      },
      {
        metric: "$2.5M",
        title: "Downtime Prevention",
        description: "Average cost savings from avoiding production outages"
      },
    ],
    process: [
      { step: "01", title: "Performance Requirements", description: "Define KPIs, SLAs, and acceptance criteria" },
      { step: "02", title: "Workload Modeling", description: "Create realistic user scenarios and load profiles" },
      { step: "03", title: "Environment Setup", description: "Configure production-like test environments" },
      { step: "04", title: "Test Execution", description: "Run load tests with real-time monitoring" },
      { step: "05", title: "Analysis & Tuning", description: "Identify bottlenecks and optimize performance" },
    ],
    seo: {
      title: "Performance Testing Services | Load & Stress Testing | QTest Solutions",
      description:
        "Enterprise performance testing services including load, stress, and scalability testing. Ensure your application performs flawlessly under pressure.",
    },
  },
  {
    name: "Security Testing",
    slug: "security-testing",
    intro:
      "Protect your business and customers with comprehensive security testing. Our certified security engineers identify vulnerabilities before attackers do, ensuring your applications meet compliance requirements and industry best practices.",
    whenToUse: [
      {
        title: "Compliance Requirements",
        description: "Meet SOC 2, HIPAA, PCI-DSS, and GDPR mandates"
      },
      {
        title: "Pre-Production Security",
        description: "Validate security before exposing applications to the internet"
      },
      {
        title: "Third-Party Integrations",
        description: "Assess security risks of external dependencies"
      },
      {
        title: "Annual Security Audits",
        description: "Regular penetration testing for continuous assurance"
      },
    ],
    whatWeTest: [
      {
        title: "Penetration Testing",
        description: "Simulated attacks to identify exploitable vulnerabilities"
      },
      {
        title: "OWASP Top 10 Assessment",
        description: "Testing for common web application security risks"
      },
      {
        title: "API Security Testing",
        description: "Authentication, authorization, and injection attack testing"
      },
      {
        title: "Code Security Review",
        description: "Static analysis of source code for security flaws"
      },
      {
        title: "Infrastructure Testing",
        description: "Cloud configuration and network security assessment"
      },
      {
        title: "Social Engineering",
        description: "Phishing simulations and security awareness testing"
      },
    ],
    businessImpact: [
      {
        metric: "100%",
        title: "Compliance Readiness",
        description: "Meet regulatory requirements with documented evidence"
      },
      {
        metric: "Zero",
        title: "Critical Vulnerabilities",
        description: "Identify and remediate high-risk issues before launch"
      },
      {
        metric: "$4.45M",
        title: "Breach Cost Prevention",
        description: "Average cost of a data breach you can avoid"
      },
    ],
    process: [
      { step: "01", title: "Threat Modeling", description: "Identify attack surfaces and potential threat actors" },
      { step: "02", title: "Vulnerability Scanning", description: "Automated discovery of known security issues" },
      { step: "03", title: "Manual Penetration Testing", description: "Expert-led exploitation attempts" },
      { step: "04", title: "Risk Assessment", description: "Prioritized findings with severity ratings" },
      { step: "05", title: "Remediation Support", description: "Guidance on fixing vulnerabilities and re-testing" },
    ],
    seo: {
      title: "Security Testing Services | Penetration Testing | QTest Solutions",
      description:
        "Comprehensive security testing and penetration testing services. Protect your applications from cyber threats and ensure compliance.",
    },
  },
  {
    name: "Regression Testing",
    slug: "regression-testing",
    intro:
      "Safeguard your application's stability with comprehensive regression testing. We ensure that new code changes, bug fixes, and feature additions don't break existing functionality, maintaining the integrity of your software with every release.",
    whenToUse: [
      {
        title: "After Code Changes",
        description: "Validate existing features remain functional after new development"
      },
      {
        title: "Bug Fix Verification",
        description: "Ensure fixes don't introduce new issues in related areas"
      },
      {
        title: "Feature Additions",
        description: "Confirm new features integrate seamlessly with existing functionality"
      },
      {
        title: "Environment Changes",
        description: "Validate stability after infrastructure or configuration updates"
      },
    ],
    whatWeTest: [
      {
        title: "Full Regression Suites",
        description: "Complete testing of all critical application functionality"
      },
      {
        title: "Partial Regression",
        description: "Targeted testing of affected modules and dependencies"
      },
      {
        title: "Smoke Testing",
        description: "Quick validation of core features after each build"
      },
      {
        title: "Sanity Testing",
        description: "Focused testing of specific bug fixes and changes"
      },
      {
        title: "Integration Points",
        description: "Verify connections between modules remain intact"
      },
      {
        title: "Data Migration Validation",
        description: "Ensure data integrity after database changes"
      },
    ],
    businessImpact: [
      {
        metric: "95%",
        title: "Defect Detection Rate",
        description: "Catch regression bugs before they reach production"
      },
      {
        metric: "50%",
        title: "Faster Release Cycles",
        description: "Streamlined testing enables quicker time-to-market"
      },
      {
        metric: "80%",
        title: "Reduced Rollbacks",
        description: "Fewer production issues mean fewer emergency fixes"
      },
    ],
    process: [
      { step: "01", title: "Impact Analysis", description: "Identify affected areas based on code changes" },
      { step: "02", title: "Test Case Selection", description: "Choose relevant test cases for regression scope" },
      { step: "03", title: "Test Execution", description: "Run regression suites with detailed tracking" },
      { step: "04", title: "Defect Identification", description: "Document and prioritize any regression issues found" },
      { step: "05", title: "Sign-off & Reporting", description: "Comprehensive reports with release recommendations" },
    ],
    seo: {
      title: "Regression Testing Services | Software Quality Assurance | QTest Solutions",
      description:
        "Professional regression testing services to ensure code changes don't break existing functionality. Maintain software stability with every release.",
    },
  },
  {
    name: "API Testing",
    slug: "api-testing",
    intro:
      "Ensure your APIs are reliable, secure, and performant with our comprehensive API testing services. We validate endpoints, data integrity, authentication, and integration points to guarantee seamless communication across your systems.",
    whenToUse: [
      {
        title: "Microservices Architecture",
        description: "Validate communication between distributed services"
      },
      {
        title: "Third-Party Integrations",
        description: "Ensure external API connections work correctly"
      },
      {
        title: "Mobile App Backends",
        description: "Test APIs that power mobile applications"
      },
      {
        title: "API-First Development",
        description: "Validate APIs before frontend development begins"
      },
    ],
    whatWeTest: [
      {
        title: "Functional Testing",
        description: "Verify endpoints return correct responses for all inputs"
      },
      {
        title: "Contract Testing",
        description: "Ensure API contracts are maintained across versions"
      },
      {
        title: "Authentication & Authorization",
        description: "Validate OAuth, JWT, API keys, and access controls"
      },
      {
        title: "Error Handling",
        description: "Test error responses, status codes, and edge cases"
      },
      {
        title: "Rate Limiting & Throttling",
        description: "Verify API protection mechanisms work correctly"
      },
      {
        title: "Data Validation",
        description: "Ensure request/response payloads match specifications"
      },
    ],
    businessImpact: [
      {
        metric: "99.9%",
        title: "API Reliability",
        description: "Ensure consistent API performance and availability"
      },
      {
        metric: "70%",
        title: "Faster Integration",
        description: "Well-tested APIs speed up partner integrations"
      },
      {
        metric: "Zero",
        title: "Breaking Changes",
        description: "Prevent API changes from impacting consumers"
      },
    ],
    process: [
      { step: "01", title: "API Documentation Review", description: "Analyze specifications, schemas, and contracts" },
      { step: "02", title: "Test Case Design", description: "Create comprehensive test scenarios for all endpoints" },
      { step: "03", title: "Automated Test Development", description: "Build reusable API test suites with Postman/RestAssured" },
      { step: "04", title: "Execution & Monitoring", description: "Run tests with detailed logging and assertions" },
      { step: "05", title: "Reporting & Documentation", description: "Deliver actionable insights and test coverage reports" },
    ],
    seo: {
      title: "API Testing Services | REST & GraphQL Testing | QTest Solutions",
      description:
        "Comprehensive API testing services for REST, GraphQL, and SOAP APIs. Ensure reliability, security, and performance of your API integrations.",
    },
  },
  {
    name: "Mobile App Testing",
    slug: "mobile-app-testing",
    intro:
      "Deliver flawless mobile experiences across iOS and Android with our comprehensive mobile app testing services. We test on real devices to ensure your app performs perfectly across different screen sizes, OS versions, and network conditions.",
    whenToUse: [
      {
        title: "App Store Submissions",
        description: "Ensure your app meets Apple and Google guidelines"
      },
      {
        title: "Cross-Platform Apps",
        description: "Validate React Native, Flutter, or Xamarin applications"
      },
      {
        title: "Device Fragmentation",
        description: "Test across multiple device types and OS versions"
      },
      {
        title: "App Updates",
        description: "Verify new versions work on all supported devices"
      },
    ],
    whatWeTest: [
      {
        title: "Functional Testing",
        description: "Verify all features work correctly on mobile devices"
      },
      {
        title: "Device Compatibility",
        description: "Test on 50+ real devices covering major manufacturers"
      },
      {
        title: "Network Conditions",
        description: "Validate behavior on 2G, 3G, 4G, 5G, and WiFi"
      },
      {
        title: "Battery & Memory",
        description: "Ensure efficient resource usage and no memory leaks"
      },
      {
        title: "Interruption Testing",
        description: "Handle calls, notifications, and app switching gracefully"
      },
      {
        title: "Offline Functionality",
        description: "Verify app behavior without network connectivity"
      },
    ],
    businessImpact: [
      {
        metric: "4.8★",
        title: "Higher App Ratings",
        description: "Quality apps receive better user reviews"
      },
      {
        metric: "60%",
        title: "Reduced Uninstalls",
        description: "Fewer bugs mean better user retention"
      },
      {
        metric: "100%",
        title: "Store Compliance",
        description: "Meet all App Store and Play Store requirements"
      },
    ],
    process: [
      { step: "01", title: "Device Strategy", description: "Select target devices based on your user demographics" },
      { step: "02", title: "Test Planning", description: "Create mobile-specific test scenarios and criteria" },
      { step: "03", title: "Real Device Testing", description: "Execute tests on physical devices in our lab" },
      { step: "04", title: "Bug Documentation", description: "Detailed reports with screenshots and device logs" },
      { step: "05", title: "Certification Testing", description: "Pre-submission validation for app stores" },
    ],
    seo: {
      title: "Mobile App Testing Services | iOS & Android Testing | QTest Solutions",
      description:
        "Professional mobile app testing on real iOS and Android devices. Ensure your app delivers flawless experiences across all devices and OS versions.",
    },
  },
  {
    name: "UAT Support",
    slug: "uat-support",
    intro:
      "Streamline your User Acceptance Testing with our expert UAT support services. We help bridge the gap between development and business stakeholders, ensuring your software meets real-world requirements and user expectations before go-live.",
    whenToUse: [
      {
        title: "Pre-Production Validation",
        description: "Final verification before software goes live"
      },
      {
        title: "Stakeholder Sign-off",
        description: "Facilitate business user testing and approval"
      },
      {
        title: "Requirements Validation",
        description: "Confirm software meets original business requirements"
      },
      {
        title: "User Training Support",
        description: "Help end-users familiarize with new systems"
      },
    ],
    whatWeTest: [
      {
        title: "Business Scenarios",
        description: "Real-world use cases defined by stakeholders"
      },
      {
        title: "Workflow Validation",
        description: "End-to-end business process verification"
      },
      {
        title: "Data Accuracy",
        description: "Verify calculations, reports, and data displays"
      },
      {
        title: "User Experience",
        description: "Evaluate usability from end-user perspective"
      },
      {
        title: "Integration Workflows",
        description: "Validate cross-system business processes"
      },
      {
        title: "Compliance Checks",
        description: "Ensure regulatory and policy requirements are met"
      },
    ],
    businessImpact: [
      {
        metric: "100%",
        title: "Stakeholder Confidence",
        description: "Business users approve software before launch"
      },
      {
        metric: "90%",
        title: "Requirement Coverage",
        description: "Validate all business requirements are implemented"
      },
      {
        metric: "Zero",
        title: "Post-Launch Surprises",
        description: "Eliminate unexpected issues after go-live"
      },
    ],
    process: [
      { step: "01", title: "UAT Planning", description: "Define scope, timeline, and success criteria with stakeholders" },
      { step: "02", title: "Test Case Creation", description: "Develop business-focused test scenarios" },
      { step: "03", title: "User Coordination", description: "Schedule and facilitate UAT sessions" },
      { step: "04", title: "Issue Tracking", description: "Document and prioritize user-reported issues" },
      { step: "05", title: "Sign-off Management", description: "Obtain formal approval for production release" },
    ],
    seo: {
      title: "UAT Support Services | User Acceptance Testing | QTest Solutions",
      description:
        "Expert UAT support services to ensure your software meets business requirements. Facilitate stakeholder testing and approval for successful go-lives.",
    },
  },
];