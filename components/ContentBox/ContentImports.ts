import dynamic from "next/dynamic";

export const ClientCloud = dynamic(
  () => import("@/components/ClientCloud/ClientCloud"),
);

export const BasicHeroCta = dynamic(
  () => import("@/components/BasicHeroCta/BasicHeroCta"),
);
