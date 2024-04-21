/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Status = "started" | "success" | "error";
export type Task = string;
export type TaskVersion = number;
export type TaskFile = string | null;
export type TaskId = string;
export type RunId = string;
export type Created = string;
export type Name = string | null;
export type Location = string | null;
export type Model = string;
export type ModelBaseUrl = string | null;
export type Limit = number | [unknown, unknown] | null;
export type Epochs = number | null;
export type MaxMessages = number | null;
export type MaxSubprocesses = number | null;
export type LogSamples = boolean | null;
export type LogImages = boolean | null;
export type Type = "git";
export type Origin = string;
export type Commit = string;
export type Metadata = {} | null;
export type Name1 = string;
export type Solver = string;
export type Steps = EvalPlanStep[];
export type MaxRetries = number | null;
export type Timeout = number | null;
export type MaxConnections = number | null;
export type SystemMessage = string | null;
export type MaxTokens = number | null;
export type TopP = number | null;
export type Temperature = number | null;
export type StopSeqs = string[] | null;
export type BestOf = number | null;
export type FrequencyPenalty = number | null;
export type PresencePenalty = number | null;
export type LogitBias = {
  [k: string]: number;
} | null;
export type Seed = number | null;
export type Suffix = string | null;
export type TopK = number | null;
export type NumChoices = number | null;
export type Logprobs = boolean | null;
export type TopLogprobs = number | null;
export type Samples = EvalSample[] | null;
export type Id = number | string;
export type Epoch = number;
export type Input = string | (ChatMessageSystem | ChatMessageUser | ChatMessageAssistant | ChatMessageTool)[];
export type Content = string | (ContentText | ContentImage)[];
export type Type1 = "text";
export type Text = string;
export type Type2 = "image";
export type Image = string;
export type Detail = "auto" | "low" | "high";
export type Source = ("input" | "generate") | null;
export type Role = "system";
export type Tool = string | null;
export type Content1 = string | (ContentText | ContentImage)[];
export type Source1 = ("input" | "generate") | null;
export type Role1 = "user";
export type Content2 = string | (ContentText | ContentImage)[];
export type Source2 = ("input" | "generate") | null;
export type Role2 = "assistant";
export type ToolCalls = ToolCall[] | null;
export type Id1 = string;
export type Function = string;
export type Type3 = "function";
export type Content3 = string | (ContentText | ContentImage)[];
export type Source3 = ("input" | "generate") | null;
export type Role3 = "tool";
export type ToolCallId = string | null;
export type ToolError = string | null;
export type Choices = string[] | null;
export type Target = string | string[];
export type Messages = (ChatMessageSystem | ChatMessageUser | ChatMessageAssistant | ChatMessageTool)[];
export type Model1 = string;
export type StopReason = "stop" | "length" | "tool_calls" | "content_filter" | "unknown";
export type Logprobs1 = {} | null;
export type Choices1 = ChatCompletionChoice[];
export type InputTokens = number;
export type OutputTokens = number;
export type TotalTokens = number;
export type Error = string | null;
export type Value =
  | string
  | number
  | number
  | boolean
  | (string | number | number | boolean)[]
  | {
      [k: string]: string | number | number | boolean;
    };
export type Explanation = string | null;
export type Metadata1 = {} | null;
export type Name2 = string;
export type Metadata3 = {} | null;
export type Name3 = string;
export type Value1 = number;
export type Metadata4 = {} | null;
export type Metadata5 = {} | null;
export type StartedAt = string;
export type CompletedAt = string;
export type Level = "debug" | "http" | "info" | "warning" | "error" | "critical";
export type Message = string;
export type Created1 = number;
export type Logging = LoggingMessage[];
export type Message1 = string;
export type Traceback = string;
export type TracebackAnsi = string;
export type Version = number;

export interface EvalLog {
  status?: Status;
  eval: EvalSpec;
  plan?: EvalPlan;
  samples?: Samples;
  results?: EvalResults | null;
  stats?: EvalStats;
  logging?: Logging;
  error?: EvalError | null;
  version: Version;
}
export interface EvalSpec {
  task: Task;
  task_version: TaskVersion;
  task_file: TaskFile;
  task_id: TaskId;
  run_id: RunId;
  created: Created;
  dataset: EvalDataset;
  model: Model;
  model_base_url: ModelBaseUrl;
  task_attribs: TaskAttribs;
  task_args: TaskArgs;
  model_args: ModelArgs;
  config: EvalConfig;
  revision: EvalRevision | null;
  packages: Packages;
  metadata: Metadata;
}
export interface EvalDataset {
  name: Name;
  location: Location;
}
export interface TaskAttribs {}
export interface TaskArgs {}
export interface ModelArgs {}
export interface EvalConfig {
  limit: Limit;
  epochs: Epochs;
  max_messages: MaxMessages;
  max_subprocesses: MaxSubprocesses;
  log_samples: LogSamples;
  log_images: LogImages;
}
export interface EvalRevision {
  type: Type;
  origin: Origin;
  commit: Commit;
}
export interface Packages {
  [k: string]: string;
}
export interface EvalPlan {
  name: Name1;
  steps: Steps;
  finish: EvalPlanStep | null;
  config: GenerateConfig;
}
export interface EvalPlanStep {
  solver: Solver;
  params: Params;
}
export interface Params {}
/**
 * Base class for model generation configs.
 */
export interface GenerateConfig {
  max_retries: MaxRetries;
  timeout: Timeout;
  max_connections: MaxConnections;
  system_message: SystemMessage;
  max_tokens: MaxTokens;
  top_p: TopP;
  temperature: Temperature;
  stop_seqs: StopSeqs;
  best_of: BestOf;
  frequency_penalty: FrequencyPenalty;
  presence_penalty: PresencePenalty;
  logit_bias: LogitBias;
  seed: Seed;
  suffix: Suffix;
  top_k: TopK;
  num_choices: NumChoices;
  logprobs: Logprobs;
  top_logprobs: TopLogprobs;
}
export interface EvalSample {
  id: Id;
  epoch: Epoch;
  input: Input;
  choices: Choices;
  target: Target;
  messages: Messages;
  output: ModelOutput;
  score: Score | null;
  metadata: Metadata2;
}
export interface ChatMessageSystem {
  content: Content;
  source: Source;
  role: Role;
  tool: Tool;
}
export interface ContentText {
  type: Type1;
  text: Text;
}
export interface ContentImage {
  type: Type2;
  image: Image;
  detail: Detail;
}
export interface ChatMessageUser {
  content: Content1;
  source: Source1;
  role: Role1;
}
export interface ChatMessageAssistant {
  content: Content2;
  source: Source2;
  role: Role2;
  tool_calls: ToolCalls;
}
export interface ToolCall {
  id: Id1;
  function: Function;
  arguments: Arguments;
  type: Type3;
}
export interface Arguments {}
export interface ChatMessageTool {
  content: Content3;
  source: Source3;
  role: Role3;
  tool_call_id: ToolCallId;
  tool_error: ToolError;
}
export interface ModelOutput {
  model: Model1;
  choices: Choices1;
  usage: ModelUsage | null;
  error: Error;
}
export interface ChatCompletionChoice {
  message: ChatMessageAssistant;
  stop_reason: StopReason;
  logprobs: Logprobs1;
}
export interface ModelUsage {
  input_tokens: InputTokens;
  output_tokens: OutputTokens;
  total_tokens: TotalTokens;
}
/**
 * Score generated by a scorer.
 *
 * Args:
 *    value (Value): Score value.
 *    explanation (str | None): Optional explanation of score.
 *    metadata (dict[str,Any]): Additional metadata related to the score
 */
export interface Score {
  value: Value;
  explanation: Explanation;
  metadata: Metadata1;
}
export interface Metadata2 {}
export interface EvalResults {
  scorer: EvalScorer | null;
  metrics: Metrics;
  metadata: Metadata5;
}
export interface EvalScorer {
  name: Name2;
  params: Params1;
  metadata: Metadata3;
}
export interface Params1 {}
export interface Metrics {
  [k: string]: EvalMetric;
}
export interface EvalMetric {
  name: Name3;
  value: Value1;
  options: Options;
  metadata: Metadata4;
}
export interface Options {}
export interface EvalStats {
  started_at: StartedAt;
  completed_at: CompletedAt;
  model_usage: ModelUsage1;
}
export interface ModelUsage1 {
  [k: string]: ModelUsage;
}
export interface LoggingMessage {
  level: Level;
  message: Message;
  created: Created1;
}
export interface EvalError {
  message: Message1;
  traceback: Traceback;
  traceback_ansi: TracebackAnsi;
}
