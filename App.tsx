import React, { useState } from "react";
import {
  Shield,
  Database,
  Cloud,
  Lock,
  Activity,
  GitBranch,
  Server,
  Layers,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const MicroservicesArchitecture = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSection, setExpandedSection] = useState(null);

  const architectureLayers = {
    overview: {
      title: "Architecture Overview",
      icon: <Layers className="w-6 h-6" />,
      content: {
        principles: [
          "Domain-Driven Design (DDD) for service boundaries",
          "API-First approach with OpenAPI specifications",
          "Event-Driven Architecture for async communication",
          "Zero Trust Security model",
          "Infrastructure as Code (IaC)",
          "Observability by design",
        ],
        stack: {
          "Container Runtime": "Docker, containerd",
          Orchestration: "Kubernetes (K8s)",
          "Service Mesh": "Istio or Linkerd",
          "API Gateway": "Kong or Apache APISIX",
          "Message Broker": "Apache Kafka, RabbitMQ",
          Databases: "PostgreSQL, MongoDB, Redis",
        },
      },
    },
    security: {
      title: "Cybersecurity Framework",
      icon: <Shield className="w-6 h-6" />,
      content: {
        layers: [
          {
            name: "Identity & Access Management",
            tools: [
              "Keycloak (OAuth2/OIDC)",
              "HashiCorp Vault (secrets)",
              "cert-manager (TLS)",
            ],
            practices: [
              "JWT token-based auth",
              "mTLS between services",
              "RBAC and ABAC policies",
            ],
          },
          {
            name: "API Security",
            tools: [
              "Kong with rate limiting",
              "OWASP ZAP for testing",
              "ModSecurity WAF",
            ],
            practices: [
              "API key management",
              "Request validation",
              "DDoS protection",
            ],
          },
          {
            name: "Data Security (India Context)",
            tools: [
              "Vault for encryption keys",
              "PostgreSQL with TDE",
              "Ceph for encrypted storage",
              "Tokenization services for card data",
            ],
            practices: [
              "Encryption at rest and in transit",
              "Data masking and tokenization",
              "PII protection per DPDPA 2023",
              "Data localization for payment systems",
              "Cross-border data transfer controls",
            ],
          },
          {
            name: "Runtime Security",
            tools: [
              "Falco (threat detection)",
              "Trivy (vulnerability scanning)",
              "Open Policy Agent",
            ],
            practices: [
              "Container scanning",
              "Network policies",
              "Security policies as code",
            ],
          },
        ],
      },
    },
    scalability: {
      title: "Scalability Architecture",
      icon: <Cloud className="w-6 h-6" />,
      content: {
        strategies: [
          {
            type: "Horizontal Scaling",
            implementation:
              "Kubernetes HPA (CPU/Memory) and KEDA (event-driven)",
            pattern: "Stateless services with load balancing",
          },
          {
            type: "Database Scaling",
            implementation: "Read replicas, sharding, CQRS pattern",
            pattern: "Vitess for MySQL, Citus for PostgreSQL",
          },
          {
            type: "Caching Strategy",
            implementation:
              "Redis cluster with persistence, CDN for static content",
            pattern: "Multi-tier caching (L1: in-memory, L2: Redis, L3: DB)",
          },
          {
            type: "Async Processing",
            implementation: "Kafka for event streaming, Celery for task queues",
            pattern:
              "Event sourcing and saga pattern for distributed transactions",
          },
        ],
        monitoring: [
          "Prometheus for metrics",
          "Grafana for visualization",
          "Horizontal Pod Autoscaler",
        ],
      },
    },
    compliance: {
      title: "Compliance & Governance",
      icon: <CheckCircle className="w-6 h-6" />,
      content: {
        frameworks: [
          {
            name: "DPDPA 2023 (India)",
            tools: [
              "Consent management platform",
              "Data classification engine",
              "Apache Ranger for governance",
            ],
            requirements: [
              "Consent-based or legitimate use processing",
              "Privacy notices in 22 Indian languages",
              "Data principal rights (access, correction, erasure)",
              "Children's data protection (under 18)",
              "Breach notification to Data Protection Board",
              "Data localization for payments (RBI mandate)",
              "Cross-border transfer restrictions",
            ],
          },
          {
            name: "GDPR/International Data Privacy",
            tools: [
              "Apache Ranger for data governance",
              "Data classification tags",
            ],
            requirements: [
              "Right to erasure",
              "Data portability",
              "Consent management",
              "Audit logs",
            ],
          },
          {
            name: "SOC2/ISO27001",
            tools: [
              "OpenSCAP for compliance scanning",
              "Audit2DB for log retention",
            ],
            requirements: [
              "Access controls",
              "Encryption",
              "Incident response",
              "Business continuity",
            ],
          },
          {
            name: "PCI-DSS & RBI Payment Security",
            tools: [
              "Network segmentation",
              "Tokenization services",
              "India-based data storage",
            ],
            requirements: [
              "Cardholder data protection",
              "Secure transmission",
              "Regular testing",
              "Payment data stored only in India",
              "24-hour data repatriation if processed abroad",
              "Card-on-File Tokenization (CoFT)",
            ],
          },
        ],
        auditability: [
          "ELK Stack for centralized logging",
          "Immutable audit trails",
          "Compliance reports automation",
        ],
      },
    },
    maintainability: {
      title: "Maintainability & DevOps",
      icon: <GitBranch className="w-6 h-6" />,
      content: {
        cicd: [
          "GitLab CI/CD or Jenkins for pipelines",
          "ArgoCD for GitOps deployment",
          "SonarQube for code quality",
          "Trivy for security scanning",
        ],
        observability: [
          {
            area: "Logging",
            stack: "ELK Stack (Elasticsearch, Logstash, Kibana) or Loki",
            practice: "Structured logging with correlation IDs",
          },
          {
            area: "Monitoring",
            stack: "Prometheus + Grafana, Thanos for long-term storage",
            practice:
              "RED metrics (Rate, Errors, Duration) and USE (Utilization, Saturation, Errors)",
          },
          {
            area: "Tracing",
            stack: "Jaeger or Zipkin with OpenTelemetry",
            practice: "Distributed tracing across all services",
          },
          {
            area: "Alerting",
            stack: "Alertmanager, PagerDuty integration",
            practice: "SLO-based alerting, runbook automation",
          },
        ],
        documentation: [
          "Swagger/OpenAPI for APIs",
          "Architecture Decision Records (ADRs)",
          "README-driven development",
        ],
      },
    },
    implementation: {
      title: "Implementation Stack",
      icon: <Server className="w-6 h-6" />,
      content: {
        services: [
          {
            name: "Backend Services",
            languages: "Go, Java/Spring Boot, Python/FastAPI, Node.js/NestJS",
            frameworks: "Choose based on team expertise and use case",
          },
          {
            name: "API Gateway",
            tool: "Kong Gateway (OSS)",
            features:
              "Rate limiting, authentication, transformation, analytics",
          },
          {
            name: "Service Mesh",
            tool: "Istio",
            features: "mTLS, traffic management, observability, resilience",
          },
          {
            name: "Data Layer",
            databases: [
              "PostgreSQL (relational)",
              "MongoDB (document)",
              "Redis (cache/session)",
              "Elasticsearch (search)",
            ],
          },
        ],
        infrastructure: [
          "Kubernetes cluster (EKS, GKE, AKS, or self-hosted in India data centers)",
          "Terraform for IaC",
          "Helm charts for application deployment",
          "GitLab/GitHub for source control",
          "India region deployment for regulated data (payments, insurance, telecom)",
        ],
      },
    },
  };

  const referenceArchitecture = [
    {
      layer: "Client Layer",
      components: ["Web Apps", "Mobile Apps", "Third-party Apps"],
    },
    {
      layer: "Edge Layer",
      components: ["CDN", "Load Balancer", "WAF", "DDoS Protection"],
    },
    {
      layer: "API Layer",
      components: ["API Gateway (Kong)", "Rate Limiting", "Authentication"],
    },
    {
      layer: "Service Mesh",
      components: ["Istio Control Plane", "Envoy Proxies", "mTLS"],
    },
    {
      layer: "Business Layer",
      components: ["Microservices", "Service Discovery", "Circuit Breakers"],
    },
    {
      layer: "Data Layer",
      components: ["Databases", "Cache", "Message Queue"],
    },
    {
      layer: "Platform Layer",
      components: ["Kubernetes", "Monitoring", "Logging", "CI/CD"],
    },
  ];

  const renderContent = () => {
    const section = architectureLayers[activeTab];

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-blue-600">{section.icon}</div>
          <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
        </div>

        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h3 className="font-semibold text-blue-900 mb-2">
                Core Principles
              </h3>
              <ul className="space-y-1">
                {section.content.principles.map((principle, idx) => (
                  <li
                    key={idx}
                    className="text-blue-800 flex items-start gap-2"
                  >
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Technology Stack
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(section.content.stack).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                  >
                    <div className="font-medium text-gray-700">{key}</div>
                    <div className="text-sm text-gray-600 mt-1">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-3">
                Reference Architecture Layers
              </h3>
              <div className="space-y-2">
                {referenceArchitecture.map((layer, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded"
                  >
                    <div className="w-32 font-medium text-sm text-gray-700">
                      {layer.layer}
                    </div>
                    <div className="flex-1 text-sm text-gray-600">
                      {layer.components.join(" • ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="space-y-4">
            {section.content.layers.map((layer, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedSection(expandedSection === idx ? null : idx)
                  }
                  className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-red-600" />
                    <span className="font-semibold text-gray-800">
                      {layer.name}
                    </span>
                  </div>
                  <span className="text-gray-400">
                    {expandedSection === idx ? "−" : "+"}
                  </span>
                </button>
                {expandedSection === idx && (
                  <div className="p-4 bg-white space-y-3">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">
                        Tools:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {layer.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-red-50 text-red-700 text-sm rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">
                        Practices:
                      </div>
                      <ul className="space-y-1">
                        {layer.practices.map((practice, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span className="text-red-500 mt-1">•</span>
                            <span>{practice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "scalability" && (
          <div className="space-y-6">
            <div className="space-y-4">
              {section.content.strategies.map((strategy, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg p-4 bg-white"
                >
                  <div className="font-semibold text-gray-800 mb-2">
                    {strategy.type}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Implementation:</span>{" "}
                    {strategy.implementation}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Pattern:</span>{" "}
                    {strategy.pattern}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="font-semibold text-green-900 mb-2">
                Monitoring & Autoscaling
              </h3>
              <ul className="space-y-1">
                {section.content.monitoring.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-green-800 text-sm flex items-start gap-2"
                  >
                    <Activity className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "compliance" && (
          <div className="space-y-6">
            {section.content.frameworks.map((framework, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-4 bg-white"
              >
                <h3 className="font-semibold text-gray-800 mb-3">
                  {framework.name}
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Tools:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {framework.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Key Requirements:
                    </div>
                    <div className="grid md:grid-cols-2 gap-2">
                      {framework.requirements.map((req, i) => (
                        <div
                          key={i}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <h3 className="font-semibold text-purple-900 mb-2">
                Auditability
              </h3>
              <ul className="space-y-1">
                {section.content.auditability.map((item, idx) => (
                  <li key={idx} className="text-purple-800 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "maintainability" && (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                CI/CD Pipeline
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {section.content.cicd.map((tool, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-sm text-gray-700"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Observability Stack
              </h3>
              <div className="space-y-3">
                {section.content.observability.map((obs, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-4 bg-white"
                  >
                    <div className="font-medium text-gray-800 mb-2">
                      {obs.area}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      <span className="font-medium">Stack:</span> {obs.stack}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Practice:</span>{" "}
                      {obs.practice}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
              <h3 className="font-semibold text-indigo-900 mb-2">
                Documentation Standards
              </h3>
              <ul className="space-y-1">
                {section.content.documentation.map((item, idx) => (
                  <li key={idx} className="text-indigo-800 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "implementation" && (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Service Stack
              </h3>
              <div className="space-y-3">
                {section.content.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-4 bg-white"
                  >
                    <div className="font-medium text-gray-800 mb-2">
                      {service.name}
                    </div>
                    {service.tool && (
                      <div className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">Tool:</span>{" "}
                        {service.tool}
                      </div>
                    )}
                    {service.languages && (
                      <div className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">Languages:</span>{" "}
                        {service.languages}
                      </div>
                    )}
                    {service.frameworks && (
                      <div className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">Note:</span>{" "}
                        {service.frameworks}
                      </div>
                    )}
                    {service.features && (
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Features:</span>{" "}
                        {service.features}
                      </div>
                    )}
                    {service.databases && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {service.databases.map((db, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {db}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
              <h3 className="font-semibold text-orange-900 mb-2">
                Infrastructure
              </h3>
              <ul className="space-y-1">
                {section.content.infrastructure.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-orange-800 text-sm flex items-start gap-2"
                  >
                    <Server className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h1 className="text-3xl font-bold mb-2">
              Enterprise Microservices Architecture
            </h1>
            <p className="text-blue-100">
              Open Source Framework with Built-in Security, Scalability &
              Compliance
            </p>
          </div>

          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex overflow-x-auto">
              {Object.keys(architectureLayers).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    setExpandedSection(null);
                  }}
                  className={`px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                    activeTab === key
                      ? "bg-white text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {architectureLayers[key].title}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">{renderContent()}</div>

          <div className="bg-gray-50 border-t border-gray-200 p-6">
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800 mb-1">
                  Implementation Guidance
                </p>
                <p>
                  Start with a pilot microservice, establish patterns, then
                  scale. Use feature flags for gradual rollouts. Invest in
                  developer tooling and documentation from day one. Consider
                  managed services for complex components like service mesh
                  initially.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroservicesArchitecture;
