export type CertificationId = "qcobalt" | "qbronze";

export type Certification = {
  id: CertificationId;
  name: string;
  issuer: string;
  issued: string;
  credentialId: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    id: "qcobalt",
    name: "QCobalt",
    issuer: "QWorld & Open Quantum Institute",
    issued: "2026-06",
    credentialId: "QCobalt10-312",
  },
  {
    id: "qbronze",
    name: "QBronze",
    issuer: "QWorld & Open Quantum Institute",
    issued: "2026-06",
    credentialId: "QBronze187-309",
  },
];
