import { Participant, Toleration, Record } from "@/lib/configSchema";

const defaultParticipant: Required<Participant> = {
  // EL (Execution Layer)
  el_type: "op-geth",
  el_image: "op-geth:latest",
  el_log_level: "INHERIT",
  el_extra_env_vars: [] as Record,
  el_extra_labels: [] as Record,
  el_extra_params: [] as Array<{ value: string }>,
  el_tolerations: [] as Toleration[], 
  el_volume_size: 10,
  el_min_cpu: 1,
  el_max_cpu: 2,
  el_min_mem: 1,
  el_max_mem: 2,

  // CL (Consensus Layer)
  cl_type: "op-node",
  cl_image: "op-node:latest",
  cl_log_level: "INHERIT",
  cl_extra_env_vars: [] as Record,
  cl_extra_labels: [] as Record,
  cl_extra_params: [] as Array<{ value: string }>,
  cl_tolerations: [] as Toleration[],
  cl_volume_size: 10,
  cl_min_cpu: 1,
  cl_max_cpu: 2,
  cl_min_mem: 1,
  cl_max_mem: 2,

  // Builder settings
  el_builder_type: "op-geth",
  el_builder_image: "op-geth:latest",
  cl_builder_type: "op-node",
  cl_builder_image: "op-node:latest",
  // Participant-level
  node_selectors: [] as Array<{ value: string; key: string }>,
  tolerations: [] as Toleration[], // Global participant tolerations
  count: 1,
};

export default defaultParticipant;