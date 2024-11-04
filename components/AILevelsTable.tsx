'use client';
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { Level, LevelDetail, LanguageCode } from '@/types';

interface Translations {
  title: string;
  level: string;
  detailedAnalysis: string;
  description: string;
  keyFeatures: string;
  applications: string;
  currentLimitations: string;
  columnHeaders: {
    techniques: string;
    performance: string;
    capabilities: string;
    characteristics: string;
    useCases: string;
    narrowDomain: string;
    generalDomain: string;
  };
}

interface LevelDetail {
  description: string;
  keyFeatures: string[];
  applications: string[];
  limitations: string[];
}

interface DetailCardProps {
  level: number;
  language: LanguageCode;
}
const translations: Record<LanguageCode, Translations> = {
  en: {
    title: '5 Levels of AI Agents',
    level: 'Level',
    detailedAnalysis: 'Detailed Analysis',
    description: 'Description',
    keyFeatures: 'Key Features',
    applications: 'Applications',
    currentLimitations: 'Current Limitations',
    columnHeaders: {
      techniques: 'Techniques',
      performance: 'Performance',
      capabilities: 'Capabilities',
      characteristics: 'Characteristics',
      useCases: 'Use Cases',
      narrowDomain: 'Narrow Domain',
      generalDomain: 'General Domain',
    },
  },
  fr: {
    title: "5 Niveaux d'Agents IA",
    level: 'Niveau',
    detailedAnalysis: 'Analyse Détaillée',
    description: 'Description',
    keyFeatures: 'Caractéristiques Principales',
    applications: 'Applications',
    currentLimitations: 'Limitations Actuelles',
    columnHeaders: {
      techniques: 'Techniques',
      performance: 'Performance',
      capabilities: 'Capacités',
      characteristics: 'Caractéristiques',
      useCases: "Cas d'Utilisation",
      narrowDomain: 'Domaine Spécifique',
      generalDomain: 'Domaine Général',
    },
  },
};

const levels: Record<LanguageCode, Level[]> = {
  en: [
    {
      level: 5,
      title: 'Superhuman AI',
      techniques:
        'LLM-based AI + Tools (Intent + Actions + Reasoning + Decision Making + Memory + Reflection + Self-Correction + Multi-Chain + Emotion + Empathy + Collaborative behavior + Multi-Agent)',
      performance: 'Superhuman >100% of Skilled Adults',
      capabilities: 'True Digital Persona',
      characteristics:
        'Agent represents the user in computing affairs, interacts on behalf of user with others, ensuring safety & reliability',
      useCases:
        'Agent acts as an actual representative of user to complete tasks, interacting with others while ensuring safety & reliability',
      narrowDomain: 'Superhuman Narrow-AI AlphaFold, AlphaZero, StockFish',
      generalDomain: 'Artificial Super Intelligence (ASI) Not yet achieved',
    },
    {
      level: 4,
      title: 'Virtuoso AI',
      techniques:
        'LLM-based AI + Tools (Intent + Actions + Reasoning + Decision Making + Memory + Reflection + Generalization)',
      performance: 'Virtuoso Equal to 95% of Skilled Adults',
      capabilities: 'Memory & Context Awareness',
      characteristics:
        'Agent senses user context, understands user memory and proactively provides personalized services at time',
      useCases:
        'A personalized virtual assistant that retains information and helps proactively',
      narrowDomain: 'Virtuoso Narrow-AI AlphaGo, Deep Blue',
      generalDomain: 'Virtuoso AGI Not yet achieved',
    },
    {
      level: 3,
      title: 'Expert AI',
      techniques:
        'LLM-based AI + Tools (Intent + Actions) + Reasoning & Decision Making + Memory & Reflection',
      performance: 'Expert Equal to 90% of Skilled Adults',
      capabilities: 'Strategic Task Automation',
      characteristics:
        'Using user-defined tasks, agent autonomously plans, execution steps using tools, iterates based on intermediate feedback until completion',
      useCases:
        'Agents autonomously complete complex tasks based on parameters and feedback',
      narrowDomain:
        'Expert Narrow-AI Purpose built, specific task orientated Agents',
      generalDomain: 'Expert AGI Not yet achieved',
    },
    {
      level: 2,
      title: 'Competent AI',
      techniques:
        'ILR/RL-based AI + Tools (Intent + Actions) + Reasoning & Decision Making',
      performance: 'Competent Equal to 80% of Skilled Adults',
      capabilities: 'Deterministic Task Automation',
      characteristics:
        'Based on user description of deterministic task, agent auto-completes steps in predictive action',
      useCases: 'User: Check the weather in Beijing today',
      narrowDomain: 'Competent Narrow-AI Frameworks with LLM, RAG, etc.',
      generalDomain: 'Competent AGI Not yet achieved',
    },
    {
      level: 1,
      title: 'Emerging AI',
      techniques: 'Rule-Based AI + Tools (Intent + Actions)',
      performance: 'Emerging Equal to Untrained Humans',
      capabilities: 'Simple Step Sequence',
      characteristics:
        'Agents complete tasks following exact steps, pre-defined by users or developers',
      useCases: 'Step 1: Open file, Step 2: Extract text, Step 3: Call API',
      narrowDomain:
        'Emerging Narrow-AI Single Rule-based systems, SHRDLU, QGPAI',
      generalDomain: 'Emerging AGI ChatGPT, Gemini, Llama 2, etc.',
    },
    {
      level: 0,
      title: 'No AI',
      techniques: 'No AI Tools (Intent + Rules + Actions)',
      performance: 'No AI',
      capabilities: 'No AI',
      characteristics: 'No AI',
      useCases: 'No AI',
      narrowDomain: 'Narrow Non-AI UI Driven Software',
      generalDomain: 'General Non-AI Human-to-Tool Computing Mechanical Turk',
    },
  ],
  fr: [
    {
      level: 5,
      title: 'IA Surhumaine',
      techniques:
        'LLM-based AI + Tools (Intent + Actions + Reasoning + Decision Making + Memory + Reflection + Self-Correction + Multi-Chain + Emotion + Empathy + Collaborative behavior + Multi-Agent)',
      performance: 'Surhumain >100% des Adultes Qualifiés',
      capabilities: 'Véritable Persona Numérique',
      characteristics:
        "L'agent représente l'utilisateur dans les affaires informatiques, interagit au nom de l'utilisateur avec les autres, garantissant la sécurité et la fiabilité",
      useCases:
        "L'agent agit comme un véritable représentant de l'utilisateur pour accomplir des tâches, interagissant avec les autres tout en assurant la sécurité et la fiabilité",
      narrowDomain: 'IA Étroite Surhumaine: AlphaFold, AlphaZero, StockFish',
      generalDomain:
        'Intelligence Artificielle Super (ASI) Pas encore atteinte',
    },
    {
      level: 4,
      title: 'IA Virtuose',
      techniques:
        'LLM-based AI + Tools (Intent + Actions + Reasoning + Decision Making + Memory + Reflection + Generalization)',
      performance: 'Virtuose Égal à 95% des Adultes Qualifiés',
      capabilities: 'Mémoire et Conscience du Contexte',
      characteristics:
        "L'agent détecte le contexte de l'utilisateur, comprend la mémoire et fournit des services personnalisés de manière proactive",
      useCases:
        'Un assistant virtuel personnalisé qui conserve les informations et aide de manière proactive',
      narrowDomain: 'IA Étroite Virtuose: AlphaGo, Deep Blue',
      generalDomain: 'AGI Virtuose Pas encore atteinte',
    },
    {
      level: 3,
      title: 'IA Expert',
      techniques:
        'LLM-based AI + Tools (Intent + Actions) + Reasoning & Decision Making + Memory & Reflection',
      performance: 'Expert Égal à 90% des Adultes Qualifiés',
      capabilities: 'Automatisation des Tâches Stratégiques',
      characteristics:
        "L'agent planifie et exécute automatiquement les étapes en utilisant des outils, itère selon les retours intermédiaires jusqu'à l'achèvement",
      useCases:
        'Les agents accomplissent automatiquement des tâches complexes selon les paramètres et les retours',
      narrowDomain:
        'IA Étroite Expert: Agents spécialisés pour des tâches spécifiques',
      generalDomain: 'AGI Expert Pas encore atteinte',
    },
    {
      level: 2,
      title: 'IA Compétente',
      techniques:
        'ILR/RL-based AI + Tools (Intent + Actions) + Reasoning & Decision Making',
      performance: 'Compétent Égal à 80% des Adultes Qualifiés',
      capabilities: 'Automatisation des Tâches Déterministes',
      characteristics:
        "Basé sur la description de tâches déterministes par l'utilisateur, l'agent complète automatiquement les étapes",
      useCases: "Utilisateur: Vérifier la météo à Beijing aujourd'hui",
      narrowDomain: 'IA Étroite Compétente: Frameworks avec LLM, RAG, etc.',
      generalDomain: 'AGI Compétente Pas encore atteinte',
    },
    {
      level: 1,
      title: 'IA Émergente',
      techniques: 'Rule-Based AI + Tools (Intent + Actions)',
      performance: 'Émergent Égal aux Humains Non Formés',
      capabilities: "Séquence d'Étapes Simples",
      characteristics:
        'Les agents accomplissent des tâches en suivant des étapes exactes, prédéfinies',
      useCases:
        'Étape 1: Ouvrir fichier, Étape 2: Extraire texte, Étape 3: Appeler API',
      narrowDomain:
        'IA Étroite Émergente: Systèmes basés sur des règles, SHRDLU, QGPAI',
      generalDomain: 'AGI Émergente: ChatGPT, Gemini, Llama 2, etc.',
    },
    {
      level: 0,
      title: 'Sans IA',
      techniques: 'No AI Tools (Intent + Rules + Actions)',
      performance: "Pas d'IA",
      capabilities: "Pas d'IA",
      characteristics: "Pas d'IA",
      useCases: "Pas d'IA",
      narrowDomain: 'Logiciel Non-IA Piloté par Interface',
      generalDomain:
        'Informatique Générale Non-IA Humain-Outil Mechanical Turk',
    },
  ],
};

const levelDetails: Record<LanguageCode, Record<number, LevelDetail>> = {
  en: {
    5: {
      description:
        'The highest form of AI capability, representing superintelligent systems that can fully act as digital representatives of users.',
      keyFeatures: [
        'Complete autonomous decision-making',
        'Advanced emotional intelligence',
        'Multi-agent collaboration',
        'Self-improving capabilities',
        'Ethical constraint awareness',
      ],
      applications: [
        'Complex negotiation and representation',
        'Autonomous business operations',
        'High-stakes decision making',
        'Cross-domain problem solving',
      ],
      limitations: [
        'Not yet achieved in general AI',
        'Limited to narrow domains currently',
        'Ethical considerations need resolution',
        'Safety guarantees still developing',
      ],
    },
    4: {
      description:
        'Advanced AI systems with sophisticated memory and context understanding, capable of virtuoso-level performance.',
      keyFeatures: [
        'Long-term memory retention',
        'Context-aware responses',
        'Proactive assistance',
        'Advanced pattern recognition',
        'Sophisticated reasoning',
      ],
      applications: [
        'Personal AI assistants',
        'Expert-level game playing',
        'Complex data analysis',
        'Predictive modeling',
      ],
      limitations: [
        'Limited to specific domains',
        'Requires substantial training',
        'Context understanding gaps',
        'Memory management challenges',
      ],
    },
    3: {
      description:
        'Expert-level AI systems capable of strategic planning and execution in well-defined domains.',
      keyFeatures: [
        'Strategic task planning',
        'Autonomous execution',
        'Feedback incorporation',
        'Domain expertise',
        'Process optimization',
      ],
      applications: [
        'Workflow automation',
        'Expert systems',
        'Process management',
        'Quality control',
      ],
      limitations: [
        'Domain-specific knowledge only',
        'Limited transfer learning',
        'Requires clear parameters',
        'Fixed capability set',
      ],
    },
    2: {
      description:
        'Competent AI systems that can handle deterministic tasks with reasonable accuracy.',
      keyFeatures: [
        'Basic decision making',
        'Rule-based reasoning',
        'Predictive actions',
        'Task automation',
        'Simple context understanding',
      ],
      applications: [
        'Customer service bots',
        'Basic data processing',
        'Automated responses',
        'Simple task execution',
      ],
      limitations: [
        'Limited flexibility',
        'Basic reasoning only',
        'Needs clear instructions',
        'No complex learning',
      ],
    },
    1: {
      description:
        'Basic AI systems capable of following pre-defined sequences and simple rules.',
      keyFeatures: [
        'Rule following',
        'Simple automation',
        'Basic task completion',
        'Sequential processing',
        'Fixed responses',
      ],
      applications: [
        'Simple chatbots',
        'Basic automation',
        'Rule-based systems',
        'Fixed workflow execution',
      ],
      limitations: [
        'Very limited flexibility',
        'No real intelligence',
        'Fixed behavior patterns',
        'No learning capability',
      ],
    },
    0: {
      description: 'Traditional software systems without AI capabilities.',
      keyFeatures: [
        'No AI components',
        'Fixed algorithms',
        'Deterministic behavior',
        'Manual configuration',
        'Rule-based operation',
      ],
      applications: [
        'Traditional software',
        'Basic tools',
        'Fixed functionality systems',
        'Manual processes',
      ],
      limitations: [
        'No adaptation',
        'No learning',
        'Fixed functionality',
        'Requires manual updates',
      ],
    },
  },
  fr: {
    5: {
      description:
        "La forme la plus avancée de capacité d'IA, représentant des systèmes superintelligents pouvant agir pleinement comme représentants numériques des utilisateurs.",
      keyFeatures: [
        'Prise de décision autonome complète',
        'Intelligence émotionnelle avancée',
        'Collaboration multi-agents',
        "Capacités d'auto-amélioration",
        'Conscience des contraintes éthiques',
      ],
      applications: [
        'Négociation complexe et représentation',
        'Opérations commerciales autonomes',
        'Prise de décision à enjeux élevés',
        'Résolution de problèmes multi-domaines',
      ],
      limitations: [
        'Pas encore atteint en IA générale',
        'Limité aux domaines spécifiques actuellement',
        'Considérations éthiques à résoudre',
        'Garanties de sécurité en développement',
      ],
    },
    4: {
      description:
        "Systèmes d'IA avancés avec une compréhension sophistiquée de la mémoire et du contexte, capables d'une performance de niveau virtuose.",
      keyFeatures: [
        'Rétention de mémoire à long terme',
        'Réponses contextuelles',
        'Assistance proactive',
        'Reconnaissance avancée des motifs',
        'Raisonnement sophistiqué',
      ],
      applications: [
        'Assistants IA personnels',
        'Jeux de niveau expert',
        'Analyse de données complexes',
        'Modélisation prédictive',
      ],
      limitations: [
        'Limité à des domaines spécifiques',
        'Nécessite un entraînement substantiel',
        'Lacunes dans la compréhension du contexte',
        'Défis de gestion de la mémoire',
      ],
    },
    3: {
      description:
        "Systèmes d'IA de niveau expert capables de planification stratégique et d'exécution dans des domaines bien définis.",
      keyFeatures: [
        'Planification stratégique des tâches',
        'Exécution autonome',
        'Incorporation des retours',
        'Expertise du domaine',
        'Optimisation des processus',
      ],
      applications: [
        'Automatisation des flux de travail',
        'Systèmes experts',
        'Gestion des processus',
        'Contrôle qualité',
      ],
      limitations: [
        'Connaissance limitée au domaine spécifique',
        'Apprentissage par transfert limité',
        'Nécessite des paramètres clairs',
        'Ensemble de capacités fixe',
      ],
    },
    2: {
      description:
        "Systèmes d'IA compétents capables de gérer des tâches déterministes avec une précision raisonnable.",
      keyFeatures: [
        'Prise de décision basique',
        'Raisonnement basé sur des règles',
        'Actions prédictives',
        'Automatisation des tâches',
        'Compréhension simple du contexte',
      ],
      applications: [
        'Bots de service client',
        'Traitement de données basique',
        'Réponses automatisées',
        'Exécution de tâches simples',
      ],
      limitations: [
        'Flexibilité limitée',
        'Raisonnement basique uniquement',
        'Nécessite des instructions claires',
        "Pas d'apprentissage complexe",
      ],
    },
    1: {
      description:
        "Systèmes d'IA basiques capables de suivre des séquences prédéfinies et des règles simples.",
      keyFeatures: [
        'Suivi des règles',
        'Automatisation simple',
        'Achèvement des tâches basiques',
        'Traitement séquentiel',
        'Réponses fixes',
      ],
      applications: [
        'Chatbots simples',
        'Automatisation basique',
        'Systèmes basés sur des règles',
        'Exécution de flux de travail fixes',
      ],
      limitations: [
        'Flexibilité très limitée',
        'Pas de véritable intelligence',
        'Modèles de comportement fixes',
        "Pas de capacité d'apprentissage",
      ],
    },
    0: {
      description: "Systèmes logiciels traditionnels sans capacités d'IA.",
      keyFeatures: [
        "Pas de composants d'IA",
        'Algorithmes fixes',
        'Comportement déterministe',
        'Configuration manuelle',
        'Fonctionnement basé sur des règles',
      ],
      applications: [
        'Logiciels traditionnels',
        'Outils basiques',
        'Systèmes à fonctionnalité fixe',
        'Processus manuels',
      ],
      limitations: [
        "Pas d'adaptation",
        "Pas d'apprentissage",
        'Fonctionnalité fixe',
        'Nécessite des mises à jour manuelles',
      ],
    },
  },
};

const getLevelStyles = (level: number): string => {
  const styles: Record<number, string> = {
    5: 'bg-blue-50 border-l-4 border-blue-600',
    4: 'bg-cyan-50 border-l-4 border-cyan-500',
    3: 'bg-indigo-50 border-l-4 border-indigo-500',
    2: 'bg-purple-50 border-l-4 border-purple-500',
    1: 'bg-violet-50 border-l-4 border-violet-500',
    0: 'bg-slate-50 border-l-4 border-slate-500',
  };
  return styles[level] || 'bg-gray-50';
};

interface DetailCardProps {
  level: number;
  language: LanguageCode;
}

const DetailCard: React.FC<DetailCardProps> = ({ level, language }) => {
  // Get the language-specific details
  const details = levelDetails[language][level];
  const t = translations[language];

  if (!details) {
    return null;
  }

  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-inner">
      <h3 className="text-lg font-semibold mb-4">
        {language === 'en' ? 'Level' : 'Niveau'} {level}{' '}
        {language === 'en' ? 'Detailed Analysis' : 'Analyse Détaillée'}
      </h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-blue-800 mb-2">
            {language === 'en' ? 'Description' : 'Description'}
          </h4>
          <p className="text-sm">{details.description}</p>
        </div>
        <div>
          <h4 className="font-medium text-blue-800 mb-2">
            {language === 'en'
              ? 'Key Features'
              : 'Caractéristiques Principales'}
          </h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {details.keyFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-blue-800 mb-2">
            {language === 'en' ? 'Applications' : 'Applications'}
          </h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {details.applications.map((app, idx) => (
              <li key={idx}>{app}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-blue-800 mb-2">
            {language === 'en'
              ? 'Current Limitations'
              : 'Limitations Actuelles'}
          </h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {details.limitations.map((limitation, idx) => (
              <li key={idx}>{limitation}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const AILevelsTable: React.FC = () => {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);
  const [language, setLanguage] = useState<LanguageCode>('en');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Card className="max-w-[95vw] mx-auto">
        <CardContent className="p-4">
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <h1 className="text-2xl font-bold mb-4">
            {translations[language].title}
          </h1>
          <div className="space-y-4">
            {[5, 4, 3, 2, 1, 0].map((level) => {
              // Get the correct level data from the language-specific array
              const levelData = levels[language].find((l) => l.level === level);
              const isExpanded = expandedLevel === level;

              if (!levelData) return null;

              return (
                <div key={level} className="space-y-2">
                  <Card
                    className={`${getLevelStyles(
                      level
                    )} shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-bold text-blue-900">
                          {language === 'en' ? 'Level' : 'Niveau'} {level}:{' '}
                          {levelData.title}
                        </span>
                        <button
                          onClick={() =>
                            setExpandedLevel(isExpanded ? null : level)
                          }
                          className="p-1 hover:bg-blue-100 rounded-full transition-colors"
                        >
                          {isExpanded ? (
                            <Minus className="w-6 h-6 text-blue-600" />
                          ) : (
                            <Plus className="w-6 h-6 text-blue-600" />
                          )}
                        </button>
                      </div>
                      <div className="grid grid-cols-7 gap-4">
                        {Object.entries(
                          translations[language].columnHeaders
                        ).map(([key, header]) => (
                          <div key={key} className="text-sm">
                            <div className="font-medium text-blue-800 mb-1">
                              {header}
                            </div>
                            {levelData[key as keyof Level]}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  {isExpanded && (
                    <DetailCard level={level} language={language} />
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AILevelsTable;
