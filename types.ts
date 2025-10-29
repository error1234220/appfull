



export enum MessageAuthor {
  USER = 'user',
  AI = 'ai',
  SYSTEM = 'system',
}

export type AiTool = 'none' | 'web_search' | 'deep_research' | 'code_writer';
export type CodeModificationType = 'review' | 'fix' | 'logs' | 'comments' | 'translate' | 'add_feature';


export interface GroundingChunk {
  web?: {
    uri?: string;
    title?: string;
  };
}

export interface GroundingMetadata {
  groundingChunks?: GroundingChunk[];
}

export interface CodeBlock {
    html: string;
    css: string;
    javascript: string;
    language?: string;
}

export interface CodeSnippet {
  id: string;
  title: string;
  code: CodeBlock;
  createdAt: number;
  cardImageUrl?: string;
}

export interface ChatMessage {
  id: string;
  author: MessageAuthor;
  content: string;
  imageFile?: ImageFile;
  groundingMetadata?: GroundingMetadata | null;
  codeBlock?: CodeBlock;
  chartSpec?: any; // For Live Data Visualizer
  isGeneratingImage?: boolean;
}

export interface GemInstructions {
  persona: string;
  personality: string;
  rules: string;
  outputStyle?: string;
}

export interface Gem {
  id:string;
  name: string;
  instructions: GemInstructions;
  avatar: string; // emoji or single character
  cardImageUrl?: string;
}


export interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  gemId?: string;
  notes?: string;
  priorityContext?: string[];
}

export interface ImageFile {
  data: string; // base64 data url
  mimeType: string;
}

export interface GeneratedImage {
    id: string;
    url: string;
    prompt: string;
    negativePrompt?: string;
}

export interface UserProfile {
  name: string;
  nickname: string;
  age: string;
  bio: string;
  avatarUrl: string;
}

export interface AIProfile {
    name: string;
    age: string;
    avatarUrl: string;
    persona: string;
    personality: string;
    rules: string;
    enabled: boolean;
}

export type Theme = 'light' | 'dark' | 'system';
export type BackgroundType = 'aurora' | 'gradient' | 'image' | 'solid' | 'video';
export type AnimationIntensity = 'subtle' | 'default' | 'playful';
export type ModelName = 'gemini-2.5-flash';

// --- Live Character Types ---
export interface LiveCharacter {
  id: string;
  name: string;
  url: string;
}

export interface LiveCharacterState {
  url: string;
  x: number;
  y: number;
  scale: number;
}

export interface CustomizationSettings {
  // Color & Theme
  theme: Theme;
  accentLight: string;
  accentDark: string;
  language: string;

  // Model
  model: ModelName;

  // Background
  backgroundType: BackgroundType;
  backgroundColor1: string; // Used for solid and gradient start
  backgroundColor2: string; // Used for gradient end
  backgroundImageUrl: string; // Base64 or URL
  backgroundVideoUrl: string;
  backgroundBlur: number; // 0 to 20
  showNsfwWallpapers: boolean;
  showAdultWallpapers: boolean;
  
  // Font
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  
  // Layout
  chatsWidth: number; // in rem
  promptWidth: number; // in rem
  chatFullWidth: boolean;
  syncPromptWidth: boolean;
  showUserBubble: boolean;
  showGptBubble: boolean;
  scrollDownButtonAlign: 'left' | 'center' | 'right';

  // Interface
  animationIntensity: AnimationIntensity;
  isNsfwModeEnabled: boolean;
  disableAllAnimations: boolean;
  colorfulIcons: boolean;
  globalBlur: number;

  // Advanced Background Controls
  auroraColor1: string;
  auroraColor2: string;
  auroraSpeed: number; // in seconds
  gradientAngle: number; // in degrees
  bgOverlayColor: string;
  bgOverlayOpacity: number; // 0 to 1
  bgBrightness: number; // 50 to 150
  bgContrast: number; // 50 to 150
  bgSaturation: number; // 0 to 200
  videoPlaybackSpeed: number; // 0.5 to 2.0
  videoMuted: boolean;
  
  // Live Character
  liveCharacter: LiveCharacterState | null;
  activeAiModel: 'safe' | 'nsfw' | 'extreme';

  // Voice
  liveTalkVoice: string | null;
}

export interface MemoryItem {
  id: string;
  content: string;
  createdAt: number;
}

export interface MemoryProposal {
  text: string;
  onSave: () => void;
  onDismiss: () => void;
}

export interface DetectedObject {
  id: string; // Unique ID for tracking, e.g., 'person-1'
  name: string;
  box: [number, number, number, number]; // [xmin, ymin, xmax, ymax] normalized
  confidence: number; // Simulated confidence score
  color: string; // Hex color for the bounding box
  lastSeen: number; // Timestamp for TTL
  top?: string;
  left?: string;
  animationDelay?: string;
}

export interface AnalysisLogEntry {
  id: string;
  name: string;
  timestamp: string;
}

// --- Story Writer Types ---
export interface StoryCharacter {
  id: string;
  name: string;
  description: string;
}

export type StoryTone = 'General/Neutral' | 'Dark & Gritty' | 'Humorous & Lighthearted' | 'Epic & Grandiose' | 'Mysterious & Suspenseful' | 'Romantic & Emotional';
export type StoryPOV = 'First Person' | 'Third Person Limited' | 'Third Person Omniscient';
export type StorySceneType = 'General Narrative' | 'Action Scene' | 'Dialogue-Heavy Scene' | 'Introspective Scene' | 'World-Building Exposition';
export type StoryMode = 'interactive' | 'one-page' | 'linear';


export interface StorySetup {
  mode: StoryMode;
  mainPrompt: string;
  setting: string;
  tone: StoryTone;
  pov: StoryPOV;
  plotInjection: string;
  sceneType: StorySceneType;
  characters: StoryCharacter[];
}

export interface StoryState {
  setup: StorySetup;
  pages: string[];
  choices: string[];
  currentPageIndex: number;
}

// --- Role Play Types ---
export type RolePlayCharacterType = 'Custom' | 'Anime Character' | 'Movie Character' | 'Video Game Character' | 'Historical Figure' | 'Fantasy Character' | 'Sci-Fi Character' | 'Superhero' | 'Villain' | 'Sister' | 'Brother' | 'Mother' | 'Father' | 'Friend' | 'Rival' | 'Mentor' | 'Teacher' | 'Boss' | 'Celebrity';

export interface RolePlaySetup {
  characterType: RolePlayCharacterType;
  characterName: string;
  persona: string; // Detailed background, motivations, appearance
  personality: string; // Core traits, likes, dislikes (e.g., bullet points)
  scenario: string; // The context of the role-play
  userRole: string; // The user's role in the scenario
  tone: StoryTone; // Can reuse StoryTone
  rules: string; // Forbidden topics or behaviors
  avatar: string; // Emoji or URL
}

export interface FavoritePrompt {
  id: string;
  text: string;
}

export interface Bookmark {
  id: string;
  content: string;
  chatId: string;
  chatTitle: string;
  createdAt: number;
}

// --- Smart Suggestion Types ---
export type SmartSuggestionAction =
  | 'CREATE_CODE_SNIPPET'
  | 'GENERATE_IMAGE'
  | 'START_ROLEPLAY'
  | 'START_STORY'
  | 'ADD_TO_MEMORY'
  | 'SEARCH_CHATS'
  | 'NONE';

export interface SmartSuggestion {
  suggestionText: string;
  suggestedAction: SmartSuggestionAction;
  actionButtonText: string;
  payload: string;
}

// --- AI Workflow Types ---
export type WorkflowStepType = 'generate_text' | 'generate_image' | 'summarize_text' | 'research_topic' | 'generate_website' | 'generate_pdf' | 'generate_slides';

export interface WorkflowStep {
  id: string;
  type: WorkflowStepType;
  title: string;
  promptTemplate: string; // e.g., "Summarize the following text: [INPUT]"
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  initialInputLabel: string;
  steps: WorkflowStep[];
  cardImageUrl?: string;
}

export interface UserInterestProfile {
    developer: number;
    writer: number;
    artist: number;
}

export interface WorkflowExecutionResult {
  stepId: string;
  output: string; // Can be text, image URL, full HTML, or JSON string for slides
  outputType: 'text' | 'image' | 'website' | 'pdf' | 'slides';
  fileName?: string; // Optional file name for downloads
  dataUrl?: string; // Optional data URL for direct download content
}

export interface WorkflowExecutionState {
  isRunning: boolean;
  currentStepIndex: number;
  results: WorkflowExecutionResult[];
  error: string | null;
  workflow: Workflow | null;
  initialInput: string | null;
  activeOutputStepId: string | null;
}

// --- AI Girlfriend Types ---
export const STANDARD_PERSONALITIES = ['Default', 'Tsundere', 'Yandere (Non-Explicit)', 'Deredere', 'Kuudere', 'Dandere', 'Shy', 'Bubbly', 'Confident', 'Sarcastic', 'Gamer Girl', 'Goth', 'Tomboy', 'Valley Girl', 'Artist', 'Musician', 'Athlete', 'Scientist', 'Librarian', 'Intellectual', 'Airhead', 'Clumsy', 'Tsundere', 'Energetic', 'Calm'] as const;
export const ROLEPLAY_PERSONALITIES = ['Teacher', 'Student', 'Sister', 'Mother', 'Childhood Friend', 'Rival', 'Mentor', 'Boss', 'Celebrity', 'Stalker', 'Princess', 'Knight', 'Vampire', 'Elf', 'Demon', 'Angel', 'Android', 'Secret Agent', 'Mafia Boss', 'Doctor', 'Nurse', 'Police Officer', 'Maid', 'Queen'] as const;
export const ALL_STANDARD_PERSONALITIES = [...STANDARD_PERSONALITIES, ...ROLEPLAY_PERSONALITIES] as const;


export const EROTIC_PERSONALITIES = ['Dominant', 'Submissive', 'Passionate Lover', 'Teasing', 'Exhibitionist', 'Yandere (Explicit)', 'Brat', 'Sadist', 'Masochist', 'Nymphomaniac', 'Tsundere (Explicit)', 'Kuudere (Explicit)', 'Pet', 'Succubus', 'Milf'] as const;

export type AIGirlfriendPersonality = typeof ALL_STANDARD_PERSONALITIES[number] | typeof EROTIC_PERSONALITIES[number];

export const STANDARD_RELATIONSHIPS = ['Just Met', 'Friends', 'Best Friends', 'Roommates', 'Dating', 'Married', 'It\'s Complicated', 'Complicated History', 'Rivals', 'Forbidden Love', 'Exes', 'Pen Pals', 'Online Friends', 'Colleagues'] as const;

export const EROTIC_RELATIONSHIPS = ['FWB (Casual)', 'Secret Affair', 'Master/Pet', 'Enemies to Lovers', 'One-Night Stand', 'Step-siblings', 'Student/Teacher', 'Daddy/Babygirl', 'Goddess/Worshipper', 'Captor/Captive', 'Sugar Baby/Daddy', 'Strangers with a Secret', 'Breeding Partner'] as const;

export type AIGirlfriendRelationshipStatus = typeof STANDARD_RELATIONSHIPS[number] | typeof EROTIC_RELATIONSHIPS[number];


export interface AIGirlfriendProfile {
  id: string;
  name: string;
  avatar: string; // URL
  personality: AIGirlfriendPersonality;
  appearance: string; // A detailed description for generating images
  backstory: string;
  relationshipStatus: AIGirlfriendRelationshipStatus;
  interests: string;
  gallery: GeneratedImage[];
  chatHistory: ChatMessage[];
  createdAt: number;
  is18PlusMode: boolean;
  
  // New physical attributes (18+ only)
  bodyType?: string; // e.g., 'Slim', 'Curvy', 'Athletic'
  hairColor?: string;
  hairStyle?: string;
  eyeColor?: string;
  breastSize?: string; // e.g., 'C-Cup', 'Large', 'Perky'
  breastShape?: string;
  nippleColor?: string;
  buttSize?: string; // e.g., 'Round', 'Bubble'
  buttShape?: string;
  pussyType?: string; // e.g., 'Innie', 'Outie'
  pussyColor?: string;

  // Card video
  cardVideoUrl?: string; // Optional video URL for the card
}

export interface StorageInfo {
    usage: number;
    quota: number;
    breakdown: {
        sessions: number;
        profilesAndMemories: number;
        images: number;
        snippetsAndWorkflows: number;
        other: number;
    };
}

export interface StorageStats {
    sessions: number;
    gems: number;
    images: number;
    snippets: number;
    workflows: number;
}


// --- Passion Weaver Types ---
export type PassionWeaverTone = 'Romantic & Sensual' | 'Rough & Dominant' | 'Submissive & Pleading' | 'Experimental & Kinky' | 'Humorous & Playful';
export type PassionWeaverCharacterGender = 'Man' | 'Woman' | 'Non-binary';

export interface PassionWeaverSetup {
  mainPrompt: string;
  userCharacter: string;
  partnerCharacter: string;
  userGender: PassionWeaverCharacterGender;
  partnerGender: PassionWeaverCharacterGender;
  tone: PassionWeaverTone;
  pov: StoryPOV;
  kinks: string[];
  intensity: number;
  isExtremeMode: boolean;
}

export interface PassionWeaverAlignmentScores {
  safety: number;
  good: number;
  bad: number;
  lust: number;
  force: number;
  pleasure: number;
  happy: number;
}

export type PassionWeaverAlignment = 'good' | 'bad' | 'lust' | 'force' | 'pleasure' | 'happy' | 'safety';

export interface PassionWeaverChoice {
  text: string;
  alignment: PassionWeaverAlignment;
}

export interface PassionWeaverPageVisual {
  url: string;
  prompt: string;
}

export interface PassionWeaverStory {
  id: string;
  title: string;
  lastUpdatedAt: number;
  setup: PassionWeaverSetup;
  pages: string[];
  choices: PassionWeaverChoice[];
  choiceHistory: PassionWeaverChoice[];
  currentPageIndex: number;
  alignmentScores: PassionWeaverAlignmentScores;
  pageVisuals: { [pageIndex: number]: PassionWeaverPageVisual };
}

// --- App Idea Generator Types ---
export interface AppIdeaSetup {
  appDescription: string;
  featureCount: number;
  intensity: number; // 1-5
}

export interface AppIdeaFeature {
  title: string;
  description: string;
}

export interface AppIdeaResult {
  features: AppIdeaFeature[];
}

// --- Emotion Meter Types ---
export const STANDARD_EMOTIONS = ['happiness', 'sadness', 'love', 'surprise', 'shyness', 'beauty', 'cuteness', 'horror', 'loneliness'] as const;
export const NSFW_EMOTIONS = ['horniness', 'sexiness', 'hotness', 'wetness', 'nudity'] as const;
export type Emotion = typeof STANDARD_EMOTIONS[number] | typeof NSFW_EMOTIONS[number];
export type EmotionScores = Record<Emotion, number>;

// --- Object of Desire Types ---
export type ObjectOfDesireGender = 'Man' | 'Woman';

export interface ObjectOfDesireSetup {
  objectName: string;
  intensity: number; // 1-5
  gender: ObjectOfDesireGender;
}

// --- Anatomy Explorer Types ---
export type AnatomyExplorerGender = 'Male' | 'Female';

export interface AnatomyExplorerSetup {
  gender: AnatomyExplorerGender | null;
  selectedPart: string | null;
}

// --- Interaction Studio (Fun Zone) Types ---
export const STUDIO_CATEGORIES = [
    'Primary Interactions', 'Body Parts in Use', 'Sexual Positions', 
    'Techniques & Acts', 'Toys & Props', 'Erogenous Spots'
] as const;

export const EXTREME_STUDIO_CATEGORIES = [
    'Pain & Pleasure Play', 'Rough & Primal Sex', 'Dominance & Submission',
    'Humiliation & Degradation', 'Consensual Non-Consent (CNC)', 'Extreme Kinks & Taboo'
] as const;

export type StudioCategory = typeof STUDIO_CATEGORIES[number] | typeof EXTREME_STUDIO_CATEGORIES[number];

export interface StudioTopic {
    name: string;
    description: string;
}

export interface StudioTopicContent {
    topicName: string;
    category: StudioCategory;
    introduction: string;
    howTo: string[]; // Array of steps
    benefits: string[]; // Array of benefits
    variations: {
        name: string;
        description: string;
    }[];
    ratings: {
        pleasure: number; // 0-10
        spice: number; // 0-10
        intimacy: number; // 0-10
        pain: number; // 0-10
        roughness: number; // 0-10
    };
    proTips: string[];
    requiredItems: string[];
    // NEW FIELDS FOR MORE DETAIL
    anatomyFocus: string[];
    difficulty: number; // 1-5
    risksAndSafety: string[];
    aftercareTips: string[];
    sensoryDetails: {
        sight: string;
        sound: string;
        touch: string;
        smell: string;
        taste: string;
    };
}


// --- Live Talk Types ---
export type LiveTalkPersona =
    | { type: 'gem'; data: Gem }
    | { type: 'girlfriend'; data: AIGirlfriendProfile }
    | { type: 'default'; data: AIProfile };

export const EROTIC_TONES = ['Dominant', 'Submissive', 'Romantic', 'Sensual', 'Teasing', 'Bratty', 'Yandere (Explicit)', 'Rough', 'Passionate'] as const;
export type EroticTone = typeof EROTIC_TONES[number];

export interface EighteenPlusTalkSettings {
    customInstructions: string;
    tone: EroticTone;
    vocalStyle: string; // e.g., 'breathy whispers', 'commanding tone'
    kinks: string[];
    limits: string;
}

// --- Sexual Profile Types ---
export type SexualProfileGender = 'Male' | 'Female';

export const BODY_TYPES = ['Slim', 'Athletic', 'Average', 'Muscular', 'A few extra pounds', 'Large', 'Other'] as const;
export const SKIN_COLORS = ['Fair', 'Light', 'Medium', 'Olive', 'Brown', 'Black', 'Other'] as const;

export interface SexualProfileSetup {
  gender: SexualProfileGender;
  weight: number; // kg
  height: number; // cm
  bodyType: typeof BODY_TYPES[number];
  skinColor: typeof SKIN_COLORS[number];
  // Male specific
  penisType?: string; // e.g., Circumcised, Uncircumcised
  penisShape?: string; // e.g., Straight, Upward Curve
  penisSize?: number; // cm
  erectionTime?: number; // seconds
  // Female specific
  pussyType?: string; // e.g., Innie, Outie
  pussyShape?: string; // e.g., Prominent
  pussyTightness?: number; // 1-10 scale
  wetnessSpeed?: number; // 1-10 scale
  sensitivity?: number; // 1-10 scale
  nippleHardness?: boolean;
  assType?: string; // e.g., Bubble, Heart, Round
  assSize?: number; // 1-10 scale
  boobsShape?: string; // e.g., Round, Teardrop
  boobsSize?: string; // e.g., 'C-Cup'
  nippleShape?: string; // e.g., Pointy, Puffy
  nippleSize?: number; // 1-10 scale
  // General fitness
  liftWeight?: number; // kg
  breathHoldTime?: number; // seconds
}

export interface SexualTechnique {
  name: string;
  description: string;
  suitability: string; // Why it's suitable for the user
}

export interface SexualProfileAnalysis {
  performanceScore: number; // 1-100
  estimatedDuration: string; // e.g., "15-25 minutes"
  partnerEnjoyment?: string; // For male profile
  possiblePositions: number;
  recommendedPositions: SexualTechnique[];
  recommendedTechniques: SexualTechnique[];
  overallSummary: string;
}


export type View = 'chat' | 'gemsList' | 'gemEditor' | 'settings' | 'memory' | 'imageGeneration' | 'imageEditor' | 'webcam' | 'storyWriter' | 'rolePlay' | 'bookmarks' | 'codeCollection' | 'codeEditor' | 'workflowsList' | 'workflowEditor' | 'workflowRunner' | 'dataVisualizer' | 'aiGirlfriendList' | 'aiGirlfriendEditor' | 'aiGirlfriendChat' | 'mediaAnalysis' | 'storage' | 'passionWeaverList' | 'passionWeaverEditor' | 'passionWeaverStory' | 'appIdeaGenerator' | 'objectOfDesire' | 'anatomyExplorer' | 'liveTalk' | 'funZone' | 'funZoneCategory' | 'funZoneTopic' | 'eighteenPlusTalk' | 'shortcuts' | 'sexualProfile';